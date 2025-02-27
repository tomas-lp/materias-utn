import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { Comision, Materia } from '@/types/data';

type Props = {
  materia: Materia;
  handleAdd?: (comision: Comision) => void;
};

export default function WelcomeListItemInfo(props: Props) {
  return (
    <Card className='flex flex-col rounded-md px-4 py-2 space-y-2 w-64 overflow-hidden whitespace-nowrap bg-bw text-app-primary'>
      <span className='font-semibold text-sm overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>
        {props.materia.materia}
      </span>
      {props.materia.comisiones.map((comision) => (
        <>
          <div className='flex flex-col'>
            <span className='font-bold text-sm'>{comision.nombre}</span>
            {comision.horario.map((diaHorario)=> 
              <span className='font-base text-sm'>
                {diaHorario.dia}: {diaHorario.desde} - {diaHorario.hasta}
              </span>
            )}
          </div>
          <Button
            variant='neutral'
            className='w-full px-8'
            onClick={() => props.handleAdd && props.handleAdd(comision)}
          >
            <Plus className='w-4' />
            Agregar {comision.nombre}
          </Button>
        </>
      ))}
    </Card>
  );
}
