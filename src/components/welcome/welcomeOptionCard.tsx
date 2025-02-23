import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

export default function WelcomeOptionCard() {
  return (
    <>
      <Card className='w-full p-4 bg-bw text-app-primary'>
        <CardHeader className='p-0 mb-4'>
          <CardTitle className='font-semibold text-lg'>
            Nombre de la materia
          </CardTitle>
          <CardDescription className='font-semibold text-app-primary'>
            Primer año
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-row space-x-4 p-0'>
          <Button variant='neutral' className='w-full'>
            <Check />
            Regular
          </Button>
          <Button variant='neutral' className='w-full'>
            <Star />
            Aprobada
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
