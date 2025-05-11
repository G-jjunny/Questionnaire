import { Checkbox } from "@/shared/ui/shadcn/checkbox";
import { Label } from "@/shared/ui/shadcn/label";
import { ColumnDef } from "@tanstack/react-table";

export type PatientType = {
  id: string;
  isReceived: string;
  patientId: string;
  patientName: string;
  isMale: string;
  birthday: string;
  operationDate: string;
  institution: string | null;
  //   drop: boolean;
};

export const columns: ColumnDef<PatientType>[] = [
  {
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "institution",
    header: "Institute",
  },
  {
    accessorKey: "isReceived",
    header: "Neoadj",
  },
  {
    accessorKey: "patientId",
    header: "Patient ID",
  },
  {
    accessorKey: "patientName",
    header: "Patient Name",
  },
  {
    accessorKey: "isMale",
    header: "Sex",
  },
  {
    accessorKey: "birthday",
    header: "Age",
  },
  {
    accessorKey: "operationDate",
    header: "OperationDate",
  },
  {
    id: "select",
    header: ({ table }) => (
      <Label className="">
        Drop
        <Checkbox
          className="mr-2"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </Label>
    ),
    cell: ({ row }) => (
      <Checkbox
        className="mr-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
