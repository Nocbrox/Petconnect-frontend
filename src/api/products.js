const API_BASE = "https://petconnect-backend-production.up.railway.app";

// Productos destacados
export const fetchDestacados = async () => {
  const response = await fetch(`${API_BASE}/productos_destacados.php`);
  if (!response.ok) throw new Error("Failed to fetch destacados");
  return response.json();
};

// Catálogo
export const fetchCatalogo = async () => {
  const response = await fetch(`${API_BASE}/productos_catalogo.php`);
  if (!response.ok) throw new Error("Failed to fetch catalogo");
  return response.json();
};

// Producto por ID
export const fetchProducto = async (id) => {
  const response = await fetch(`${API_BASE}/getProductos.php?id=${id}`);
  if (!response.ok) throw new Error("Failed to fetch producto");
  return response.json();
};

// Carrito (⚠ este archivo NO existe en el backend)
export const agregarAlCarritoAPI = async (id, quantity) => {
  const response = await fetch(`${API_BASE}/agregarAlCarrito.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, quantity }),
  });
  if (!response.ok) throw new Error("Failed to add to cart");
  return response.json();
};
