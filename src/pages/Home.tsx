import UserInfo from '@/components/home/UserInfo';
import { SearchInput } from '@/components/ui/input';
import ListItem from '@/components/home/ListItem';
import materias from '../data/materias.json';
import Schedule from '@/components/home/Schedule';
import { useUserData } from '../hooks/useUserData';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const { userData, puedeCursar } = useUserData();
  const navigate = useNavigate();

  // Datos de ejemplo
  useEffect(() => {
    function loader() {
      if (userData === null) {
        return navigate('/welcome');
      }
    }

    console.log(userData);

    loader();
  }, [userData, navigate]);

  return (
    <div className='w-screen h-screen bg-bg flex justify-center items-center overflow-hidden'>
      {userData && (
        <div className='w-full p-8 max-w-screen-2xl h-full grid grid-cols-2 gap-4 text-app-primary'>
          <div className='border-r-2 border-app-primary flex flex-col space-y-16'>
            <UserInfo />
            <div className='w-full flex items-start text-app-primary space-x-8 pr-4'>
              <div className='flex flex-col space-y-4 w-[50%]'>
                <span className='text-2xl font-semibold sticky'>Materias</span>
                <SearchInput placeholder='Ingresa un nombre...' />
                <div className='flex flex-col w-full space-y-2 pr-2 overflow-auto max-h-[50vh]'>
                  {materias.map((materia) => {
                    let variant:
                      | 'bloqueada'
                      | 'desbloqueada'
                      | 'cursando'
                      | 'regular'
                      | 'aprobada' = 'bloqueada';

                    const puede = puedeCursar(materia.id);

                    if (puede.puede) {
                      variant = 'desbloqueada';
                    }

                    if (userData?.aprobadas.some((idMateria) => idMateria === materia.id)) {
                      variant = 'aprobada';
                    }

                    if (userData?.regulares.some((idMateria) => idMateria === materia.id)) {
                      variant = 'regular';
                    }

                    if (userData?.cursando.some((m) => m.id === materia.id)) {
                      variant = 'cursando';
                    }

                    return (
                      <ListItem
                        materia={materia}
                        variant={variant}
                        key={materia.id}
                        puedeCursar={puede}
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
      )}
    </div>
  );
}
