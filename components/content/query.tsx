import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SearchCheck } from 'lucide-react';

export function UserQueries() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Consultas</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center h-64">
            <SearchCheck  className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Consulta de la Base de Datos</p>
            </div>
        </CardContent>
        </Card>
    );
}