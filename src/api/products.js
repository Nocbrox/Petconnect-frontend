const API_BASE = "https://petconnect-backend-production.up.railway.app"; // Cambia a la URL real del backend desplegado

export const fetchDestacados = async () => {
  const response = await fetch(`${API_BASE}/productos_destacados.php`);
  if (!response.ok) throw new Error('Failed to fetch destacados');
  return response.json();
};

export const fetchCatalogo = async () => {
  const response = await fetch(`${API_BASE}/productos_catalogo.php`);
  if (!response.ok) throw new Error('Failed to fetch catalogo');
  return response.json();
};

export const fetchProducto = async (id) => {
  const response = await fetch(`${API_BASE}/getProductos.php?id=${id}`);
  if (!response.ok) throw new Error('Failed to fetch producto');
  const data = await response.json();
  return data; // Assuming it returns the product object
};

export const agregarAlCarritoAPI = async (id, quantity) => {
  const response = await fetch(`${API_BASE}/agregarAlCarrito.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, quantity })
  });
  if (!response.ok) throw new Error('Failed to add to cart');
  return response.json();
};
