import { useMaterias } from './useMaterias';
import { useUserDataStore } from '../store/userDataStore';

export function useUserData() {
  const { getMateriaById, getComisionByName } = useMaterias();
  const {
    userData,
    darkMode,
    setUserData,
    addCursando,
    addRegular,
    addAprobada,
    removeCursando,
    removeRegular,
    removeAprobada,
    setTemporal,
    clearTemporal,
    toggleDarkMode,
  } = useUserDataStore();


  function puedeCursar(idMateria: string) {
    const materia = getMateriaById(idMateria);
    if (!userData) {
      console.log('Error: No hay datos de usuario');
      return {};
    }
    if (!materia) {
      console.log('Error: Materia no encontrada');
      return {};
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
        const foundComision = getComisionByName(materia.id, materia.comision);
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

  function addCursandoConHorario(id: string, comision: string) {
    if (!horarioLibre(id, comision)) {
      throw new Error('No hay horario libre para esta materia');
    }
    
    addCursando(id, comision);
    clearTemporal();
  }

  return {
    userData,
    darkMode,
    create: setUserData,
    addCursando: addCursandoConHorario,
    addRegular,
    addAprobada,
    removeCursando,
    removeRegular,
    removeAprobada,
    setTemporal, // Para establecer una materia temporal
    clearTemporal, // Para limpiar la materia temporal
    puedeCursar,
    horarioLibre,
    toggleDarkMode,
  };
}
