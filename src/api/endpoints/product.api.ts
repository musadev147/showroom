import { apiClient } from '../client';
import { ApiResponse, PaginatedResponse } from '../../types/api.types';
import { Product, ProductInput } from '../../types/product.types';

// InMemory database simulation for complete runnable demo - Luxury Furniture Catalog
let inMemoryProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Compact Coffee Table',
    description:
      'Minimalist low-height coffee table with slide drawer and solid warm ashwood frame.',
    price: 129.0,
    category: 'Tables',
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-2',
    name: 'Nordic Sideboard Cabinet',
    description:
      'Spacious natural birchwood cabinet with sleek structural sliding panels and gold highlights.',
    price: 199.0,
    category: 'Cabinets',
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-3',
    name: 'Modern TV Console',
    description:
      'Low-profile media entertainment console featuring mesh wire storage and sleek oak shelves.',
    price: 149.0,
    category: 'Consoles',
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&q=80',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-4',
    name: 'White Utility Cabinet',
    description:
      'Multi-functional structural locker with mesh doors and powder-coated steel hardware.',
    price: 135.0,
    category: 'Cabinets',
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&q=80',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-5',
    name: 'Charcoal Sofa Bench',
    description:
      'Premium high-density foam daybed upholstered in luxurious organic slate wool textures.',
    price: 295.0,
    category: 'Sofas',
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-6',
    name: 'Vertical Drawer Dresser',
    description:
      'Slim vertical wooden tallboy dresser with structural maple drawer rails and brass pulls.',
    price: 159.0,
    category: 'Dressers',
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&q=80',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

/**
 * Fetch all products (supports simulated paging and categories)
 */
export async function getProductsApi(
  page = 1,
  limit = 10,
  category?: string
): Promise<ApiResponse<PaginatedResponse<Product>>> {
  const isMock = import.meta.env.VITE_API_BASE_URL.includes('example.com');

  if (isMock) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    let filtered = [...inMemoryProducts];
    if (category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const items = filtered.slice(start, end);
    const total = filtered.length;

    return {
      success: true,
      data: {
        items,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  const response = await apiClient.get<ApiResponse<PaginatedResponse<Product>>>('/products', {
    params: { page, limit, category },
  });
  return response.data;
}

/**
 * Creates a new product
 */
export async function createProductApi(input: ProductInput): Promise<ApiResponse<Product>> {
  const isMock = import.meta.env.VITE_API_BASE_URL.includes('example.com');

  if (isMock) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      name: input.name,
      description: input.description,
      price: input.price,
      category: input.category,
      stock: input.stock,
      imageUrl:
        input.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      createdAt: new Date().toISOString(),
    };
    inMemoryProducts.unshift(newProduct);
    return {
      success: true,
      data: newProduct,
      message: 'Product created successfully!',
    };
  }

  const response = await apiClient.post<ApiResponse<Product>>('/products', input);
  return response.data;
}

/**
 * Deletes a product by ID
 */
export async function deleteProductApi(id: string): Promise<ApiResponse<string>> {
  const isMock = import.meta.env.VITE_API_BASE_URL.includes('example.com');

  if (isMock) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    inMemoryProducts = inMemoryProducts.filter((p) => p.id !== id);
    return {
      success: true,
      data: id,
      message: 'Product deleted successfully!',
    };
  }

  const response = await apiClient.delete<ApiResponse<string>>(`/products/${id}`);
  return response.data;
}
