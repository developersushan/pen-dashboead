import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "./shared/Header/Header"
import DashboardHeader from "@/components/DashboardHeader";
import MainTable from "@/components/MainTable";

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div>
      <Header/>
      </div>
      <div className="flex gap-5  py-6 px-4 xl:px-10 2xl:h-full bg-[#8aa7d6]">
        <div className="bg-[#b6c5dd] w-[300px] hidden xl:block rounded-2xl p-2.5"> <Sidebar/></div>
        <div className=" w-full">
          <div>
            <DashboardHeader/>
          </div>
          <div>
            <MainTable/>
          </div>
        </div>
      </div>
    </div>
  );
}
