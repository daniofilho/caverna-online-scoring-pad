import { Suspense } from "react";
import { BsGithub, BsPaypal } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWbSunny, MdNightlight, MdQrCode } from "react-icons/md";

import { useTranslation } from "next-i18next";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { useTheme } from "hooks/useTheme";

import LanguagesMenu from "components/atom/LanguagesMenu";

import { Container, DrawerContainer } from "./styles";

const TopHeader: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container>
        <nav>
          <button type="button" onClick={onOpen}>
            <GiHamburgerMenu />
          </button>

          <h1>{t("common:site-title")}</h1>

          <button type="button" onClick={() => toggleTheme()}>
            {theme.name === "dark" ? <MdOutlineWbSunny /> : <MdNightlight />}
          </button>
        </nav>
      </Container>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContainer>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <p>
                <strong>{t("common:about-the-project")}</strong>
              </p>

              <p>{t("common:disclaimer")}</p>

              <hr />

              <p>
                <strong>{t("common:author")}:</strong>Dânio Filho
              </p>

              <a
                href="https://github.com/daniofilho/caverna-online-scoring-pad"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
                <strong>{t("common:github-repository")}</strong>
              </a>

              <hr />

              <p>
                <strong>{t("common:support-me")}:</strong>
              </p>

              <p>
                <BsPaypal />
                <strong>Paypal:</strong>daniofilho@me.com
              </p>

              <p>
                <MdQrCode />
                <strong>Pix:</strong>pix@daniofilho.com.br
              </p>
            </DrawerBody>

            <DrawerFooter>
              <Suspense fallback={<div />}>
                <LanguagesMenu />
              </Suspense>
            </DrawerFooter>
          </DrawerContent>
        </DrawerContainer>
      </Drawer>
    </>
  );
};
export default TopHeader;
