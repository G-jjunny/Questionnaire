import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/shadcn/table";
import { Button } from "@/shared/ui/shadcn/button";
import { useUserStore } from "@/shared/store/useStore";
import React, { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { patientQueries } from "../api/queries";
import { toast } from "sonner";
import { handleExcel } from "../model/handleExcel";
import { getColumns } from "../model/patientTable";
import PatientEdit from "./PatientEdit";

export const PatientDataTable = () => {
  const institute = useUserStore((state) => state.user);
  const [rowSelection, setRowSelection] = React.useState<
    Record<string, boolean>
  >({});
  const { mutate } = useMutation({
    ...patientQueries.patchDropPatient(),
    onSuccess: (res) => {
      toast.success(`${res.message}`);
      setRowSelection({});
      refetch();
    },
  });

  const { data: patients, refetch } = useQuery(
    patientQueries.getPatient({
      role: institute?.role,
      institution: institute?.institution,
    })
  );

  const columns = getColumns(institute?.role);

  const table = useReactTable({
    data: patients ?? [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    getRowId: (row) => row.patientId,
  });
  /** drop 체크 핸들러 */
  const handleSave = () => {
    if (!patients) return;

    const selectedPatientIds = Object.keys(rowSelection);

    if (selectedPatientIds.length > 0) {
      mutate(selectedPatientIds); // mutate에 선택된 patientId 배열 넘기기
    } else {
      toast.error("Please select at least one patient to drop.");
    }
  };
  useEffect(() => {
    console.log(rowSelection);
  }, [rowSelection]);
  return (
    <>
      <div className="flex justify-center text-xl my-4 ">
        <div className=" py-2 px-6 bg-[#415a77] text-white border border-black">
          Institute
        </div>
        <div className=" py-2 px-6 border border-black">
          {institute?.institution}
        </div>
      </div>
      <div className="rounded-md border">
        <Table className=" overflow-hidden">
          <TableHeader className="  bg-[#415a77] text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-white text-xs font-bold text-center"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) =>
                institute?.role === "ADMIN" ? (
                  <PatientEdit
                    patient={row.original}
                    key={row.id}
                    onSuccess={refetch}
                  >
                    <TableRow
                      data-state={row.getIsSelected() && "selected"}
                      className=" text-center"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  </PatientEdit>
                ) : (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className=" text-center"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              )
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center gap-2 justify-end py-4 px-2 ">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          {institute?.role === "ADMIN" && (
            <Button
              variant="outline"
              className=" bg-emerald-700 hover:bg-emerald-500 text-white"
              onClick={() => {
                if (patients) {
                  handleExcel(patients);
                } else {
                  toast.error("환자 데이터를 불러오지 못했습니다.");
                }
              }}
            >
              Download
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="bg-[#415a77] hover:bg-[#778da9] text-white"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleSave}
            className=" bg-amber-200 hover:bg-amber-500"
          >
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            className=" bg-[#415a77] hover:bg-[#778da9] text-white"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
