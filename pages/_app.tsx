/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Navbar from 'components/Header/Navbar';
import TabBar from 'components/Header/TabBar';
import ModalOptions from 'components/Header/TabBar/ModalOptions';
import {
  FaRegMoon, FaBars, FaHome, FaUser, FaBloggerB, FaBriefcase, FaFileAlt,
} from 'react-icons/fa';

function MyApp({ Component, pageProps }: AppProps) {
  const [showModalOptions, setShowModalOptions] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <TabBar>
        <TabBar.Logo>
          <Link href="/">carlos-angel.com</Link>
        </TabBar.Logo>
        <TabBar.Options>
          <FaRegMoon />
          <FaBars onClick={() => setShowModalOptions((option) => !option)} className="cursor-pointer" />
        </TabBar.Options>
      </TabBar>
      <ModalOptions
        showModal={showModalOptions}
        onClose={() => setShowModalOptions((option) => !option)}
      >
        <ModalOptions.Options>
          <ModalOptions.OptionLink href="/">
            <FaHome />
            Inicio
          </ModalOptions.OptionLink>
          <ModalOptions.OptionLink href="/">
            <FaUser />
            Acerca de
          </ModalOptions.OptionLink>
          <ModalOptions.OptionLink href="/">
            <FaBloggerB />
            Blog
          </ModalOptions.OptionLink>
        </ModalOptions.Options>
        <ModalOptions.Options>
          <ModalOptions.OptionLink href="/">
            <FaBriefcase />
            Proyectos
          </ModalOptions.OptionLink>
          <ModalOptions.OptionLink href="/">
            <FaFileAlt />
            Habilidades
          </ModalOptions.OptionLink>
        </ModalOptions.Options>
      </ModalOptions>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
