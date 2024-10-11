import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Explore } from "./explore"
import { Installed } from "./installed"
import { Plug2 } from "lucide-react"
import { DatatypeHeader } from "@/components/datatype-header"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Plug2 className="w-6 h-6" />} title="Operators" info={info} noFilter noSearch />
      <div className="">
        <Tabs defaultValue="explore">
          <div className="flex items-center justify-center">
            <TabsList className="rounded-full">
              <TabsTrigger value="explore" className="rounded-full">Explore operators</TabsTrigger>
              <TabsTrigger value="installed" className="rounded-full">Installed</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="explore" className="2xl:w-4/6 py-6 mx-auto my-0">
            <Explore />
          </TabsContent>
          <TabsContent value="installed" className="2xl:w-4/6 py-6 mx-auto my-0">
            <Installed />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}