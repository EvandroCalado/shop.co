import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import { FooterItem, Logo } from '..';
import { company, faq, help, resources } from '../../utils/footerItems';

export const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] px-6 py-6 md:px-16 lg:px-24">
      <div className="mb-8 flex flex-col items-center md:flex-row">
        <div className="mb-6 space-y-4 md:w-1/5">
          <Logo />
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex items-center gap-4">
            <Twitter className="h-8 w-8 cursor-pointer rounded-full border border-black/50 p-1.5 duration-150 hover:bg-black/95 hover:text-white" />

            <Facebook className="h-8 w-8 cursor-pointer rounded-full border border-black/50 p-1.5 duration-150 hover:bg-black/95 hover:text-white" />

            <Instagram className="h-8 w-8 cursor-pointer rounded-full border border-black/50 p-1.5 duration-150 hover:bg-black/95 hover:text-white" />

            <Github className="h-8 w-8 cursor-pointer rounded-full border border-black/50 p-1.5 duration-150 hover:bg-black/95 hover:text-white" />
          </div>
        </div>

        <div className="flex w-full items-center justify-between md:w-4/5">
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-around">
            <FooterItem title="company" links={company} />
            <FooterItem title="help" links={help} />
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-around">
            <FooterItem title="faq" links={faq} />
            <FooterItem title="resources" links={resources} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 py-4 md:flex-row">
        <div className="capitalize text-zinc-500">
          shop.co © {new Date().getFullYear()}, all rights reserved
        </div>
        <div className="flex items-center">
          <Image
            src="/badge/visa.png"
            alt="visa"
            width={80}
            height={130}
            priority
          />
          <Image
            src="/badge/master.png"
            alt="master"
            width={80}
            height={130}
            priority
          />
          <Image
            src="/badge/paypal.png"
            alt="paypal"
            width={80}
            height={130}
            priority
          />
          <Image
            src="/badge/appleplay.png"
            alt="appleplay"
            width={80}
            height={130}
            priority
          />
          <Image
            src="/badge/googleplay.png"
            alt="googleplay"
            width={80}
            height={130}
            priority
          />
        </div>
      </div>
    </footer>
  );
};
