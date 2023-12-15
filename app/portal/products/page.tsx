import React, { Suspense } from 'react';
import { list as listProducts } from '@/services/ProductService';
import ProductsComponent from '@/components/Products';
import LoadingProducts from '@/components/LoadingProducts';
import { ProductState } from '@/types';
import { unstable_noStore as noStore } from 'next/cache';

async function RenderProducts() {
  noStore();
  const productState: ProductState = await listProducts();

  if (productState.state == 'Error') {
    return <div style={{ color: 'red' }}>
      <h1>Something went wrong: </h1>
      <p>productState.error.message</p>
    </div>
  }

  return <ProductsComponent products={productState.data}></ProductsComponent>;
}

export default async function Page() {
  return <div className="container py-2">
    <h1>Server side component</h1>
    <h2>We&apos;ll list the products here ;)</h2>

    <Suspense fallback={<LoadingProducts />}>
      <RenderProducts />
    </Suspense>
  </div>
}
