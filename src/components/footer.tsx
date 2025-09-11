import { memo } from "react";
import Image from "next/image";

import { ExternalLink } from "lucide-react";

import { Container } from "./container";
import { Logo } from "./logo";

export const FooterContent = [
  { name: "MoMo Website", url: "https://momo.vn" },
  {
    name: "MoMo Developer",
    url: "https://developers.momo.vn/v3/docs/payment/guides/home",
  },
  { name: "MoMo Business", url: "https://business.momo.vn/" },
  { name: "MoMo Careers", url: "https://momo.careers/" },
];

function Footer() {
  return (
    <footer className="footer py-6">
      <Container className="items-center justify-between lg:flex">
        <div className="items-center lg:flex lg:space-x-5">
          <Logo className="mx-1 size-11" />
          {FooterContent.map((item, idx) => (
            <a
              href={item.url}
              target="_blank"
              key={idx}
              className="flex cursor-pointer items-center space-x-2 px-2 py-3 font-mono text-sm hover:underline"
            >
              <span>{item.name}</span> <ExternalLink className="size-4" />
            </a>
          ))}
        </div>
        <a
          href="https://vn.linkedin.com/company/momo-mservice"
          className="px-2 py-3"
          target="_blank"
        >
          <Image
            className="ml-2 size-5 md:size-6"
            width={24}
            height={24}
            src="https://homepage.momocdn.net/fileuploads/svg/momo-file-231031091007.svg"
            alt=""
          />
        </a>
      </Container>
    </footer>
  );
}

export default memo(Footer);
