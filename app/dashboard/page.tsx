import DashboardHeader from "@/components/DashboardHeader";
import MainTable from "@/components/MainTable";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <DashboardHeader />
      </div>
      <div>
        <MainTable />
      </div>
    </div>
  );
}
