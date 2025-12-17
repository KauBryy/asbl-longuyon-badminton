import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Rocket } from "lucide-react";
import logoVille from "@/assets/logo-ville-longuyon.png";
import logoKaubry from "@/assets/logo-kaubry-apps.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12">

          {/* Colonne 1 : Identité & Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-900/20">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-2xl text-white leading-none tracking-tight">
                  AS Badminton
                </div>
                <div className="text-lg text-red-500 font-medium">Longuyon</div>
              </div>
            </div>

            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Le club de référence à Longuyon pour tous les passionnés de badminton. Rejoignez une communauté dynamique et accueillante.
            </p>

            <div className="space-y-4 pt-2">
              <a href="https://maps.google.com/?q=Gymnase+Léo+Lagrange+Longuyon" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                  <MapPin size={16} className="text-red-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors mt-1.5">Gymnase Léo Lagrange<br />Avenue du Général de Gaulle<br />54260 Longuyon</span>
              </a>

              <a href="mailto:bad.longuyon@gmail.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                  <Mail size={16} className="text-red-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">bad.longuyon@gmail.com</span>
              </a>

              <a href="tel:+33611616166" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                  <Phone size={16} className="text-red-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">+33 6 11 61 61 66</span>
              </a>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/share/1aGGikfTeq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-blue-600 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-zinc-800 hover:border-transparent"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/badminton_longuyon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-pink-600 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-zinc-800 hover:border-transparent"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="flex flex-col md:items-center">
            <div className="w-full max-w-xs">
              <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-600 rounded-full inline-block"></span>
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Accueil" },
                  { to: "/club", label: "Le Club" },
                  { to: "/entrainements", label: "Entraînements" },
                  { to: "/licences", label: "Licences & Tarifs" },
                  { to: "/boutique", label: "Boutique" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-500 transition-colors hover:translate-x-1 duration-200"
                    >
                      <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne 3 : Nos Soutiens */}
          <div className="flex flex-col md:items-end">
            <div className="w-full max-w-sm">
              <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-red-600 rounded-full inline-block"></span>
                Nos Partenaires
              </h3>
              <div className="grid gap-4">
                {/* Ville de Longuyon */}
                {/* Ville de Longuyon */}
                <a
                  href="https://www.longuyon.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 rounded-xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 p-2">
                      <img
                        src={logoVille}
                        alt="Ville de Longuyon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-red-500 transition-colors">Ville de Longuyon</div>
                      <div className="text-xs text-zinc-400 group-hover:text-zinc-300">Site Officiel</div>
                    </div>
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>

                {/* KauBry Apps */}
                <a
                  href="https://www.linkedin.com/in/pierreaubryit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 rounded-xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 p-1">
                      <img
                        src={logoKaubry}
                        alt="KauBry Apps"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-red-500 transition-colors">KauBry Apps</div>
                      <div className="text-xs text-zinc-400 group-hover:text-zinc-300">Transformation Digitale & Web</div>
                    </div>
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-red-900/10 border border-red-900/30">
                <p className="text-xs text-red-300 text-center font-medium">
                  Soutenez le sport local à Longuyon !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de bas de page */}
        <div className="max-w-6xl mx-auto border-t border-zinc-900 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} AS Badminton Longuyon.
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/mentions-legales" className="text-zinc-500 hover:text-red-500 transition-colors">Mentions Légales</Link>
              <Link to="/confidentialite" className="text-zinc-500 hover:text-red-500 transition-colors">Confidentialité</Link>
            </div>

            {/* Crédits */}
            <div className="text-sm">
              <a
                href="https://www.linkedin.com/in/pierreaubryit"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                title="Voir le profil LinkedIn du développeur"
              >
                <span>Propulsé par</span>
                <span className="font-bold text-red-500 group-hover:text-red-400">KauBry Apps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
