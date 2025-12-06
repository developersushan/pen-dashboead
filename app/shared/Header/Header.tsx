import Image from "next/image";
import React from "react";
 import Logo from "../../assets/image/image.jpg"
 import { LogOut } from 'lucide-react';
export default function Header() {
  return (
    <div className="bg-[#d6e6f5]  px-2  h-20 items-center flex w-full ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
            <Image src={Logo} height={50} width={50} className="w-[60px] object-fill h-[60px] rounded-full" alt="logo"/>
            <div className="flex flex-col gap-0 leading-4">
                <h1 className="text-[#a15de9] text-xl">@Mumtahina</h1>
                <span className="text-gray-500">Admin id: 5998741</span>
            </div>
        </div>
         <div>
            <button className="flex  items-center gap-1 text-xl font-medium text-[#b65fd8] cursor-pointer"> <span> <LogOut/></span> <span>Logout</span></button>
         </div>
      </div>
    </div>
  );
}
