import React, { useEffect } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { TopBar } from "./TopBar"
import { schoolConfig } from "@/school.config"

export function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const role = localStorage.getItem("role")

  useEffect(() => {
    if (!role && location.pathname !== "/" && location.pathname !== "/login") {
      navigate("/login")
    }
  }, [role, navigate, location.pathname])

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", schoolConfig.primaryColor)
    document.documentElement.style.setProperty("--accent-color", schoolConfig.accentColor)
  }, [])

  if (location.pathname === "/" || location.pathname === "/login") {
    return <Outlet />
  }

  const userNameMap = {
    student: "Ali Khan",
    teacher: "Mr. Usman",
    campus: "Dr. Ahmed",
    parent: "Mr. Khan",
    admin: "System Admin"
  }

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      <Sidebar role={role} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userName={userNameMap[role] || "User"} role={role} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
