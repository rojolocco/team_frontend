
import {SearchCheck, PencilLine, Users} from 'lucide-react';
import {CircleDollarSign, MailSearch, Map} from 'lucide-react';
import {MapPinned} from 'lucide-react';


export const dbMenuItems = [
    { id: 'consultas', icon: SearchCheck, label: 'Consultas' },
    { id: 'registro', icon: PencilLine, label: 'Registro' },
    { id: 'colectivas', icon: Users, label: 'Colectivas' },
];

export const autoMenuItems = [
    { id: 'gastos', icon: CircleDollarSign, label: 'Gastos' },
    { id: 'campanas', icon: MailSearch, label: 'Campañas' }
];

export const riesgoMenuItems = [
    { id: 'mapa', icon: MapPinned, label: 'Mapa' },
];