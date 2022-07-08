import { useTranslation } from 'next-i18next';

import TopHeader from 'components/molecule/TopHeader';

import { Container } from './styles';

const Index: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TopHeader />

      <h1>{t('test')}</h1>
    </Container>
  );
};
export default Index;
