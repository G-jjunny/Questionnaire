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
import { columns } from "../model/patientTable";
import { useUserStore } from "@/shared/store/useStore";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { patientQueries } from "../api/queries";

export const PatientDataTable = () => {
  const institute = useUserStore((state) => state.user);
  const [rowSelection, setRowSelection] = React.useState({});

  // const { data: patients } = useQuery({ ...patientQueries.getPatient });
  const { data: patients } = useQuery(
    patientQueries.getPatient({
      role: institute?.role,
      institution: institute?.institution,
    })
  );
  const table = useReactTable({
    data: patients ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });
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
              table.getRowModel().rows.map((row) => (
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
              ))
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
