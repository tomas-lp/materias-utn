import materias from '../data/materias.json';

function calcularPrerrequisitos(currentlyStudying: string[]) {
  // Convertir IDs a strings por si acaso
  const currentlyStudyingIds = currentlyStudying.map(id => id.toString());
  
  // Inicializar conjuntos para evitar duplicados
  const materiasDebeCursar = new Set<string>();
  const materiasDebeAprobar = new Set<string>();
  
  // Cola para el algoritmo BFS
  const queue = [...currentlyStudyingIds];
  
  // Procesar cada materia en la cola
  while (queue.length > 0) {
    const currentId = queue.shift();
    
    // Encontrar la materia actual en la lista completa
    const currentSubject = materias.find(subject => subject.id === currentId);
    
    if (!currentSubject) continue;
    
    // Procesar prerrequisitos de cursada
    currentSubject.cursadas.forEach(prerequisiteId => {
      // Solo añadir a materiasDebeCursar si no está en materiasDebeAprobar
      if (!materiasDebeAprobar.has(prerequisiteId) && !materiasDebeCursar.has(prerequisiteId)) {
        materiasDebeCursar.add(prerequisiteId);
        queue.push(prerequisiteId);
      }
    });
    
    // Procesar prerrequisitos de aprobación
    currentSubject.aprobadas.forEach(prerequisiteId => {
      if (!materiasDebeAprobar.has(prerequisiteId)) {
        materiasDebeAprobar.add(prerequisiteId);
        // Remover de materiasDebeCursar si ya existe allí
        materiasDebeCursar.delete(prerequisiteId);
        // Añadir a la cola si aún no ha sido procesado
        if (!queue.includes(prerequisiteId)) {
          queue.push(prerequisiteId);
        }
      }
    });
  }
  
  // Excluir las materias que está cursando actualmente de los conjuntos de prerrequisitos
  currentlyStudyingIds.forEach(id => {
    materiasDebeCursar.delete(id);
    materiasDebeAprobar.delete(id);
  });
  
  // Convertir los conjuntos a arrays para el resultado final
  return {
    materiasDebeCursar: Array.from(materiasDebeCursar),
    materiasDebeAprobar: Array.from(materiasDebeAprobar)
  };
}

// Exportamos la función para uso en React
export { calcularPrerrequisitos };