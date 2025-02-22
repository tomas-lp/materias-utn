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

type Props = {
  variant: string;
  onSubmit: () => void;
};

export default function WelcomeStep1(props: Props) {
  return (
    <>
      <motion.div className='h-full' layout style={{width: '100%'}}>
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
                <Input id='nombre' placeholder='David Martinez' />
              </div>
              <div className='flex flex-col space-y-2'>
                <Label htmlFor='carrera' className='select-none'>
                  ¿Qué carrera cursas?
                </Label>
                <Select>
                  <SelectTrigger id='carrera' className='w-full bg-bw text-text'>
                    <SelectValue
                      placeholder='Selecciona una'
                      className='select-none'
                    />
                  </SelectTrigger>
                  <SelectContent className='bg-bw text-text'>
                    <SelectGroup>
                      <SelectItem value='isi' className='select-none'>
                        Ingenieria en sistemas de informacion
                      </SelectItem>
                      <SelectItem value='iq' className='select-none'>
                        Ingenieria quimica
                      </SelectItem>
                      <SelectItem value='iem' className='select-none'>
                        Ingenieria electromecanica
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                1
              </span>
            </CardFooter>
          </Card>
        )}
      </motion.div>
    </>
  );
}
