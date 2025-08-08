import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { motion } from 'motion/react';
import { useState } from 'react';

type Props = {
  nombre: string;
  carrera: string;
  setNombre: (nombre: string) => void;
  setCarrera: (carrera: string) => void;
  variant: string;
  onSubmit: () => void;
};

export default function WelcomeStep1(props: Props) {
  const [dataError, setDataError] = useState(false);

  function handleSubmit() {
    if(props.nombre === '' || props.carrera === '') {
      return setDataError(true);
    };

    props.onSubmit();
  }

  return (
    <>
      <motion.div className='h-full' layout style={{width: '100%'}}>
        {props.variant === 'before' && (
          <Card className='w-full h-full flex flex-col justify-end'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>
                1
              </span>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'active' && (
          <Card className='w-full h-full min-w-96'>
            <CardHeader>
              <CardTitle className='text-3xl'>1. Bienvenido</CardTitle>
              <CardDescription>Vamos a crear tu perfil.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex flex-col space-y-2'>
                <Label htmlFor='nombre' className='select-none'>
                  ¿Cuál es tu nombre?
                </Label>
                <Input className={`${dataError && props.nombre === '' && 'border-red-400'}`} placeholder='David Martinez' value={props.nombre} onChange={(e)=> props.setNombre(e.target.value)}/>
              </div>
              <div className='flex flex-col space-y-2'>
                <Label htmlFor='carrera' className='select-none'>
                  ¿Qué carrera cursas?
                </Label>
                <Select
                  value={props.carrera}
                  onValueChange={(value) => props.setCarrera(value)}
                >
                  <SelectTrigger id='carrera' className={`w-full text-text ${dataError && props.carrera === '' && 'border-red-400'}`}>
                    <SelectValue
                      placeholder='Selecciona una'
                      className='select-none'
                    />
                  </SelectTrigger>
                  <SelectContent className='text-text'>
                    <SelectGroup>
                      <SelectItem value='isi' className='select-none'>
                        Ingenieria en Sistemas de Información
                      </SelectItem>
                      <SelectItem value='iq' disabled className='select-none'>
                        Ingenieria Química (próximamente)
                      </SelectItem>
                      <SelectItem value='iem' disabled className='select-none'>
                        Ingenieria Electromecánica (próximamente)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant='default' onClick={handleSubmit}>Continuar</Button>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'after' && (
          <Card className='w-full h-full flex flex-col justify-end bg-app-border'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-primary'>
                1
              </span>
            </CardFooter>
          </Card>
        )}
      </motion.div>
    </>
  );
}
