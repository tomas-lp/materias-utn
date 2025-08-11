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
import type { Materia, MateriaCursando, Comision } from '@/types/data';

type Props = {
  materiasSeleccionadas: MateriaCursando[];
  addMateriaToSeleccionadas: (materia: MateriaCursando) => void;
  removeMateriaFromSeleccionadas: (idMateria: string) => void;
  variant: 'before' | 'active' | 'after';
  onSubmit: () => void;
};

export default function WelcomeStep2(props: Props) {
  const [busqueda, setBusqueda] = useState('');
  const [materiasFiltradas, setMateriasFiltradas] =
    useState<Materia[]>(materias);

  function seleccionarMateria(materia: MateriaCursando) {
    props.addMateriaToSeleccionadas(materia);
  }

  function removerMateria(idMateria: string) {
    props.removeMateriaFromSeleccionadas(idMateria);
  }

  useEffect(() => {
    let filtradas = materias.filter((materia) =>
      materia.materia.toLowerCase().includes(busqueda.toLowerCase())
    );

    const arrMateriasSeleccionadas = props.materiasSeleccionadas.map(
      (m) => m.materia
    );

    filtradas = filtradas.filter(
      (materia) => !arrMateriasSeleccionadas.includes(materia)
    );
    setMateriasFiltradas(filtradas);
  }, [busqueda, props.materiasSeleccionadas]);

  return (
    <>
      <motion.div className='h-full' layout style={{ width: '100%' }}>
        {props.variant === 'before' && (
          <Card className='w-full h-full flex flex-col justify-end'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>2</span>
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
              <SearchInput
                placeholder='Ingresa un nombre...'
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <div className='flex flex-row space-x-4 overflow-auto'>
                <div className='flex flex-col space-y-2 w-full overflow-auto'>
                  {materiasFiltradas.length === 0 && 
                    <div className='w-full py-4 px-2 border-app-border border rounded-md font-normal text-sm text-center'>No hay resultados</div>
                  }

                  {materiasFiltradas.map((materia) => (
                    <WelcomeListItem
                      key={materia.id}
                      variant='default'
                      materia={materia}
                      handleAdd={(comision: Comision) => seleccionarMateria({materia: materia, comision: comision})}
                      handleRemove={(idMateria: string) => removerMateria(idMateria)}
                    />
                  ))}
                </div>
                <div className='flex flex-col space-y-4 w-full'>
                  <motion.div layout className='flex flex-col space-y-2'>
                    {props.materiasSeleccionadas.map((materia) => (
                      <WelcomeListItem
                        key={materia.materia.id}
                        variant='selected'
                        materia={materia.materia}
                        handleRemove={(idMateria: string) => removerMateria(idMateria)}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant='default' onClick={props.onSubmit}>
                Continuar
              </Button>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'after' && (
          <Card className='w-full h-full flex flex-col justify-end bg-app-border'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>2</span>
            </CardFooter>
          </Card>
        )}
      </motion.div>
    </>
  );
}
