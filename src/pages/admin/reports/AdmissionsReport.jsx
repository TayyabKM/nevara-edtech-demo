import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ComposedChart, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, Cell 
} from "recharts"
import { 
  ArrowLeft, Users, TrendingUp, AlertTriangle, CheckCircle2, AlertCircle, Lightbulb, UserPlus 
} from "lucide-react"

const funnelData = [
  { stage: "Enquiries Received", count: 5240, conversion: null, color: "#006B6B" },
  { stage: "Applications Submitted", count: 3847, conversion: "73.4%", color: "#00897B" },
  { stage: "Interviews Conducted", count: 2910, conversion: "75.6%", color: "#00796B" },
  { stage: "Offers Made", count: 2341, conversion: "80.4%", color: "#00695C" },
  { stage: "Enrolled", count: 2104, conversion: "89.9%", color: "#004D40" },
]

const monthlyTrendData = [
  { month: "Jan", y2023: 261, y2024: 298, y2025: 340 },
  { month: "Feb", y2023: 238, y2024: 261, y2025: 290 },
  { month: "Mar", y2023: 312, y2024: 374, y2025: 410 },
  { month: "Apr", y2023: 298, y2024: 349, y2025: 380 },
  { month: "May", y2023: 401, y2024: 468, y2025: 520 },
  { month: "Jun", y2023: 476, y2024: 541, y2025: 610 },
  { month: "Jul", y2023: 698, y2024: 798, y2025: 890 },
  { month: "Aug", y2023: 941, y2024: 1087, y2025: 1240 },
  { month: "Sep", y2023: 812, y2024: 901, y2025: 980 },
  { month: "Oct", y2023: 341, y2024: 389, y2025: 420 },
  { month: "Nov", y2023: 251, y2024: 287, y2025: 310 },
  { month: "Dec", y2023: 228, y2024: 261, y2025: 280 },
]

const campusApplicationsData = [
  { campus: "Wellington", applications: 624, enrolled: 498, capacity: 500 },
  { campus: "Askari", applications: 487, enrolled: 391, capacity: 400 },
  { campus: "Claremont", applications: 412, enrolled: 318, capacity: 350 },
  { campus: "Richmond", applications: 398, enrolled: 301, capacity: 320 },
  { campus: "Liverpool", applications: 356, enrolled: 278, capacity: 300 },
  { campus: "Rawal", applications: 334, enrolled: 254, capacity: 280 },
  { campus: "Kingswood", applications: 298, enrolled: 198, capacity: 260 },
  { campus: "Sevenoaks", applications: 276, enrolled: 184, capacity: 250 },
  { campus: "Monash", applications: 198, enrolled: 124, capacity: 200 },
  { campus: "Hamilton", applications: 184, enrolled: 108, capacity: 200 },
]

const conversionData = [
  { campus: "Hamilton", rate: 58.7, fill: "#ef4444" },
  { campus: "Monash", rate: 62.6, fill: "#ef4444" },
  { campus: "Kingswood", rate: 66.4, fill: "#f59e0b" },
  { campus: "Sevenoaks", rate: 66.7, fill: "#f59e0b" },
  { campus: "Richmond", rate: 75.6, fill: "#22c55e" },
  { campus: "Rawal", rate: 76.0, fill: "#22c55e" },
  { campus: "Claremont", rate: 77.2, fill: "#22c55e" },
  { campus: "Liverpool", rate: 78.1, fill: "#22c55e" },
  { campus: "Wellington", rate: 79.8, fill: "#22c55e" },
  { campus: "Askari", rate: 80.3, fill: "#22c55e" },
]

const capacityData = [
  { campus: "Wellington Campus", enrolled: 498, capacity: 500, utilization: 99.6 },
  { campus: "Askari Campus", enrolled: 391, capacity: 400, utilization: 97.8 },
  { campus: "Richmond Campus", enrolled: 301, capacity: 320, utilization: 94.1 },
  { campus: "Liverpool Campus", enrolled: 278, capacity: 300, utilization: 92.7 },
  { campus: "Claremont Campus", enrolled: 318, capacity: 350, utilization: 90.9 },
  { campus: "Rawal Campus", enrolled: 254, capacity: 280, utilization: 90.7 },
  { campus: "Kingswood Campus", enrolled: 198, capacity: 260, utilization: 76.2 },
  { campus: "Sevenoaks Campus", enrolled: 184, capacity: 250, utilization: 73.6 },
  { campus: "Monash Campus", enrolled: 124, capacity: 200, utilization: 62.0 },
  { campus: "Hamilton Campus", enrolled: 108, capacity: 200, utilization: 54.0 },
]

const seasonalityData = [
  { month: "Jan", admissions: 340, intensity: "low" },
  { month: "Feb", admissions: 290, intensity: "low" },
  { month: "Mar", admissions: 410, intensity: "medium" },
  { month: "Apr", admissions: 380, intensity: "medium" },
  { month: "May", admissions: 520, intensity: "medium" },
  { month: "Jun", admissions: 610, intensity: "high" },
  { month: "Jul", admissions: 890, intensity: "peak" },
  { month: "Aug", admissions: 1240, intensity: "peak" },
  { month: "Sep", admissions: 980, intensity: "peak" },
  { month: "Oct", admissions: 420, intensity: "medium" },
  { month: "Nov", admissions: 310, intensity: "low" },
  { month: "Dec", admissions: 280, intensity: "low" },
]


export function AdmissionsReport() {
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
            <h1 className="text-3xl font-bold text-gray-900">Admissions Intelligence Report</h1>
            <p className="text-gray-500 mt-1">Roots International Schools & Colleges — Pipeline, Conversion & Growth Analysis</p>
          </div>
          <div className="bg-[#006B6B]/10 text-[#006B6B] px-4 py-2 rounded-full text-sm font-semibold border border-[#006B6B]/20">
            Academic Year: 2024–2025
          </div>
        </div>
      </div>

      {/* Section 1 — Admissions Headline Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-emerald-50/50 border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-emerald-900">Total Applications This Year</h3>
              <UserPlus className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-700 mb-1">3,847</div>
            <p className="text-xs text-emerald-600/80 leading-snug">
              ↑ +14% vs last year (3,374)
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#E6F4F4] border-[#006B6B]/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#006B6B]">Final Enrollment</h3>
              <CheckCircle2 className="h-4 w-4 text-[#006B6B]" />
            </div>
            <div className="text-3xl font-bold text-[#006B6B] mb-1">2,104</div>
            <p className="text-xs text-[#006B6B]/80 leading-snug">
              54.7% conversion rate — industry benchmark 50-60%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50/50 border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-emerald-900">Admission Growth YoY</h3>
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-700 mb-1">+14%</div>
            <p className="text-xs text-emerald-600/80 leading-snug">
              ↑ improved from +9% last year — strongest growth in 4 years
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 bg-amber-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-amber-900">Waitlisted Students</h3>
              <AlertTriangle className="h-4 w-4 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-700 mb-1">312</div>
            <p className="text-xs text-amber-700/80 leading-snug">
              Demand exceeding capacity at 4 campuses
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Section 2 — Admissions Funnel Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Admissions Funnel — Current Academic Session</CardTitle>
          <CardDescription>From first enquiry to enrolled student</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="space-y-4 mb-10 w-full max-w-4xl">
            {funnelData.map((item, i) => {
              const widthPct = (item.count / funnelData[0].count) * 100;
              return (
                <div key={i} className="flex flex-col">
                  {item.conversion && (
                    <div className="text-gray-400 text-xs italic pl-4 mb-1">
                      ↓ {item.conversion} conversion from previous stage
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm mb-1 pr-2">
                    <span className="font-semibold text-gray-800">{item.stage}</span>
                    <span className="font-bold text-gray-900">{item.count.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-r-full h-8 flex items-center shadow-inner overflow-hidden">
                    <div 
                      className="h-full rounded-r-full transition-all duration-700 ease-out flex items-center px-4"
                      style={{ width: `${widthPct}%`, backgroundColor: item.color }}
                    >
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100 flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">🟢</span>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                Enquiry to Application: 73.4% — strong brand awareness and marketing effectiveness
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-100 flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">🟡</span>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                Interview to Offer: 80.4% — good but 312 waitlisted students suggest capacity constraints
              </p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100 flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5">🟢</span>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                Offer to Enrollment: 89.9% — excellent — parents are committed once offered a place
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4 mt-auto">
             <p className="text-sm text-gray-500 italic">
               Of every 100 families that enquire, 40 ultimately enroll their child. This is a strong conversion rate — the biggest opportunity is at the top of the funnel. More enquiries = more enrollments, even at current conversion rates.
             </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Monthly Admissions Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Admissions Trend — 3 Year Comparison</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="h-[320px] w-full mb-6">
            <ResponsiveContainer>
              <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 20, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="y2025" fill="#006B6B" fillOpacity={0.1} stroke="none" />
                <ReferenceLine x="Aug" stroke="#006B6B" strokeDasharray="3 3" label={{ position: 'top', value: 'Peak Season', fill: '#006B6B', fontSize: 11 }} />
                <Line type="monotone" dataKey="y2023" name="2022-23" stroke="#d1d5db" strokeWidth={1.5} strokeDasharray="3 3" dot={false} />
                <Line type="monotone" dataKey="y2024" name="2023-24" stroke="#9ca3af" strokeWidth={2} strokeDasharray="4 4" dot={false} />
                <Line type="monotone" dataKey="y2025" name="2024-25" stroke="#006B6B" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>📈</span> Every month in 2024-25 is above both previous years — consistent network-wide growth
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>🏔️</span> August is peak season — accounts for 17% of annual admissions
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>📊</span> July-September window = 44% of all annual admissions — this is the critical 90-day season
            </div>
          </div>
          <div className="border-t border-gray-100 pt-4 mt-auto">
             <p className="text-sm text-gray-500 italic">
               Admissions are growing every single month compared to prior years — this is not seasonal luck, it is consistent demand growth. The July-September window is critical — 44% of all annual admissions happen in just 3 months. Every operational decision during this period has outsized impact.
             </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Campus Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Applications vs Enrolled by Campus</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[280px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[...campusApplicationsData].reverse()} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} />
                  <YAxis dataKey="campus" type="category" fontSize={11} width={75} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Legend verticalAlign="top" height={36}/>
                  <Bar dataKey="applications" name="Applications" fill="#006B6B" radius={[0, 4, 4, 0]} barSize={12} />
                  <Bar dataKey="enrolled" name="Enrolled" fill="#22c55e" radius={[0, 4, 4, 0]} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               Wellington and Askari are near capacity — expansion planning needed. Hamilton and Monash have significant unused capacity, suggesting demand is not being captured in those markets.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate by Campus (%)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[280px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[...conversionData].reverse()} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} fontSize={11} />
                  <YAxis dataKey="campus" type="category" fontSize={11} width={80} />
                  <Tooltip cursor={{ fill: 'transparent' }} formatter={(val) => `${val}%`} />
                  <ReferenceLine x={54.7} stroke="#9ca3af" strokeDasharray="3 3" label={{ position: 'top', value: 'Network Avg', fontSize: 10, fill: '#6b7280' }} />
                  <Bar dataKey="rate" name="Conversion Rate" radius={[0, 4, 4, 0]} barSize={16}>
                    {[...conversionData].reverse().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               Hamilton has the lowest conversion rate at 58.7% — families who apply are less likely to enroll. This suggests reputation concerns. Improving academic quality would directly improve conversion.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 5 — Capacity & Demand */}
      <Card>
        <CardHeader>
          <CardTitle>Campus Capacity Utilization — Are We Full?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="space-y-4 mb-8">
            {capacityData.map((item, i) => {
              const util = item.utilization;
              const colorClass = util > 90 ? "bg-emerald-500" : util > 70 ? "bg-amber-500" : "bg-red-500";
              const textColor = util > 90 ? "text-emerald-600" : util > 70 ? "text-amber-500" : "text-red-500";
              
              return (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <div className="w-full sm:w-[160px] font-medium text-gray-700 text-sm truncate">
                    {item.campus}
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="w-full bg-gray-100 rounded-full h-3 max-w-xl">
                      <div 
                        className={`h-full rounded-full ${colorClass}`} 
                        style={{ width: `${Math.min(util, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between sm:justify-end items-center sm:gap-6 w-full sm:w-auto">
                    <div className="text-xs text-gray-500 whitespace-nowrap bg-gray-50 px-2 py-1 rounded">
                      {item.enrolled} / {item.capacity} students
                    </div>
                    <div className={`w-[60px] text-right font-bold text-sm ${textColor}`}>
                      {util.toFixed(1)}%
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-50 rounded-lg p-3 border border-red-100 flex items-start gap-2">
              <span className="text-red-500 mt-0.5">🔴</span>
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                Near capacity (&gt;90%): Wellington, Askari, Richmond, Liverpool, Rawal, Claremont — expansion planning required
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-100 flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">🟡</span>
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                Moderate capacity (70-89%): Kingswood, Sevenoaks — growth opportunity
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-100 flex items-start gap-2">
              <span className="text-red-500 mt-0.5">🔴</span>
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                Under-utilized (&lt;70%): Monash, Hamilton — demand generation campaigns needed
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4 mt-auto">
             <p className="text-sm text-gray-500 italic">
               6 out of 10 campuses are above 90% capacity. This means RISC is leaving applications on the table — 312 students were waitlisted this year. Adding capacity at the top 6 campuses could add 300-400 more enrolled students per year — approximately PKR 3-4M in additional annual revenue.
             </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 — Seasonality Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>Admissions Seasonality — When Do Students Join?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-2 mb-6">
            {seasonalityData.map((item, i) => {
              let bgClass, textClass;
              if (item.intensity === 'peak') { bgClass = 'bg-[#006B6B]'; textClass = 'text-white' }
              else if (item.intensity === 'high') { bgClass = 'bg-[#00897B]'; textClass = 'text-white' }
              else if (item.intensity === 'medium') { bgClass = 'bg-[#B2DFDB]'; textClass = 'text-[#006B6B]' }
              else { bgClass = 'bg-[#E0F2F1]'; textClass = 'text-[#006B6B]' }
              
              return (
                <div key={i} className={`flex flex-col items-center justify-center py-4 rounded-xl shadow-sm border border-black/5 transition-all hover:-translate-y-1 hover:shadow-md ${bgClass} ${textClass}`}>
                  <span className="font-bold text-sm tracking-wide">{item.month}</span>
                  <span className="text-xs font-medium opacity-90 mt-1">{item.admissions}</span>
                </div>
              )
            })}
          </div>
          
          <div className="bg-white border text-center border-teal-200 border-l-4 border-l-teal-600 rounded-lg p-4 mb-6 shadow-sm">
            <p className="text-sm font-medium text-teal-800">
              📅 Operational Planning Recommendation: Deploy maximum admissions staff and marketing budget from June 1 to September 30. This 4-month window accounts for 57% of all annual admissions. Every operational delay or marketing gap during this period has direct revenue consequences.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 7 — Intelligence Panel */}
      <div className="bg-[#E6F4F4] rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-[#006B6B] overflow-hidden">
        <div className="px-6 py-4 flex justify-between items-center border-b border-[#006B6B]/10 bg-white/50">
          <h3 className="text-lg font-bold text-[#006B6B]">🎯 Admissions Intelligence — Key Recommendations</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-emerald-500 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Strong growth momentum — 14% YoY growth, every month above prior years. The RISC brand is strong in core markets. Maintain marketing investment — it is clearly working.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-red-500 flex gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Wellington and Askari are at capacity — 312 students waitlisted this year. Without expansion, this demand will go to competitors. Expansion planning for these 2 campuses should begin immediately.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-amber-500 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Hamilton and Monash are only 54-62% utilized — significant unused capacity in Southern Region and Abbottabad. Local reputation and academic quality improvements would capture this latent demand.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-blue-500 flex gap-3">
              <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                July-September is your critical season — 44% of admissions happen in 90 days. An AI-powered admissions tracking system (part of EduOS Phase 2) would give real-time visibility into conversion at every stage during peak season.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
