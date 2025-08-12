import { toPng } from 'html-to-image'

export function nombreNivel(nivel: string) {
  const niveles = ['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto'];

  try {
    return niveles[parseInt(nivel)];
  } catch (e) {
    console.log(e);
  }
}

export async function exportAsImage(element: HTMLElement) {
  const dataUrl = await toPng(element);

  const link = document.createElement('a');
  link.download = 'materias-utn.png';
  link.href = dataUrl;
  link.click();
}