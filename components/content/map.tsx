import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {MapPinned } from 'lucide-react';

export function RiskMap() {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Mapa de Riesgo</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center justify-center h-64">
            <MapPinned  className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Creación Mapa de Riesgos</p>
            </div>
        </CardContent>
        </Card>
    );
}