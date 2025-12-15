import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold">AB</span>
              </div>
              <div>
                <div className="font-bold">AS Badminton</div>
                <div className="text-sm text-muted-foreground">Longuyon</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Un club convivial et passionné pour tous les niveaux depuis 2008.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/club" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Le Club
                </Link>
              </li>
              <li>
                <Link to="/entrainements" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Entraînements
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Compétitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>Salle des Sports Léo Lagrange<br />Longuyon, France</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:bad.longuyon@gmail.com" className="hover:text-primary transition-colors">
                  bad.longuyon@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+33611616166" className="hover:text-primary transition-colors">+33 6 11 61 61 66</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1aGGikfTeq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/badminton_longuyon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AS Badminton Longuyon - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
