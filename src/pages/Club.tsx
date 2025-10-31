import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import trainingImage from "@/assets/training-session.jpg";

const Club = () => {
  const bureau = [
    { name: "Jean Dupont", role: "Président", initials: "JD" },
    { name: "Marie Martin", role: "Secrétaire", initials: "MM" },
    { name: "Pierre Durand", role: "Trésorier", initials: "PD" },
    { name: "Sophie Bernard", role: "Responsable jeunes", initials: "SB" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Le Club</h1>
          <p className="text-xl md:text-2xl animate-fade-in">Notre histoire, notre équipe</p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre histoire</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Créée en <strong className="text-foreground">2008</strong>, l'Association Sportive de Badminton de
                  Longuyon (ASBL) est un club affilié à la FFBAD où règnent la convivialité et le plaisir du sport.
                </p>
                <p>
                  Ouvert à tous les niveaux, nous proposons des sessions d'entraînement encadrées et des matchs en jeu
                  libre dans une ambiance chaleureuse et familiale.
                </p>
                <p>
                  Que vous soyez débutant ou joueur confirmé, l'ASBL Longuyon est un lieu idéal pour progresser, faire
                  des rencontres et partager une passion commune pour le badminton.
                </p>
                <p>
                  Rejoignez-nous pour des moments sportifs et amicaux, et venez vous battre à nos côtés pendant les
                  championnats des Interclubs en Division 5 !
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={trainingImage}
                alt="Entraînement de badminton"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le Bureau */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Bureau</h2>
            <p className="text-xl text-muted-foreground">L'équipe dirigeante du club</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bureau.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Convivialité",
                description: "Une ambiance chaleureuse et familiale où chacun trouve sa place",
              },
              {
                title: "Progression",
                description: "Des entraînements adaptés pour évoluer à son rythme",
              },
              {
                title: "Esprit d'équipe",
                description: "Ensemble sur et en dehors du terrain, dans le respect de tous",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;
