import { BsGithub, BsPaypal } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWbSunny, MdNightlight, MdQrCode } from "react-icons/md";

import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

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

import { Container, DrawerContainer } from "./styles";

const LanguagesMenu = dynamic(() => import("components/atom/LanguagesMenu"), {
  ssr: false,
});

const TopHeader: React.FC = () => {
  const { t } = useTranslation();
  const { themeNumber, toggleTheme } = useTheme();

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
            {themeNumber === 0 ? <MdOutlineWbSunny /> : <MdNightlight />}
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
                <strong>{t("common:about-the-project")}:</strong>
              </p>

              <p>
                <strong>{t("common:author")}:</strong>Dânio Filho
              </p>

              <a href="https://github.com/daniofilho/caverna-online-scoring-pad">
                <BsGithub />
                <strong>Github:</strong>
                {t("common:contribute")}
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
              <LanguagesMenu />
            </DrawerFooter>
          </DrawerContent>
        </DrawerContainer>
      </Drawer>
    </>
  );
};
export default TopHeader;
