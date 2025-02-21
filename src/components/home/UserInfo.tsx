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
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
  open?: boolean;
};

export default function UserInfo(props: Props) {
  return (
    <div className='relative'>
      <div className='flex items-center space-x-2 select-none cursor-pointer mb-2'>
        <div className='flex justify-center items-center bg-app-border py-1 px-3 rounded-lg leading-none'>
          <span className='uppercase text-app-secondary font-semibold'>
            ISI
          </span>
        </div>
        <div className='flex justify-center items-center space-x-1'>
          <span className='text-lg font-semibold'>Tomás</span>
          <ChevronDown className={`mt-[2px] ${props.open && 'rotate-180'}`} />
        </div>
      </div>

      {props.open && (
        <Card className='w-96 shadow-sm shadow-primary/10 absolute top-[100%] z-10'>
          <CardHeader>
            <CardTitle className='font-semibold text-base'>
              Configuración del usuario
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex flex-row items-center space-x-4'>
              <Label htmlFor='nombre' className='select-none'>
                Nombre
              </Label>
              <Input id='nombre' placeholder='David Martinez' />
            </div>
            <div className='flex flex-row items-center space-x-4'>
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
            <Button>Guardar cambios</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
