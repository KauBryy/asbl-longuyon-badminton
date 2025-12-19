
import { Card } from "@/components/ui/card";

const MentionsLegales = () => {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-primary">Mentions Légales</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">1. Éditeur du site</h2>
                        <Card className="p-6">
                            <p className="mb-2"><strong>Nom de l'association :</strong> AS Badminton Longuyon (ASBL)</p>
                            <p className="mb-2"><strong>Siège social :</strong> Salle des Sports Léo Lagrange, Avenue du Général de Gaulle, 54260 Longuyon, France</p>
                            <p className="mb-2"><strong>Responsable de la publication :</strong> M. Gabriel Hillard</p>
                            <p><strong>Contact :</strong> bad.longuyon@gmail.com</p>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">2. Conception et Développement</h2>
                        <Card className="p-6">
                            <p className="mb-2"><strong>Créateur :</strong> KauBry Apps (Pierre Aubry)</p>
                            <p className="mb-2"><strong>Statut :</strong> Entrepreneur Individuel</p>
                            <p>
                                <strong>Site web :</strong>{" "}
                                <a href="https://www.kaubry.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    kaubry.fr
                                </a>
                            </p>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">3. Hébergement</h2>
                        <Card className="p-6">
                            <p className="mb-2"><strong>Hébergeur :</strong> GitHub Inc.</p>
                            <p><strong>Adresse :</strong> 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States</p>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">4. Propriété intellectuelle</h2>
                        <div className="prose text-muted-foreground">
                            <p>
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MentionsLegales;
