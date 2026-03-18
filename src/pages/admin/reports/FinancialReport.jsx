import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { 
  ComposedChart, BarChart, Bar, LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, Cell 
} from "recharts"
import { 
  ArrowLeft, DollarSign, TrendingUp, AlertTriangle, Users, 
  CheckCircle2, AlertCircle, Lightbulb 
} from "lucide-react"

const revenueGrowthData = [
  { year: "2020-21", revenue: 98, expenses: 81, profit: 17 },
  { year: "2021-22", revenue: 118, expenses: 94, profit: 24 },
  { year: "2022-23", revenue: 138, expenses: 108, profit: 30 },
  { year: "2023-24", revenue: 168, expenses: 128, profit: 40 },
  { year: "2024-25", revenue: 187, expenses: 142, profit: 45 },
]

const monthlyCollectionData = [
  { month: "Apr", thisYear: 88, lastYear: 84, target: 95 },
  { month: "May", thisYear: 91, lastYear: 87, target: 95 },
  { month: "Jun", thisYear: 86, lastYear: 82, target: 95 },
  { month: "Jul", thisYear: 93, lastYear: 89, target: 95 },
  { month: "Aug", thisYear: 97, lastYear: 93, target: 95 },
  { month: "Sep", thisYear: 94, lastYear: 90, target: 95 },
  { month: "Oct", thisYear: 92, lastYear: 88, target: 95 },
  { month: "Nov", thisYear: 89, lastYear: 85, target: 95 },
  { month: "Dec", thisYear: 94, lastYear: 90, target: 95 },
  { month: "Jan", thisYear: 96, lastYear: 91, target: 95 },
  { month: "Feb", thisYear: 91, lastYear: 87, target: 95 },
  { month: "Mar", thisYear: 94, lastYear: 89, target: 95 },
]

const campusCollectionData = [
  { campus: "Hamilton", rate: 79, fill: "#ef4444" },
  { campus: "Monash", rate: 81, fill: "#ef4444" },
  { campus: "Sevenoaks", rate: 84, fill: "#f59e0b" },
  { campus: "Kingswood", rate: 88, fill: "#f59e0b" },
  { campus: "Claremont", rate: 91, fill: "#00A693" },
  { campus: "Rawal", rate: 93, fill: "#006B6B" },
  { campus: "Liverpool", rate: 94, fill: "#006B6B" },
  { campus: "Richmond", rate: 95, fill: "#006B6B" },
  { campus: "Askari", rate: 96, fill: "#006B6B" },
  { campus: "Wellington", rate: 98, fill: "#006B6B" },
]

const outstandingData = [
  { campus: "Askari", amount: 140000, fill: "#006B6B" },
  { campus: "Wellington", amount: 180000, fill: "#006B6B" },
  { campus: "Liverpool", amount: 320000, fill: "#006B6B" },
  { campus: "Richmond", amount: 480000, fill: "#006B6B" },
  { campus: "Claremont", amount: 720000, fill: "#006B6B" },
  { campus: "Kingswood", amount: 980000, fill: "#006B6B" },
  { campus: "Rawal", amount: 1180000, fill: "#f59e0b" },
  { campus: "Monash", amount: 1640000, fill: "#f59e0b" },
  { campus: "Sevenoaks", amount: 1920000, fill: "#f59e0b" },
  { campus: "Hamilton", amount: 2840000, fill: "#ef4444" },
]

const agingData = [
  { campus: "Hamilton", days30: 420000, days60: 680000, days90: 1740000 },
  { campus: "Sevenoaks", days30: 580000, days60: 840000, days90: 500000 },
  { campus: "Monash", days30: 640000, days60: 620000, days90: 380000 },
  { campus: "Rawal", days30: 480000, days60: 420000, days90: 280000 },
  { campus: "Kingswood", days30: 490000, days60: 340000, days90: 150000 },
]

const retentionTrendData = [
  { year: "2020-21", retention: 94, industry: 88 },
  { year: "2021-22", retention: 95, industry: 88 },
  { year: "2022-23", retention: 94, industry: 89 },
  { year: "2023-24", retention: 93, industry: 89 },
  { year: "2024-25", retention: 91, industry: 90 },
]

const retentionByCampusData = [
  { campus: "Hamilton", rate: 81, fill: "#ef4444" },
  { campus: "Monash", rate: 84, fill: "#f59e0b" },
  { campus: "Sevenoaks", rate: 87, fill: "#f59e0b" },
  { campus: "Kingswood", rate: 89, fill: "#006B6B" },
  { campus: "Claremont", rate: 91, fill: "#006B6B" },
  { campus: "Rawal", rate: 92, fill: "#006B6B" },
  { campus: "Richmond", rate: 93, fill: "#22c55e" },
  { campus: "Liverpool", rate: 94, fill: "#22c55e" },
  { campus: "Askari", rate: 95, fill: "#22c55e" },
  { campus: "Wellington", rate: 97, fill: "#22c55e" },
]

const revenuePerStudentData = [
  { campus: "Wellington", revenue: 12400, fill: "#22c55e" },
  { campus: "Askari", revenue: 11800, fill: "#22c55e" },
  { campus: "Liverpool", revenue: 11200, fill: "#22c55e" },
  { campus: "Richmond", revenue: 10900, fill: "#22c55e" },
  { campus: "Kingswood", revenue: 10400, fill: "#22c55e" },
  { campus: "Claremont", revenue: 10100, fill: "#22c55e" },
  { campus: "Rawal", revenue: 9800, fill: "#22c55e" },
  { campus: "Sevenoaks", revenue: 9400, fill: "#22c55e" },
  { campus: "Monash", revenue: 8900, fill: "#f59e0b" },
  { campus: "Hamilton", revenue: 8200, fill: "#ef4444" },
]




export function FinancialReport() {
  return (
    <div className="space-y-8 pb-10">
      
      {/* Page Header */}
      <div>
        <Link to="/admin/executive" className="inline-flex items-center gap-1 text-sm text-[#006B6B] hover:underline font-medium mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Financial Health Report</h1>
            <p className="text-gray-500 mt-1">Roots International Schools & Colleges — Revenue, Collections & Financial Sustainability</p>
          </div>
          <div className="bg-[#006B6B]/10 text-[#006B6B] px-4 py-2 rounded-full text-sm font-semibold border border-[#006B6B]/20">
            Academic Year: 2024–2025
          </div>
        </div>
      </div>

      {/* Section 1 — Financial Headline Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-emerald-50/50 border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-emerald-900">Total Revenue This Year</h3>
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-700 mb-1">PKR 187M</div>
            <p className="text-xs text-emerald-600/80 leading-snug">
              ↑ +11% vs last year (PKR 168M)
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#E6F4F4] border-[#006B6B]/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#006B6B]">Fee Collection Rate</h3>
              <DollarSign className="h-4 w-4 text-[#006B6B]" />
            </div>
            <div className="text-3xl font-bold text-[#006B6B] mb-1">94%</div>
            <p className="text-xs text-[#006B6B]/80 leading-snug">
              ↑ +2% vs last year — target is 95%
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 bg-amber-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-amber-900">Outstanding Fees</h3>
              <AlertTriangle className="h-4 w-4 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-700 mb-1">PKR 8.98M</div>
            <p className="text-xs text-amber-700/80 leading-snug">
              4.8% of total due — industry average is 6%
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 bg-amber-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-amber-900">Student Retention Rate</h3>
              <Users className="h-4 w-4 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-700 mb-1">91%</div>
            <p className="text-xs text-amber-700/80 leading-snug">
              ↓ -2% vs last year (was 93%) — monitor closely
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Section 2 — Revenue Growth Story */}
      <Card>
        <CardHeader>
          <CardTitle>Annual Revenue Growth — 5 Years</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[360px] w-full">
            <ResponsiveContainer>
              <ComposedChart data={revenueGrowthData} margin={{ top: 20, right: 20, bottom: 0, left: -10 }} barCategoryGap="30%" barGap={4}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis 
                  domain={[0, 200]} 
                  label={{ value: 'PKR (Millions)', angle: -90, position: 'insideLeft', offset: 0, style: { textAnchor: 'middle', fill: '#6b7280', fontSize: 12 } }} 
                />
                <Tooltip formatter={(value) => `PKR ${value}M`} />
                <Legend />
                <Bar dataKey="revenue" name="Revenue" fill="#006B6B" fillOpacity={0.8} radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill="#9ca3af" fillOpacity={0.6} radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="profit" name="Profit Margin" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>🟢</span> Revenue grew 91% in 5 years — from PKR 98M to PKR 187M
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <TrendingUp className="h-3 w-3 text-teal-600" /> Profit margin improving — from 17% in 2020 to 24% in 2025
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>💡</span> Expenses growing at 15% per year — revenue growing at 17% — healthy gap
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 mt-2">
             <p className="text-sm text-gray-500 italic">
               RISC has nearly doubled its revenue in 5 years while improving profit margins. Revenue is growing faster than expenses — a sign of healthy operational management. The network is financially strong and well-positioned for further expansion.
             </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Fee Collection Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Fee Collection Rate</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[260px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyCollectionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis domain={[75, 100]} />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine y={95} stroke="#f59e0b" strokeDasharray="4 4" label={{ position: "insideBottomLeft", value: "Target 95%", fill: "#f59e0b", fontSize: 11 }} />
                  <Line type="monotone" dataKey="thisYear" name="This Year" stroke="#006B6B" strokeWidth={3} dot={false} activeDot={{ r: 4 }} />
                  <Line type="monotone" dataKey="lastYear" name="Last Year" stroke="#9ca3af" strokeWidth={2} strokeDasharray="4 4" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               Collection is improving vs last year every single month. June and November are consistent dip months — likely linked to school holidays and exam season. Target 95% is only hit in August and January.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fee Collection Rate by Campus</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[260px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={campusCollectionData} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[70, 100]} />
                  <YAxis dataKey="campus" type="category" fontSize={11} width={70} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <ReferenceLine x={95} stroke="#9ca3af" strokeDasharray="3 3" label={{ position: 'top', value: 'Target', fontSize: 10, fill: '#6b7280' }} />
                  <Bar dataKey="rate" name="Collection Rate" radius={[0, 4, 4, 0]} barSize={16}>
                    {campusCollectionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               Top 5 campuses are all above target. Hamilton and Monash are the only campuses critically below — both need fee recovery campaigns immediately.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 4 — Outstanding Fees Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Outstanding Fees by Campus</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[260px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={outstandingData} layout="vertical" margin={{ top: 10, right: 60, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis 
                    type="number" 
                    tickFormatter={(value) => `PKR ${(value / 1000000).toFixed(1)}M`}
                    fontSize={11}
                  />
                  <YAxis dataKey="campus" type="category" fontSize={11} width={70} />
                  <Tooltip formatter={(value) => `PKR ${(value / 1000000).toFixed(2)}M`} />
                  <Bar 
                    dataKey="amount" 
                    name="Outstanding Fees" 
                    radius={[0, 4, 4, 0]} 
                    barSize={16}
                    label={{ position: 'right', formatter: (v) => 'PKR ' + (v/1000000).toFixed(2) + 'M', fontSize: 11 }}
                  >
                    {outstandingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               Total outstanding: PKR 10.4M. Hamilton alone accounts for 27% of all outstanding fees. Top 3 campuses account for 62% of outstanding — focused recovery from these 3 would dramatically improve the network's financial position.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Outstanding Fees Aging Analysis</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[260px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={agingData} layout="vertical" stackOffset="expand" margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" tickFormatter={(v) => `${(v * 100).toFixed(0)}%`} fontSize={11} />
                  <YAxis dataKey="campus" type="category" fontSize={11} width={70} />
                  <Tooltip formatter={(value) => `PKR ${(value / 1000000).toFixed(2)}M`} />
                  <Legend />
                  <Bar dataKey="days30" name="0-30 Days" stackId="a" fill="#006B6B" radius={[0, 0, 0, 0]} barSize={20} />
                  <Bar dataKey="days60" name="31-60 Days" stackId="a" fill="#f59e0b" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="days90" name="61-90+ Days" stackId="a" fill="#ef4444" radius={[0, 2, 2, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               PKR 2.85M has been outstanding for over 60 days — this is the critical recovery target. Hamilton has PKR 1.74M overdue 90+ days — escalation to senior management required.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 5 — Student Retention Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Student Retention Rate — 5 Year Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col h-full">
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={retentionTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="year" fontSize={12} />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="retention" name="RISC Retention" stroke="#006B6B" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="industry" name="Industry Average" stroke="#9ca3af" strokeWidth={2} strokeDasharray="4 4" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
                RISC still outperforms industry average but the gap is closing — from 6% above average in 2021 to only 1% above in 2025. This trend needs reversing.
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={retentionByCampusData} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[80, 100]} fontSize={11} />
                    <YAxis dataKey="campus" type="category" fontSize={11} width={90} />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <ReferenceLine x={91} stroke="#9ca3af" strokeDasharray="3 3" label={{ position: 'top', value: 'Network Avg', fontSize: 10, fill: '#6b7280' }} />
                    <Bar dataKey="rate" name="Retention Rate" radius={[0, 4, 4, 0]} barSize={14}>
                      {retentionByCampusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
                Hamilton and Monash have the lowest retention — students are leaving. This correlates directly with their lower academic scores. Fix the academics, fix the retention.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 — Revenue per Student Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue per Student — Campus Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col h-full">
            <div className="h-[300px] w-full pb-6">
              <ResponsiveContainer>
                <BarChart data={[...revenuePerStudentData].reverse()} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis 
                    type="number" 
                    tickFormatter={(value) => `PKR ${(value / 1000).toFixed(0)}K`}
                    fontSize={11}
                  />
                  <YAxis dataKey="campus" type="category" fontSize={11} width={80} />
                  <Tooltip formatter={(value) => `PKR ${(value).toLocaleString()}`} />
                  <ReferenceLine x={9350} stroke="#6b7280" strokeDasharray="3 3" label={{ position: "top", value: "Network Avg PKR 9.35K", fill: "#6b7280", fontSize: 11 }} />
                  <Bar dataKey="revenue" name="Rev per Student" radius={[0, 4, 4, 0]} barSize={16}>
                    {revenuePerStudentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 pt-3 mt-2">
               <p className="text-sm text-gray-500 italic">
                 Wellington generates PKR 12,400 per student — 33% above Hamilton's PKR 8,200. This gap reflects both fee collection efficiency and programme mix. Bringing underperforming campuses to network average would add PKR 12-15M in annual revenue.
               </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 7 — Financial Intelligence Panel */}
      <div className="bg-[#E6F4F4] rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-[#006B6B] overflow-hidden">
        <div className="px-6 py-4 flex justify-between items-center border-b border-[#006B6B]/10 bg-white/50">
          <h3 className="text-lg font-bold text-[#006B6B]">💰 Financial Intelligence — Key Recommendations</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-emerald-500 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Strong overall position — PKR 187M revenue, 91% gross growth in 5 years, profit margin improving. The network is financially healthy at the macro level.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-red-500 flex gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Hamilton Campus is a financial drain — lowest fee collection (79%), highest outstanding fees (PKR 2.84M), lowest revenue per student (PKR 8,200). Needs a dedicated recovery plan within 30 days.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-amber-500 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Retention declining — from 95% in 2022 to 91% in 2025. Each 1% drop in retention = approximately 200 students lost = PKR 1.87M in annual revenue. This is the biggest financial risk in the network.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-blue-500 flex gap-3">
              <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Fee recovery opportunity — bringing outstanding collections from the top 3 campuses (Hamilton, Sevenoaks, Monash) to network average would recover PKR 6-7M in this academic year alone.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
