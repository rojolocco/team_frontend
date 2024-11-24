import { useState } from 'react';
import { useAuthStore } from '@/store/auth';

import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Mail, KeyRound } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

import { supabaseClient } from "@/lib/supabase";


const _supabase = supabaseClient();

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useAuthStore((state) => state.login);

    const { toast } = useToast();

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data, error } = await _supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error('Error logging in:', error.message);
            toast({
                variant: "destructive",
                title: "Credenciales erradas",
                description: error.message,
            })
            return;
        }

        if (data.user) {
            login({
                id: data.user.id,
                email: data.user.email || '',
                name: data.user.email || 'Employee User',
            });
            router.push(`/employee/dashboard/${data.user.id}`);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="email"
                        placeholder="Correo Guimar"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="space-y-2">
                <div className="relative">
                    <KeyRound className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            <Button
                type="submit"
                className="w-full text-base py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            >
                Accede a la plataforma
            </Button>
        </form>
    )
}
