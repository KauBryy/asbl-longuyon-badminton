import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Download, Calendar, Info } from "lucide-react";
import passSportLogo from "@/assets/pass-sport-logo.png";

const Licences = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 mb-3 text-sm font-semibold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
            Saison 2026 - 2027
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Nos Licences</h1>
          <p className="text-xl md:text-2xl animate-fade-in">Tarif unique et informations d'inscription</p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tarif de la licence 2026-2027</h2>
            <p className="text-xl text-muted-foreground">Un tarif unique pour tous • Paiement par virement bancaire (infos sur place)</p>
          </div>

          {/* Tarif Unique */}
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border-2 border-primary/30 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
              <div className="text-center mb-8 pt-4 md:pt-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">Licence FFBAD - Saison Complète</h3>
                <p className="text-muted-foreground mb-4">Adhésion au club donnant droit à une licence fédérale (Adultes & Jeunes)</p>
                <div className="inline-flex items-baseline gap-2 bg-background px-8 py-4 rounded-2xl border border-primary/20 shadow-inner">
                  <span className="text-5xl md:text-6xl font-black text-primary">100€</span>
                  <span className="text-lg text-muted-foreground font-medium">/ an</span>
                </div>
                <p className="text-sm text-emerald-600 font-semibold mt-3 flex items-center justify-center gap-1">
                  <span>💡</span> Éligible au Pass'Sport : la licence revient à seulement <strong>30€</strong> avec l'aide !
                </p>
              </div>

              {/* Timeline visuelle des dates de la saison */}
              <div className="mb-8 p-5 md:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/60 shadow-sm">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Dates de la Saison 2026 – 2027</h4>
                    <p className="text-xs text-muted-foreground">Repères chronologiques de l'adhésion et de la licence</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Barre 1 : Inscriptions / Adhésion */}
                  <div className="space-y-2">
                    <span className="font-semibold text-sm text-slate-800 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      Inscriptions & Adhésions
                    </span>

                    <div className="relative h-8 w-full bg-slate-200/60 rounded-full overflow-hidden p-1 flex items-center">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-sm flex items-center justify-between px-3.5 text-xs font-semibold text-white"
                        style={{ width: '73%' }}
                      >
                        <span>01 Juin 2026</span>
                        <span className="hidden sm:inline opacity-90 text-[11px] font-normal">Inscriptions ouvertes</span>
                        <span>30 Avril 2027</span>
                      </div>
                    </div>
                  </div>

                  {/* Barre 2 : Validité Licence */}
                  <div className="space-y-2">
                    <span className="font-semibold text-sm text-slate-800 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      Validité de la licence FFBad
                    </span>

                    <div className="relative h-8 w-full bg-slate-200/60 rounded-full overflow-hidden p-1 flex items-center">
                      <div className="w-full flex h-full">
                        <div style={{ width: '20%' }} className="h-full flex-shrink-0"></div>
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-sm flex items-center justify-between px-3.5 text-xs font-semibold text-white flex-1"
                        >
                          <span>01 Sept 2026</span>
                          <span className="hidden sm:inline opacity-90 text-[11px] font-normal">Saison sportive (12 mois)</span>
                          <span>31 Août 2027</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  </div>
                </div>

              <div className="border-t border-border pt-8 space-y-6">
                <h4 className="text-xl font-bold text-center mb-4">Ce que comprend votre licence :</h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Adultes */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="font-bold text-primary mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                      Créneaux Adultes (Jeu libre)
                    </div>
                    <ul className="text-sm space-y-1.5 text-muted-foreground">
                      <li>• <strong>Mercredi :</strong> 20h00 - 22h30</li>
                      <li>• <strong>Vendredi :</strong> 20h30 - 22h30</li>
                    </ul>
                  </div>

                  {/* Jeunes */}
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="font-bold text-red-600 mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                      Créneau Jeunes (Nouveauté !)
                    </div>
                    <ul className="text-sm space-y-1.5 text-zinc-700">
                      <li>• <strong>Mercredi :</strong> 18h30 - 20h00</li>
                      <li className="font-semibold text-red-600">Entraînement encadré toutes les semaines !</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    "La fourniture des volants hybrides pour tous les créneaux",
                    "La licence & assurance à la Fédération Française de Badminton (FFBad)",
                    "L'inscription (si volontaire) aux championnats régionaux (tournois) et départementaux (interclubs)",
                    "L'accès à la Salle Léo Lagrange (4 terrains de doubles et 2 terrains de simples)",
                    "L'abonnement d'un an à Badminton Magazine en version numérique",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
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
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Demander une licence</h2>
              <p className="text-sm text-muted-foreground">Inscriptions ouvertes du <strong>01/06/2026</strong> au <strong>30/04/2027</strong> • Licence valable du <strong>01/09/2026</strong> au <strong>31/08/2027</strong></p>
            </div>
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
