import Link from 'next/link';
import Networks from 'components/Header/Networks';
import { FaRegMoon } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-slate-50 shadow-md w-full h-14 flex justify-between items-center px-6 font-semibold text-base text-slate-700 fixed z-10">
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
