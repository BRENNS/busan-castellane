"use client";

import { useTranslations } from "next-intl";
import { Paragraph } from "@/src/components/atoms/paragraph";

export const AboutTextGrid = () => {
  const t = useTranslations();

  return (
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <Paragraph>
        {t('about-description-1')}
      </Paragraph>
      <Paragraph>
        {t('about-description-2')}
      </Paragraph>
    </div>
  );
};
