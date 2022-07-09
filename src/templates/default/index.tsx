import TopHeader from "components/molecule/TopHeader";

import { MainContainer, Container } from "./styles";

interface ITemplateProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Template: React.FC<ITemplateProps> = ({ children, footer }) => (
  <MainContainer>
    <TopHeader />

    <Container>{children}</Container>

    {footer && <footer>{footer}</footer>}
  </MainContainer>
);

export default Template;
