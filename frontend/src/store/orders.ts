import { create as createStore } from "zustand";
import { devtools } from "zustand/middleware";
// Store
import ordersService from "src/services/orders/orders.service";

export type OrderDto = {
  productId: number;
  transactionId: number;
  quantity: number;
};

export type Order = {
  id: number;
  createdDate: string | Date;
  updatedDate: string | Date;
} & OrderDto;

export type OrderState = {
  isLoading: boolean;
  data: Order[];
  bulkCreate: (orders: OrderDto[]) => Promise<OrderDto[]>;
};

const useOrdersStore = createStore<OrderState>()(
  devtools((set) => ({
    isLoading: false,
    data: [],
    bulkCreate: async (orders: OrderDto[]): Promise<OrderDto[]> => {
      const createdOrders = await ordersService.bulkCreate(orders);
      return createdOrders;
    },
  }))
);

export default useOrdersStore;
