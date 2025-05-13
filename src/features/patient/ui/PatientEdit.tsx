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
import { Button } from "@/shared/ui/shadcn/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { editSchema } from "@/features/register/model/schema";
import EditForm from "./EditForm";
import { Form } from "@/shared/ui/shadcn/form";
import { useMutation } from "@tanstack/react-query";
import { patientQueries } from "../api/queries";
import { toast } from "sonner";

interface PatientEditProps extends PropsWithChildren {
  patient: PatientType;
  content?: ReactNode;
}

const PatientEdit = ({ patient, children }: PatientEditProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      patientId: patient.patientId,
      patientName: patient.patientName,
      isMale: patient.isMale,
      birthday: patient.birthday,
      operationDate: patient.operationDate,
    },
  });

  const { mutate } = useMutation({
    ...patientQueries.putEditPatient,
    onSuccess: (res) => {
      toast.success(`${res.message}`);
      setIsOpen(false);
    },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({
        patientId: patient.patientId,
        patientName: patient.patientName,
        isMale: patient.isMale,
        birthday: patient.birthday,
        operationDate: patient.operationDate,
      });
    }
  }, [isOpen, patient]);

  const onSubmit = (value: z.infer<typeof editSchema>) => {
    const newPatient = {
      isReceived: patient.isReceived,
      patientId: value.patientId,
      patientName: value.patientName,
      isMale: value.isMale,
      birthday: value.birthday,
      operationDate: value.operationDate,
      institution: patient.institution,
      group: patient.group || undefined,
      droped: patient.droped,
    };
    console.log(newPatient);
    mutate(newPatient);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="cursor-pointer" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Data</DialogTitle>
          <DialogDescription>
            Make changes to patient data here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <EditForm form={form} />
            <DialogFooter className=" w-full mt-4">
              <Button
                type="button"
                className=" mr-auto"
                variant="secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PatientEdit;
