import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Calendar, Heart, Facebook, Instagram } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

      {/* Social Hub Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La Vie du Club</h2>
            <p className="text-xl text-muted-foreground">
              Suivez notre actualité et nos moments forts sur les réseaux sociaux
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-14 bg-zinc-100/50 p-1 border">
                <TabsTrigger
                  value="photos"
                  className="text-lg h-full data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span className="hidden sm:inline">Photos</span>
                    <span className="sm:hidden">Photos</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="news"
                  className="text-lg h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <span className="hidden sm:inline">Actualités</span>
                    <span className="sm:hidden">News</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photos" className="space-y-6 animate-fade-in focus-visible:outline-none focus-visible:ring-0">
                <Card className="overflow-hidden bg-white border-zinc-200 shadow-lg">
                  <iframe
                    src="https://www.instagram.com/badminton_longuyon/embed"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    title="Instagram Feed"
                    className="w-full bg-zinc-50"
                  ></iframe>
                  <div className="p-4 border-t bg-zinc-50 flex justify-center">
                    <Button asChild variant="outline" className="gap-2 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-all">
                      <a href="https://www.instagram.com/badminton_longuyon/" target="_blank" rel="noreferrer">
                        <Instagram className="w-4 h-4" />
                        Voir la galerie sur Instagram
                      </a>
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="space-y-6 animate-fade-in focus-visible:outline-none focus-visible:ring-0">
                <Card className="overflow-hidden bg-white border-zinc-200 shadow-lg p-8 md:p-12 text-center">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Facebook className="w-10 h-10 text-blue-600" />
                    </div>

                    <div className="space-y-2 max-w-lg mx-auto">
                      <h3 className="text-2xl font-bold text-zinc-800">Suivez notre actualité !</h3>
                      <p className="text-zinc-600">
                        Pour des raisons techniques liées à Facebook, le flux ne peut pas s'afficher directement ici.
                        Cependant, <strong>toute la vie du club</strong> (résultats, événements) passe par notre profil Facebook.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button asChild size="lg" className="bg-[#1877F2] hover:bg-[#1864D9] text-white gap-2 px-8 py-6 text-lg shadow-blue-900/20 shadow-lg">
                        <a href="https://www.facebook.com/profile.php?id=61568507453892" target="_blank" rel="noreferrer">
                          <Facebook className="w-6 h-6" />
                          Accéder au Facebook du Club
                        </a>
                      </Button>
                    </div>

                    <p className="text-sm text-zinc-400">
                      Rejoignez notre communauté de passionnés !
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
