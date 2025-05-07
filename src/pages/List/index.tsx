import { mockData } from "@/features/patient/model/mockData";
import { PatientDataTable } from "@/features/patient/ui/PatientDataTable";

const EnrollmentList = () => {
  return (
    <div>
      <div className=" text-center text-2xl font-semibold">Enrollment List</div>
      <PatientDataTable data={mockData} />
    </div>
  );
};

export default EnrollmentList;
