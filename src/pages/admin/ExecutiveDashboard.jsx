import React, { useState } from "react"
import { Link } from "react-router-dom"
import { StatCard } from "@/src/components/shared/StatCard"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import { FeatureTooltip } from "@/src/components/shared/FeatureTooltip"
import { 
  Building, Users, GraduationCap, TrendingUp, BookOpen, Clock, AlertTriangle, Activity, DollarSign, BrainCircuit,
  ChevronDown, ChevronUp, X, CheckCircle2, AlertCircle
} from "lucide-react"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell,
  PieChart, Pie,
  LineChart, Line, ReferenceLine, Legend
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
  { month: "Jan", thisYear: 340, lastYear: 298 },
  { month: "Feb", thisYear: 290, lastYear: 261 },
  { month: "Mar", thisYear: 410, lastYear: 374 },
  { month: "Apr", thisYear: 380, lastYear: 349 },
  { month: "May", thisYear: 520, lastYear: 468 },
  { month: "Jun", thisYear: 610, lastYear: 541 },
  { month: "Jul", thisYear: 890, lastYear: 798 },
  { month: "Aug", thisYear: 1240, lastYear: 1087 },
  { month: "Sep", thisYear: 980, lastYear: 901 },
  { month: "Oct", thisYear: 420, lastYear: 389 },
  { month: "Nov", thisYear: 310, lastYear: 287 },
  { month: "Dec", thisYear: 280, lastYear: 261 },
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

// NEW RENDER DATA FOR PANELS
const campusDetailData = {
  "Wellington Campus": {
    region: "Northern Region — Islamabad",
    score: 84,
    lastYear: 80,
    status: "high-performer",
    breakdown: [
      { factor: "Academic Performance", weight: "30%", score: "26/30", value: 87 },
      { factor: "Attendance Rate", weight: "20%", score: "18/20", value: 91 },
      { factor: "Fee Collection", weight: "20%", score: "17/20", value: 96 },
      { factor: "At-Risk Ratio", weight: "15%", score: "13/15", value: 88 },
      { factor: "Admission Growth", weight: "15%", score: "10/15", value: 67 },
    ],
    strength: "Highest academic performance in the network",
    concern: "Admission growth below network average — review outreach strategy",
    students: 1240,
    teachers: 68,
  },
  "Askari Campus": {
    region: "Central Region — Lahore",
    score: 81,
    lastYear: 79,
    status: "on-track",
    breakdown: [
      { factor: "Academic Performance", weight: "30%", score: "24/30", value: 82 },
      { factor: "Attendance Rate", weight: "20%", score: "17/20", value: 88 },
      { factor: "Fee Collection", weight: "20%", score: "17/20", value: 94 },
      { factor: "At-Risk Ratio", weight: "15%", score: "12/15", value: 84 },
      { factor: "Admission Growth", weight: "15%", score: "11/15", value: 72 },
    ],
    strength: "Consistent improvement — up 2 points from last year",
    concern: "Attendance slightly below Northern Region campuses",
    students: 980,
    teachers: 54,
  },
  "Claremont Campus": {
    region: "Northern Region — Rawalpindi",
    score: 79,
    lastYear: 81,
    status: "on-track",
    breakdown: [
      { factor: "Academic Performance", weight: "30%", score: "23/30", value: 79 },
      { factor: "Attendance Rate", weight: "20%", score: "16/20", value: 86 },
      { factor: "Fee Collection", weight: "20%", score: "16/20", value: 91 },
      { factor: "At-Risk Ratio", weight: "15%", score: "13/15", value: 85 },
      { factor: "Admission Growth", weight: "15%", score: "11/15", value: 74 },
    ],
    strength: "Strong fee collection and low at-risk ratio",
    concern: "Score dropped 2 points vs last year — monitor closely",
    students: 870,
    teachers: 48,
  },
  "Richmond Campus": {
    region: "Northern Region — Islamabad",
    score: 77,
    lastYear: 74,
    status: "on-track",
    breakdown: [
      { factor: "Academic Performance", weight: "30%", score: "22/30", value: 76 },
      { factor: "Attendance Rate", weight: "20%", score: "16/20", value: 87 },
      { factor: "Fee Collection", weight: "20%", score: "16/20", value: 89 },
      { factor: "At-Risk Ratio", weight: "15%", score: "12/15", value: 82 },
      { factor: "Admission Growth", weight: "15%", score: "11/15", value: 71 },
    ],
    strength: "Strong upward trend — up 3 points from last year",
    concern: "Academic score still below network average",
    students: 760,
    teachers: 42,
  },
  "Kingswood Campus": {
    region: "Southern Region — Karachi",
    score: 74,
    lastYear: 76,
    status: "needs-attention",
    breakdown: [
      { factor: "Academic Performance", weight: "30%", score: "21/30", value: 73 },
      { factor: "Attendance Rate", weight: "20%", score: "15/20", value: 83 },
      { factor: "Fee Collection", weight: "20%", score: "16/20", value: 88 },
      { factor: "At-Risk Ratio", weight: "15%", score: "11/15", value: 76 },
      { factor: "Admission Growth", weight: "15%", score: "11/15", value: 70 },
    ],
    strength: "Fee collection holding steady",
    concern: "Score down 2 points from last year — academic intervention needed",
    students: 690,
    teachers: 38,
  },
  "Hamilton Campus": {
    region: "Southern Region — Karachi",
    score: 68,
    lastYear: 72,
    status: "at-risk",
    breakdown: [
      { factor: "Academic Performance", weight: "30%", score: "17/30", value: 58 },
      { factor: "Attendance Rate", weight: "20%", score: "14/20", value: 74 },
      { factor: "Fee Collection", weight: "20%", score: "14/20", value: 82 },
      { factor: "At-Risk Ratio", weight: "15%", score: "10/15", value: 68 },
      { factor: "Admission Growth", weight: "15%", score: "13/15", value: 88 },
    ],
    strength: "Admission growth is strong — demand is there",
    concern: "Academic performance critically low — down 4 points from last year. Immediate action required.",
    students: 580,
    teachers: 32,
  },
}

const subjectDetailData = {
  "Math": { networkAvg: 71, lastYear: 74, campusScores: [{ campus: "Wellington", score: 81 }, { campus: "Askari", score: 76 }, { campus: "Claremont", score: 72 }, { campus: "Richmond", score: 68 }, { campus: "Kingswood", score: 65 }, { campus: "Hamilton", score: 58 }], concern: "Declining trend — down 3% vs last year. Board exam risk in 6 campuses.", action: "Deploy remedial Math sessions across all campuses below 70%" },
  "Physics": { networkAvg: 74, lastYear: 72, campusScores: [{ campus: "Wellington", score: 84 }, { campus: "Askari", score: 79 }, { campus: "Claremont", score: 74 }, { campus: "Richmond", score: 71 }, { campus: "Kingswood", score: 68 }, { campus: "Hamilton", score: 62 }], concern: "Improving trend — up 2% vs last year", action: "Continue current teaching approach" },
  "English": { networkAvg: 82, lastYear: 80, campusScores: [{ campus: "Wellington", score: 91 }, { campus: "Askari", score: 86 }, { campus: "Claremont", score: 83 }, { campus: "Richmond", score: 80 }, { campus: "Kingswood", score: 78 }, { campus: "Hamilton", score: 72 }], concern: "Network's strongest subject — up 2% vs last year", action: "Use Wellington as model campus for English teaching practices" },
  "Biology": { networkAvg: 78, lastYear: 77, campusScores: [{ campus: "Wellington", score: 86 }, { campus: "Askari", score: 81 }, { campus: "Claremont", score: 79 }, { campus: "Richmond", score: 76 }, { campus: "Kingswood", score: 74 }, { campus: "Hamilton", score: 70 }], concern: "Stable performance — slight improvement", action: "Maintain current trajectory" },
  "Chem": { networkAvg: 69, lastYear: 73, campusScores: [{ campus: "Wellington", score: 78 }, { campus: "Askari", score: 73 }, { campus: "Claremont", score: 70 }, { campus: "Richmond", score: 66 }, { campus: "Kingswood", score: 62 }, { campus: "Hamilton", score: 54 }], concern: "Critical — down 4% vs last year. Board exam in 11 weeks.", action: "Immediate escalation required. Deploy specialist teachers to all campuses below 65%" },
  "CS": { networkAvg: 85, lastYear: 81, campusScores: [{ campus: "Wellington", score: 93 }, { campus: "Askari", score: 88 }, { campus: "Claremont", score: 85 }, { campus: "Richmond", score: 83 }, { campus: "Kingswood", score: 81 }, { campus: "Hamilton", score: 78 }], concern: "Strongest growth subject — up 4% vs last year", action: "CS is a competitive advantage — highlight in admissions marketing" },
}


export function ExecutiveDashboard() {
  const [isReportGenerating, setIsReportGenerating] = useState(false)
  
  // New States
  const [healthScoreExpanded, setHealthScoreExpanded] = useState(false)
  const [selectedPanel, setSelectedPanel] = useState({ type: null, key: null })
  const [expandedRisk, setExpandedRisk] = useState(null)

  const handleDownloadReport = () => {
    setIsReportGenerating(true)
    setTimeout(() => {
      setIsReportGenerating(false)
    }, 3000)
  }

  const handleCampusClick = (data) => {
    setSelectedPanel({ type: 'campus', key: data.name })
  }

  const handleSubjectClick = (data) => {
    setSelectedPanel({ type: 'subject', key: data.name })
  }

  const closePanel = () => {
    setSelectedPanel({ type: null, key: null })
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

      {/* PART 1 — Today's Priorities Planner */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#006B6B] p-5">
        <h2 className="text-lg font-bold text-[#006B6B] mb-4">📋 Today's Priorities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border-l-4 border-l-red-500 rounded border border-gray-100 p-3 shadow-sm flex gap-3 items-start">
            <span className="relative flex h-3 w-3 mt-1 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <p className="text-sm text-gray-700 leading-snug font-medium">Hamilton Campus — Academic score 16% below network average. Immediate intervention required.</p>
          </div>
          <div className="bg-white border-l-4 border-l-amber-500 rounded border border-gray-100 p-3 shadow-sm flex gap-3 items-start">
            <div className="h-3 w-3 mt-1 rounded-full bg-amber-500 shrink-0 shadow-sm" />
            <p className="text-sm text-gray-700 leading-snug font-medium">Chemistry Board Exams in 11 weeks — 6 campuses below pass threshold. Escalation recommended.</p>
          </div>
          <div className="bg-white border-l-4 border-l-green-500 rounded border border-gray-100 p-3 shadow-sm flex gap-3 items-start">
            <div className="h-3 w-3 mt-1 rounded-full bg-green-500 shrink-0 shadow-sm" />
            <p className="text-sm text-gray-700 leading-snug font-medium">August admissions exceeded monthly target by 148%. Capacity planning needed for Q1.</p>
          </div>
        </div>
      </div>

      {/* Row 1 — Executive Snapshot with YoY metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="Total Campuses" value="20" description="↑ +1 campus vs last year (was 19)" icon={Building} />
        <StatCard title="Total Students" value="20,000" description="↑ +8% vs last year (was 18,500)" icon={Users} />
        <StatCard title="Total Teachers" value="890" description="↑ +5% vs last year (was 847)" icon={GraduationCap} />
        <StatCard title="Admission Growth" value="+14% YoY" description={
          <span className="flex flex-col gap-1.5 mt-1">
            <span>↑ improved from +9% last year</span>
            <Link to="/admin/reports/growth" className="text-xs text-[#006B6B] font-semibold hover:underline">View Full Growth Report →</Link>
          </span>
        } icon={TrendingUp} className="border-l-4 border-teal-600 bg-teal-50" />
      </div>
      
      {/* Row 2 — Institutional Health with YoY metrics & Expandable card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 relative">
        <StatCard title="Average Academic Score" value="76%" description="↓ -2% vs last year (was 78%) — watch trend" icon={BookOpen} />
        <StatCard title="Attendance Rate" value="88%" description="↓ -1% vs last year (was 89%)" icon={Clock} />
        <div className="relative">
          <StatCard title="At-Risk Students" value="342" description={<span className="text-red-500 font-medium tracking-tight">↑ +12% vs last year (was 305) — increasing</span>} icon={AlertTriangle} className="border-l-4 border-red-500 bg-red-50 h-full" />
        </div>
        
        {/* Custom StatCard for Institutional Health */}
        <div className="relative col-span-1 border-l-4 border-green-500 bg-green-50 rounded-lg shadow-sm">
          <div className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold">Institutional Health Score</h3>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-[2.5rem] font-bold text-[#006B6B] leading-none mb-1">81/100</div>
            <p className="text-xs text-muted-foreground block mb-2">↑ +3 points vs last year (was 78/100)</p>
            <button 
              onClick={() => setHealthScoreExpanded(!healthScoreExpanded)}
              className="text-xs text-[#006B6B] flex items-center gap-1 font-medium hover:underline"
            >
              <span className="shrink-0 leading-none">ⓘ How is this calculated?</span>
              {healthScoreExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
          </div>
          {/* Expanded panel for Health Score */}
          {healthScoreExpanded && (
            <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-green-500/20 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#E6F4F4] text-[#006B6B]">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Factor</th>
                    <th className="px-3 py-2 font-semibold text-center">Weight</th>
                    <th className="px-3 py-2 font-semibold text-right">Score</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-50">
                    <td className="px-3 py-2">Academic Performance</td><td className="px-3 py-2 text-center">30%</td><td className="px-3 py-2 text-right">23/30</td>
                  </tr>
                  <tr className="border-b border-gray-50 bg-gray-50/50">
                    <td className="px-3 py-2">Attendance Rate</td><td className="px-3 py-2 text-center">20%</td><td className="px-3 py-2 text-right">18/20</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="px-3 py-2">Fee Collection</td><td className="px-3 py-2 text-center">20%</td><td className="px-3 py-2 text-right">19/20</td>
                  </tr>
                  <tr className="border-b border-gray-50 bg-gray-50/50">
                    <td className="px-3 py-2">At-Risk Student Ratio</td><td className="px-3 py-2 text-center">15%</td><td className="px-3 py-2 text-right">12/15</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">Admission Growth</td><td className="px-3 py-2 text-center">15%</td><td className="px-3 py-2 text-right">9/15</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-green-50 font-bold text-gray-900">
                    <td className="px-3 py-2">Total</td><td className="px-3 py-2 text-center">100%</td><td className="px-3 py-2 text-right text-green-600">81/100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <StatCard title="Fee Collection Rate" value="94%" description={
          <span className="flex flex-col gap-1.5 mt-1">
            <span>↑ +2% vs last year (was 92%)</span>
            <Link to="/admin/reports/financial" className="text-xs text-[#006B6B] font-semibold hover:underline">View Full Financial Report →</Link>
          </span>
        } icon={DollarSign} className="border-l-4 border-emerald-500 bg-emerald-50" />
        <StatCard title="AI Assessments This Month" value="1,247" description="New metric — first full month of data" icon={BrainCircuit} className="border-l-4 border-teal-500 bg-teal-50" />
      </div>

      {/* Row 2 — Academic Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Component 1 — Campus Performance Ranking */}
        <FeatureTooltip
          title="Multi-Campus Benchmarking"
          description="The full system ranks all 47 campuses across 15 performance dimensions — academic scores, attendance, fee collection, teacher performance, and student satisfaction — updated weekly."
          benefits={["47 campuses ranked on 15 dimensions", "Year-over-year trend comparison", "Exportable for board presentations"]}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900">Campus Performance Ranking</h3>
            <p className="text-xs text-gray-400 italic mb-4">Click any bar to see campus details</p>
            <div className="flex-1 min-h-[16rem]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={campusPerformanceData} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                  <RechartsTooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]} onClick={handleCampusClick} className="cursor-pointer hover:opacity-80 transition-opacity">
                    {campusPerformanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-gray-500 italic mt-3 pt-3 border-t border-gray-100 flex justify-between items-center gap-4">
              <span>Wellington leads the network. Hamilton is 16% below average and needs immediate attention.</span>
              <Link to="/admin/reports/academic" className="text-xs text-[#006B6B] font-semibold hover:underline not-italic whitespace-nowrap">View Full Academic Report →</Link>
            </div>
          </div>
        </FeatureTooltip>

        {/* Component 2 — Subject Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">Subject Performance</h3>
          <p className="text-xs text-gray-400 italic mb-4">Click any bar to see subject details</p>
          <div className="flex-1 min-h-[16rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectPerformanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={0} textAnchor="middle" height={30} />
                <YAxis domain={[0, 100]} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="score" radius={[4, 4, 0, 0]} onClick={handleSubjectClick} className="cursor-pointer hover:opacity-80 transition-opacity">
                  {subjectPerformanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-gray-500 italic mt-3 pt-3 border-t border-gray-100">
            English and CS are your strongest subjects. Chemistry is your biggest exam risk right now.
          </div>
        </div>

        {/* Component 3 — At-Risk Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
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
                  onClick={(data) => setExpandedRisk(expandedRisk === data.name ? null : data.name)}
                  className="cursor-pointer hover:opacity-80 transition-opacity outline-none"
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
          <div className="mt-2 text-sm relative">
            {atRiskData.map((item, idx) => (
              <div key={idx}>
                <div 
                  className="flex items-center justify-between mb-1 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors"
                  onClick={() => setExpandedRisk(expandedRisk === item.name ? null : item.name)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-600 font-medium">{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}</span>
                </div>
                {/* Expandable info for At-Risk donut */}
                {expandedRisk === item.name && (
                  <div className="bg-gray-50 border border-gray-100 rounded p-3 mb-2 text-xs">
                    {item.name === "Academic Risk" && (
                      <div className="space-y-1">
                        <p><strong>Top 3 campuses:</strong> Hamilton 42 students, Kingswood 38 students, Rawal 29 students</p>
                        <p><strong>Most affected subjects:</strong> Math, Chemistry</p>
                        <p className="text-teal-700 mt-2 font-medium">Action: Trigger parent notifications and schedule teacher-student sessions</p>
                      </div>
                    )}
                    {item.name === "Attendance Risk" && (
                      <div className="space-y-1">
                        <p><strong>Pattern:</strong> Monday absences up 18% across 3 campuses</p>
                        <p><strong>Most affected:</strong> Bahria, Claremont, Monash</p>
                        <p className="text-amber-700 mt-2 font-medium">Action: Review transport and morning scheduling</p>
                      </div>
                    )}
                    {item.name === "Engagement Drop" && (
                      <div className="space-y-1">
                        <p><strong>Pattern:</strong> Highest among Grade 8-9 students</p>
                        <p><strong>Trigger:</strong> Assessment completion rate dropped below 60%</p>
                        <p className="text-yellow-700 mt-2 font-medium">Action: Deploy AI chatbot nudges and teacher follow-up workflow</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 italic mt-auto pt-3 border-t border-gray-100">
            1 in 58 students needs intervention. Academic risk is the largest category.
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
            <span className="text-xs font-medium bg-white px-2 py-1 rounded-full text-[#006B6B] shadow-sm border border-[#006B6B]/20 hidden sm:inline-block">
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
              <div className="text-[11px] text-gray-400 text-center mt-1 font-medium">↓ 75.6% conversion</div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700 w-36 text-right shrink-0">Interviews Conducted</div>
                <div className="flex-1 flex justify-center">
                  <div className="h-8 bg-[#006B6B] rounded-sm w-[76%]" style={{ opacity: 0.85 }}></div>
                </div>
                <div className="text-sm font-bold text-gray-900 w-12 shrink-0">2,910</div>
              </div>
              <div className="text-[11px] text-gray-400 text-center mt-1 font-medium">↓ 80.4% conversion</div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-700 w-36 text-right shrink-0">Offers Made</div>
                <div className="flex-1 flex justify-center">
                  <div className="h-8 bg-[#006B6B] rounded-sm w-[61%]" style={{ opacity: 0.70 }}></div>
                </div>
                <div className="text-sm font-bold text-gray-900 w-12 shrink-0">2,341</div>
              </div>
              <div className="text-[11px] text-gray-400 text-center mt-1 font-medium">↓ 89.9% conversion</div>
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
          <div className="text-xs text-gray-500 italic mt-3 pt-3 border-t border-gray-100">
             54.7% of applicants enrolled. Industry benchmark is 50-60% — you are performing well.
          </div>
        </div>

        {/* Component 2 — Monthly Admissions Trend */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Admissions Trend</h3>
          <div className="flex-1 min-h-[16rem]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={admissionsData} margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 1400]} tickCount={8} />
                <RechartsTooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                <ReferenceLine y={500} label={{ position: 'top', value: 'Monthly Target', fontSize: 12, fill: '#6b7280' }} stroke="#9ca3af" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="thisYear" name="This Year" stroke="#006B6B" strokeWidth={3} dot={{ r: 4, fill: "#006B6B" }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="lastYear" name="Last Year" stroke="#9ca3af" strokeWidth={2} strokeDasharray="4 4" dot={false} activeDot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-gray-500 italic mt-3 pt-3 border-t border-gray-100 flex justify-between items-center gap-4">
            <span>August is peak season. This year is tracking 14% ahead of last year's pace.</span>
            <Link to="/admin/reports/admissions" className="text-xs text-[#006B6B] font-semibold hover:underline not-italic whitespace-nowrap">View Full Admissions Report →</Link>
          </div>
        </div>

        {/* Component 3 — Campus Enrollment by Region */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campus Enrollment by Region</h3>
          <div className="flex-1 min-h-[16rem]">
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
          <div className="text-xs text-gray-500 italic mt-3 pt-3 border-t border-gray-100">
            Northern Region holds 62% of all students. Southern Region has growth potential.
          </div>
        </div>
      </div>

      {/* Row 5 — Risk Monitoring */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
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
        <div className="text-xs text-gray-500 italic mt-auto p-4 border-t border-gray-100">
           4 campuses need attention. Hamilton is the only critical case requiring immediate escalation.
        </div>
      </div>

      {/* OVERLAYS AND SLIDE-IN PANELS */}
      
      {/* Backdrop */}
      {selectedPanel.type && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={closePanel}
        ></div>
      )}

      {/* Slide-in Panel directly mapped to selectedPanel state */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto transition-transform duration-300 transform ${selectedPanel.type ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {selectedPanel.type === 'campus' && campusDetailData[selectedPanel.key] && (
          <div className="p-6">
            <button onClick={closePanel} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5 text-gray-500" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">{selectedPanel.key}</h2>
            <p className="text-sm text-gray-500 mb-6">{campusDetailData[selectedPanel.key].region}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-full border-4 border-[#006B6B] flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-[#006B6B] leading-none">{campusDetailData[selectedPanel.key].score}</span>
                <span className="text-[10px] text-gray-500">/ 100</span>
              </div>
              <div>
                <RiskBadge level={
                  campusDetailData[selectedPanel.key].status === 'high-performer' ? 'on-track' : 
                  campusDetailData[selectedPanel.key].status === 'at-risk' ? 'at-risk' : 'needs-attention'
                } />
                <p className={`text-sm mt-2 font-medium ${campusDetailData[selectedPanel.key].score >= campusDetailData[selectedPanel.key].lastYear ? 'text-green-600' : 'text-red-500'}`}>
                  Last year: {campusDetailData[selectedPanel.key].lastYear} → This year: {campusDetailData[selectedPanel.key].score} 
                  {campusDetailData[selectedPanel.key].score >= campusDetailData[selectedPanel.key].lastYear 
                    ? ` ↑ +${campusDetailData[selectedPanel.key].score - campusDetailData[selectedPanel.key].lastYear} points` 
                    : ` ↓ ${campusDetailData[selectedPanel.key].score - campusDetailData[selectedPanel.key].lastYear} points`}
                </p>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 border-b pb-2 mb-4">Score Breakdown</h3>
            <table className="w-full text-xs text-left mb-6">
              <thead>
                <tr className="text-gray-400 border-b">
                  <th className="pb-2 font-medium">Factor</th>
                  <th className="pb-2 font-medium">Weight</th>
                  <th className="pb-2 font-medium text-right">Score</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {campusDetailData[selectedPanel.key].breakdown.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-50">
                    <td className="py-2.5">{row.factor}</td>
                    <td className="py-2.5 text-gray-400">{row.weight}</td>
                    <td className="py-2.5 text-right font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden inline-[flex]">
                          <div className="h-full bg-[#006B6B]" style={{ width: `${row.value}%` }}></div>
                        </div>
                        {row.score}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="space-y-3 mb-6">
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-emerald-900 mb-1">Top Strength</h4>
                  <p className="text-xs text-emerald-800 leading-snug">{campusDetailData[selectedPanel.key].strength}</p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-red-900 mb-1">Main Concern</h4>
                  <p className="text-xs text-red-800 leading-snug">{campusDetailData[selectedPanel.key].concern}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 border-t pt-4">
              <div className="flex-1 bg-gray-50 rounded-lg p-3 text-center border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Students</p>
                <p className="text-lg font-bold text-gray-900">{campusDetailData[selectedPanel.key].students.toLocaleString()}</p>
              </div>
              <div className="flex-1 bg-gray-50 rounded-lg p-3 text-center border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Teachers</p>
                <p className="text-lg font-bold text-gray-900">{campusDetailData[selectedPanel.key].teachers.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}

        {selectedPanel.type === 'subject' && subjectDetailData[selectedPanel.key] && (
          <div className="p-6">
            <button onClick={closePanel} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5 text-gray-500" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">{selectedPanel.key}</h2>
            <p className="text-sm text-gray-500 mb-6">Subject Performance Deep Dive</p>
            
            <div className="mb-6 flex items-center justify-between border-b pb-6">
               <div>
                  <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Network Average</p>
                  <p className="text-4xl font-black text-[#006B6B]">{subjectDetailData[selectedPanel.key].networkAvg}%</p>
               </div>
               <div className="text-right">
                <p className={`text-sm font-bold ${subjectDetailData[selectedPanel.key].networkAvg >= subjectDetailData[selectedPanel.key].lastYear ? 'text-green-600' : 'text-red-500'}`}>
                  {subjectDetailData[selectedPanel.key].networkAvg >= subjectDetailData[selectedPanel.key].lastYear 
                    ? `↑ +${subjectDetailData[selectedPanel.key].networkAvg - subjectDetailData[selectedPanel.key].lastYear}%` 
                    : `↓ ${subjectDetailData[selectedPanel.key].networkAvg - subjectDetailData[selectedPanel.key].lastYear}%`}
                </p>
                 <p className="text-xs text-gray-500 mt-1">vs Last Year ({subjectDetailData[selectedPanel.key].lastYear}%)</p>
               </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-4">Performance by Campus</h3>
            <div className="h-40 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectDetailData[selectedPanel.key].campusScores} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="campus" tick={{ fontSize: 10 }} interval={0} angle={-45} textAnchor="end" height={50} />
                  <YAxis domain={[0, 100]} />
                  <RechartsTooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="score" radius={[2, 2, 0, 0]}>
                    {subjectDetailData[selectedPanel.key].campusScores.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.score < 70 ? '#ef4444' : '#006B6B'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-amber-900 mb-1">Current Status</h4>
                  <p className="text-xs text-amber-800 leading-snug">{subjectDetailData[selectedPanel.key].concern}</p>
                </div>
              </div>
              <div className="bg-[#E6F4F4] border border-[#006B6B]/20 rounded-lg p-4 flex gap-3">
                <BrainCircuit className="h-5 w-5 text-[#006B6B] shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[#006B6B] mb-1">Recommended Action</h4>
                  <p className="text-xs text-[#006B6B]/80 leading-snug">{subjectDetailData[selectedPanel.key].action}</p>
                </div>
              </div>
            </div>
            
          </div>
        )}
      </div>

    </div>
  )
}
