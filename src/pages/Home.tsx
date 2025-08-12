import UserInfo from '@/components/home/UserInfo';
import { SearchInput } from '@/components/ui/input';
import ListItem from '@/components/home/ListItem';
import materias from '../data/materias.json';
import Schedule from '@/components/home/Schedule';
import { useUserData } from '../hooks/useUserData';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Toaster } from '@/components/ui/sonner';
import type { Materia } from '@/types/data';
import ThemeToggle from '@/components/home/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Download, Loader2Icon } from 'lucide-react';
import { exportAsImage } from '@/utils/misc';
import { toast } from 'sonner';

export default function Home() {
  const { userData, puedeCursar, darkMode } = useUserData();
  const scheduleRef = useRef<HTMLDivElement>(null);
  const [loadingExport, setLoadingExport] = useState(false);
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [materiasFiltradas, setMateriasFiltradas] =
    useState<Materia[]>(materias);

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

  useEffect(() => {
    const filtradas = materias.filter((materia) =>
      materia.materia.toLowerCase().includes(busqueda.toLowerCase())
    );
    setMateriasFiltradas(filtradas);
  }, [busqueda]);

  async function handleExport() {
    setLoadingExport(true);
    if (!scheduleRef.current) return;
    await exportAsImage(scheduleRef.current);
    setLoadingExport(false);
    toast.success('Horario exportado correctamente.');
  }

  return (
    <>
      <div className={`w-screen h-screen bg-app-background flex justify-center items-center overflow-hidden ${darkMode && 'dark'}`}>
        {userData && (
          <div className='w-full p-8 max-w-screen-2xl h-full grid grid-cols-2 gap-4 text-app-primary'>
            <div className='border-r border-app-border flex flex-col space-y-16'>
              <div className='flex space-x-2 items-center'>
                <UserInfo />
                <ThemeToggle />
              </div>
              <div className='w-full flex items-start text-app-primary space-x-8 pr-4'>
                <div className='flex flex-col space-y-4 w-[50%]'>
                  <span className='text-2xl font-semibold sticky'>Materias</span>
                  <SearchInput placeholder='Ingresa un nombre...' value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
                  <div className={`flex flex-col w-full space-y-2 overflow-auto max-h-[50vh] ${materiasFiltradas.length > 0 && 'pr-2'}`}>
                    {materiasFiltradas.length === 0 && 
                      <div className='w-full py-4 px-2 border-app-border border rounded-md font-normal text-sm text-center'>No hay resultados</div>
                    }

                    {materiasFiltradas.map((materia) => {
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
            <div className='h-full w-full flex flex-col space-y-2 justify-center items-end'>
              <Schedule ref={scheduleRef}/>
              <div className='w-full flex justify-center'>
                <Button disabled={loadingExport} variant='ghost' className='cursor-pointer' onClick={handleExport}>
                  {loadingExport ? 
                    <Loader2Icon className='w-4 h-4 text-app-primary animate-spin'/> :
                    <Download className='w-4 h-4 text-app-primary'/>
                  }
                  Exportar como imagen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Toaster richColors/>
    </>
  );
}
