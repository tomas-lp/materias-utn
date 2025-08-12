import materias from '@/data/materias.json';
import type { Materia } from '@/types/data';
import { useEffect, useState } from 'react';

export function useMaterias() {
  const [listaMaterias, setListaMaterias] = useState<Materia[]>(materias);

  useEffect(() => {
    setListaMaterias(materias);
  }, []);

  function getMateriaById(idMateria: string) {
    return listaMaterias.find((m) => m.id === idMateria);
  }

  function getComisionByName(idMateria: string, comision: string) {
    const materia = listaMaterias.find((m) => m.id === idMateria);
    return materia?.comisiones.find((c) => c.nombre === comision);
  }

  function calcularPrerrequisitos(materiasCursando: string[]) {
    // Convertir IDs a strings por si acaso
    const IdsMateriasCursando = materiasCursando.map((id) => id.toString());

    // Inicializar conjuntos para evitar duplicados
    const materiasDebeCursar = new Set<string>();
    const materiasDebeAprobar = new Set<string>();

    // Cola para el algoritmo BFS
    const cola = [...IdsMateriasCursando];

    // Procesar cada materia en la cola
    while (cola.length > 0) {
      const idActual = cola.shift();

      // Encontrar la materia actual en la lista completa
      const materiaActual = listaMaterias.find(
        (materia) => materia.id === idActual
      );

      if (!materiaActual) continue;

      // Procesar prerrequisitos de cursada
      materiaActual.cursadas.forEach((idPrerequisito) => {
        // Solo añadir a materiasDebeCursar si no está en materiasDebeAprobar
        if (
          !materiasDebeAprobar.has(idPrerequisito) &&
          !materiasDebeCursar.has(idPrerequisito)
        ) {
          materiasDebeCursar.add(idPrerequisito);
          cola.push(idPrerequisito);
        }
      });

      // Procesar prerrequisitos de aprobación
      materiaActual.aprobadas.forEach((idPrerequisito) => {
        if (!materiasDebeAprobar.has(idPrerequisito)) {
          materiasDebeAprobar.add(idPrerequisito);
          // Remover de materiasDebeCursar si ya existe allí
          materiasDebeCursar.delete(idPrerequisito);
          // Añadir a la cola si aún no ha sido procesado
          if (!cola.includes(idPrerequisito)) {
            cola.push(idPrerequisito);
          }
        }
      });
    }

    // Excluir las materias que está cursando actualmente de los conjuntos de prerrequisitos
    IdsMateriasCursando.forEach((id) => {
      materiasDebeCursar.delete(id);
      materiasDebeAprobar.delete(id);
    });

    // Convertir los conjuntos a arrays para el resultado final
    return {
      materiasDebeCursar: Array.from(materiasDebeCursar),
      materiasDebeAprobar: Array.from(materiasDebeAprobar),
    };
  }

  return {
    listaMaterias,
    getMateriaById,
    getComisionByName,
    calcularPrerrequisitos
  };
}
