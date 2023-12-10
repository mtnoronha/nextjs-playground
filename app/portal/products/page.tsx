import React, { Suspense } from 'react';
import { list as listProducts } from '@/services/ProductService';
import ProductsComponent from '@/components/Products';
import LoadingProducts from '@/components/LoadingProducts';

async function RenderProducts() {
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
  return <>
    <h1>Server side component</h1>
    <h2>We&apos;ll list the products here ;)</h2>

    <Suspense fallback={<LoadingProducts />}>
      <RenderProducts />
    </Suspense>
  </>

}
