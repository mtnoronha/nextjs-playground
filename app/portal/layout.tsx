import React, { ReactNode } from 'react';
import Link from 'next/link';
export default function Layout({ children }: { children: ReactNode }) {
  return <main>
    <Link href="/">Index</Link>
    &nbsp; | &nbsp;
    <Link href="/portal">Portal Home</Link>
    &nbsp; | &nbsp;
    <Link href="/portal/test">Api List Test Objs</Link>
    &nbsp; | &nbsp;
    <Link href="/portal/test2">Sequencial List Test Objs</Link>
    &nbsp; | &nbsp;
    <Link href="/logoff">Logoff</Link>
    <br />
    { children }
  </main>
}
