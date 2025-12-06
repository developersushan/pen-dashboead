"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DashboardHeader() {
  return (
    <main className="  ">
      <div className=" rounded-lg bg-[#b6c5dd] p-8">
        {/* Title Section */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Dashboard
            </h1>
            <p className="text-slate-600">Manage our app from your dashboard</p>
          </div>
          <Button
            variant="outline"
            className="gap-2 bg-white text-slate-900 border-slate-300 hover:bg-slate-50"
          >
            Export Data
            <Download className="w-4 h-4" />
          </Button>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-[60px]">
          {/* Total Agencies Card */}
          <div className="bg-purple-100 rounded-lg p-6 flex items-start justify-between">
            <div>
              <h3 className="text-slate-700 font-medium mb-2">
                Total Agencies
              </h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">3</p>
              <p className="text-green-600 text-sm">+3 this month</p>
            </div>
            <div className="bg-purple-400 rounded-lg p-3">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
          </div>

          {/* Total Coin Sales Card */}
          <div className="bg-blue-100 rounded-lg p-6 flex items-start justify-between">
            <div>
              <h3 className="text-slate-700 font-medium mb-2">
                Total Coin Sales
              </h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">5.3M</p>
              <p className="text-green-600 text-sm">+3 this month</p>
            </div>
            <div className="bg-blue-400 rounded-lg p-3">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            </div>
          </div>

          {/* Avg Commission Card */}
          <div className="bg-green-100 rounded-lg p-6 flex items-start justify-between">
            <div>
              <h3 className="text-slate-700 font-medium mb-2">
                Avg Commission
              </h3>
              <p className="text-4xl font-bold text-slate-900 mb-2">10.0%</p>
              <p className="text-green-600 text-sm">+3 this month</p>
            </div>
            <div className="bg-green-400 rounded-lg p-3">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
