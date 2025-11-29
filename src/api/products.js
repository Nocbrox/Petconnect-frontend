const API_BASE = "https://petconnect-backend-production.up.railway.app/api";

// Productos destacados
export const fetchDestacados = async () => {
  const response = await fetch(`${API_BASE}/productos_destacados.php`);
  if (!response.ok) throw new Error("Failed to fetch destacados");
  return response.json();
};

// Catálogo completo
export const fetchCatalogo = async () => {
  const response = await fetch(`${API_BASE}/productos_catalogo.php`);
  if (!response.ok) throw new Error("Failed to fetch catalogo");
  return response.json();
};

// Obtener un producto por ID
export const fetchProducto = async (id) => {
  const response = await fetch(`${API_BASE}/getProductos.php?id=${id}`);
  if (!response.ok) throw new Error("Failed to fetch producto");
  return response.json();
};


