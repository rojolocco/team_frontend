'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, GitCommit, FileText, Upload } from 'lucide-react';

const activities = [
  {
    icon: MessageSquare,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    content: 'New comment on Website Redesign',
    timestamp: '5 minutes ago',
  },
  {
    icon: GitCommit,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    content: 'Mobile App milestone completed',
    timestamp: '2 hours ago',
  },
  {
    icon: FileText,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    content: 'Brand guidelines updated',
    timestamp: '5 hours ago',
  },
  {
    icon: Upload,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    content: 'New assets uploaded',
    timestamp: '1 day ago',
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                <div className={`absolute left-0 p-2 rounded-full ${activity.bg}`}>
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium">{activity.content}</p>
                  <span className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}