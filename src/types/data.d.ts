export type Horario = {
    dia: string;
    desde: string;
    hasta: string;
};

export type Comision = {
    nombre: string;
    horario: Horario[];
};

export type Materia = {
    id: string;
    nivel: string;
    materia: string;
    abreviatura: string;
    cursadas: string[];
    aprobadas: string[];
    estado: string;
    comisiones: Comision[];
};