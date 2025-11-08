import { Paragraph } from "@/src/components/atoms/paragraph";

export const AboutTextGrid = () => {
  return (
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <Paragraph>
        Au cœur de Castellane, Busan apporte l&apos;authentique cuisine coréenne
        à Marseille. Notre restaurant vous transporte en Corée, où chaque plat
        célèbre une tradition millénaire désormais accessible aux Marseillais.
      </Paragraph>
      <Paragraph>
        Barbecue coréen, kimchi maison et plus de 60 spécialités authentiques.
        Chez Busan Castellane, la cuisine coréenne à Marseille devient votre
        nouvelle référence dans le 6ème arrondissement.
      </Paragraph>
    </div>
  );
};
