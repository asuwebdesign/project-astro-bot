import { DatatypeHeader } from "@/components/datatype-header"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Ellipsis, Telescope } from "lucide-react"
import data from './data.json'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Telescope className="w-6 h-6" />} title="Dashboards" count="10" info={info} buttonLabel="Dashboard" />
      <div className="flex flex-1">

        <p>Not a table. Chart generator...</p>

      </div>
    </>
  )
}