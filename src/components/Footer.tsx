import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Colonne 1 : Identité & Contact (Largeur : 5/12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/20">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-2xl text-white leading-none tracking-tight">
                  AS Badminton
                </div>
                <div className="text-lg text-blue-400 font-medium">Longuyon</div>
              </div>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Le club de référence à Longuyon pour tous les passionnés de badminton. Rejoignez une communauté dynamique et accueillante.
            </p>

            <div className="space-y-4 pt-2">
              <a href="https://maps.google.com/?q=Gymnase+Léo+Lagrange+Longuyon" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <MapPin size={16} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors mt-1.5">Gymnase Léo Lagrange<br />Avenue du Général de Gaulle<br />54260 Longuyon</span>
              </a>

              <a href="mailto:bad.longuyon@gmail.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Mail size={16} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">bad.longuyon@gmail.com</span>
              </a>

              <a href="tel:+33611616166" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Phone size={16} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">+33 6 11 61 61 66</span>
              </a>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/share/1aGGikfTeq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-transparent"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/badminton_longuyon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-transparent"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation (Largeur : 3/12) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
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
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 duration-200"
                  >
                    <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Nos Soutiens (Largeur : 4/12) */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
              Nos Partenaires
            </h3>
            <div className="grid gap-4">
              {/* Ville de Longuyon */}
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-center h-20 group hover:border-blue-500/50 transition-colors">
                <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">Ville de Longuyon</span>
              </div>

              {/* KauBry Apps */}
              <a
                href="https://www.linkedin.com/in/pierreaubryit"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 same-height p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <Rocket className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-blue-400 transition-colors">KauBry Apps</div>
                    <div className="text-xs text-slate-400 group-hover:text-slate-300">Transformation Digitale & Web</div>
                  </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-blue-900/20 border border-blue-900/50">
              <p className="text-xs text-blue-300 text-center font-medium">
                Soutenez le sport local à Longuyon !
              </p>
            </div>
          </div>
        </div>

        {/* Barre de bas de page */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} AS Badminton Longuyon.
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/mentions-legales" className="text-slate-500 hover:text-blue-400 transition-colors">Mentions Légales</Link>
              <Link to="/confidentialite" className="text-slate-500 hover:text-blue-400 transition-colors">Confidentialité</Link>
            </div>

            {/* Crédits */}
            <div className="text-sm">
              <a
                href="https://www.linkedin.com/in/pierreaubryit"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
                title="Voir le profil LinkedIn du développeur"
              >
                <span>Propulsé par</span>
                <span className="font-bold text-blue-400 group-hover:text-blue-300">KauBry Apps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
