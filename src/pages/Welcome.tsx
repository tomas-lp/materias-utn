import WelcomeStep1 from '@/components/welcome/WelcomeStep1';
import WelcomeStep2 from '@/components/welcome/WelcomeStep2';
import WelcomeStep3 from '@/components/welcome/WelcomeStep3';
import { useUserData } from '@/hooks/useUserData';
import { MateriaCursando } from '@/types/data';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function Welcome() {
  const navigate = useNavigate();
  const { userData, create } = useUserData();
  const [welcomeStep, setWelcomeStep] = useState(1);
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState<
    MateriaCursando[]
  >([]);
  const [materiasCursadas, setMateriasCursadas] = useState<string[]>([]);
  const [materiasAprobadas, setMateriasAprobadas] = useState<string[]>([]);

  function handleSubmit() {
    const materiasCursando = materiasSeleccionadas.map((m) => {
      return {
        id: m.materia.id,
        comision: m.comision.nombre,
      };
    });

    const data = {
      nombre: nombre,
      carrera: carrera,
      cursando: materiasCursando,
      regulares: materiasCursadas,
      aprobadas: materiasAprobadas,
    };
    create(data);
  }

  useEffect(() => {
    function loader() {
      if (userData) {
        return navigate('/');
      }
    }

    loader();
  }, [userData, navigate]);

  return (
    <div className='w-screen h-screen bg-bg flex justify-center items-center overflow-hidden'>
      <div className='w-full h-full max-h-[720px] max-w-screen-2xl p-8 flex flex-row justify-center items-center space-x-16 text-app-primary'>
        <WelcomeStep1
          nombre={nombre}
          carrera={carrera}
          setNombre={setNombre}
          setCarrera={setCarrera}
          variant={
            welcomeStep === 1 ? 'active' : welcomeStep < 1 ? 'before' : 'after'
          }
          onSubmit={() => setWelcomeStep(2)}
        />
        <WelcomeStep2
          materiasSeleccionadas={materiasSeleccionadas}
          setMateriasSeleccionadas={setMateriasSeleccionadas}
          variant={
            welcomeStep === 2 ? 'active' : welcomeStep < 2 ? 'before' : 'after'
          }
          onSubmit={() => setWelcomeStep(3)}
        />
        <WelcomeStep3
          variant={
            welcomeStep === 3 ? 'active' : welcomeStep < 3 ? 'before' : 'after'
          }
          onSubmit={handleSubmit}
          materiasSeleccionadas={materiasSeleccionadas}
          setMateriasCursadas={setMateriasCursadas}
          setMateriasAprobadas={setMateriasAprobadas}
        />
      </div>
    </div>
  );
}
