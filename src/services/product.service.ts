import { getProductsApi, createProductApi, deleteProductApi } from '../api/endpoints/product.api';
import { Product, ProductInput } from '../types/product.types';

/**
 * Service managing catalog inventories and dashboard calculation analytics.
 * Separates UI controllers from core backend communication protocols.
 */
export class ProductService {
  /**
   * Fetch paginated list of catalog products.
   */
  public static async getProducts(
    page = 1,
    limit = 10,
    category?: string
  ): Promise<{ items: Product[]; total: number }> {
    try {
      const response = await getProductsApi(page, limit, category);
      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (error) {
      console.error('[ProductService] Error getting products:', error);
      throw error;
    }
  }

  /**
   * Submits product specifications for storage creation.
   */
  public static async addProduct(input: ProductInput): Promise<Product> {
    try {
      const response = await createProductApi(input);
      return response.data;
    } catch (error) {
      console.error('[ProductService] Error creating product:', error);
      throw error;
    }
  }

  /**
   * Delete product by identifier.
   */
  public static async removeProduct(id: string): Promise<string> {
    try {
      const response = await deleteProductApi(id);
      return response.data;
    } catch (error) {
      console.error(`[ProductService] Error deleting product ${id}:`, error);
      throw error;
    }
  }

  /**
   * Calculates structural dashboard metrics (Totals, inventory value, low stock warnings).
   */
  public static calculateDashboardMetrics(products: Product[]): {
    totalProducts: number;
    totalStockValue: number;
    lowStockCount: number;
    highestPricedItem: string;
  } {
    if (!products.length) {
      return { totalProducts: 0, totalStockValue: 0, lowStockCount: 0, highestPricedItem: 'N/A' };
    }

    let stockValue = 0;
    let lowStock = 0;
    let highestPrice = 0;
    let highestName = 'N/A';

    products.forEach((p) => {
      stockValue += p.price * p.stock;
      if (p.stock < 15) {
        lowStock++;
      }
      if (p.price > highestPrice) {
        highestPrice = p.price;
        highestName = p.name;
      }
    });

    return {
      totalProducts: products.length,
      totalStockValue: parseFloat(stockValue.toFixed(2)),
      lowStockCount: lowStock,
      highestPricedItem: highestName,
    };
  }
}
