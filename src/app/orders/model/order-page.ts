import { Order } from './order';

export interface OrderPage {
  orders: Order[];
  totalElements: number;
  totalPages: number;
}
