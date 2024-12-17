import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Command, CommandInput } from '@/components/ui/command';
import WelcomeListItem from '../ui/WelcomeListItem';
import { motion } from 'motion/react';

type Props = {
  variant: 'before' | 'active' | 'after';
  onSubmit: () => void;
};

export default function WelcomeStep2(props: Props) {
  return (
    <>
      <motion.div className='h-full' layout style={{ width: '100%' }}>
        {props.variant === 'before' && (
          <Card className='w-full h-full flex flex-col justify-end'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-secondary'>
                2
              </span>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'active' && (
          <Card className='w-full h-full min-w-[45rem]'>
            <CardHeader>
              <CardTitle className='text-3xl'>
                2. ¿Qué estás cursando?
              </CardTitle>
              <CardDescription>
                Seleccioná las materias que estés cursando actualmente.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col space-y-4'>
              <Command className='w-full'>
                <CommandInput placeholder='Ingresa un nombre...' />
              </Command>
              <div className='flex flex-row space-x-4'>
                <div className='flex flex-col space-y-4 w-full'>
                  <div className='flex flex-col space-y-2'>
                    <WelcomeListItem
                      variant='default'
                      number='1'
                      name='Nombre de la materia'
                    />
                    <WelcomeListItem
                      variant='default'
                      number='1'
                      name='Nombre de la materia'
                    />
                    <WelcomeListItem
                      variant='default'
                      number='1'
                      name='Nombre de la materia'
                    />
                    <WelcomeListItem
                      variant='default'
                      number='2'
                      name='Nombre de la materia'
                    />
                  </div>
                </div>
                <div className='flex flex-col space-y-4 w-full'>
                  <div className='flex flex-col space-y-2'>
                    <WelcomeListItem
                      variant='selected'
                      number='1'
                      name='Nombre de la materia'
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={props.onSubmit}>Continuar</Button>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'after' && (
          <Card className='w-full h-full flex flex-col justify-end bg-app-border'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-secondary'>
                2
              </span>
            </CardFooter>
          </Card>
        )}
      </motion.div>
    </>
  );
}
