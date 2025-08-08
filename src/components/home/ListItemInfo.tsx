import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, X, Star, Check } from 'lucide-react';
import type { Materia } from '@/types/data';
import materias from '@/data/materias.json';
import { useUserData } from '@/hooks/useUserData';
import { useMaterias } from '@/hooks/useMaterias';

type Props = {
  variant: 'bloqueada' | 'desbloqueada' | 'cursando' | 'regular' | 'aprobada';
  puedeCursar:
    | {
        puede?: undefined;
        noCumpleRegular?: undefined;
        noCumpleAprobada?: undefined;
      }
    | {
        puede: boolean;
        noCumpleRegular: string[];
        noCumpleAprobada: string[];
      };
  materia: Materia;
};

export default function ListItemInfo(props: Props) {
  //TODO: Implementar botones de agregar.
  const { getComisionByName } = useMaterias();
  const { userData, addCursando, addRegular, addAprobada, removeCursando, removeAprobada, removeRegular } = useUserData();

  function getInfoComision() {
    const matCursando = userData?.cursando.find(
      (m) => m.id === props.materia.id
    );

    if (matCursando) {
      return getComisionByName(matCursando.id, matCursando.comision);
    }
  }

  function marcarRegular () {
    addRegular(props.materia.id);
  }

  function marcarAprobada () {
    addAprobada(props.materia.id);
  }

  function marcarCursando (comision: string) {
    console.log('Hello');
    addCursando(props.materia.id, comision);
  }

  function quitarAprobada () {
    removeAprobada(props.materia.id);
  }

  function quitarRegular () {
    removeRegular(props.materia.id);
  }

  function quitarCursando () {
    removeCursando(props.materia.id);
  }

  return (
    <Card className='cursor-default flex flex-col rounded-md p-4 gap-4 w-64 overflow-auto whitespace-nowrap bg-app-background text-app-primary max-h-[70vh]'>
      <span className='font-semibold text-sm overflow-hidden whitespace-nowrap text-nowrap text-ellipsis'>
        {props.materia.materia}
      </span>

      <div className='flex flex-col items-start space-y-2'>
        {props.variant === 'bloqueada' && (
          <>
            <div className='flex flex-row items-start space-x-2'>
              <div className='w-4 h-4 rounded-full bg-app-danger'></div>
              <span className='font-medium text-sm'>No puede cursar</span>
            </div>

            <div className='flex flex-col'>
              {props.puedeCursar.noCumpleRegular?.length !== 0 && (
                <span className='font-bold text-sm'>Falta regularizar</span>
              )}
              {props.puedeCursar.noCumpleRegular?.map((idMateria) => (
                <span className='font-base text-sm text-wrap'>
                  {materias.find((m) => m.id === idMateria)?.materia}
                </span>
              ))}
            </div>

            <div className='flex flex-col'>
              {props.puedeCursar.noCumpleAprobada?.length !== 0 && (
                <span className='font-bold text-sm'>Falta aprobar</span>
              )}
              {props.puedeCursar.noCumpleAprobada?.map((idMateria) => (
                <span className='font-base text-sm text-wrap'>
                  {materias.find((m) => m.id === idMateria)?.materia}
                </span>
              ))}
            </div>
          </>
        )}

        {props.variant === 'desbloqueada' && (
          <>
            <div className='flex flex-row items-start space-x-2'>
              <div className='w-4 h-4 rounded-full bg-app-success'></div>
              <span className='font-medium text-sm'>Puede cursar</span>
            </div>

            {props.materia.comisiones.map((comision, i) => (
              <div key={i} className='w-full space-y-2'>
                <div className='flex flex-col'>
                  <span className='font-bold text-sm'>{comision.nombre}</span>
                  {comision.horario.map((diaHorario, j) => (
                    <span className='font-base text-sm' key={j}>
                      {diaHorario.dia}: {diaHorario.desde} - {diaHorario.hasta}
                    </span>
                  ))}
                </div>
                <Button
                  variant='default'
                  className='w-full px-8'
                  onClick={() => marcarCursando(comision.nombre)}
                >
                  <Plus className='w-4' />
                  Agregar {comision.nombre}
                </Button>
              </div>
            ))}
          </>
        )}

        {props.variant === 'cursando' && (
          <>
            <div className='flex flex-row items-start space-x-2'>
              <div className='w-4 h-4 rounded-full bg-app-blue'></div>
              <span className='font-medium text-sm'>Cursando</span>
            </div>

            <div className='flex flex-col'>
              <span className='font-bold text-sm'>{getInfoComision()?.nombre}</span>

              {getInfoComision()?.horario.map((horarioDia) => (
                <span className='font-base text-sm'>
                  {horarioDia.dia}: {horarioDia.desde} - {horarioDia.hasta}
                </span>
              ))}
            </div>
            <Button variant='default' className='w-full px-8' onClick={marcarRegular}>
              <Check className='w-4' />
              Marcar como regular
            </Button>
            <Button variant='default' className='w-full px-8' onClick={marcarAprobada}>
              <Star className='w-4' />
              Marcar como aprobada
            </Button>
            <Button variant='default' className='w-full px-8' onClick={quitarCursando}>
              <X className='w-4' />
              Quitar del horario
            </Button>
          </>
        )}

        {props.variant === 'regular' && (
          <>
            <div className='flex flex-row items-start space-x-2'>
              <div className='w-4 h-4 rounded-full bg-app-warning'></div>
              <span className='font-medium text-sm'>Regular</span>
            </div>

            <Button variant='default' className='w-full px-8' onClick={marcarAprobada}>
              <Star className='w-4' />
              Marcar como aprobada
            </Button>
            <Button variant='default' className='w-full px-8' onClick={quitarRegular}>
              <X className='w-4' />
              Quitar de regulares
            </Button>
          </>
        )}

        {props.variant === 'aprobada' && (
          <>
            <div className='flex flex-row items-start space-x-2'>
              <div className='w-4 h-4 rounded-full bg-app-primary'></div>
              <span className='font-medium text-sm'>Aprobada</span>
            </div>

            <Button variant='default' className='w-full px-8' onClick={quitarAprobada}>
              <X className='w-4' />
              Quitar de aprobadas
            </Button>
          </>
        )}
        <span></span>
      </div>
      <div className='flex flex-col'></div>
    </Card>
  );
}
