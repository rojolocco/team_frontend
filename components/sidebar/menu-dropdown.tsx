'use client';

import { useState } from 'react';

// UI
import { ChevronDown, Clock, HelpCircle, CreditCard } from 'lucide-react';
import { MenuItem } from "@/components/sidebar/utils";

interface AccountMenuItem {
    id: string;
    icon: React.ComponentType;
    label: string;
}

interface ClientSidebarProps {
    menuName: string;
    icon: React.ComponentType;
    onNavigate: (view: string) => void;
    currentView: string;
    accountMenuItems: AccountMenuItem[];
}

export default function MenuDropdown({ menuName, icon: Icon, onNavigate, currentView , accountMenuItems }: ClientSidebarProps) {
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    return (
        <div className="space-y-1">
            <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold rounded-md hover:bg-accent/50 transition-colors"
            >
                <div className="flex items-center gap-x-2 w-full">
                    <Icon className="h-5 w-5" />
                    <span>{menuName}</span>
                </div>
                <ChevronDown
                    className={`h-4 w-4 transition-transform ${isAccountOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            {isAccountOpen && (
                <div className="pl-4 space-y-1">
                    {accountMenuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            icon={item.icon}
                            label={item.label}
                            isActive={currentView === item.id}
                            onClick={() => onNavigate(item.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
