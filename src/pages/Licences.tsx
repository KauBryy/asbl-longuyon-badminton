import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Download } from "lucide-react";

const Licences = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Nos Licences</h1>
          <p className="text-xl md:text-2xl animate-fade-in">Tarifs et informations</p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tarifs des licences</h2>
            <p className="text-xl text-muted-foreground">Paiement par virement bancaire (infos données sur place)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Adulte</h3>
                <div className="text-5xl font-bold text-primary mb-6">90€</div>
                <p className="text-muted-foreground">Par an</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2" style={{ animationDelay: '0.1s' }}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Jeune</h3>
                <div className="text-5xl font-bold text-primary mb-6">80€</div>
                <p className="text-muted-foreground">Par an</p>
              </div>
            </Card>
          </div>

          {/* Ce qui est inclus */}
          <Card className="p-8 max-w-4xl mx-auto bg-muted/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Ta licence comprend :</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "L'accès aux séances 'jeu libre' les mercredis et vendredis soirs",
                "La fourniture des volants hybrides pour ces créneaux",
                "La licence / assurance à la Fédération Française de Badminton (FFBad)",
                "L'inscription (si volontaire) aux championnats régionaux (tournois) et départementaux (interclubs)",
                "L'accès à une salle comportant 4 terrains de doubles et 2 terrains de simples",
                "L'abonnement d'un an à Badminton Magazine en version numérique (disponible sur le compte MyFFBAD des licencié.e.s)",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Pass Sport */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://www.pass.sports.gouv.fr/assets/images/logo-pass-sport.png" 
                    alt="Pass Sport" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Réductions et aides</h2>
                  <p className="text-lg text-muted-foreground">
                    Nos tarifs sont éligibles au Pass' Sport afin de faciliter l'accès aux jeunes à la pratique du badminton
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Il est accessible aux personnes :</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Âgées de 14 à 17 ans bénéficiaires de l'Allocation de Rentrée Scolaire (ARS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Aux jeunes en situation de handicap :</span>
                    </li>
                    <ul className="ml-6 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">◦</span>
                        <span>De 6 à 19 ans bénéficiaires de l'Allocation d'Éducation de l'Enfant Handicapé (AEEH)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">◦</span>
                        <span>De 16 à 30 ans bénéficiaires de l'Allocation aux Adultes Handicapés (AAH)</span>
                      </li>
                    </ul>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Aux étudiants boursiers de moins de 28 ans bénéficiaires d'une bourse attribuée avant le 15 octobre 2025 :</span>
                    </li>
                    <ul className="ml-6 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">◦</span>
                        <span>Bourse du CROUS (y compris l'aide annuelle)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">◦</span>
                        <span>Bourse régionale formations sanitaires et sociales</span>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Demander une licence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Nouvelle licence</h3>
                <p className="text-muted-foreground mb-4">Vous n'avez jamais été licencié ? Créez votre première licence.</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://adherer.myffbad.fr/ASBL54" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Demander une licence
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Renouvellement</h3>
                <p className="text-muted-foreground mb-4">Vous étiez déjà licencié ? Renouvelez votre licence.</p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="https://www.myffbad.fr/connexion" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Renouveler ma licence
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </Card>
            </div>

            {/* Questionnaires de santé */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Questionnaires de santé</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Download className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold">Questionnaire majeur</h4>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://echange.ffbad.org/index.php/s/gwxR3oAB8JMWQnc#pdfviewer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Télécharger
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Download className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold">Questionnaire mineur</h4>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://echange.ffbad.org/index.php/s/fLDrPAzzi3pmNbw#pdfviewer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Télécharger
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licences;
