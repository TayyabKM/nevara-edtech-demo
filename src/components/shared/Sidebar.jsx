import React, { useState } from "react"
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
  Rocket,
  Gamepad2,
  BookMarked,
  ClipboardCheck,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react"

const roleLinks = {
  student: [
    { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "My Subjects", href: "/student/subjects", icon: BookOpen },
    { name: "Learning Games", href: "/student/learning-games", icon: Gamepad2, comingSoon: true },
    { name: "Assessments", href: "/student/assessments", icon: FileText },
    { name: "Mock Exams", href: "/student/mock-exams", icon: FileText, comingSoon: true },
    { name: "My Portfolio", href: "/student/portfolio", icon: Briefcase, comingSoon: true },
    { name: "Chatbot", href: "/student/chatbot", icon: MessageSquare },
    { name: "Public Speaking Lab", href: "/student/public-speaking", icon: Mic, comingSoon: true },
    { name: "Billionaire Bootcamp", href: "/student/billionaire-bootcamp", icon: Rocket, comingSoon: true },
  ],
  teacher: [
    { name: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboard },
    { name: "My Classes", href: "/teacher/classes", icon: Users },
    { name: "AI Marking Tool", href: "/teacher/ai-marking", icon: FileText },
    { name: "Board Repository", href: "/teacher/board-repository", icon: BookMarked, comingSoon: true },
    { name: "Question Bank", href: "/teacher/question-bank", icon: Database, comingSoon: true },
    { name: "Reports", href: "/teacher/reports", icon: BarChart },
  ],
  campus: [
    { name: "Dashboard", href: "/campus/dashboard", icon: LayoutDashboard },
    { name: "Classes", href: "/campus/classes", icon: Users },
    { name: "Teachers", href: "/campus/teachers", icon: User },
    { name: "Board Repository", href: "/campus/board-repository", icon: BookMarked, comingSoon: true },
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
    { name: "Executive Dashboard", href: "/admin/executive", icon: LayoutDashboard },
    { name: "Exam Board Compliance", href: "/admin/exam-board", icon: ClipboardCheck, comingSoon: true },
    { name: "Branding", href: "/admin", icon: Settings },
    { name: "Users", href: "/admin/users", icon: Users, comingSoon: true },
    { name: "Data", href: "/admin/data", icon: Database },
    { name: "System", href: "/admin/system", icon: Settings },
  ]
}

export function Sidebar({ role }) {
  const location = useLocation()
  const links = roleLinks[role] || []
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn("flex h-full flex-col border-r bg-[#006B6B] transition-all duration-300", isCollapsed ? "w-16" : "w-64")}>
      <div className={cn("flex h-16 items-center border-b border-white/10", isCollapsed ? "justify-center px-2" : "px-6 justify-between")}>
        {!isCollapsed && <span className="font-bold text-white text-xl truncate">{schoolConfig.shortName}</span>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 text-white hover:bg-white/10 rounded-md shrink-0"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {links.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.name}
                to={link.comingSoon ? `/coming-soon?feature=${encodeURIComponent(link.name)}` : link.href}
                title={isCollapsed ? link.name : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all group",
                  isActive
                    ? "bg-[#00A693] text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white",
                  isCollapsed ? "justify-center px-0" : ""
                )}
              >
                <link.icon className={cn("shrink-0", isCollapsed ? "h-5 w-5" : "h-4 w-4")} />
                {!isCollapsed && <span>{link.name}</span>}
                {!isCollapsed && link.comingSoon && (
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
