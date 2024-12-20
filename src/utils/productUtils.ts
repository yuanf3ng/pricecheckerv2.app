import { Product, PricePoint } from '../types';

export function updateProductPrice(
  product: Product, 
  newPrice: number, 
  newDate: string, 
  newCTNPrice?: number
): Product {
  return {
    ...product,
    currentPrice: newPrice,
    pricePerCTN: newCTNPrice,
    lastChecked: newDate,
    priceHistory: [
      ...product.priceHistory,
      { 
        price: newPrice, 
        date: newDate,
        pricePerCTN: newCTNPrice
      }
    ]
  };
}