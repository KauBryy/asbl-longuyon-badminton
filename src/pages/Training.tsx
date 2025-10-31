import { Card } from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";
import courtImage from "@/assets/court-aerial.jpg";

const Training = () => {
  const schedules = [
    {
      category: "Jeunes (8-12 ans)",
      day: "Mercredi",
      time: "14h00 - 15h30",
      level: "Débutant à Intermédiaire",
    },
    {
      category: "Ados (13-17 ans)",
      day: "Mercredi",
      time: "15h30 - 17h00",
      level: "Tous niveaux",
    },
    {
      category: "Adultes Loisir",
      day: "Vendredi",
      time: "19h00 - 21h00",
      level: "Débutant à Intermédiaire",
    },
    {
      category: "Adultes Compétition",
      day: "Mardi",
      time: "20h00 - 22h00",
      level: "Confirmé",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Entraînements</h1>
          <p className="text-xl md:text-2xl animate-fade-in">Horaires et lieux de pratique</p>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos créneaux</h2>
            <p className="text-xl text-muted-foreground">Des sessions adaptées à tous les niveaux</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {schedules.map((schedule, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{schedule.category}</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{schedule.day}</span>
                        <span>•</span>
                        <span>{schedule.time}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{schedule.level}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lieu */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={courtImage}
                alt="Terrain de badminton"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lieu d'entraînement</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Gymnase Jean Bouin</h3>
                    <p className="text-muted-foreground mb-2">
                      Rue du Stade
                      <br />
                      54260 Longuyon
                      <br />
                      France
                    </p>
                  </div>
                </div>

                <Card className="p-6 bg-background">
                  <h4 className="font-semibold mb-3">Équipements disponibles</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>4 terrains de badminton</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Vestiaires et douches</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Parking gratuit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Accès handicapés</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-primary text-white">
                  <h4 className="font-semibold mb-2">Première séance gratuite !</h4>
                  <p className="text-white/90">
                    Venez essayer le badminton gratuitement lors d'une séance découverte. Matériel fourni.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Informations pratiques</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Matériel",
                description: "Raquettes et volants disponibles pour les débutants",
              },
              {
                title: "Tenue",
                description: "Tenue de sport et chaussures d'intérieur obligatoires",
              },
              {
                title: "Inscription",
                description: "Licence FFBAD obligatoire pour les compétiteurs",
              },
            ].map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{info.title}</h3>
                <p className="text-muted-foreground">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
