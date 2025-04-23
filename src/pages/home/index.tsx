import { Button } from "@/shared/ui/shadcn/button";

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-5">
      <h3 className=" text-2xl font-bold">Please select a menu</h3>
      <div className=" flex gap-5">
        <Button
          variant="link"
          className=" h-[100px] bg-[#415A77] font-bold text-md text-white cursor-pointer"
        >
          Register
          <br />
          New
          <br />
          Participant
        </Button>
        <Button
          variant="link"
          className="h-[100px] bg-[#415A77] font-bold text-md text-white cursor-pointer"
        >
          Enrollment
          <br />
          List
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
