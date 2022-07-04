import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

import { Container } from "./styles";

const LanguagesMenu = dynamic(() => import("components/atom/LanguagesMenu"), {
  ssr: false,
});

const Index: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LanguagesMenu />

      <h1>{t("test")}</h1>
    </Container>
  );
};
export default Index;
