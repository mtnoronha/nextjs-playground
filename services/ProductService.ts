type Product = {
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

type SuccessProductState = {
  state: 'Success',
  data: Product[],
}

type ErrorState = {
  state: 'Error',
  error: { message: string },
}

type ProductState = SuccessProductState | ErrorState

async function list(): Promise<ProductState> {
  const res: Response = await fetch('https://dummyjson.com/products');

  if (!res.ok) {
    return {
      state: 'Error',
      error: {
        message: res.statusText,
      },
    };
  }

  const data = await res.json();

  return {
    state: 'Success',
    data: data.products,
  };
}

module.exports = {
  list,
}

