import React from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/src/lib/utils"
import { schoolConfig } from "@/school.config"
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  MessageSquare,
  Briefcase,
  Users,
  AlertTriangle,
  BarChart,
  Settings,
  Database,
  User,
  Bell,
  Mic,
  Rocket
} from "lucide-react"

const roleLinks = {
  student: [
    { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "My Subjects", href: "/student/subjects", icon: BookOpen },
    { name: "Assessments", href: "/student/assessments", icon: FileText },
    { name: "Mock Exams", href: "/student/mock-exams", icon: FileText, comingSoon: true },
    { name: "My Portfolio", href: "/student/portfolio", icon: Briefcase, comingSoon: true },
    { name: "Chatbot", href: "/student/chatbot", icon: MessageSquare, comingSoon: true },
    { name: "Public Speaking Lab", href: "/student/public-speaking", icon: Mic, comingSoon: true },
    { name: "Billionaire Bootcamp", href: "/student/billionaire-bootcamp", icon: Rocket, comingSoon: true },
  ],
  teacher: [
    { name: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboard },
    { name: "My Classes", href: "/teacher/classes", icon: Users },
    { name: "AI Marking Tool", href: "/teacher/ai-marking", icon: FileText },
    { name: "Question Bank", href: "/teacher/question-bank", icon: Database, comingSoon: true },
    { name: "Reports", href: "/teacher/reports", icon: BarChart },
  ],
  campus: [
    { name: "Dashboard", href: "/campus/dashboard", icon: LayoutDashboard },
    { name: "Classes", href: "/campus/classes", icon: Users },
    { name: "Teachers", href: "/campus/teachers", icon: User },
    { name: "Risk Monitor", href: "/campus/risk-monitor", icon: AlertTriangle },
    { name: "Reports", href: "/campus/reports", icon: BarChart, comingSoon: true },
  ],
  parent: [
    { name: "Dashboard", href: "/parent/dashboard", icon: LayoutDashboard },
    { name: "Academic Progress", href: "/parent/progress", icon: BarChart },
    { name: "Attendance", href: "/parent/attendance", icon: User },
    { name: "Alerts", href: "/parent/alerts", icon: Bell },
    { name: "Messages", href: "/parent/messages", icon: MessageSquare, comingSoon: true },
  ],
  admin: [
    { name: "Branding", href: "/admin", icon: Settings },
    { name: "Users", href: "/admin/users", icon: Users, comingSoon: true },
    { name: "Data", href: "/admin/data", icon: Database },
    { name: "System", href: "/admin/system", icon: Settings },
  ]
}

export function Sidebar({ role }) {
  const location = useLocation()
  const links = roleLinks[role] || []

  return (
    <div className="flex h-full w-64 flex-col border-r bg-[#006B6B]">
      <div className="flex h-16 items-center border-b border-white/10 px-6">
        <span className="font-bold text-white text-xl">{schoolConfig.shortName}</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {links.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.name}
                to={link.comingSoon ? `/coming-soon?feature=${encodeURIComponent(link.name)}` : link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-[#00A693] text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
                {link.comingSoon && (
                  <span className="ml-auto text-[10px] uppercase tracking-wider bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
                    Soon
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
