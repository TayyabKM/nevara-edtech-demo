import React from "react"
import { Bell, LogOut, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { schoolConfig } from "@/school.config"
import { Button } from "@/src/components/ui/button"

export function TopBar({ userName, role }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("role")
    navigate("/login")
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-b-[#E5E7EB] bg-white px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-[#006B6B] hidden md:block">
          {schoolConfig.name}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        <div className="flex items-center gap-3 border-l pl-4">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">{userName}</span>
            <span className="text-xs text-gray-500 capitalize">{role}</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white">
            <User className="h-4 w-4" />
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="ml-2">
            <LogOut className="h-4 w-4 mr-2" />
            Switch Role
          </Button>
        </div>
      </div>
    </header>
  )
}
