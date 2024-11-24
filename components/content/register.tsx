import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PencilLine } from 'lucide-react';

export function UserRegister() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Registro</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center h-64">
            <PencilLine  className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Registro en la base de datos</p>
            </div>
        </CardContent>
        </Card>
    );
}