'use client';

// STORE
import { useTheme } from 'next-themes';
import { useAuthStore } from '@/store/auth';

// UI
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Settings, Search } from 'lucide-react';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";


export function DashboardHeader() {
  const { user } = useAuthStore();
  const { theme } = useTheme();

  const logoSrc = theme === 'dark' ? '/assets/images/LOGO_GUIMAR_COLOR_2.png' : '/assets/images/LOGO_GUIMAR_COLOR_1.png';

  return (
    <TooltipProvider>
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <div className="mx-auto px-14">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-x-4">
              <Image src={logoSrc} alt="Guimar Seguros" width={40} height={40} className="h-10 w-auto items-start" />
              <h1 className="text-xl font-semibold px-12">Plataforma Team</h1>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar..."
                    className="w-[300px] pl-8"
                  />
                </div>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notificaciones</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Configuraciones</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>Cambiar modo oscuro</TooltipContent>
              </Tooltip>
            </div>
            <div className="hidden md:flex items-center gap-x-2">
              <span className="text-sm font-medium">Bienvenido, {user?.name}</span>
              <Avatar className="h-9 w-9">
                <AvatarImage src="/assets/icons/ICONO_GUIMAR_BLANCO.ico" alt="avatar" />
                <AvatarFallback>GS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}