import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { PatientResponseDTO } from "@/features/register/api/dto";

/** excel 다운로드 핸들러 */
export const handleExcel = async (patients: PatientResponseDTO[]) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Patients");

    worksheet.columns = [
      { header: "Patient Id", key: "patientId", width: 30 },
      { header: "Name", key: "patientName", width: 15 },
      { header: "Sex", key: "isMale", width: 10 },
      { header: "Birthday", key: "birthday", width: 15 },
      { header: "OperationDate", key: "operationDate", width: 15 },
      { header: "Institute", key: "institution", width: 20 },
      { header: "Group", key: "group", width: 15 },
      { header: "Dropped", key: "droped", width: 10 },
      { header: "RegistDate", key: "createdAt", width: 15 },
    ];

    patients.forEach((p: any) => {
      worksheet.addRow({
        patientId: p.patientId,
        patientName: p.patientName,
        isMale: p.isMale,
        birthday: p.birthday,
        operationDate: p.operationDate,
        institution: p.institution ?? "",
        group: p.group ?? "",
        droped: p.droped ? "O" : "X",
        createdAt: new Date(p.createdAt).toISOString().slice(0, 10),
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "patients.xlsx");
  } catch (error) {
    console.error("엑셀 다운로드 실패:", error);
  }
};
