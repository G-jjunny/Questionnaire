import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/shadcn/dialog";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { PatientType } from "../model/patientTable";
import { Label } from "@/shared/ui/shadcn/label";
import { Input } from "@/shared/ui/shadcn/input";
import { Button } from "@/shared/ui/shadcn/button";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { editSchema } from "@/features/register/model/schema";
import EditForm from "./EditForm";

interface PatientEditProps extends PropsWithChildren {
  patient: PatientType;
  content?: ReactNode;
}

const PatientEdit = ({ patient, children }: PatientEditProps) => {
  const [patientData, setPatientData] = useState(patient);

  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
  });

  // const handleChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPatientData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  useEffect(() => {
    console.log(patientData);
  }, [patientData]);

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Data</DialogTitle>
          <DialogDescription>
            Make changes to patient data here. <br />
            Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="patientId" className="text-right">
              Patient Id
            </Label>
            <Input
              id="patientId"
              name="patientId"
              value={patientData.patientId}
              onChange={handleChageInput}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="patientName" className="text-right">
              Name
            </Label>
            <Input
              id="patientName"
              value={patientData.patientName}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isMale" className="text-right">
              Sex
            </Label>
            <Input
              id="isMale"
              disabled
              value={patientData.isMale}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="birthday" className="text-right">
              Birthday
            </Label>
            <Input
              id="birthday"
              type="date"
              value={patientData.birthday}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="operationDate" className="text-right">
              OperationDate
            </Label>
            <Input
              id="operationDate"
              type="date"
              value={patientData.operationDate}
              className="col-span-3"
            />
          </div>
        </div> */}
        {/* <Form {...form}>
          <form onSubmit={form.handleSubmit(() => console.log("submit"))}>
            <EditForm form={form} />
          </form>
        </Form> */}
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PatientEdit;
