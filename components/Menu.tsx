'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const getClassNamesFor = (path: string, actualPath: string) => {
  console.log(path, actualPath);

  return clsx(
    'menu-item',
    {
      'active-menu': actualPath == path,
    },
  );
}

export default function Menu() {
  const actualPath = usePathname();
  return (
    <>
      <Link href="/" className={getClassNamesFor('/', actualPath)}>Index</Link>
      &nbsp; | &nbsp;
      <Link href="/portal" className={getClassNamesFor('/portal', actualPath)}>Portal Home</Link>
      &nbsp; | &nbsp;
      <Link href="/portal/test" className={getClassNamesFor('/portal/test', actualPath)}>Api List Test Objs</Link>
      &nbsp; | &nbsp;
      <Link href="/portal/test2" className={getClassNamesFor('/portal/test2', actualPath)}>Sequencial List Test Objs</Link>
      &nbsp; | &nbsp;
      <Link href="/portal/products" className={getClassNamesFor('/portal/products', actualPath)}>Products</Link>
      &nbsp; | &nbsp;
      <Link href="/logoff" className={getClassNamesFor('/logoff', actualPath)}>Logoff</Link>
      <br />
    </>
  );
}
