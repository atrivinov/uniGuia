export async function fetchUniversities() {
  const response = await fetch('/uniguia/api/v1/universidades');
  if (!response.ok) throw new Error('Error al obtener universidades');
  return response.json();
}
