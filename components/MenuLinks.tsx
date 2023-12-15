
import Link from 'next/link';

const handleClick = () => {
  const elem = document.activeElement as HTMLElement;
  if (elem) {
    elem?.blur();
  }
};

export default function MenuLinks() {
  return (
    <>
      <li onClick={handleClick}><Link href="/portal">Portal Home</Link></li>
      <li onClick={handleClick}><Link href="/portal/users">Usuários</Link></li>
      <li onClick={handleClick}><Link href="/portal/posts">Postagens</Link></li>
      <li onClick={handleClick}><Link href="/portal/test">Api List Test Objs</Link></li>
      <li onClick={handleClick}><Link href="/portal/test2">Sequencial List Test Objs</Link></li>
      <li onClick={handleClick}><Link href="/portal/products">Products</Link></li>
      <li onClick={handleClick}><Link href="/logoff">Logoff</Link></li>
    </>
  );
}
