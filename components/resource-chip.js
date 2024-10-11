import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ResourceChip({ type, icon, badge, label, meta }) {
  return (
    <>
      {type === 'primary' && (
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2 pl-1 pr-6 py-1 rounded-full transition-all hover:bg-zinc-200/50 dark:hover:bg-zinc-800">
            <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-zinc-800 rounded-full">
              {icon}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold">{label}</span>
              <span className="font-heading font-semibold text-xs text-zinc-500">{meta}</span>
            </div>

          </Link>
        </div>
      )}
      {type === 'secondary' && (
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2 pl-1 pr-6 py-1 rounded-full transition-all hover:bg-zinc-200/50 dark:hover:bg-zinc-800">
            <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-zinc-800 rounded-full">
              {icon}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-medium">{label}</span>
              <span className="font-heading text-xs text-zinc-500">{meta}</span>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}