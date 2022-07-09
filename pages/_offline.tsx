import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

import PageIndex from "pages/Index";

import seo from "config/seo";

const MyPageIndex: React.FC = () => (
  <>
    <NextSeo title={`${seo().title}`} />

    <PageIndex />
  </>
);

export default MyPageIndex;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    ...(await serverSideTranslations(context.locale || "ptBR", ["common"])),
  },
});
