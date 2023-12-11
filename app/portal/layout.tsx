import { ReactNode } from 'react';
import Menu from '@/components/Menu';

export default function Layout({ children }: { children: ReactNode }) {
  return <main>
    <Menu />
    { children }
  </main>
}
