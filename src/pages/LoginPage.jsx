import React from "react"
import { useNavigate } from "react-router-dom"
import { schoolConfig } from "@/school.config"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { GraduationCap, BookOpen, Building, Users, Settings } from "lucide-react"

export function LoginPage() {
  const navigate = useNavigate()

  const handleRoleSelect = (role) => {
    localStorage.setItem("role", role)
    navigate(`/${role}${role === 'admin' ? '' : '/dashboard'}`)
  }

  const roles = [
    { id: "student", name: "Student", description: "View grades, assignments, and progress.", icon: GraduationCap },
    { id: "teacher", name: "Teacher", description: "Manage classes, mark assessments with AI.", icon: BookOpen },
    { id: "campus", name: "Campus Head", description: "Monitor school performance and risks.", icon: Building },
    { id: "parent", name: "Parent", description: "Track your child's academic journey.", icon: Users },
    { id: "admin", name: "Admin", description: "Configure branding and system settings.", icon: Settings }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-3xl shadow-xl border-t-4" style={{ borderTopColor: schoolConfig.primaryColor }}>
        <CardHeader className="text-center pb-8">
          <div className="mx-auto mb-4 h-16 w-16 rounded-xl overflow-hidden shadow-sm">
            <img src={schoolConfig.logo} alt="Logo" className="h-full w-full object-cover" />
          </div>
          <CardTitle className="text-3xl font-bold" style={{ color: schoolConfig.primaryColor }}>
            Select Your Role
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Demo Mode — No login required
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className="flex flex-col items-center p-6 rounded-xl border-2 border-transparent bg-white shadow-sm hover:border-[var(--primary-color)] hover:shadow-md transition-all text-left group"
              >
                <div 
                  className="h-14 w-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${schoolConfig.primaryColor}15`, color: schoolConfig.primaryColor }}
                >
                  <role.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.name}</h3>
                <p className="text-sm text-gray-500 text-center">{role.description}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
