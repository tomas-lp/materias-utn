import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, X, Star, Check } from 'lucide-react';

type Props = {
  variant: 'bloqueada' | 'desbloqueada' | 'cursando' | 'regular' | 'aprobada';
  materia: {
    name: string;
    number: number;
  };
};

export default function ListItemInfo(props: Props) {
  return (
    <Card className='flex flex-col rounded-md px-4 py-2 space-y-2 w-64 overflow-hidden whitespace-nowrap bg-app-background'>
      <span className='font-semibold text-sm overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>
        {props.materia.name}
      </span>

      <div className='flex flex-row items-start space-x-2'>
        {props.variant === 'bloqueada' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-danger'></div>
            <span className='font-medium text-sm'>No puede cursar</span>
          </>
        )}

        {props.variant === 'desbloqueada' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-success'></div>
            <span className='font-medium text-sm'>Puede cursar</span>
          </>
        )}

        {props.variant === 'cursando' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-blue'></div>
            <span className='font-medium text-sm'>Cursando</span>
          </>
        )}

        {props.variant === 'regular' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-warning'></div>
            <span className='font-medium text-sm'>Regular</span>
          </>
        )}

        {props.variant === 'aprobada' && (
          <>
            <div className='w-4 h-4 rounded-full bg-app-primary'></div>
            <span className='font-medium text-sm'>Aprobada</span>
          </>
        )}
        <span></span>
      </div>

      {props.variant === 'bloqueada' && (
        <>
          <div className='flex flex-col overflow-hidden whitespace-nowrap'>
            <span className='font-bold text-sm'>Falta regularizar</span>
            <span className='font-base text-sm overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>
              Materia de ejemplo
              <br />
              Materia de ejemplo
            </span>
          </div>

          <div className='flex flex-col overflow-hidden whitespace-nowrap'>
            <span className='font-bold text-sm'>Falta aprobar</span>
            <span className='font-base text-sm overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>
              Materia de ejemplo
              <br />
              Materia de ejemplo
            </span>
          </div>
        </>
      )}

      {props.variant === 'desbloqueada' && (
        <>
          <div className='flex flex-col'>
            <span className='font-bold text-sm'>K1.1</span>
            <span className='font-base text-sm'>
              Lunes: 14:15 - 15:50
              <br />
              Jueves: 13:30 - 15:00
            </span>
          </div>
          <Button variant='neutral' className='w-full px-8'>
            <Plus className='w-4' />
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
        </>
      )}

      {props.variant === 'cursando' && (
        <>
          <div className='flex flex-col'>
            <span className='font-bold text-sm'>K1.1</span>
            <span className='font-base text-sm'>
              Lunes: 14:15 - 15:50
              <br />
              Jueves: 13:30 - 15:00
            </span>
          </div>
          <Button variant='neutral' className='w-full px-8'>
            <Check className='w-4' />
            Marcar como regular
          </Button>
          <Button variant='neutral' className='w-full px-8'>
            <Star className='w-4' />
            Marcar como aprobada
          </Button>
          <Button variant='neutral' className='w-full px-8'>
            <X className='w-4' />
            Quitar del horario
          </Button>
        </>
      )}

      {props.variant === 'regular' && (
        <>
          <Button variant='neutral' className='w-full px-8'>
            <Star className='w-4' />
            Marcar como aprobada
          </Button>
          <Button variant='neutral' className='w-full px-8'>
            <X className='w-4' />
            Quitar de regulares
          </Button>
        </>
      )}

      {props.variant === 'aprobada' && (
        <>
          <Button variant='neutral' className='w-full px-8'>
            <X className='w-4' />
            Quitar de aprobadas
          </Button>
        </>
      )}

      <div className='flex flex-col'></div>
    </Card>
  );
}
