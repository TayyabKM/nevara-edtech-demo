import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { 
  ComposedChart, Bar, Line, BarChart, PieChart, Pie, Cell, 
  Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts"
import { 
  ArrowLeft, Users, Building, MapPin, Calendar, 
  TrendingUp, CheckCircle2, AlertTriangle, Lightbulb 
} from "lucide-react"

const enrollmentData = [
  { year: "2019", students: 13100, projected: null },
  { year: "2020", students: 14200, projected: null },
  { year: "2021", students: 15100, projected: null },
  { year: "2022", students: 16400, projected: null },
  { year: "2023", students: 17800, projected: null },
  { year: "2024", students: 18500, projected: null },
  { year: "2025", students: 20000, projected: null },
  { year: "2026", students: null, projected: 21800 },
  { year: "2027", students: null, projected: 23500 },
]

const regionData = [
  { name: "Northern Region", value: 15, color: "#006B6B" },
  { name: "Central Region", value: 3, color: "#00A693" },
  { name: "Southern Region", value: 2, color: "#4DB6AC" },
]

const regionGrowthData = [
  { year: "2020", northern: 9, central: 2, southern: 1 },
  { year: "2021", northern: 10, central: 2, southern: 1 },
  { year: "2022", northern: 11, central: 3, southern: 1 },
  { year: "2023", northern: 12, central: 3, southern: 2 },
  { year: "2024", northern: 14, central: 3, southern: 2 },
  { year: "2025", northern: 15, central: 3, southern: 2 },
]

const milestones = [
  { year: "1988", campus: "Wellington Campus", city: "Islamabad", quote: "Where it all began", upcoming: false },
  { year: "1995", campus: "Claremont Campus", city: "Rawalpindi", quote: "First inter-city expansion", upcoming: false },
  { year: "2003", campus: "Askari Campus", city: "Lahore", quote: "Entering Punjab", upcoming: false },
  { year: "2008", campus: "Kingswood Campus", city: "Karachi", quote: "First Southern campus", upcoming: false },
  { year: "2012", campus: "Monash Campus", city: "Abbottabad", quote: "Expanding North", upcoming: false },
  { year: "2015", campus: "Gandhara Campus", city: "Wah Cantt", quote: "10th campus milestone", upcoming: false },
  { year: "2018", campus: "Riverview Campus", city: "Muzaffarabad", quote: "AJK entry", upcoming: false },
  { year: "2020", campus: "Zamrud Campus", city: "Peshawar", quote: "KPK footprint", upcoming: false },
  { year: "2023", campus: "Gulzar e Quaid", city: "Rawalpindi", quote: "Strengthening core regions", upcoming: false },
  { year: "2025", campus: "Columbia Park", city: "Islamabad", quote: "Newest campus — Faisal Hills", upcoming: false },
  { year: "Soon", campus: "Gujranwala Campus", city: "Gujranwala", quote: "Next frontier", upcoming: true },
]


export function GrowthReport() {
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
            <h1 className="text-3xl font-bold text-gray-900">Growth & Expansion Report</h1>
            <p className="text-gray-500 mt-1">Roots International Schools & Colleges — 37 Years of Excellence</p>
          </div>
          <div className="bg-[#006B6B]/10 text-[#006B6B] px-4 py-2 rounded-full text-sm font-semibold border border-[#006B6B]/20">
            Data Period: 2020 – 2025
          </div>
        </div>
      </div>

      {/* Section 1 — Headline Growth Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-emerald-50/50 border-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-emerald-900">Total Students 2025</h3>
              <Users className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-700 mb-1">20,000</div>
            <p className="text-xs text-emerald-600/80 leading-snug">
              Up from 14,200 in 2020 — 41% growth in 5 years
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#E6F4F4] border-[#006B6B]/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#006B6B]">Total Campuses</h3>
              <Building className="h-4 w-4 text-[#006B6B]" />
            </div>
            <div className="text-3xl font-bold text-[#006B6B] mb-1">20</div>
            <p className="text-xs text-[#006B6B]/80 leading-snug">
              Up from 12 in 2020 — 8 new campuses in 5 years
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-600">Cities Covered</h3>
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">9</div>
            <p className="text-xs text-gray-500 leading-snug">
              Islamabad, Rawalpindi, Lahore, Karachi, Sialkot, Wah Cantt, Abbottabad, Peshawar, Muzaffarabad
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-600">Years of Operation</h3>
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">37</div>
            <p className="text-xs text-gray-500 leading-snug">
              Founded 1988 — One of Pakistan's longest running private school networks
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Section 2 — Student Enrollment Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Student Enrollment — Year by Year Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[320px] w-full">
            <ResponsiveContainer>
              <ComposedChart data={enrollmentData} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 25000]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" name="Enrolled Students" fill="#006B6B" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="students" name="Actual Trend" stroke="#004d4d" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="projected" name="Projected Growth" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 mb-4">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>🟢</span> Consistent growth every year since 2019 — no decline in any year
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <TrendingUp className="h-3 w-3 text-teal-600" /> +41% total growth over 5 years — averaging 8% per year
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 shadow-sm">
              <span>🔮</span> Projected to reach 23,500 students by 2027 at current growth rate
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 mt-2">
             <p className="text-sm text-gray-500 italic">
               RISC has grown from 13,100 students in 2019 to 20,000 in 2025. If the current growth rate continues, the network will exceed 23,000 students by 2027 — requiring 2-3 additional campuses to maintain quality.
             </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Year on Year Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Year-on-Year Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#E6F4F4] text-[#006B6B] border-b border-[#006B6B]/20">
                <tr>
                  <th className="px-4 py-3 font-semibold">Year</th>
                  <th className="px-4 py-3 font-semibold">Students</th>
                  <th className="px-4 py-3 font-semibold">Campuses</th>
                  <th className="px-4 py-3 font-semibold">Cities</th>
                  <th className="px-4 py-3 font-semibold">Growth %</th>
                  <th className="px-4 py-3 font-semibold">New Campuses Added</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3">2020</td>
                  <td className="px-4 py-3">14,200</td>
                  <td className="px-4 py-3">12</td>
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3 text-gray-400">—</td>
                  <td className="px-4 py-3 text-gray-400">—</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-3">2021</td>
                  <td className="px-4 py-3">15,100</td>
                  <td className="px-4 py-3">13</td>
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3 text-green-600 font-medium">+6.3%</td>
                  <td className="px-4 py-3">1</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">2022</td>
                  <td className="px-4 py-3">16,400</td>
                  <td className="px-4 py-3">15</td>
                  <td className="px-4 py-3">7</td>
                  <td className="px-4 py-3 text-green-600 font-medium">+8.6%</td>
                  <td className="px-4 py-3">2</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-3">2023</td>
                  <td className="px-4 py-3">17,800</td>
                  <td className="px-4 py-3">17</td>
                  <td className="px-4 py-3">8</td>
                  <td className="px-4 py-3 text-green-600 font-medium">+8.5%</td>
                  <td className="px-4 py-3">2</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">2024</td>
                  <td className="px-4 py-3">18,500</td>
                  <td className="px-4 py-3">19</td>
                  <td className="px-4 py-3">9</td>
                  <td className="px-4 py-3 text-green-600 font-medium">+3.9%</td>
                  <td className="px-4 py-3">2</td>
                </tr>
                <tr className="bg-[#E6F4F4]/50 font-bold border-t-2 border-[#006B6B]/20">
                  <td className="px-4 py-3 text-[#006B6B]">2025</td>
                  <td className="px-4 py-3">20,000</td>
                  <td className="px-4 py-3">20</td>
                  <td className="px-4 py-3">9</td>
                  <td className="px-4 py-3 text-green-700">+8.1%</td>
                  <td className="px-4 py-3">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Campus Growth by Region */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Campuses by Region (2025)</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               75% of campuses are in the Northern Region. Central and Southern regions represent significant expansion opportunity.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campus Growth by Region</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="h-[260px] pb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="northern" name="Northern" fill="#006B6B" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="central" name="Central" fill="#00A693" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="southern" name="Southern" fill="#4DB6AC" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-100 mt-auto pt-4 text-sm text-gray-500 italic">
               Northern Region has added 6 campuses since 2020. Central and Southern growth has been slower — representing the biggest expansion opportunity.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 5 — Campus Expansion Timeline */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Our Journey — Every Campus, Every Milestone</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop Timeline */}
          <div className="hidden md:block relative pb-12 pt-8 overflow-x-auto px-4 scrollbar-thin">
            <div className="min-w-[1000px] relative">
              {/* Connecting Line */}
              <div className="absolute top-[28px] left-0 right-0 h-1 bg-[#006B6B]/20 rounded" />
              <div className="absolute top-[28px] left-0 w-[90%] h-1 bg-[#006B6B] rounded z-0" />
              
              <div className="flex justify-between items-start relative z-10">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[80px]">
                    <span className={`text-sm font-bold mb-2 ${m.upcoming ? 'text-gray-400' : 'text-[#006B6B]'}`}>
                      {m.year}
                    </span>
                    <div className={`w-4 h-4 rounded-full mb-3 shrink-0 ${
                      m.upcoming 
                        ? 'border-2 border-gray-300 bg-white' 
                        : 'bg-[#006B6B] ring-4 ring-white shadow-sm'
                    }`} />
                    <div className="text-center">
                      <p className={`text-xs font-semibold leading-tight mb-1 ${m.upcoming ? 'text-gray-500' : 'text-gray-900'}`}>
                        {m.campus}
                      </p>
                      <p className="text-[10px] text-gray-500 mb-1">{m.city}</p>
                      <p className="text-[10px] italic text-[#006B6B] leading-tight">{m.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative pl-4 mt-2">
            <div className="absolute top-2 bottom-2 left-[21px] w-0.5 bg-[#006B6B]/20" />
            <div className="absolute top-2 bottom-[10%] left-[21px] w-0.5 bg-[#006B6B]" />
            
            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex items-start gap-4 relative z-10">
                  <div className={`w-3 h-3 mt-1 rounded-full shrink-0 ${
                    m.upcoming ? 'border border-gray-300 bg-white' : 'bg-[#006B6B] ring-2 ring-white'
                  }`} />
                  <div>
                    <span className={`text-sm font-bold ${m.upcoming ? 'text-gray-400' : 'text-[#006B6B]'}`}>
                      {m.year}
                    </span>
                    <h4 className={`text-sm font-semibold mt-0.5 ${m.upcoming ? 'text-gray-500' : 'text-gray-900'}`}>
                      {m.campus}
                    </h4>
                    <p className="text-xs text-gray-500">{m.city}</p>
                    <p className="text-xs italic text-[#006B6B] mt-1">{m.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 — Growth Insights Panel */}
      <div className="bg-[#E6F4F4] rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-[#006B6B] overflow-hidden">
        <div className="px-6 py-4 flex justify-between items-center border-b border-[#006B6B]/10 bg-white/50">
          <h3 className="text-lg font-bold text-[#006B6B]">📊 Growth Intelligence — Key Takeaways</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-emerald-500 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Consistent 8% annual growth — no year of decline in 37 years of operation
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-[#006B6B] flex gap-3">
              <MapPin className="h-5 w-5 text-[#006B6B] shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Northern Region dominance — 75% of campuses in Islamabad/Rawalpindi corridor — strong brand in capital region
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-amber-500 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                Southern Region underpenetrated — only 2 campuses for entire Karachi market — major expansion opportunity
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-l-blue-500 flex gap-3">
              <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800 leading-snug">
                At current growth rate, RISC will need 3 new campuses by 2027 to maintain current student-to-campus ratio
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
