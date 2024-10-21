
import React from "react";
import BasicLayout from '@/components/basicLayout'

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <>
     <BasicLayout>
      {children}
     </BasicLayout>
    </>
  )
}