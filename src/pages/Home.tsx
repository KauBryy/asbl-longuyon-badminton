import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Calendar, Heart } from "lucide-react";
import heroImage from "@/assets/hero-badminton.jpg";

const Home = () => {
  const yearsOfExistence = new Date().getFullYear() - 2008;

  const stats = [
    { icon: Users, value: "29+", label: "Licenciés" },
    { icon: Trophy, value: String(yearsOfExistence), label: "Années d'existence" },
    { icon: Calendar, value: "2", label: "Créneaux par semaine" },
    { icon: Heart, value: "100%", label: "Convivialité" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-accent/80 to-secondary/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="inline-block" style={{
              WebkitTextStroke: "2px white",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(255,255,255,0.3)"
            }}>
              AS BADMINTON
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">LONGUYON</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Un club convivial et passionné à Longuyon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/contact">Rejoignez-nous</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Link to="/club">Découvrir le club</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esprit d'équipe, progression et bonne ambiance au cœur de notre club
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à jouer avec nous ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Le badminton à Longuyon, pour tous et dans la bonne humeur
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            <Link to="/contact">Contacter le club</Link>
          </Button>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">#INSTAGRAM</h2>
            <p className="text-xl text-muted-foreground">Suivez-nous sur @badminton_longuyon</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <iframe
                src="https://www.instagram.com/badminton_longuyon/embed"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                title="Instagram Feed"
                className="w-full"
              ></iframe>
            </Card>
            <div className="text-center mt-6">
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://www.instagram.com/badminton_longuyon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Voir sur Instagram
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
