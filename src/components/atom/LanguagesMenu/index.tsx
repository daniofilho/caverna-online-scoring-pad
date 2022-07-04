import Flag from "react-world-flags";

import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "./styles";

const LanguangesMenu: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href={router.asPath} locale="en" scroll={false}>
        <a className={router.locale === "en" ? "active" : ""}>
          <Flag code="US" />
        </a>
      </Link>

      <Link href={router.asPath} locale="pt-BR" scroll={false}>
        <a className={router.locale === "pt-BR" ? "active" : ""}>
          <Flag code="BR" />
        </a>
      </Link>
    </Container>
  );
};
export default LanguangesMenu;
