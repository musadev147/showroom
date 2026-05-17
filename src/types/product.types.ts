export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  createdAt: string;
}

export interface ProductInput {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}
