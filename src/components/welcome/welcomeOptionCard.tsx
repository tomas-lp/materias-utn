import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import type { Materia } from '@/types/data';
import { nombreNivel } from '@/utils/misc';
import { useState } from 'react';

type Props = {
  materia: Materia;
  agregarCursada: (idMateria: string) => void;
  agregarAprobada: (idMateria: string) => void;
};

export default function WelcomeOptionCard(props: Props) {
  const [estado, setEstado] = useState<'defecto' | 'regular' | 'aprobada'>(
    'defecto'
  );

  function handleClickRegular() {
    setEstado('regular');
    props.agregarCursada(props.materia.id);
  }

  function handleClickAprobada() {
    setEstado('aprobada');
    props.agregarAprobada(props.materia.id);
  }

  return (
    <>
      {estado === 'defecto' && (
        <Card className='w-full p-4 bg-bw text-app-primary'>
          <CardHeader className='p-0 mb-4'>
            <CardTitle className='font-semibold text-lg'>
              {props.materia.materia}
            </CardTitle>
            <CardDescription className='font-semibold text-app-primary'>
              {nombreNivel(props.materia.nivel)} año
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row space-x-4 p-0'>
            <Button
              variant='default'
              className='flex-1 hover:bg-app-cyan hover:text-app-primary cursor-pointer'
              onClick={handleClickRegular}
            >
              <Check />
              Regular
            </Button>
            <Button
              variant='default'
              className='flex-1 hover:bg-app-yellow hover:text-app-primary cursor-pointer'
              onClick={handleClickAprobada}
            >
              <Star />
              Aprobada
            </Button>
          </CardContent>
        </Card>
      )}

      {estado === 'regular' && (
        <Card className='w-full p-4 bg-bw text-app-primary'>
          <CardHeader className='p-0 mb-4'>
            <CardTitle className='font-semibold text-lg'>
              {props.materia.materia}
            </CardTitle>
            <CardDescription className='font-semibold text-app-primary'>
              {nombreNivel(props.materia.nivel)} año
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row space-x-4 p-0'>
            <Button variant='ghost' className='w-full bg-app-cyan hover:bg-app-cyan cursor-default'>
              <Check />
              Regular
            </Button>
          </CardContent>
        </Card>
      )}

      {estado === 'aprobada' && (
        <Card className='w-full p-4 bg-bw text-app-primary'>
          <CardHeader className='p-0 mb-4'>
            <CardTitle className='font-semibold text-lg'>
              {props.materia.materia}
            </CardTitle>
            <CardDescription className='font-semibold text-app-primary'>
              {nombreNivel(props.materia.nivel)} año
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row space-x-4 p-0'>
            <Button variant='ghost' className='w-full bg-app-yellow hover:bg-app-yellow cursor-default'>
              <Star />
              Aprobada
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}
