import React, { ReactNode } from 'react';
import Link from 'next/link';
export default function Layout({ children }: { children: ReactNode }) {
  return <main>
    <Link href="/portal/profile">Profile</Link>
    &nbsp; | &nbsp;
    <Link href="/logoff">Logoff</Link>
    <br />
    { children }
  </main>
}
