import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign } from 'lucide-react';

export function UserBills() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Gastos</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center h-64">
            <CircleDollarSign  className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Gastos e Ingresos</p>
            </div>
        </CardContent>
        </Card>
    );
}