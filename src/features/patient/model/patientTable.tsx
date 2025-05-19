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
  institution: string;
  droped?: boolean;
  group?: string | null;
};

export const getColumns = (role?: string): ColumnDef<PatientType>[] => [
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
    accessorKey: "group",
    header: "Group",
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
    header: "Birthday",
  },
  {
    accessorKey: "operationDate",
    header: "OperationDate",
  },
  {
    id: "select",
    accessorKey: "droped",
    header: ({ table }) => (
      <Label className="text-xs font-bold">
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
    cell: ({ row }) => {
      const droped = row.original.droped;
      const isDisabled = droped && role !== "ADMIN";

      const isAdmin = role === "ADMIN";
      return (
        <Checkbox
          className="mr-2"
          disabled={isDisabled}
          checked={droped || row.getIsSelected()}
          onClick={(e) => e.stopPropagation()} // 클릭 이벤트 버블링 방지
          onCheckedChange={(value) => {
            // ADMIN이면 선택 변경 허용
            if (isAdmin || !droped) {
              row.toggleSelected(!!value);
            }
          }}
          aria-label="Select row"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
