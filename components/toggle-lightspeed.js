import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Sparkles } from "lucide-react"

export default function ToggleLightspeed() {
  return (
    <Sheet>
      <SheetTrigger className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-accent-foreground ml-auto h-10 w-10 rounded-full">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className="flex items-center justify-center w-full h-full">
                <Sparkles className="h-5 w-5" />
                <span className="sr-only">Toggle events</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI Chat</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>AI Chat</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}