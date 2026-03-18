import React, { useState } from "react"
import { StatCard } from "@/src/components/shared/StatCard"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import { FeatureTooltip } from "@/src/components/shared/FeatureTooltip"
import { 
  Building, Users, GraduationCap, TrendingUp, BookOpen, Clock, AlertTriangle, Activity, DollarSign, BrainCircuit
} from "lucide-react"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell,
  PieChart, Pie,
  LineChart, Line, ReferenceLine
} from "recharts"

const campusPerformanceData = [
  { name: "Wellington Campus", score: 84, fill: "#006B6B" },
  { name: "Askari Campus", score: 81, fill: "#006B6B" },
  { name: "Claremont Campus", score: 79, fill: "#006B6B" },
  { name: "Richmond Campus", score: 77, fill: "#006B6B" },
  { name: "Kingswood Campus", score: 74, fill: "#006B6B" },
  { name: "Hamilton Campus", score: 68, fill: "#ef4444" },
]

const subjectPerformanceData = [
  { name: "Math", score: 71, fill: "#f59e0b" },
  { name: "Physics", score: 74, fill: "#006B6B" },
  { name: "English", score: 82, fill: "#006B6B" },
  { name: "Biology", score: 78, fill: "#006B6B" },
  { name: "Chem", score: 69, fill: "#f59e0b" },
  { name: "CS", score: 85, fill: "#006B6B" },
]

const atRiskData = [
  { name: "Academic Risk", value: 189, color: "#ef4444" },
  { name: "Attendance Risk", value: 98, color: "#f59e0b" },
  { name: "Engagement Drop", value: 55, color: "#eab308" },
]

const admissionsData = [
  { month: "Jan", value: 340 },
  { month: "Feb", value: 290 },
  { month: "Mar", value: 410 },
  { month: "Apr", value: 380 },
  { month: "May", value: 520 },
  { month: "Jun", value: 610 },
  { month: "Jul", value: 890 },
  { month: "Aug", value: 1240 },
  { month: "Sep", value: 980 },
  { month: "Oct", value: 420 },
  { month: "Nov", value: 310 },
  { month: "Dec", value: 280 },
]

const regionEnrollmentData = [
  { region: "Northern Region", students: 12400 },
  { region: "Central Region", students: 4200 },
  { region: "Southern Region", students: 2800 },
  { region: "AJK & KPK", students: 1000 },
]

const riskTableData = [
  { campus: "Hamilton Campus", academic: "68%", attendance: "79%", fee: "82%", risk: "at-risk" },
  { campus: "Sevenoaks Campus", academic: "74%", attendance: "83%", fee: "71%", risk: "needs-attention" },
  { campus: "Monash Campus", academic: "71%", attendance: "81%", fee: "68%", risk: "needs-attention" },
  { campus: "Rawal Campus", academic: "76%", attendance: "77%", fee: "74%", risk: "needs-attention" },
]

const aiInsights = [
  {
    icon: "⚠️",
    title: `"Hamilton Campus Math performance down 12% this month"`,
    detail: "Recommend targeted intervention for Grade 9 and 10 cohorts",
    colorClass: "border-l-red-500",
  },
  {
    icon: "📉",
    title: `"Grade 8 attendance dropped 5% across 3 campuses"`,
    detail: "Bahria, Model Town, Gulberg showing consistent Monday absences",
    colorClass: "border-l-amber-500",
  },
  {
    icon: "🏆",
    title: `"Wellington Campus has highest academic score this cycle"`,
    detail: "84% average — 23% above network average",
    colorClass: "border-l-emerald-500",
  },
  {
    icon: "📚",
    title: `"Chemistry pass rate below threshold in 6 campuses"`,
    detail: "Board exam in 11 weeks, escalation recommended",
    colorClass: "border-l-amber-500",
  },
]

export function ExecutiveDashboard() {
  const [isReportGenerating, setIsReportGenerating] = useState(false)

  const handleDownloadReport = () => {
    setIsReportGenerating(true)
    setTimeout(() => {
      setIsReportGenerating(false)
    }, 3000)
  }

  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {isReportGenerating && (
        <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-3 animate-in slide-in-from-top-2">
          <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
          <p className="text-sm">Generating report... This feature is available in the full platform.</p>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Executive Intelligence Dashboard</h1>
          <p className="text-gray-500">Roots International Schools & Colleges — Network Overview</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500 bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-200">
            Last updated: Today at 9:14 AM
          </div>
          <button 
            onClick={handleDownloadReport}
            className="flex items-center gap-2 bg-[#006B6B] hover:bg-[#005a5a] text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors"
          >
            ⬇ Download Board Report
          </button>
        </div>
      </div>

      {/* Row 1 — Executive Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="Total Campuses" value="20" description="+ 1 upcoming in Gujranwala" icon={Building} />
        <StatCard title="Total Students" value="20,000" icon={Users} />
        <StatCard title="Total Teachers" value="890" icon={GraduationCap} />
        <StatCard title="Admission Growth" value="+14% YoY" icon={TrendingUp} className="border-l-4 border-teal-600 bg-teal-50" />
      </div>
      
      {/* Row 2 — Institutional Health */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatCard title="Average Academic Score" value="76%" icon={BookOpen} />
        <StatCard title="Attendance Rate" value="88%" icon={Clock} />
        <StatCard title="At-Risk Students" value="342" icon={AlertTriangle} className="border-l-4 border-red-500 bg-red-50" />
        <StatCard title="Institutional Health Score" value="81/100" icon={Activity} className="border-l-4 border-green-500 bg-green-50" />
        <StatCard title="Fee Collection Rate" value="94%" icon={DollarSign} className="border-l-4 border-emerald-500 bg-emerald-50" />
        <StatCard title="AI Assessments This Month" value="1,247" icon={BrainCircuit} description="Avg turnaround 4.2 sec" className="border-l-4 border-teal-500 bg-teal-50" />
      </div>

      {/* Row 2 — Academic Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Component 1 — Campus Performance Ranking */}
        <FeatureTooltip
          title="Multi-Campus Benchmarking"
          description="The full system ranks all 47 campuses across 15 performance dimensions — academic scores, attendance, fee collection, teacher performance, and student satisfaction — updated weekly."
          benefits={["47 campuses ranked on 15 dimensions", "Year-over-year trend comparison", "Exportable for board presentations"]}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Campus Performance Ranking</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={campusPerformanceData} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                  <RechartsTooltip />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                    {campusPerformanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FeatureTooltip>

        {/* Component 2 — Subject Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectPerformanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={0} textAnchor="middle" height={30} />
                <YAxis domain={[0, 100]} />
                <RechartsTooltip />
                <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                  {subjectPerformanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Component 3 — At-Risk Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">At-Risk Breakdown</h3>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={atRiskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {atRiskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-2">
              <span className="text-2xl font-bold text-gray-900">
                {atRiskData.reduce((acc, curr) => acc + curr.value, 0)}
              </span>
              <span className="text-xs text-gray-500">Total Risk</span>
            </div>
          </div>
          <div className="mt-2 text-sm">
            {atRiskData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3 — AI Insights Panel */}
      <FeatureTooltip
        title="EduOS Intelligence Engine"
        description="In the full platform the AI Insights panel generates fresh analysis every morning using data from all 47 campuses — flagging anomalies, predicting risks, and recommending actions before leadership even opens their dashboard."
        benefits={["Daily AI-generated institutional briefing", "Anomaly detection across all campuses", "Recommended actions with one-click escalation"]}
      >
        <div className="bg-[#E6F4F4] rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-[#006B6B] overflow-hidden">
          <div className="px-6 py-4 flex justify-between items-center border-b border-[#006B6B]/10">
            <h3 className="text-lg font-bold text-gray-900">🤖 AI Insights — Generated Today</h3>
            <span className="text-xs font-medium bg-white px-2 py-1 rounded-full text-[#006B6B] shadow-sm border border-[#006B6B]/20">
              Powered by EduOS Intelligence
            </span>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${insight.colorClass}`}>
                  <div className="flex items-start gap-3">
                    <div className="text-xl shrink-0">{insight.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{insight.title}</h4>
                      <p className="text-xs text-gray-600">{insight.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FeatureTooltip>

      {/* Row 4 — Admissions & Enrollment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Component 1 — Admission Funnel */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Admission Funnel</h3>
            <p className="text-sm text-gray-500 mb-6">Current Academic Session</p>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700 w-36 text-right shrink-0">Applications Received</div>
                <div className="flex-1 flex justify-center">
                  <div className="h-8 bg-[#006B6B] rounded-sm w-full" style={{ opacity: 1 }}></div>
                </div>
                <div className="text-sm font-bold text-gray-900 w-12 shrink-0">3,847</div>
              </div>
              <div className="text-[11px] text-gray-400 text-center mt-1">↓ 75.6% conversion</div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700 w-36 text-right shrink-0">Interviews Conducted</div>
                <div className="flex-1 flex justify-center">
                  <div className="h-8 bg-[#006B6B] rounded-sm w-[76%]" style={{ opacity: 0.85 }}></div>
                </div>
                <div className="text-sm font-bold text-gray-900 w-12 shrink-0">2,910</div>
              </div>
              <div className="text-[11px] text-gray-400 text-center mt-1">↓ 80.4% conversion</div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700 w-36 text-right shrink-0">Offers Made</div>
                <div className="flex-1 flex justify-center">
                  <div className="h-8 bg-[#006B6B] rounded-sm w-[61%]" style={{ opacity: 0.70 }}></div>
                </div>
                <div className="text-sm font-bold text-gray-900 w-12 shrink-0">2,341</div>
              </div>
              <div className="text-[11px] text-gray-400 text-center mt-1">↓ 89.9% conversion</div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700 w-36 text-right shrink-0">Enrolled</div>
                <div className="flex-1 flex justify-center">
                  <div className="h-8 bg-[#006B6B] rounded-sm w-[55%]" style={{ opacity: 0.55 }}></div>
                </div>
                <div className="text-sm font-bold text-gray-900 w-12 shrink-0">2,104</div>
              </div>
            </div>
          </div>
        </div>

        {/* Component 2 — Monthly Admissions Trend */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Admissions Trend</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={admissionsData} margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 1400]} tickCount={8} />
                <RechartsTooltip />
                <ReferenceLine y={500} label={{ position: 'top', value: 'Monthly Target', fontSize: 12, fill: '#6b7280' }} stroke="#9ca3af" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="value" stroke="#006B6B" strokeWidth={3} dot={{ r: 4, fill: "#006B6B" }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Component 2 — Campus Enrollment by Region */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campus Enrollment by Region</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionEnrollmentData} layout="vertical" margin={{ top: 0, right: 20, left: 40, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="region" type="category" width={120} tick={{ fontSize: 12 }} />
                <RechartsTooltip />
                <Bar dataKey="students" fill="#006B6B" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 5 — Risk Monitoring */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-red-50/50">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Campus Risk Monitor — Requires Attention
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left relative">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 font-medium">Campus</th>
                <th className="px-6 py-3 font-medium">Academic Score</th>
                <th className="px-6 py-3 font-medium">Attendance</th>
                <th className="px-6 py-3 font-medium">Fee Collection</th>
                <th className="px-6 py-3 font-medium">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {riskTableData.map((row, idx) => (
                <tr key={idx} className="bg-white border-b hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.campus}</td>
                  <td className="px-6 py-4">{row.academic}</td>
                  <td className="px-6 py-4">{row.attendance}</td>
                  <td className="px-6 py-4">{row.fee}</td>
                  <td className="px-6 py-4">
                    <RiskBadge level={row.risk} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
