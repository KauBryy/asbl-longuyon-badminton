import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Download } from "lucide-react";
import passSportLogo from "@/assets/pass-sport-logo.png";

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

          {/* Tarifs et Détails par catégorie */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">

            {/* Colonne Loisir */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 flex flex-col h-full bg-white/50">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-6 text-primary">Loisir</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-lg font-semibold">Adulte Loisir</p>
                    <div className="text-4xl font-bold text-primary">90€</div>
                    <p className="text-sm text-muted-foreground">Par an</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-lg font-semibold">Jeune Loisir</p>
                    <div className="text-4xl font-bold text-primary">80€</div>
                    <p className="text-sm text-muted-foreground">Par an</p>
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-4">Ta licence "loisir" comprend :</h4>
                <div className="space-y-3">
                  {[
                    "L'accès aux séances 'jeu libre' les mercredis et les vendredis soirs",
                    "La fourniture des volants hybrides pour ces créneaux",
                    "La licence / assurance à la Fédération Française de Badminton (FFBad)",
                    "L'inscription (si volontaire) aux championnats régionaux (tournois) et départementaux (interclubs)",
                    "L'accès à une salle comportant 4 terrains de doubles et 2 terrains de simples",
                    "L'abonnement d'un an à Badminton Magazine en version numérique (disponible sur le compte MyFFBAD des licencié.e.s)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm font-medium flex items-start gap-3">
                <span className="text-lg">⚠️</span>
                <p>Attention : la licence "loisir" ne permet donc pas d'assister à l'entraînement encadré du mercredi soir !</p>
              </div>
            </Card>

            {/* Colonne Compétition */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary/20 flex flex-col h-full bg-primary/5">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-6 text-primary">Compétition</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-primary/20 shadow-sm">
                    <p className="text-lg font-semibold">Jeune Compétition</p>
                    <div className="text-4xl font-bold text-primary">140€</div>
                    <p className="text-sm text-muted-foreground">Par an</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-primary/20 shadow-sm">
                    <p className="text-lg font-semibold">Adulte Compétition</p>
                    <div className="text-4xl font-bold text-primary">140€</div>
                    <p className="text-sm text-muted-foreground">Par an</p>
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-4">Ta licence "compétition" comprend :</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold">Tous les avantages de la licence Loisir</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">PLUS : L'accès à l'entraînement dispensé par une entraîneuse qualifiée tous les mercredis de 20h45 à 22h15</span>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Pass Sport */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-4 md:p-8">
              {/* En-tête avec logo et texte */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                <div className="w-48 h-auto flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-2">
                  <img
                    src={passSportLogo}
                    alt="Pass Sport"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Réductions et aides</h2>
                  <p className="text-lg text-muted-foreground">
                    Nos tarifs sont éligibles au Pass' Sport (70€ de déduction) afin de faciliter l'accès aux jeunes à la pratique du badminton.
                  </p>
                </div>
              </div>

              {/* Vidéo et Liste */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Colonne gauche : Vidéo + Bouton */}
                <div className="space-y-6">
                  <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/iXjgePcJFQI"
                      title="Présentation Pass'Sport"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <Button asChild className="w-full bg-[#2a3088] hover:bg-[#2a3088]/90 text-white h-auto py-4 whitespace-normal text-center" size="lg">
                    <a href="https://www.pass.sports.gouv.fr/v2/accueil" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Tester mon éligibilité en 1 minute
                      <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    </a>
                  </Button>
                </div>

                {/* Colonne droite : Liste d'éligibilité */}
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Le Pass'Sport est une aide de 70€ pour :</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>Les jeunes de 14 à 17 ans bénéficiaires de l'Allocation de Rentrée Scolaire (ARS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>Les jeunes en situation de handicap :</span>
                    </li>
                    <ul className="ml-2 md:ml-6 space-y-2 border-l-2 pl-3 md:pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>De 6 à 19 ans bénéficiaires de l'Allocation d'Éducation de l'Enfant Handicapé (AEEH)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>De 16 à 30 ans bénéficiaires de l'Allocation aux Adultes Handicapés (AAH)</span>
                      </li>
                    </ul>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>Les étudiants boursiers de moins de 28 ans bénéficiaires d'une bourse attribuée avant le 15 octobre 2025 :</span>
                    </li>
                    <ul className="ml-2 md:ml-6 space-y-2 border-l-2 pl-3 md:pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Bourse du CROUS (y compris l'aide annuelle)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
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
