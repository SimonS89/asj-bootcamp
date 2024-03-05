import { Product } from './Product';

export interface Cart {
  products: Product[];
  totalProducts: number;
}
