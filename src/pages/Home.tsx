import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Calendar, Heart } from "lucide-react";
import heroImage from "@/assets/hero-badminton.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Licenciés" },
    { icon: Trophy, value: "15", label: "Années d'existence" },
    { icon: Calendar, value: "4", label: "Créneaux par semaine" },
    { icon: Heart, value: "100%", label: "Convivialité" },
  ];

  const news = [
    {
      title: "Reprise des entraînements",
      date: "Septembre 2025",
      description: "Les entraînements reprennent dès la première semaine de septembre. Venez nous rejoindre !",
    },
    {
      title: "Tournoi interne prévu",
      date: "Octobre 2025",
      description: "Un grand tournoi amical entre membres du club pour démarrer la saison en beauté.",
    },
    {
      title: "Portes ouvertes",
      date: "Novembre 2025",
      description: "Venez découvrir le badminton gratuitement pendant nos journées portes ouvertes.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-secondary/70"></div>
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

      {/* News Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Actualités</h2>
              <p className="text-muted-foreground">Les dernières infos du club</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm text-primary font-semibold mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
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
    </div>
  );
};

export default Home;
