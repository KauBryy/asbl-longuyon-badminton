import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoClub from "@/assets/logo-club.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Le Club", path: "/club" },
    { name: "Informations Pratiques", path: "/entrainements" },
    { name: "Nos Licences", path: "/licences" },
    { name: "Compétitions", path: "/competitions" },
    { name: "Contact", path: "/contact" },
    { name: "Boutique", path: "https://www.badminton-longuyon.com/category/all-products", external: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoClub} 
              alt="AS Badminton Longuyon" 
              className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
            />
            <div className="hidden md:block">
              <div className="font-bold text-lg leading-tight">AS Badminton</div>
              <div className="text-sm text-muted-foreground">Longuyon</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => 
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-medium transition-all text-foreground hover:text-primary hover:bg-muted flex items-center gap-2"
                >
                  {link.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Rejoignez-nous</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 animate-fade-in">
            {navLinks.map((link) => 
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium transition-all text-foreground hover:text-primary hover:bg-muted flex items-center gap-2"
                >
                  {link.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="px-4 pt-4">
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90">
                <Link to="/contact">Rejoignez-nous</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
