const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchUniversities() {
  const response = await fetch(`${BASE_URL}/uniguia/api/v1/universidades`);
  if (!response.ok) throw new Error('Error al obtener universidades');
  return response.json();
}

export async function addUniversity(data) {
  const response = await fetch(`${BASE_URL}/uniguia/api/v1/universidades`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error('Error al agregar universidad');
  return response.json();
}
