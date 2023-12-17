export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type SuccessProductState = {
  state: 'Success',
  data: Product[],
}

export type ErrorState = {
  state: 'Error',
  error: { message: string },
}

export type ProductState = SuccessProductState | ErrorState

export type formState = {
  data?: unknown;
  message: string | null;
  type?: 'info' | 'success' | 'warning' | 'error' | null,
}
