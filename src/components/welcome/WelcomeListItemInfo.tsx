import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import type { Comision, Materia } from '@/types/data';

type Props = {
  materia: Materia;
  handleAdd?: (comision: Comision) => void;
};

export default function WelcomeListItemInfo(props: Props) {
  return (
    <Card className='flex flex-col rounded-md p-4 gap-4 w-64 overflow-hidden whitespace-nowrap text-app-primary'>
      <span className='font-semibold text-sm overflow-hidden whitespace-nowrap text-nowrap text-ellipsis m-0'>
        {props.materia.materia}
      </span>
      {props.materia.comisiones.map((comision, i) => (
        <div key={i}>
          <div className='flex flex-col'>
            <span className='font-bold text-sm'>{comision.nombre}</span>
            {comision.horario.map((diaHorario, j)=> 
              <span className='font-base text-sm' key={j}>
                {diaHorario.dia}: {diaHorario.desde} - {diaHorario.hasta}
              </span>
            )}
          </div>
          <Button
            variant='default'
            className='w-full px-8'
            onClick={() => props.handleAdd && props.handleAdd(comision)}
          >
            <Plus className='w-4' />
            Agregar {comision.nombre}
          </Button>
        </div>
      ))}
    </Card>
  );
}
