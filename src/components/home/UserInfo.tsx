import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../ui/card';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useUserData } from '@/hooks/useUserData';

type Props = {
  open?: boolean;
};

export default function UserInfo(props: Props) {
  const { userData } = useUserData();

  return (
    <div className='relative w-fit'>
      <div className='flex items-center space-x-2 select-none cursor-pointer'>
        <Badge variant='default' className='font-semibold'>{userData?.carrera.toUpperCase()}</Badge>
        <div className='flex justify-center items-center space-x-1'>
          <span className='text-lg font-semibold'>{userData?.nombre}</span>
          <ChevronDown className={`mt-[2px] ${props.open && 'rotate-180'}`} />
        </div>
      </div>

      {props.open && (
        <Card className='w-96 shadow-sm shadow-primary/10 absolute top-[100%] z-10 mt-2'>
          <CardHeader>
            <CardTitle className='font-semibold text-base'>
              Configuración del usuario
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex flex-col items-start justify-start space-y-2'>
              <Label htmlFor='nombre' className='select-none'>
                Nombre
              </Label>
              <Input id='nombre' placeholder='David Martinez' />
            </div>
            <div className='flex flex-col items-start justify-start space-y-2'>
              <Label htmlFor='carrera' className='select-none'>
                Carrera
              </Label>
              <Select>
                <SelectTrigger id='carrera' className='w-full text-start'>
                  <SelectValue
                    placeholder='Selecciona una'
                    className='select-none'
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='isi' className='select-none'>
                      Ingenieria en Sistemas de Informacion
                    </SelectItem>
                    <SelectItem value='iq' className='select-none'>
                      Ingenieria Quimica
                    </SelectItem>
                    <SelectItem value='iem' className='select-none'>
                      Ingenieria Electromecanica
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex items-end space-x-2'>
              <Checkbox id='mostrarAprobadas' />
              <label
                htmlFor='mostrarAprobadas'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none cursor-pointer'
              >
                Mostrar materias ya aprobadas
              </label>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant='default'>Guardar cambios</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
