'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function OperatorCard({ thumbnail, appIcon, title, description }) {
  return (
    <Card className="rounded-2xl overflow-hidden">
      <CardHeader className="p-0">
        <div className="w-full h-[240px]">
          <Image className="w-full h-full object-cover" src={thumbnail} width="1600" height="900" alt="" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-[48px] h-[48px] rounded-xl overflow-hidden">
              <Image className="w-full h-full object-cover" src={appIcon} width="64" height="64" alt="icon" />
            </div>
            <div className="flex flex-col gap-0">
              <h3 className="font-heading font-medium text-md">{title}</h3>
              <div className="font-heading text-sm text-zinc-500">{description}</div>
            </div>
          </div>
          <Button variant="secondary" className="h-8 px-6 rounded-full">Get</Button>
        </div>
      </CardContent>
    </Card>
  )
}