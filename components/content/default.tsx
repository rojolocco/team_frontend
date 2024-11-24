import { DashboardStats } from '@/components/dashboard/stats';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { ProjectsList } from '@/components/dashboard/projects-list';

export function UserDefault() {
  return (
    <>
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <div className="md:col-span-1 lg:col-span-4">
          <ProjectsList />
        </div>
        <div className="md:col-span-1 lg:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
