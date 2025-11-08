import { Paragraph } from "@/src/components/atoms/paragraph";

export const AboutTextGrid = () => {
  return (
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <Paragraph>
        Chef M. Ren Shaolin, 20 ans d&apos;expérience. Notre cuisine coréenne
        est une philosophie du repas : exigence, goût juste et hygiène
        exemplaire, pour que chacun reparte comblé par le voyage.
      </Paragraph>
      <Paragraph>
        Plus de 60 plats à la carte, du barbecue au kimchi. Une harmonie saine
        héritière d&apos;une tradition fortifiante. Notre vœu : votre santé… et
        que BUSAN devienne votre meilleur restaurant coréen.
      </Paragraph>
    </div>
  );
};