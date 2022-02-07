/* eslint-disable no-unused-vars */
import { ReactNode, FunctionComponent } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

interface OptionsProps {
  children: ReactNode;
  className?: string;
}

const Options: FunctionComponent<OptionsProps> = ({ children, className }) => (
  <div className={className ?? 'flex items-start justify-evenly'}>{children}</div>
);

interface OptionLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const OptionLink: FunctionComponent<OptionLinkProps> = ({ children, href, className }) => (
  <Link href={href} passHref>
    <a>
      <div className={className ?? 'flex flex-col items-center'}>
        {children}
      </div>
    </a>
  </Link>
);

interface ModalOptionsProps {
  children: ReactNode;
  showModal: boolean;
  onClose: () => void;
}

const ModalOptions: FunctionComponent<ModalOptionsProps> = ({ children, showModal, onClose }) => (
  <div className={`${showModal ? 'fixed' : 'hidden'} bottom-0 z-20 shadow-inner flex flex-col justify-center w-full py-4 space-y-6 text-gray-900 bg-slate-50 h-52`}>
    {children}
    <Options className="flex justify-end pr-6">
      <FaTimes onClick={onClose} className="cursor-pointer" />
    </Options>
  </div>
);

export default Object.assign(ModalOptions, {
  Options,
  OptionLink,
});
