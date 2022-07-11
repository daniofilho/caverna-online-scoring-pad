import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

import Template from "templates/default";

import PageIndex from "pages/Index";
import PageFooter from "pages/Index/Footer";

import i18nFiles from "config/i18n-files";
import seo from "config/seo";

const MyPageIndex: React.FC = () => (
  <>
    <NextSeo title={`${seo().title}`} />

    <Template footer={<PageFooter />}>
      <PageIndex />
    </Template>
  </>
);

export default MyPageIndex;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    ...(await serverSideTranslations(context.locale || "ptBR", i18nFiles)),
  },
});
