'use client';

import { useRouter } from 'next/navigation';

//STORE
import { useAuthStore } from '@/store/auth';

//UI
import { Button } from '@/components/ui/button';
import { LogOut, Settings } from 'lucide-react';
import Link from 'next/link';

interface ClientSidebarProps {
    onNavigate: (view: string) => void;
    currentView: string;
}

export default function LogoutButton({ onNavigate, currentView }: ClientSidebarProps) {
    const { logout } = useAuthStore();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <div className="absolute bottom-8 left-4 right-4 space-y-2">
            <Button
            variant="outline"
            className="w-full justify-start gap-x-3"
            onClick={() => onNavigate('settings')}
            >
            <Settings className="h-5 w-5" />
                Configuraciones
            </Button>
            <Button
                // variant="destructive"
                className="w-full justify-start gap-x-3"
            onClick={handleLogout}
            >
            <LogOut className="h-5 w-5" />
                Cerrar Sesión
            </Button>
        </div>
    )
}
