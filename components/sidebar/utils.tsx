import {
    BookAudio,
    House
} from 'lucide-react';

interface MenuItemProps {
    icon: any;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export function MenuItem({ icon: Icon, label, isActive, onClick }: MenuItemProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-x-3 px-3 py-2 text-sm font-medium rounded-md w-full transition-colors ${isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
        >
            <Icon className="h-5 w-5" />
            {label}
        </button>
    );
}

const mainMenuItems = [
    { id: 'home', icon: House, label: 'Inicio' },
    { id: 'info', icon: BookAudio, label: 'Información' },
];


interface ClientSidebarProps {
    onNavigate: (view: string) => void;
    currentView: string;
}

export function MenuTitle({ onNavigate, currentView }: ClientSidebarProps) {
    return (
        <div className="space-y-1">
            <h2 className="px-3 text-lg font-semibold tracking-tight mb-2">Menu Principal</h2>
            {mainMenuItems.map((item) => (
                <MenuItem
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    isActive={currentView === item.id}
                    onClick={() => onNavigate(item.id)}
                />
            ))}
        </div>
    )
}
