import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

export function StatCard({ title, value, icon: Icon, description }) {
  return (
    <Card className="border-l-4 border-l-[#C9A84C]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-[2.5rem] font-bold text-[#1B2A4A] leading-none mb-1">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
