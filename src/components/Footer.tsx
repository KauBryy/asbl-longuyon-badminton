import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Colonne 1 : Identité & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <div className="font-bold text-lg leading-tight">
                AS Badminton<br />Longuyon
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>Gymnase Léo Lagrange<br />Avenue du Général de Gaulle<br />54260 Longuyon</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:bad.longuyon@gmail.com" className="hover:text-primary transition-colors">
                  bad.longuyon@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+33611616166" className="hover:text-primary transition-colors">+33 6 11 61 61 66</a>
              </li>
            </ul>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1aGGikfTeq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white border border-border hover:bg-primary hover:text-white hover:border-primary text-muted-foreground flex items-center justify-center transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/badminton_longuyon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white border border-border hover:bg-primary hover:text-white hover:border-primary text-muted-foreground flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="lg:pl-12">
            <h3 className="font-bold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/club" className="text-sm text-muted-foreground hover:text-primary transition-colors">Le Club</Link>
              </li>
              <li>
                <Link to="/entrainements" className="text-sm text-muted-foreground hover:text-primary transition-colors">Entraînements</Link>
              </li>
              <li>
                <Link to="/licences" className="text-sm text-muted-foreground hover:text-primary transition-colors">Licences & Tarifs</Link>
              </li>
              <li>
                <Link to="/boutique" className="text-sm text-muted-foreground hover:text-primary transition-colors">Boutique</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Nos Soutiens */}
          <div>
            <h3 className="font-bold text-lg mb-6">Nos Partenaires</h3>
            <div className="space-y-4">
              {/* Placeholder Partenaire */}
              <div className="bg-white p-4 rounded-lg border border-border text-center">
                <span className="font-semibold text-muted-foreground block mb-1">Ville de Longuyon</span>
              </div>

              {/* KauBry Apps */}
              <a
                href="https://www.linkedin.com/in/pierreaubryit"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white hover:bg-gray-50 p-4 rounded-lg border border-border transition-all hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Rocket className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">KauBry Apps</div>
                    <div className="text-xs text-muted-foreground">Partenaire Digital</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Barre de bas de page */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            {/* Copyright */}
            <div className="text-center md:text-left">
              © 2025 ASBL
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
              <Link to="/confidentialite" className="hover:text-primary transition-colors">Politique de Confidentialité</Link>
            </div>

            {/* Crédits */}
            <div className="text-center md:text-right">
              <a
                href="https://www.linkedin.com/in/pierreaubryit"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-primary transition-colors font-medium"
              >
                Site offert et propulsé par 🚀 <span className="group-hover:underline">KauBry Apps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
