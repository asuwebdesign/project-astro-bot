import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-heading font-semibold md:text-2xl">Operators</h1>
      </div>
      <div className="flex flex-1">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="installed">Installed</TabsTrigger>
            <TabsTrigger value="operatorhub">Operator hub</TabsTrigger>
          </TabsList>
          <TabsContent value="installed">Make changes to your account here.</TabsContent>
          <TabsContent value="operatorhub">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
  )
}