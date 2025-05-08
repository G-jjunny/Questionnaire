import { Checkbox } from "@/shared/ui/shadcn/checkbox";
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
    header: "환자 ID",
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
      <Checkbox
        className="mr-2"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="mr-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    // enableSorting: false,
    // enableHiding: false,
  },
];
