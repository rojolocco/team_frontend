import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MailSearch } from 'lucide-react';

export function UserAdds() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Campañas</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center h-64">
            <MailSearch className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Campañas de ventas de seguros</p>
            </div>
        </CardContent>
        </Card>
    );
}