import { useEffect, useState } from 'react';
// import materias from '../data/materias.json';
import { useMaterias } from './useMaterias';

type UserData = {
  nombre: string;
  carrera: string;
  cursando: {
    id: string;
    comision: string;
  }[];
  regulares: string[];
  aprobadas: string[];
};

export function useUserData() {
  const { getMateriaById, getComisionByName } = useMaterias();
  const [userData, setUserData] = useState<UserData | null>();

  useEffect(() => {
    const rawData = localStorage.getItem('userData');

    if (!rawData) {
      return setUserData(null);
    }

    const parsedData: UserData = JSON.parse(rawData);

    setUserData(parsedData);
  }, []);

  function create(data: UserData) {
    setUserData(data);
    localStorage.setItem('userData', JSON.stringify(data));
  }

  function addCursando(id: string, comision: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    setUserData({
      ...userData,
      cursando: [...userData.cursando, { id, comision }],
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function removeCursando(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    setUserData({
      ...userData,
      cursando: userData.cursando.filter((materia) => materia.id !== id),
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function addRegular(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    removeCursando(id);

    setUserData({
      ...userData,
      regulares: [...userData.regulares, id],
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function removeRegular(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    setUserData({
      ...userData,
      regulares: userData.regulares.filter((idMateria) => idMateria !== id),
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function addAprobada(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    removeCursando(id);
    removeAprobada(id);

    setUserData({
      ...userData,
      aprobadas: [...userData.aprobadas, id],
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function removeAprobada(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    setUserData({
      ...userData,
      aprobadas: userData.aprobadas.filter((idMateria) => idMateria !== id),
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function puedeCursar(idMateria: string) {
    const materia = getMateriaById(idMateria);

    if (!userData) {
      console.log('Error: No hay datos de usuario');
      return {}
    }

    if (!materia) {
      console.log('Error: Materia no encontrada');
      return {}
    }

    const requiereRegular = materia.cursadas || [];
    const requiereAprobada = materia.aprobadas || [];

    const noCumpleRegular = requiereRegular.filter(
      (id) =>
        !userData.regulares.includes(id) && !userData.aprobadas.includes(id)
    );
    const noCumpleAprobada = requiereAprobada.filter(
      (id) => !userData.aprobadas.includes(id)
    );

    return {
      puede: noCumpleRegular.length === 0 && noCumpleAprobada.length === 0,
      noCumpleRegular,
      noCumpleAprobada,
    };
  }

  function horarioLibre(idMateria: string, comision: string) {
    const materia = getMateriaById(idMateria);

    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    if (!materia) {
      return console.log('Error: Materia no encontrada');
    }

    const horarioMateria = materia.comisiones.find(
      (c) => c.nombre === comision
    )?.horario;

    if (!horarioMateria) {
      return console.log('Error: Comision no encontrada');
    }

    const horariosCursando = userData.cursando
      .map((materia) => {
        const foundComision = getComisionByName(materia.id, materia.comision)

        if (!foundComision) {
          return;
        }

        return foundComision.horario;
      })
      .filter((h) => h !== undefined);

    return horarioMateria.every((horario) => {
      return horariosCursando.every((h) => {
        return h.every(
          (hdia) =>
            hdia.dia !== horario.dia ||
            hdia.desde >= horario.hasta ||
            hdia.hasta <= horario.desde
        );
      });
    });
  }

  return {
    userData,
    create,
    addCursando,
    addRegular,
    addAprobada,
    removeCursando,
    removeRegular,
    removeAprobada,
    puedeCursar,
    horarioLibre,
  };
}
