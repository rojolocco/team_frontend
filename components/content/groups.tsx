import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export function UserGroups() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Colectivas</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center h-64">
            <Users  className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Consulta Colectivas</p>
            </div>
        </CardContent>
        </Card>
    );
}