"use client"
import  Image  from 'next/image';
import SidebarLogo from "@/app/assets/image/slider-logo.png"
import Link from 'next/link';
import { sidebarData } from '@/lib/data';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
export default function Sidebar() {
  const [active,setActive]= useState(1);
    const pathname = usePathname();
    const router  =  useRouter()
     useEffect(() => {
    const matchedItem = sidebarData.find((item) =>
      pathname.startsWith(item.link)
    );

    if (matchedItem) {
      setActive(matchedItem.id);
    }
  }, [pathname, sidebarData]);
  const handleRoute =()=>{
    router.push('/dashboard');
  }
  return (
    <div>
     <div className='flex items-center gap-2'>
      <a href="" onClick={handleRoute}>
      <Image src={SidebarLogo} width={80} height={80} alt=""/>
      </a>
      <p className='flex flex-col text-xl font-semibold'><span className='text-[#8e26d9]'>Pen Live </span> <span className='text-[#d92647]'>Admin Panel</span></p>
      </div>
      <div className='pl-3'>
        {
          sidebarData.map((item)=> {
            
            
            return(
              <ul key={item.id} className="my-4">
                <li className={`my-3 flex items-center gap-3 text-md font-medium  cursor-pointer ${active ===item.id ? 'text-[#ff0845]': 'text-gray-700 hover:text-[#ff0845]'}`}>
                  <span>{item.icon}</span>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              </ul>
            )
          })
        }

        </div> 
    </div>
  )
}
