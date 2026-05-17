import { apiClient } from '../client';
import { ApiResponse, PaginatedResponse } from '../../types/api.types';
import { Product, ProductInput } from '../../types/product.types';

// InMemory database simulation for complete runnable demo - Exclusive Girls' Dress Boutique
let inMemoryProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Dior Premium Party Gown',
    description:
      'An elegant designer red party gown crafted in pure silk with premium embroidery. Perfect for elite gatherings.',
    price: 25500.0,
    category: 'Gowns',
    stock: 5,
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-2',
    name: 'Gucci Summer Floral Dress',
    description:
      'Beautiful lightweight summer dress with vibrant floral patterns, tailored with premium breathable fabrics.',
    price: 18000.0,
    category: 'Summer Dresses',
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-3',
    name: 'Classic Evening Silk Gown',
    description:
      'A luxurious dark-themed silk evening gown showcasing premium draping and a high-end designer finish.',
    price: 32000.0,
    category: 'Gowns',
    stock: 3,
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-4',
    name: 'Prada Sunshine Yellow Frock',
    description:
      'Bright and elegant yellow casual dress featuring a modern pleated skirt and comfortable regular fit.',
    price: 12500.0,
    category: 'Frocks',
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-5',
    name: 'Zara Elegant Cotton Dress',
    description:
      'Classic minimalist white cotton dress featuring exquisite lacework details and a breathable relaxed silhouette.',
    price: 8500.0,
    category: 'Casual Dresses',
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500&q=80',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-6',
    name: 'Elegant Evening White Gown',
    description:
      'Sophisticated pure white designer gown with dynamic cutouts and heavy sequined lace panels.',
    price: 28500.0,
    category: 'Gowns',
    stock: 4,
    imageUrl: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&q=80',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-7',
    name: 'Classy Blush Pink Gown',
    description:
      'High-fashion pink luxury gown tailored with dynamic soft silk overlays and a modern halter-neck.',
    price: 22000.0,
    category: 'Gowns',
    stock: 7,
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-8',
    name: 'Vintage Bohemian Dress',
    description:
      'A stylish bohemian style retro dress featuring vintage paisley prints and a comfortable relaxed flare.',
    price: 15000.0,
    category: 'Bohemian',
    stock: 6,
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80',
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-9',
    name: 'Nordic Summer Beachwear',
    description:
      'Flowy resort-style summer dress with elegant strap details and a beautiful modern flare.',
    price: 9500.0,
    category: 'Summer Dresses',
    stock: 9,
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80',
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
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
        input.imageUrl || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80',
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
