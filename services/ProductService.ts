import { ProductState } from "@/types";

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

export {
  list,
}

