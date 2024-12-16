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
      <Card className='w-full'>
        <CardHeader>
          <CardTitle className='font-semibold text-xl'>
            Nombre de la materia
          </CardTitle>
          <CardDescription className='font-semibold text-sm text-app-primary'>
            Primer año
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-row space-x-4'>
          <Button className='w-full'>
            <Check />
            Regular
          </Button>
          <Button className='w-full'>
            <Star />
            Aprobada
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
