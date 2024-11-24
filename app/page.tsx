'use client';

// UI
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import HeaderLogin from "@/components/login/header";
import BackgroundLogin from "@/components/login/background";
import IconForm from "@/components/login/icon-form";
import Form from "@/components/login/form";
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';


export default function EmployeeLogin() {

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <HeaderLogin />
      <BackgroundLogin />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="backdrop-blur-xl bg-background/95 shadow-xl border-muted">
          <CardHeader className="space-y-1 pb-8">
            <IconForm />
            <CardTitle className="text-2xl font-bold text-center">
              PLATAFORMA TEAM
            </CardTitle>
            <CardDescription className="text-center text-base">
              Acceso seguro para empleados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 mt-4">
            <div className="flex items-center justify-center text-sm text-muted-foreground gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Secured by enterprise SSO</span>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
