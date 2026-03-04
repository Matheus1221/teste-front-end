import type { Product, ProductsResponse } from "../types/product";

const PRODUCTS_URL = "/api/produtos.json";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(PRODUCTS_URL);

  if (!res.ok) {
    throw new Error(`Falha ao carregar produtos: ${res.status}`);
  }

  const data: ProductsResponse = await res.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error("Resposta inválida do endpoint de produtos");
  }

  return data.products;
}
