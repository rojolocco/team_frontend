// 'use client';

import { motion } from 'framer-motion';
import { MenuTitle } from "@/components/sidebar/utils";
import LogoutButton from "@/components/sidebar/logout";
import MenuDropdown from "@/components/sidebar/menu-dropdown";
import {dbMenuItems, autoMenuItems, riesgoMenuItems} from '@/components/sidebar/menu-list';
import { Database, Workflow, OctagonAlert } from 'lucide-react';


interface ClientSidebarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}


export function Sidebar({ onNavigate, currentView }: ClientSidebarProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-background border-r p-4 space-y-4 overflow-y-auto"
    >
      <MenuTitle onNavigate={onNavigate} currentView={currentView} />
      <MenuDropdown 
        menuName="Base de Datos"
        icon={Database}
        onNavigate={onNavigate} 
        currentView={currentView} 
        accountMenuItems={dbMenuItems} />
      <MenuDropdown
        menuName="Automatización"
        icon={Workflow}
        onNavigate={onNavigate} 
        currentView={currentView} 
        accountMenuItems={autoMenuItems} />
      <LogoutButton onNavigate={onNavigate} currentView={currentView} />
      <MenuDropdown
        menuName="Riesgo"
        icon={OctagonAlert}
        onNavigate={onNavigate} 
        currentView={currentView} 
        accountMenuItems={riesgoMenuItems} />
      <LogoutButton onNavigate={onNavigate} currentView={currentView} />
    </motion.div>
  );
}