import { apiClient } from '../client';
import { ApiResponse, PaginatedResponse } from '../../types/api.types';
import { Product, ProductInput } from '../../types/product.types';

// InMemory database simulation for complete runnable demo - Premium Modest Bangladeshi Showroom
let inMemoryProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'প্রিমিয়াম ঢাকাই জামদানী শাড়ি',
    description:
      'খাঁটি সুতি সুতা ও নিখুঁত তাঁত বুননে তৈরি ঐতিহ্যবাহী ঢাকাই জামদানী শাড়ি। এটি আপনার যেকোনো উৎসবের আমেজকে করবে অনন্য, মার্জিত ও আভিজাত্যপূর্ণ।',
    price: 18500.0,
    category: 'শাড়ি (Sarees)',
    stock: 6,
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-2',
    name: 'ঐতিহ্যবাহী রাজশাহী সিল্ক শাড়ি',
    description:
      'উজ্জ্বল তুত সিল্ক ও গোল্ডেন সুতার নিখুঁত এমব্রয়ডারি করা ঐতিহ্যবাহী রাজশাহী সিল্ক শাড়ি। মার্জিত ডিজাইন যা অত্যন্ত ক্লাসি ও রাজকীয় লুক এনে দেয়।',
    price: 16000.0,
    category: 'শাড়ি (Sarees)',
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&q=80',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-3',
    name: 'ডিজাইনার আনারকলি সালোয়ার কামিজ',
    description:
      'প্রিমিয়াম জর্জেট ও সিল্কের সমন্বয়ে তৈরি এক্সক্লুসিভ ও মার্জিত আনারকলি সেট। গর্জিয়াস জড়ির কাজ এবং নিখুঁত এমব্রয়ডারি করা ওড়না আপনার ব্যক্তিত্বে যোগ করবে নতুন মাত্রা।',
    price: 12500.0,
    category: 'সালোয়ার কামিজ (Salwar Kameez)',
    stock: 4,
    imageUrl: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?w=500&q=80',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-4',
    name: 'এক্সক্লুসিভ গোল্ডেন বেনারসি লেহেঙ্গা',
    description:
      'মখমল ও কাতান বুননের ঐতিহ্যবাহী রাজকীয় বেনারসি লেহেঙ্গা। জমকালো গোল্ডেন জরি ও এমব্রয়ডারি কাজের এই ড্রেসটি যেকোনো বিয়ে বা জমকালো পার্টির জন্য উপযুক্ত।',
    price: 35000.0,
    category: 'লেহেঙ্গা (Lehengas)',
    stock: 3,
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80',
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-5',
    name: 'হাতের কাজের রাজকীয় সুতি পাঞ্জাবি',
    description:
      'আরামদায়ক প্রিমিয়াম সুতি কাপড়ে তৈরি আভিজাত্যপূর্ণ হাতের সূক্ষ্ম এমব্রয়ডারি ও কারচুপি করা পাঞ্জাবি। ঈদ কিংবা যেকোনো উৎসব-অনুষ্ঠানে মার্জিত ও ঐতিহ্যবাহী লুকের জন্য পারফেক্ট।',
    price: 5500.0,
    category: 'পাঞ্জাবি (Panjabis)',
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'prod-6',
    name: 'ডিজাইনার জর্জেট কুর্তি সেট',
    description:
      'আধুনিক ও মার্জিত ডিজাইনের প্রিমিয়াম ডিজিটাল প্রিন্ট জর্জেট কুর্তি ও ম্যাচিং প্যান্ট সেট। দৈনন্দিন অফিস বা ক্যাজুয়াল আউটিংয়ের জন্য দারুণ আরামদায়ক ও স্টাইলিশ।',
    price: 6800.0,
    category: 'কুর্তি (Kurtis)',
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=500&q=80',
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
