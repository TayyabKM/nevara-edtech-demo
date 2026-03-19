import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { RiskBadge } from "@/src/components/shared/RiskBadge"
import { 
  ComposedChart, AreaChart, Area, BarChart, Bar, LineChart, Line, Cell, 
  Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from "recharts"
import { 
  ArrowLeft, BookOpen, GraduationCap, Users, BrainCircuit,
  CheckCircle2, AlertTriangle, AlertCircle, Lightbulb, ChevronDown, ChevronUp
} from "lucide-react"

const academicTrendData = [
  { year: "2020-21", score: 71, target: 80, boardPassRate: 82 },
  { year: "2021-22", score: 73, target: 80, boardPassRate: 84 },
  { year: "2022-23", score: 76, target: 80, boardPassRate: 86 },
  { year: "2023-24", score: 78, target: 80, boardPassRate: 86 },
  { year: "2024-25", score: 76, target: 80, boardPassRate: 89 },
]

const subjectVsTargetData = [
  { subject: "Math", score: 71, target: 80 },
  { subject: "Physics", score: 74, target: 80 },
  { subject: "English", score: 82, target: 80 },
  { subject: "Biology", score: 78, target: 80 },
  { subject: "Chemistry", score: 69, target: 80 },
  { subject: "CS", score: 85, target: 80 },
  { subject: "Urdu", score: 77, target: 80 },
  { subject: "Islamiat", score: 81, target: 80 },
]

const subjectTrendData = [
  { year: "2022-23", Math: 74, English: 79, Chemistry: 73, CS: 78 },
  { year: "2023-24", Math: 73, English: 81, Chemistry: 71, CS: 81 },
  { year: "2024-25", Math: 71, English: 82, Chemistry: 69, CS: 85 },
]

const campusRankingData = [
  { rank: 1, campus: "Wellington Campus", region: "Northern", avg: 84, math: 81, english: 91, chemistry: 78, cs: 93, change: +4, status: "on-track" },
  { rank: 2, campus: "Askari Campus", region: "Central", avg: 81, math: 76, english: 86, chemistry: 73, cs: 88, change: +2, status: "on-track" },
  { rank: 3, campus: "Claremont Campus", region: "Northern", avg: 79, math: 72, english: 83, chemistry: 70, cs: 85, change: -2, status: "needs-attention" },
  { rank: 4, campus: "Richmond Campus", region: "Northern", avg: 77, math: 68, english: 80, chemistry: 66, cs: 83, change: +3, status: "on-track" },
  { rank: 5, campus: "Kingswood Campus", region: "Southern", avg: 74, math: 65, english: 78, chemistry: 62, cs: 81, change: -2, status: "needs-attention" },
  { rank: 6, campus: "Hamilton Campus", region: "Southern", avg: 68, math: 58, english: 72, chemistry: 54, cs: 78, change: -4, status: "at-risk" },
  { rank: 7, campus: "Rawal Campus", region: "Northern", avg: 76, math: 70, english: 79, chemistry: 68, cs: 82, change: +1, status: "on-track" },
  { rank: 8, campus: "Monash Campus", region: "Northern", avg: 71, math: 64, english: 75, chemistry: 61, cs: 79, change: -3, status: "needs-attention" },
  { rank: 9, campus: "Sevenoaks Campus", region: "Central", avg: 74, math: 67, english: 77, chemistry: 64, cs: 80, change: -2, status: "needs-attention" },
  { rank: 10, campus: "Liverpool Campus", region: "Northern", avg: 78, math: 73, english: 81, chemistry: 71, cs: 84, change: +2, status: "on-track" },
]

const atRiskTrendData = [
  { month: "Apr", atRisk: 298 },
  { month: "May", atRisk: 312 },
  { month: "Jun", atRisk: 287 },
  { month: "Jul", atRisk: 271 },
  { month: "Aug", atRisk: 265 },
  { month: "Sep", atRisk: 290 },
  { month: "Oct", atRisk: 305 },
  { month: "Nov", atRisk: 318 },
  { month: "Dec", atRisk: 334 },
  { month: "Jan", atRisk: 342 },
  { month: "Feb", atRisk: 338 },
  { month: "Mar", atRisk: 342 },
]

const atRiskBySubjectData = [
  { subject: "Chemistry", students: 89 },
  { subject: "Math", students: 76 },
  { subject: "Physics", students: 54 },
  { subject: "Urdu", students: 48 },
  { subject: "Biology", students: 41 },
  { subject: "English", students: 28 },
  { subject: "CS", students: 12 },
]

const boardExamData = [
  { subject: "Math", oLevel: 82, aLevel: 79, matric: 88 },
  { subject: "Physics", oLevel: 81, aLevel: 77, matric: 86 },
  { subject: "English", oLevel: 91, aLevel: 88, matric: 93 },
  { subject: "Chemistry", oLevel: 74, aLevel: 71, matric: 81 },
  { subject: "Biology", oLevel: 84, aLevel: 80, matric: 89 },
  { subject: "CS", oLevel: 88, aLevel: 85, matric: 91 },
]

const getScoreColorClass = (score) => {
  if (score >= 80) return "bg-green-50 text-green-800"
  if (score >= 70) return "bg-amber-50 text-amber-800"
  return "bg-red-50 text-red-800"
}

export function AcademicReport() {
  const [selectedCampusRow, setSelectedCampusRow] = useState(null)

  const handleRowClick = (campusName) => {
    setSelectedCampusRow(selectedCampusRow === campusName ? null : campusName)
  }

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
            <h1 className="text-3xl font-bold text-gray-900">Academic Performance Report</h1>
            <p className="text-gray-500 mt-1">Roots International Schools & Colleges — Network-Wide Academic Intelligence</p>
          </div>
          <div className="bg-[#006B6B]/10 text-[#006B6B] px-4 py-2 rounded-full text-sm font-semibold border border-[#006B6B]/20">
            Academic Year: 2024–2025
          </div>
        </div>
      </div>

      {/* Section 1 — Academic Headline Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-amber-500 bg-amber-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-amber-900">Network Average Score</h3>
              <BookOpen className="h-4 w-4 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-700 mb-1">76%</div>
            <p className="text-xs text-amber-700/80 leading-snug">
              ↓ -2% vs last year (was 78%) — intervention underway
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-emerald-50/50 border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-emerald-900">Board Exam Pass Rate</h3>
              <GraduationCap className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-700 mb-1">89%</div>
            <p className="text-xs text-emerald-600/80 leading-snug">
              ↑ +3% vs last year (was 86%) — O-Level, A-Level, Matric combined
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-600">Students Above Benchmark</h3>
              <Users className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">14,200</div>
            <p className="text-xs text-gray-500 leading-snug">
              71% of total students performing at or above grade level
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#E6F4F4] border-[#006B6B]/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#006B6B]">AI Assessments Completed</h3>
              <BrainCircuit className="h-4 w-4 text-[#006B6B]" />
            </div>
            <div className="text-3xl font-bold text-[#006B6B] mb-1">1,247</div>
            <p className="text-xs text-[#006B6B]/80 leading-snug">
              Avg marking time: 4.2 seconds — replacing hours of manual work
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Section 2 — Academic Score Trend (5 years) */}
      <Card>
        <CardHeader>
          <CardTitle>Network Academic Score — 5 Year Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer>
              <ComposedChart data={academicTrendData} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" name="Average Score" fill="#006B6B" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="target" name="Target: 80%" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                <Line type="monotone" dataKey="boardPassRate" name="Board Pass Rate" stroke="#22c55e" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>🟢</span> Board pass rate improved 7% over 5 years — from 82% to 89%
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>🟡</span> Network average dipped 2% this year — first decline since 2021
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>🎯</span> Target of 80% average not yet reached — 4% gap to close
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 mt-2">
             <p className="text-sm text-gray-500 italic">
               The network's board exam pass rate has improved consistently — up 7% over 5 years. However, the internal academic average dipped this year for the first time since 2021, driven mainly by Math and Chemistry performance. Immediate focus on these two subjects could recover 2-3 percentage points next year.
             </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Subject Performance Deep Dive */}
      <Card>
        <CardHeader>
          <CardTitle>Subject Performance — Network Average vs Target</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="flex flex-col h-full">
              <h4 className="text-sm font-semibold text-gray-600 mb-4">Current Year Subject Scores vs Target</h4>
              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectVsTargetData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="subject" fontSize={11} interval={0} angle={-30} textAnchor="end" height={40} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={80} stroke="#9ca3af" strokeDasharray="3 3" label={{ position: "top", value: "Network Target", fill: "#6b7280", fontSize: 10 }} />
                    <Bar dataKey="score" name="Average Score" radius={[2, 2, 0, 0]}>
                      {subjectVsTargetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.score >= 80 ? '#22c55e' : entry.score >= 70 ? '#f59e0b' : '#ef4444'} />
                      ))}
                    </Bar>
                    <Bar dataKey="target" name="Target" fill="#e5e7eb" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
                English and CS are above target. Math and Chemistry are the most critical gaps — both below 75%.
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h4 className="text-sm font-semibold text-gray-600 mb-4">Subject Score Trend Over 3 Years</h4>
              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={subjectTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="year" />
                    <YAxis domain={[50, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Math" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="English" stroke="#22c55e" strokeWidth={2} />
                    <Line type="monotone" dataKey="Chemistry" stroke="#f59e0b" strokeWidth={2} />
                    <Line type="monotone" dataKey="CS" stroke="#006B6B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
                Math and Chemistry have declined every year for 3 years. English and CS have improved every year. These are opposite trajectories — one needs intervention, the other needs recognition.
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Campus Academic Ranking (Full Table) */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Campus Academic Rankings — Full Network</CardTitle>
          <CardDescription>Click any row to see campus subject breakdown</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-[#006B6B] uppercase bg-[#E6F4F4]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center w-12">Rank</th>
                  <th className="px-4 py-3 font-semibold">Campus</th>
                  <th className="px-4 py-3 font-semibold">Region</th>
                  <th className="px-4 py-3 font-semibold text-center">Avg Score</th>
                  <th className="px-4 py-3 font-semibold text-center">Math</th>
                  <th className="px-4 py-3 font-semibold text-center">English</th>
                  <th className="px-4 py-3 font-semibold text-center">Chemistry</th>
                  <th className="px-4 py-3 font-semibold text-center">CS</th>
                  <th className="px-4 py-3 font-semibold text-center whitespace-nowrap">vs Last Year</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {campusRankingData.map((row, idx) => (
                  <React.Fragment key={idx}>
                    <tr 
                      className={`border-b cursor-pointer transition-colors ${row.rank === 1 ? 'bg-teal-50/50' : 'bg-white hover:bg-gray-50/50'}`}
                      onClick={() => handleRowClick(row.campus)}
                    >
                      <td className="px-4 py-4 font-bold text-center text-gray-500">{row.rank}</td>
                      <td className="px-4 py-4 font-bold text-gray-900">{row.campus}</td>
                      <td className="px-4 py-4 text-gray-500">{row.region}</td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded font-bold ${getScoreColorClass(row.avg)}`}>{row.avg}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded font-medium ${getScoreColorClass(row.math)}`}>{row.math}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded font-medium ${getScoreColorClass(row.english)}`}>{row.english}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded font-medium ${getScoreColorClass(row.chemistry)}`}>{row.chemistry}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-block px-2 py-1 rounded font-medium ${getScoreColorClass(row.cs)}`}>{row.cs}</span>
                      </td>
                      <td className={`px-4 py-4 text-center font-bold ${row.change >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {row.change >= 0 ? `↑ +${row.change}` : `↓ ${row.change}`}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-between gap-2">
                           <RiskBadge level={row.status} />
                           {selectedCampusRow === row.campus ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expandable Panel */}
                    {selectedCampusRow === row.campus && (
                      <tr className="bg-gray-50/50 border-b">
                        <td colSpan={10} className="p-6">
                          <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                             <div className="flex-1 w-full max-w-md">
                                <h4 className="text-sm font-semibold text-gray-800 mb-4">{row.campus} Subject Breakdown vs Network Avg</h4>
                                <div className="h-48">
                                  <ResponsiveContainer width="100%" height="100%">
                                    <BarChart 
                                      data={[
                                        { subject: "Math", campus: row.math, network: 71 },
                                        { subject: "English", campus: row.english, network: 82 },
                                        { subject: "Chemistry", campus: row.chemistry, network: 69 },
                                        { subject: "CS", campus: row.cs, network: 85 }
                                      ]}
                                      margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                      <XAxis dataKey="subject" fontSize={11} />
                                      <YAxis domain={[0, 100]} />
                                      <Tooltip />
                                      <Legend />
                                      <Bar dataKey="campus" name={`${row.campus}`} fill="#006B6B" radius={[2, 2, 0, 0]} />
                                      <Bar dataKey="network" name="Network Avg" fill="#e5e7eb" radius={[2, 2, 0, 0]} />
                                    </BarChart>
                                  </ResponsiveContainer>
                                </div>
                             </div>
                             <div className="flex-1 w-full">
                                <h4 className="text-sm font-semibold text-gray-800 mb-3">Targeted Action Plan</h4>
                                {row.status === 'at-risk' && (
                                  <div className="text-sm text-red-700 bg-red-50 p-3 rounded-md border border-red-100">
                                    <strong>Immediate Action Required:</strong> {row.campus} is significantly below network standards, dragging down the overall Southern region average. Math and Chemistry require urgent specialist deployment.
                                  </div>
                                )}
                                {row.status === 'needs-attention' && (
                                  <div className="text-sm text-amber-700 bg-amber-50 p-3 rounded-md border border-amber-100">
                                    <strong>Focus Area:</strong> {row.campus}'s performance in Chemistry is presenting a serious exam risk. Enroll all failing students in after-school remedial cohorts immediately.
                                  </div>
                                )}
                                {row.status === 'on-track' && (
                                  <div className="text-sm text-emerald-700 bg-emerald-50 p-3 rounded-md border border-emerald-100">
                                    <strong>Sustain Momentum:</strong> {row.campus} is performing robustly. Review the English and CS curricula implementations here to identify best practices that can be exported network-wide.
                                  </div>
                                )}
                             </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-sm text-gray-500 italic bg-white border-t border-gray-100">
            6 out of 10 campuses are at or above network average. Hamilton and Monash need urgent academic intervention. Wellington Campus is the network benchmark — its teaching practices should be studied and replicated.
          </div>
        </CardContent>
      </Card>

      {/* Section 5 — At-Risk Student Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>At-Risk Trend Over 12 Months</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[260px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={atRiskTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis domain={[200, 400]} />
                  <Tooltip />
                  <ReferenceLine y={300} stroke="#f59e0b" strokeDasharray="5 5" label={{ position: "insideTopLeft", value: "Alert Threshold", fill: "#f59e0b", fontSize: 12 }} />
                  <Area type="monotone" dataKey="atRisk" name="At-Risk Students" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               At-risk students have been above the alert threshold since October. The trend is increasing — early intervention is needed now before board exam season.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>At-Risk Breakdown by Subject</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[260px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={atRiskBySubjectData} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="subject" type="category" fontSize={12} width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" name="Students At-Risk" radius={[0, 4, 4, 0]} barSize={20}>
                    {atRiskBySubjectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["Chemistry", "Math"].includes(entry.subject) ? '#ef4444' : '#f59e0b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               Chemistry and Math account for 54% of all at-risk cases. Fixing these two subjects would cut the at-risk count nearly in half.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 6 — Board Exam Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Board Exam Pass Rates — By Programme</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[340px] w-full pb-6">
            <ResponsiveContainer>
              <BarChart data={boardExamData} margin={{ top: 20, right: 20, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="subject" />
                <YAxis domain={[50, 100]} />
                <Tooltip />
                <Legend />
                <ReferenceLine y={80} stroke="#9ca3af" strokeDasharray="3 3" label={{ position: "top", value: "Pass Target", fill: "#6b7280", fontSize: 12 }} />
                <Bar dataKey="oLevel" name="O-Level" fill="#006B6B" radius={[2, 2, 0, 0]} />
                <Bar dataKey="aLevel" name="A-Level" fill="#00A693" radius={[2, 2, 0, 0]} />
                <Bar dataKey="matric" name="Matric" fill="#4DB6AC" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="border-t border-gray-100 pt-4 text-sm text-gray-500 italic">
             Matric results are consistently stronger than O-Level and A-Level across all subjects. Chemistry is below the pass target in O-Level and A-Level — board exam risk is real with 11 weeks remaining.
          </div>
        </CardContent>
      </Card>

      {/* Section 7 — Academic Intelligence Panel */}
      <div className="bg-[#E6F4F4] rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-[#006B6B] overflow-hidden">
        <div className="px-6 py-4 flex justify-between items-center border-b border-[#006B6B]/10 bg-white/50">
          <h3 className="text-lg font-bold text-[#006B6B]">🎓 Academic Intelligence — Key Recommendations</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-red-500 flex gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Chemistry Crisis — 89 students at risk, pass rate declining 4% over 3 years. Deploy specialist Chemistry teachers to Hamilton, Kingswood and Monash immediately.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-amber-500 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Math Intervention Needed — declining for 3 consecutive years. Recommend remedial programme across all campuses scoring below 72%.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-emerald-500 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Wellington Campus is your academic benchmark — 84% average, improving every year. Document and replicate their teaching model across the network.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-blue-500 flex gap-3">
              <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                CS is your fastest growing strength — up 7% over 3 years. Use this as a competitive advantage in admissions marketing to attract tech-oriented families.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
