"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye ,Funnel} from "lucide-react"
import { mockData } from "@/lib/tableData"



export default function MainTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredData = mockData.filter(
    (agency) =>
      agency.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agency.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="" >
      <div className=" mt-6">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Input
            placeholder="Search by agency ID or name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-[#b6c5dd] border-0 rounded-lg shadow-sm"
          />
          <Button variant="outline" className="hover:bg-[#b6c5dd] bg-white/90 border-0 text-[#d92659] shadow-sm">
            <span><Funnel /></span> Filter
          </Button>
          <Button className="bg-red-400 hover:bg-red-500 text-white border-0 shadow-sm">+ Add Agency</Button>
        </div>

        {/* Table Section */}
        <div className="bg-[#b6c5dd] rounded-lg overflow-hidden shadow-md">
          <div className="overflow-x-auto">
            <Table className="">
              <TableHeader className="">
                <TableRow className="border-b border-blue-200 ">
                  <TableHead className="text-gray-700 font-semibold">User ID</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Name</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Level</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Diamonds</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Beans</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Coin Sell</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Coin Buy</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Location</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Status</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {filteredData.map((agency) => (
                  <TableRow key={agency.id} className="border-b border-blue-100 hover:bg-blue-50/30 transition-colors">
                    <TableCell className="text-gray-800 font-medium">{agency.id}</TableCell>
                    <TableCell className="text-gray-700">{agency.name}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-300/60 text-purple-900 text-sm font-medium">
                        {agency.level}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-700">{agency.diamonds}</TableCell>
                    <TableCell className="text-gray-700">{agency.beans}</TableCell>
                    <TableCell className="text-gray-700">{agency.coinSell}</TableCell>
                    <TableCell className="text-gray-700">{agency.coinBuy}</TableCell>
                    <TableCell className="text-gray-700">{agency.location}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-400/70 text-green-900 text-sm font-semibold">
                        {agency.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                        <Eye size={20} className="text-gray-600" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

         

        </div>
      </div>
    </div>
  )
}
