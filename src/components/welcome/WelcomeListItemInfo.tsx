import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

type Props = {
  materia: {
    name: string;
    number: string;
  };
  onAdd?: () => void;
};

export default function WelcomeListItemInfo(props: Props) {
  return (
    <Card className='flex flex-col rounded-md px-4 py-2 space-y-2 w-64 overflow-hidden whitespace-nowrap bg-bw text-app-primary'>
      <span className='font-semibold text-sm overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>
        {props.materia.name}
      </span>
      <div className='flex flex-col'>
        <span className='font-bold text-sm'>K1.1</span>
        <span className='font-base text-sm'>
          Lunes: 14:15 - 15:50
          <br />
          Jueves: 13:30 - 15:00
        </span>
      </div>
      <Button variant='neutral' className='w-full px-8' onClick={props.onAdd}>
        <Plus className='w-4'/>
        Agregar K1.1
      </Button>

      <div className='flex flex-col'>
        <span className='font-bold text-sm'>K1.2</span>
        <span className='font-base text-sm'>
          Lunes: 14:15 - 15:50
          <br />
          Jueves: 13:30 - 15:00
        </span>
      </div>
      <Button variant='neutral' className='w-full px-8'>
        <Plus className='w-4' />
        Agregar K1.2
      </Button>

      <div className='flex flex-col'>
        <span className='font-bold text-sm'>K1.3</span>
        <span className='font-base text-sm'>
          Lunes: 14:15 - 15:50
          <br />
          Jueves: 13:30 - 15:00
        </span>
      </div>
      <Button variant='neutral' className='w-full px-8'>
        <Plus className='w-4' />
        Agregar K1.3
      </Button>

      <div className='flex flex-col'></div>
    </Card>
  );
}
