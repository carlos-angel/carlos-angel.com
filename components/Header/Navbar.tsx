import Link from 'next/link';
import Networks from 'components/Header/Networks';
import { FaRegMoon } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="fixed z-10 hidden w-full px-6 text-base font-semibold shadow-md bg-slate-50 h-14 md:flex md:justify-between md:items-center text-slate-700">
      <section>
        <Link href="/">carlos-angel.com</Link>
      </section>
      <section className="flex items-center justify-center space-x-6">
        <Link href="/">Inicio</Link>
        <Link href="#about">Acerca De</Link>
        <Link href="#blog">Blog</Link>
        <Link href="#skills">Habilidades</Link>
        <Link href="#projects">Proyectos</Link>
        <FaRegMoon />
      </section>
      <Networks />
    </nav>
  );
}

export default Navbar;
