import React from "react"
import { Badge } from "@/src/components/ui/badge"

export function RiskBadge({ level }) {
  if (level === "on-track") {
    return <Badge className="bg-[#D1FAE5] text-[#065F46] hover:bg-[#D1FAE5] font-bold px-3 py-1 text-xs">On Track</Badge>
  }
  if (level === "needs-attention") {
    return <Badge className="bg-[#FEF3C7] text-[#92400E] hover:bg-[#FEF3C7] font-bold px-3 py-1 text-xs">Needs Attention</Badge>
  }
  if (level === "at-risk") {
    return <Badge className="bg-[#FEE2E2] text-[#991B1B] hover:bg-[#FEE2E2] font-bold px-3 py-1 text-xs">At Risk</Badge>
  }
  return <Badge className="px-3 py-1 text-xs font-bold">{level}</Badge>
}
