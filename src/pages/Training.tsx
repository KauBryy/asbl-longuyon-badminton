import { Card } from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";
import trainingImage from "@/assets/training-action.jpg";

const Training = () => {
  const schedules = [
    {
      day: "Mercredi",
      items: [
        {
          title: "Loisir",
          time: "20h30 - 22h30",
          description: "Jeu libre pour les licences \"loisir\"",
        },
        {
          title: "Compétition",
          time: "20h45 - 22h15",
          description: "Entraînement encadré pour les licences \"compétition\"",
        },
      ],
    },
    {
      day: "Vendredi",
      items: [
        {
          title: "Jeu Libre",
          time: "20h30 - 22h30",
          description: "Jeu libre pour tous",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Informations Pratiques</h1>
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
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{schedule.day}</h3>
                  </div>

                  <div className="space-y-6 flex-1">
                    {schedule.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`space-y-2 ${itemIndex !== 0 ? 'pt-4 border-t border-border/50' : ''}`}>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="font-bold text-lg">{item.title}</h4>
                          <span className="text-sm font-semibold px-3 py-1 bg-primary/5 text-primary rounded-full">
                            {item.time}
                          </span>
                        </div>
                        <p className="flex items-start gap-2 text-muted-foreground text-sm">
                          <Users className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>{item.description}</span>
                        </p>
                      </div>
                    ))}
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
                src={trainingImage}
                alt="Entraînement de badminton à Longuyon"
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
                    <h3 className="font-bold text-xl mb-2">Salle des Sports Léo Lagrange</h3>
                    <p className="text-muted-foreground mb-2">
                      Avenue du Général de Gaulle
                      <br />
                      54260 Longuyon
                      <br />
                      France
                    </p>
                    <a
                      href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x860dd623fdab50a9:0x7ed5d778ff03d98e?sa=X&ved=1t:8290&ictx=111&ucbcb=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      Voir sur Google Maps
                      <MapPin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <Card className="p-6 bg-background">
                  <h4 className="font-semibold mb-3">Équipements disponibles</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>4 terrains de badminton double</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>2 terrains simples</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Vestiaires et douches</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span>Parking gratuit</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-primary text-white">
                  <h4 className="font-semibold mb-2">3 séances d'essai gratuites !</h4>
                  <p className="text-white/90">
                    Scannez le QR code mis à disposition dans la salle pour profiter de 3 séances d'essai gratuites.
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
                description: "Possibilité de prêt de raquette. Volants hybrides fournis.",
              },
              {
                title: "Tenue",
                description: "Chaussures de sport propres obligatoires",
              },
              {
                title: "Inscription",
                description: "Licence FFBAD obligatoire - voir page 'Nos Licences'",
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
