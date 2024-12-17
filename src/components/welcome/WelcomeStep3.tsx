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

type Props = {
  variant: 'before' | 'active' | 'after';
  onSubmit: () => void;
};

export default function WelcomeStep3(props: Props) {
  return (
    <>
      <motion.div className='h-full' layout style={{ width: '100%' }}>
        {props.variant === 'before' && (
          <Card className='w-full h-full flex flex-col justify-end'>
            <CardFooter>
              <span className='font-semibold text-7xl text-app-secondary'>
                3
              </span>
            </CardFooter>
          </Card>
        )}

        {props.variant === 'active' && (
          <Card className='w-full h-full min-w-[36rem]'>
            <CardHeader>
              <CardTitle className='text-3xl'>3. Un paso más</CardTitle>
              <CardDescription>
                Seleccioná tu condición actual en las siguientes materias.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col space-y-4'>
              <WelcomeOptionCard />
              <WelcomeOptionCard />
              {/* <WelcomeOptionCard /> */}
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
                3
              </span>
            </CardFooter>
          </Card>
        )}
      </motion.div>
    </>
  );
}
