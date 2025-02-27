export function nombreNivel(nivel: string) {
  const niveles = ['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto'];

  try {
    return niveles[parseInt(nivel)];
  } catch (e) {
    console.log(e);
  }
}