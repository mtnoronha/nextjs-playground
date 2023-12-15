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

export type User = {
  id: string;
  name: string | null;
  email: string;
}
