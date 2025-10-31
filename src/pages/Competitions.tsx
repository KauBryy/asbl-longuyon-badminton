import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Competitions = () => {
  const teams = [
    {
      name: "Équipe 1 - Division 5",
      level: "Régional",
      category: "Adultes",
      members: ["Jean Dupont", "Marie Martin", "Pierre Durand", "Sophie Bernard"],
    },
    {
      name: "Équipe Jeunes",
      level: "Départemental",
      category: "Jeunes",
      members: ["Lucas Petit", "Emma Dubois", "Noah Laurent", "Léa Moreau"],
    },
  ];

  const results = [
    {
      date: "15 Mars 2025",
      match: "ASBL vs BC Nancy",
      score: "5-3",
      status: "Victoire",
    },
    {
      date: "22 Mars 2025",
      match: "ASBL vs Metz Bad",
      score: "4-4",
      status: "Match nul",
    },
    {
      date: "29 Mars 2025",
      match: "Thionville Bad vs ASBL",
      score: "6-2",
      status: "Défaite",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Compétitions</h1>
          <p className="text-xl md:text-2xl animate-fade-in">Nos équipes et résultats</p>
        </div>
      </section>

      {/* Équipes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos équipes</h2>
            <p className="text-xl text-muted-foreground">Engagées dans les championnats FFBAD</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teams.map((team, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">{team.level}</Badge>
                        <Badge variant="outline">{team.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Membres de l'équipe</h4>
                  <ul className="space-y-1">
                    {team.members.map((member, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats récents */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Résultats récents</h2>
            <p className="text-xl text-muted-foreground">Saison 2024-2025</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {results.map((result, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{result.date}</p>
                      <p className="font-semibold">{result.match}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">{result.score}</span>
                    <Badge
                      variant={
                        result.status === "Victoire" ? "default" : result.status === "Défaite" ? "destructive" : "secondary"
                      }
                    >
                      {result.status}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier et BadNet */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Suivez nos matchs</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Retrouvez l'ensemble de nos résultats, calendriers et classements sur la plateforme BadNet
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
              <a href="https://badnet.org" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 w-5 h-5" />
                Accéder à BadNet
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Envie de rejoindre nos équipes ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Que vous soyez débutant ou confirmé, nous avons une place pour vous
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <a href="/contact">Nous contacter</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Competitions;
