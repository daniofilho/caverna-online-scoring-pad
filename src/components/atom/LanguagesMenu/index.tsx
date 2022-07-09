import Link from "next/link";
import { useRouter } from "next/router";

import Image from "components/atom/Image";

import { Container } from "./styles";

const LanguangesMenu: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href={router.asPath} locale="en" scroll={false}>
        <a className={router.locale === "en" ? "active" : ""}>
          <Image src="/images/flags/united-states.png" width={32} height={32} />
        </a>
      </Link>

      <Link href={router.asPath} locale="pt-BR" scroll={false}>
        <a className={router.locale === "pt-BR" ? "active" : ""}>
          <Image src="/images/flags/brazil.png" width={32} height={32} />
        </a>
      </Link>
    </Container>
  );
};
export default LanguangesMenu;
