
import { Card } from '../ui/card';
import './schedule.css';
import { useUserData } from '@/hooks/useUserData';
import { useMaterias } from '@/hooks/useMaterias';

const Schedule = () => {
  const times = [
    '13:30',
    '14:15',
    '15:00',
    '15:50',
    '16:35',
    '17:20',
    '18:10',
    '18:55',
    '19:40',
  ];

  const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  function getColor(numero: number) {
    const listaColores = ['bg-app-blue', 'bg-app-cyan', 'bg-app-pink', 'bg-app-yellow', 'bg-app-green', 'bg-app-peach', 'bg-app-purple', 'bg-app-red'];
    return listaColores[numero % listaColores.length];
  }

  // Obtener materias cursando del usuario
  const { userData } = useUserData();
  const { getMateriaById, getComisionByName } = useMaterias();

  // Clases normales
  const clases = (userData?.cursando || [])
    .map((cursando, i) => {
      const materia = getMateriaById(cursando.id);
      if (!materia) return null;
      const comision = getComisionByName(cursando.id, cursando.comision);
      if (!comision) return null;
      return comision.horario.map((horario) => ({
        materia: materia.abreviatura || materia.materia,
        dia: horario.dia,
        desde: horario.desde,
        hasta: horario.hasta,
        color: getColor(i),
      }));
    })
    .flat()
    .filter((item): item is { materia: string; dia: string; desde: string; hasta: string; color: string } => !!item);

  // Clases temporales
  let clasesTemporales: { materia: string; dia: string; desde: string; hasta: string }[] = [];
  
  if (userData?.temporal) {
    const materia = getMateriaById(userData.temporal.id);
    const comision = getComisionByName(userData.temporal.id, userData.temporal.comision);
    if (materia && comision) {
      clasesTemporales = comision.horario.map((horario) => ({
        materia: (materia.abreviatura || materia.materia),
        dia: horario.dia,
        desde: horario.desde,
        hasta: horario.hasta,
      }));
    }
  }

  const getGridPosition = (time: string) => {
    const timeIndex = times.indexOf(time);
    return `${timeIndex + 2}`;
  };

  const getDayColumn = (day: string) => {
    const dayIndex = days.indexOf(day) + 2;
    return `${dayIndex}`;
  };

  return (
    <Card className='w-full h-fit p-4 flex justify-center items-center bg-app-background select-none shadow-none overflow-hidden'>
      <div
        id='schedule'
        className='w-full grid overflow-hidden xl:aspect-[5/4]'
        style={{
          gridTemplateColumns: 'repeat(7, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        {/* Empty corner cell */}
        <div className='h-12'></div>

        {/* Days header */}
        {days.map((day) => (
          <div
            key={day}
            className='px-2 flex items-center justify-center font-semibold my-auto mx-auto text-app-primary overflow-hidden'
          >
            {day.substring(0, 3)}
          </div>
        ))}

        {/* Time slots and grid cells */}
        {times.map((time, i) => (
          <div
            key={time}
            className='flex items-start justify-center text-sm font-bold text-app-primary overflow-hidden'
            style={{
              gridColumn: 1,
              gridRow: i + 2,
            }}
          >
            {time}
          </div>
        ))}

        {/* Clases normales */}
        {clases.map((clase, idx) => {
          if (!clase) return null;
          const startRow = getGridPosition(clase.desde);
          const endRow = getGridPosition(clase.hasta);
          const column = getDayColumn(clase.dia);
          return (
            <div
              key={`normal-${clase.materia}-${clase.dia}-${clase.desde}-${idx}`}
              className='p-1 overflow-hidden'
              style={{
                gridColumn: column,
                gridRow: `${startRow} / ${endRow}`,
              }}
            >
              <Card
                className={`${clase.color} w-full h-full flex items-start justify-start font-bold p-2 border-none`}
              >
                {clase.materia}
              </Card>
            </div>
          );
        })}

        {/* Clases temporales */}
        {clasesTemporales.map((clase, idx) => {
          if (!clase) return null;
          const startRow = getGridPosition(clase.desde);
          const endRow = getGridPosition(clase.hasta);
          const column = getDayColumn(clase.dia);
          return (
            <div
              key={`temporal-${clase.materia}-${clase.dia}-${clase.desde}-${idx}`}
              className='p-1 overflow-hidden'
              style={{
                gridColumn: column,
                gridRow: `${startRow} / ${endRow}`,
              }}
            >
              <Card
                id='temporal'
                className={`w-full h-full flex items-start justify-start font-bold p-2 border-none shadow-none`}
              >
                {/* {clase.materia} */}
              </Card>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Schedule;
