'use client'

import { DatatypeHeader } from "@/components/datatype-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cog } from "lucide-react"
import Link from "next/link"

export default function Page() {

  const info =''

  return (
    <>
      <DatatypeHeader icon={<Cog className="w-6 h-6" />} title="Administration" info={info} noFilter noSearch />
      <div className="">
        <Tabs defaultValue="cluster-settings">
          <div className="flex items-center justify-center">
            <TabsList className="rounded-full">
              <TabsTrigger value="cluster-settings" className="rounded-full">Cluster settings</TabsTrigger>
              <TabsTrigger value="custom-resource-definitions" className="rounded-full">Custom resource definitions</TabsTrigger>
              <TabsTrigger value="limit-ranges" className="rounded-full">Limit ranges</TabsTrigger>
              <TabsTrigger value="namespaces" className="rounded-full">Namespaces</TabsTrigger>
              <TabsTrigger value="resource-quotas" className="rounded-full">Resource quotas</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="cluster-settings" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="custom-resource-definitions" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="limit-ranges" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="namespaces" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="resource-quotas" className="py-6">
            ...
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}