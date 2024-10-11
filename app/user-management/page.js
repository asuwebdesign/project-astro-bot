'use client'

import { DatatypeHeader } from "@/components/datatype-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cog, Users } from "lucide-react"
import Link from "next/link"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Users className="w-6 h-6" />} title="User management" info={info} noFilter noSearch />
      <div className="">
        <Tabs defaultValue="users">
          <div className="flex items-center justify-center">
            <TabsList className="rounded-full">
              <TabsTrigger value="users" className="rounded-full">Users</TabsTrigger>
              <TabsTrigger value="groups" className="rounded-full">Groups</TabsTrigger>
              <TabsTrigger value="service-accounts" className="rounded-full">Service Accounts</TabsTrigger>
              <TabsTrigger value="roles" className="rounded-full">Roles</TabsTrigger>
              <TabsTrigger value="role-bindings" className="rounded-full">Role Bindings</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="users" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="groups" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="service-accounts" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="roles" className="py-6">
            ...
          </TabsContent>
          <TabsContent value="role-bindings" className="py-6">
            ...
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}