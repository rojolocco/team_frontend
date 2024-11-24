// 'use client';

import { fetchEmployeeIds } from "@/lib/supabase";

// UI
import { DashboardHeader } from '@/components/dashboard/header';
import MainDashboard from "@/components/dashboard/main";


export async function generateStaticParams() {
  const employeeIds = await fetchEmployeeIds();
  return employeeIds.map((id) => ({
    id,
  }));
}

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div>
        <MainDashboard />
      </div>
    </div>
    
  );
}
