import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "./components/shared/Layout"
import { LandingPage } from "./pages/LandingPage"
import { LoginPage } from "./pages/LoginPage"
import { StudentDashboard } from "./pages/StudentDashboard"
import { StudentSubjects } from "./pages/student/Subjects"
import { StudentAssessments } from "./pages/student/Assessments"
import { StudentChatbot } from "./pages/student/Chatbot"
import { TeacherDashboard } from "./pages/TeacherDashboard"
import { TeacherClasses } from "./pages/teacher/Classes"
import { TeacherReports } from "./pages/teacher/Reports"
import { TeacherAIMarking } from "./pages/teacher/AIMarking"
import { CampusDashboard } from "./pages/CampusDashboard"
import { CampusClasses } from "./pages/campus/Classes"
import { CampusTeachers } from "./pages/campus/Teachers"
import { CampusRiskMonitor } from "./pages/campus/RiskMonitor"
import { ParentDashboard } from "./pages/ParentDashboard"
import { ParentAcademicProgress } from "./pages/parent/AcademicProgress"
import { ParentAttendance } from "./pages/parent/Attendance"
import { ParentAlerts } from "./pages/parent/Alerts"
import { AdminPanel } from "./pages/AdminPanel"
import { ExecutiveDashboard } from "./pages/admin/ExecutiveDashboard"
import { AdminData } from "./pages/admin/Data"
import { AdminSystem } from "./pages/admin/System"
import { ComingSoonPage } from "./pages/ComingSoonPage"
import { GrowthReport } from "@/src/pages/admin/reports/GrowthReport"
import { AcademicReport } from "@/src/pages/admin/reports/AcademicReport"
import { FinancialReport } from "@/src/pages/admin/reports/FinancialReport"
import { AdmissionsReport } from "@/src/pages/admin/reports/AdmissionsReport"
import { OverviewPage } from "@/src/pages/OverviewPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="overview" element={<OverviewPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          
          <Route path="student/dashboard" element={<StudentDashboard />} />
          <Route path="student/subjects" element={<StudentSubjects />} />
          <Route path="student/assessments" element={<StudentAssessments />} />
          <Route path="student/chatbot" element={<StudentChatbot />} />
          
          <Route path="teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="teacher/classes" element={<TeacherClasses />} />
          <Route path="teacher/reports" element={<TeacherReports />} />
          <Route path="teacher/ai-marking" element={<TeacherAIMarking />} />
          
          <Route path="campus/dashboard" element={<CampusDashboard />} />
          <Route path="campus/classes" element={<CampusClasses />} />
          <Route path="campus/teachers" element={<CampusTeachers />} />
          <Route path="campus/risk-monitor" element={<CampusRiskMonitor />} />
          
          <Route path="parent/dashboard" element={<ParentDashboard />} />
          <Route path="parent/progress" element={<ParentAcademicProgress />} />
          <Route path="parent/attendance" element={<ParentAttendance />} />
          <Route path="parent/alerts" element={<ParentAlerts />} />
          
          <Route path="admin" element={<AdminPanel />} />
          <Route path="admin/executive" element={<ExecutiveDashboard />} />
          <Route path="admin/reports/growth" element={<GrowthReport />} />
          <Route path="admin/reports/academic" element={<AcademicReport />} />
          <Route path="admin/reports/financial" element={<FinancialReport />} />
          <Route path="admin/reports/admissions" element={<AdmissionsReport />} />
          <Route path="admin/data" element={<AdminData />} />
          <Route path="admin/system" element={<AdminSystem />} />
          
          <Route path="coming-soon" element={<ComingSoonPage />} />
          
          {/* Catch all for undefined routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
