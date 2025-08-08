import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import WelcomeOptionCard from './welcomeOptionCard';
import { motion } from 'motion/react';
import type { Materia, MateriaCursando } from '@/types/data';
// import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
// import { calcularPrerrequisitos } from '@/utils/data';
// import materias from '../../data/materias.json';
import { useMaterias } from '@/hooks/useMaterias';

type Props = {
  variant: 'before' | 'active' | 'after';
  onSubmit: () => void;
  materiasSeleccionadas: MateriaCursando[];
  addMateriasCursadas: (materias: string[]) => void;
  addMateriasAprobadas: (materias: string[]) => void;
};

export default function WelcomeStep3({variant, onSubmit, materiasSeleccionadas, addMateriasCursadas, addMateriasAprobadas} : Props) {
  const { listaMaterias, calcularPrerrequisitos } = useMaterias();
  const [materiasDudosas, setMateriasDudosas] = useState<Materia[]>([]);
  const [chequeadas, setChequeadas] = useState(0);
  
  useEffect(() => {
    const idsCursando = materiasSeleccionadas.map((m) => m.materia.id);
    const { materiasDebeCursar, materiasDebeAprobar } =
      calcularPrerrequisitos(idsCursando);

    const dudosas: Materia[] = listaMaterias.filter((materia) =>
      materiasDebeCursar.includes(materia.id)
    );
    setMateriasDudosas(dudosas);

    addMateriasAprobadas(materiasDebeAprobar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materiasSeleccionadas]);

  function agregarCursada(idMateria: string) {
    setChequeadas(c => c+1);
    addMateriasCursadas([idMateria]);
  }

  function agregarAprobada(idMateria: string) {
    setChequeadas(c => c+1);
    addMateriasAprobadas([idMateria]);
  }

  return (
    <>
      <motion.div className='h-full' layout style={{ width: '100%' }}>
        {variant === 'before' && (
          <Card className='w-full h-full flex flex-col justify-end'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>3</span>
            </CardFooter>
          </Card>
        )}

        {variant === 'active' && (
          <Card className='w-full h-full min-w-[36rem] overflow-hidden flex flex-col'>
            <CardHeader>
              <CardTitle className='text-3xl'>3. Un paso más</CardTitle>
              <CardDescription>
                Seleccioná tu condición actual en las siguientes materias.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col space-y-4 flex-grow overflow-auto mb-4 p-0 mx-6'>
              {materiasDudosas.map((materia, i) => (
                <WelcomeOptionCard
                  key={i}
                  materia={materia}
                  agregarCursada={agregarCursada}
                  agregarAprobada={agregarAprobada}
                />
              ))}
            </CardContent>
            <CardFooter>
              <Button variant='default' disabled={chequeadas < materiasDudosas.length} onClick={onSubmit}>
                Continuar
              </Button>
            </CardFooter>
          </Card>
        )}

        {variant === 'after' && (
          <Card className='w-full h-full flex flex-col justify-end bg-app-border'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>3</span>
            </CardFooter>
          </Card>
        )}
      </motion.div>
    </>
  );
}
