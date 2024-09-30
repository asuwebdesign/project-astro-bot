import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Blocks, Ellipsis, Info, ListFilter, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { DatatypeHeader } from "@/components/datatype-header"

export default function Page() {

  const info = <>
    <ul className="mb-2 flex flex-col gap-2 text-sm">
      <li>A <strong className="font-medium">build config</strong> is a resource object that defines the details of how to build and produce a container image from source code.</li>
      <li>It automates the process of turning application code into deployable container images.</li>
      <li>Build configs are part of OpenShift&apos;s build system and can be triggered manually or automatically based on changes to the source code or other triggers.</li>
    </ul>
  </>

  return (
    <>
      <DatatypeHeader icon={<Blocks className="w-6 h-6" />} title="Build configs" count="10" info={info} buttonLabel="Build config" />

      <div className="grid grid-cols-4 gap-6">
        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-1">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Namespace</TableHead>
              <TableHead>Last run</TableHead>
              <TableHead>Last run status</TableHead>
              <TableHead>Last run time</TableHead>
              <TableHead>Last run duration</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>frontend-app-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>frontend-dev
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>backend-service-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>backend-api
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>database-migration-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>db-migrations
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>auth-service-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>auth-dev
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>payment-gateway-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>payment-services
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>notifications-service-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>notifications
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>analytics-pipeline-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>data-analytics
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>logging-service-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>infra-logging
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>ci-pipeline-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>ci-cd
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className=" font-medium">BC</Badge>load-balancer-build
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge className="font-medium" variant="secondary">NS</Badge>networking-infra
                </div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>
    </>
  )
}