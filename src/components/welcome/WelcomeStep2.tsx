import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { SearchInput } from '../ui/input';
import WelcomeListItem from './WelcomeListItem';
import { motion } from 'motion/react';
import materias from '@/data/materias.json';
import { useEffect, useState } from 'react';
import { Materia } from '@/types/data';

type Props = {
  materiasSeleccionadas: Materia[];
  setMateriasSeleccionadas: (materias: Materia[]) => void;
  variant: 'before' | 'active' | 'after';
  onSubmit: () => void;
};

export default function WelcomeStep2(props: Props) {
  const [busqueda, setBusqueda] = useState('');
  const [materiasFiltradas, setMateriasFiltradas] = useState<Materia[]>(materias);

  function seleccionarMateria(materia: Materia) {
    props.setMateriasSeleccionadas([...props.materiasSeleccionadas, materia]);
  }

  useEffect(() => {
    let filtradas = materias.filter((materia) => materia.materia.toLowerCase().includes(busqueda.toLowerCase()));
    filtradas = filtradas.filter((materia) => !props.materiasSeleccionadas.includes(materia));
    setMateriasFiltradas(filtradas);
  }, [busqueda, props.materiasSeleccionadas]);

  return (
    <>
      <motion.div className='h-full' layout style={{ width: '100%' }}>
        {props.variant === 'before' && (
          <Card className='w-full h-full flex flex-col justify-end bg-app-border'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>
                2
              </span>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'active' && (
          <Card className='w-full h-full min-w-[45rem] flex flex-col'>
            <CardHeader>
              <CardTitle className='text-3xl'>
                2. ¿Qué estás cursando?
              </CardTitle>
              <CardDescription>
                Seleccioná las materias que estés cursando actualmente.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col space-y-4 flex-grow overflow-hidden py-1'>
              <SearchInput placeholder='Ingresa un nombre...' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
              <div className='flex flex-row space-x-4 overflow-auto'>
                <div className='flex flex-col space-y-2 w-full overflow-auto'>
                  {materiasFiltradas.map((materia) =>
                    <WelcomeListItem
                      key={materia.id}
                      variant='default'
                      number={materia.nivel}
                      name={materia.materia}
                      onClick={() => seleccionarMateria(materia)}
                    />
                  )}
                </div>
                <div className='flex flex-col space-y-4 w-full'>
                  <div className='flex flex-col space-y-2'>
                    {props.materiasSeleccionadas.map((materia) =>
                      <WelcomeListItem
                        key={materia.id}
                        variant='selected'
                        number={materia.nivel}
                        name={materia.materia}
                      />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant='neutral' onClick={props.onSubmit}>Continuar</Button>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'after' && (
          <Card className='w-full h-full flex flex-col justify-end'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>
                2
              </span>
            </CardFooter>
          </Card>
        )}
      </motion.div>
    </>
  );
}
