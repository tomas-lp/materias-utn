import { useEffect, useState } from 'react';
import materias from '../data/materias.json';

type UserData = {
  nombre: string;
  carrera: string;
  cursando: {
    id: string;
    comision: string;
  }[];
  regulares: {
    id: string;
  }[];
  aprobadas: {
    id: string;
  }[];
};

export function useUserData() {
  const [userData, setUserData] = useState<UserData | null>(null);

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

    setUserData({
      ...userData,
      regulares: [...userData.regulares, { id }],
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function removeRegular(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    setUserData({
      ...userData,
      regulares: userData.regulares.filter((materia) => materia.id !== id),
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function addAprobada(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    setUserData({
      ...userData,
      aprobadas: [...userData.aprobadas, { id }],
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function removeAprobada(id: string) {
    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    setUserData({
      ...userData,
      aprobadas: userData.aprobadas.filter((materia) => materia.id !== id),
    });

    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function puedeCursar(idMateria: string) {
    const materia = materias.find((materia) => materia.id === idMateria);

    if (!userData) {
      return console.log('Error: No hay datos de usuario');
    }

    if (!materia) {
      return console.log('Error: Materia no encontrada');
    }

    const requiereRegular = materia.cursadas || [];
    const requiereAprobada = materia.aprobadas || [];

    const regulares = userData.regulares.map((materia) => materia.id);
    const aprobadas = userData.aprobadas.map((materia) => materia.id);

    return (
      requiereRegular.every((id) => regulares.includes(id) || aprobadas.includes(id)) &&
      requiereAprobada.every((id) => aprobadas.includes(id))
    );
  }

  function horarioLibre(idMateria: string, comision: string) {
    const materia = materias.find((materia) => materia.id === idMateria);

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
        const foundMateria = materias.find((m) => m.id === materia.id);
        if (!foundMateria) {
          return;
        }
        const foundComision = foundMateria.comisiones.find(
          (c) => c.nombre === materia.comision
        );

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
