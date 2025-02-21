import UserInfo from '@/components/home/UserInfo';
import { SearchInput } from '@/components/ui/input';
import ListItem from '@/components/home/ListItem';
import materias from '../data/materias.json'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-app-background flex justify-center items-center'>
      <div className='w-full p-8 max-w-screen-2xl h-full grid grid-cols-2'>
        <div className='border-r border-app-border flex flex-col space-y-16'>
          <UserInfo/>

          <div className='flex flex-col w-full pr-8 max-w-80 space-y-4'>
            <span className='text-2xl font-semibold sticky'>Materias</span>
            <SearchInput placeholder='Ingresa un nombre...' />
            <div className='flex flex-col w-full space-y-2 pr-2 overflow-auto max-h-[50vh]'>
              {materias.map((materia) => {
                return <ListItem name={materia.materia} number={materia.nivel} variant='bloqueada' />
              })}
            </div>
          </div>
        </div>
        <div className=''></div>
      </div>
    </div>
  );
}
