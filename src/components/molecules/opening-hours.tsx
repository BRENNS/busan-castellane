import Image from "next/image";
import Logo from "@/public/assets/logo.jpg";

export const OpeningHours = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Logo */}
      <div className="relative">
        <Image
          src={Logo}
          alt="Logo Busan Castellane"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>

      {/* Horaires */}
      <div className="text-center space-y-3">
        <h3 className="font-serif text-xl md:text-2xl font-light text-white uppercase tracking-[0.3em]">
          Horaires d&apos;ouverture
        </h3>

        <div className="space-y-2">
          <div className="flex justify-center gap-1">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm md:text-base text-white/60 uppercase tracking-wider font-light">
                Midi
              </span>
              <span className="text-base md:text-lg text-white font-light tracking-wide">
                12:00 – 14:30
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm md:text-base text-white/60 uppercase tracking-wider font-light">
                Soir
              </span>
              <span className="text-base md:text-lg text-white font-light tracking-wide">
                19:00 – 22:30
              </span>
            </div>
          </div>
          <p className="text-xs md:text-sm font-light text-white/70 uppercase tracking-[0.25em] pt-1">
            Lundi – Samedi
          </p>
        </div>
      </div>

      {/* Adresse */}
      <div className="text-center space-y-1 pt-3 border-t border-white/10">
        <address className="not-italic text-white/70 text-sm md:text-base font-light leading-relaxed tracking-wide">
          6 Rue du Rouet 13006 Marseille, France
        </address>
      </div>
    </div>
  );
};
