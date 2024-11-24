'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

const projects = [
  {
    name: 'Website Redesign',
    progress: 75,
    status: 'In Progress',
    dueDate: '2024-04-01',
    team: ['Alice', 'Bob', 'Charlie'],
  },
  {
    name: 'Mobile App Development',
    progress: 45,
    status: 'In Progress',
    dueDate: '2024-05-15',
    team: ['David', 'Eve'],
  },
  {
    name: 'Brand Identity',
    progress: 90,
    status: 'Review',
    dueDate: '2024-03-25',
    team: ['Frank', 'Grace'],
  },
  {
    name: 'Marketing Campaign',
    progress: 30,
    status: 'Planning',
    dueDate: '2024-06-01',
    team: ['Henry', 'Ivy'],
  },
];

const statusColors = {
  'In Progress': 'bg-blue-500/10 text-blue-500',
  'Review': 'bg-yellow-500/10 text-yellow-500',
  'Planning': 'bg-purple-500/10 text-purple-500',
  'Completed': 'bg-green-500/10 text-green-500',
};

export function ProjectsList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Active Projects</CardTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-x-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <Badge variant="secondary" className={statusColors[project.status as keyof typeof statusColors]}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Due {new Date(project.dueDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex -space-x-2">
                  {project.team.map((member, i) => (
                    <Avatar
                      key={i}
                      className="border-2 border-background"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <Progress value={project.progress} className="h-2" />
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}