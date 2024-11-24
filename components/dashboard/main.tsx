'use client';

import { useState } from 'react';

import { UserQueries } from '@/components/content/query';
import { UserRegister } from '@/components/content/register';
import { RiskMap } from '@/components/content/map';
import { UserGroups } from '@/components/content/groups';
import { UserBills } from '@/components/content/billing';
import { UserAdds } from '@/components/content/adds';
import { UserDefault } from '@/components/content/default';
import { UserSettings } from '@/components/content/settings';

import { Sidebar } from '@/components/dashboard/sidebar';

export default function MainDashboard() {
  const [currentView, setCurrentView] = useState('projects');

  const renderContent = () => {
    switch (currentView) {
      case 'consultas':
        return <UserQueries />;
      case 'registro':
        return <UserRegister />;
      case 'colectivas':
        return <UserGroups  />;
      case 'gastos':
        return <UserBills />;
      case 'campanas':
        return <UserAdds />;
      case 'mapa':
        return <RiskMap />;
      case 'settings':
        return <UserSettings />;
      default:
        return <UserDefault />;
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar onNavigate={setCurrentView} currentView={currentView} />
      <main className="flex-1 p-8 ml-64">
        {renderContent()}
      </main>
    </div>
  );
}
