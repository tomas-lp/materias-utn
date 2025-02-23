import UserInfo from '@/components/home/UserInfo';
import { SearchInput } from '@/components/ui/input';
import ListItem from '@/components/home/ListItem';
import materias from '../data/materias.json';
import Schedule from '@/components/home/Schedule';
import { useUserData } from '../hooks/useUserData';
import { useEffect } from 'react';

export default function Home() {
  const { userData, create, puedeCursar } = useUserData();

  // Datos de ejemplo
  useEffect(() => {
    localStorage.clear();
    if (!userData) {
      create({ nombre: 'Juan', carrera: 'Ingeniería en Sistemas', cursando: [], regulares: [{id:'2'}], aprobadas: [{id:'1'}] });
    }
  },[create, userData]);

  return (
    <div className='w-screen h-screen bg-bg flex justify-center items-center'>
      <div className='w-full p-8 max-w-screen-2xl h-full grid grid-cols-2 gap-4 text-app-primary'>
        <div className='border-r-2 border-app-primary flex flex-col space-y-16'>
          <UserInfo />
          <div className='w-full flex items-start text-app-primary space-x-8 pr-4'>
            <div className='flex flex-col space-y-4 w-[50%]'>
              <span className='text-2xl font-semibold sticky'>Materias</span>
              <SearchInput placeholder='Ingresa un nombre...' />
              <div className='flex flex-col w-full space-y-2 pr-2 overflow-auto max-h-[50vh]'>
                {materias.map((materia) => {
                  let variant: 'bloqueada' | 'desbloqueada' | 'cursando' | 'regular' | 'aprobada' = 'bloqueada';
                  
                  if (puedeCursar(materia.id)) {
                    variant = 'desbloqueada';
                  }

                  if (userData?.aprobadas.some((m) => m.id === materia.id)) {
                    variant = 'aprobada';
                  }

                  if (userData?.regulares.some((m) => m.id === materia.id)) {
                    variant = 'regular';
                  }

                  if (userData?.cursando.some((m) => m.id === materia.id)) {
                    variant = 'cursando';
                  }

                  return (
                    <ListItem
                      name={materia.materia}
                      number={materia.nivel}
                      variant={variant}
                      key={materia.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='h-full w-full flex flex-col space-y-16 justify-center items-end'>
          <Schedule />
        </div>
      </div>
    </div>
  );
}
