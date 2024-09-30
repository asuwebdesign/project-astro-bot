import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Ellipsis, Info, ListFilter, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function DatatypeHeader({ icon, title, count, info, buttonLabel }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          {icon}
          <h1 className="flex items-center gap-2 text-lg font-heading font-semibold md:text-2xl">{title} <Badge variant="secondary">{count}</Badge></h1>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="rounded-full"><Info className="w-5 h-5" /></Button>
          </PopoverTrigger>
          <PopoverContent className="w-[480px]">
            <h3 className="mb-2 font-medium">Did you know?</h3>
            {info}
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="pr-6 gap-2 rounded-full"><ListFilter className="h-4 w-4" /> Filter</Button>
          <div className="w-80">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder={`Search ${title.toLowerCase()}...`} className="w-full appearance-none bg-background pl-8 shadow-none rounded-full" />
              </div>
            </form>
          </div>
        </div>
        <Button className="pr-6 gap-2 rounded-full"><Plus className="h-4 w-4" /> {buttonLabel}</Button>
      </div>
    </div>
  )
}