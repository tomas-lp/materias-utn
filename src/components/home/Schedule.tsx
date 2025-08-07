import { Card } from '../ui/card';

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

  const classes = [
    {
      name: 'AM I',
      day: 'Lunes',
      startTime: '14:15',
      endTime: '15:50',
      color: 'bg-app-blue',
    },
    {
      name: 'FIS I',
      day: 'Martes',
      startTime: '13:30',
      endTime: '15:00',
      color: 'bg-app-yellow',
    },
    {
      name: 'ARQ',
      day: 'Miercoles',
      startTime: '14:15',
      endTime: '16:35',
      color: 'bg-app-pink',
    },
    {
      name: 'AM I',
      day: 'Jueves',
      startTime: '13:30',
      endTime: '15:00',
      color: 'bg-app-blue',
    },
    {
      name: 'FIS I',
      day: 'Viernes',
      startTime: '15:00',
      endTime: '17:20',
      color: 'bg-app-yellow',
    },
  ];

  const getGridPosition = (time: string) => {
    const timeIndex = times.indexOf(time);
    return `${timeIndex + 2}`;
  };

  const getDayColumn = (day: string) => {
    const dayIndex = days.indexOf(day) + 2;
    return `${dayIndex}`;
  };

  return (
    <Card className='w-fit h-fit p-4 flex justify-center items-center bg-bw select-none'>
      <div
        id='schedule'
        className='grid'
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
            className='h-fit px-2 flex items-center justify-center font-semibold my-auto mx-auto text-app-primary'
          >
            {day}
          </div>
        ))}

        {/* Time slots and grid cells */}
        {times.map((time, i) => (
          <div
            key={time}
            className='h-fit flex items-start justify-center text-sm font-bold text-app-primary'
            style={{
              gridColumn: 1,
              gridRow: i + 2,
            }}
          >
            {time}
          </div>
        ))}

        {/* Classes */}
        {classes.map((classItem) => {
          const startRow = getGridPosition(classItem.startTime);
          const endRow = getGridPosition(classItem.endTime);
          const column = getDayColumn(classItem.day);

          return (
            <div
              key={`${classItem.name}-${classItem.day}`}
              className='p-1'
              style={{
                gridColumn: column,
                gridRow: `${startRow} / ${endRow}`,
              }}
            >
              <Card
                className={`${classItem.color} w-full h-full flex items-start justify-start font-bold p-2`}
              >
                {classItem.name}
              </Card>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Schedule;
