
import { Card } from "@/components/ui/card";

const Confidentialite = () => {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-primary">Politique de Confidentialité</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">1. Collecte des données</h2>
                        <Card className="p-6 text-muted-foreground">
                            <p className="mb-4">
                                L'AS Badminton Longuyon s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site badminton-longuyon.fr, soient conformes au règlement général sur la protection des données (RGPD).
                            </p>
                            <p>
                                Aucune base de données client n'est stockée directement sur le serveur hébergeant ce site. Toutes les données sont traitées de manière transitoire ou sécurisée via des tiers de confiance.
                            </p>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">2. Formulaire de contact</h2>
                        <Card className="p-6 text-muted-foreground">
                            <p className="mb-4">
                                Les informations recueillies via le formulaire de contact (Nom, Email, Message) sont transmises directement par email au club via le service sécurisé <strong>Formsubmit</strong>.
                            </p>
                            <p>
                                Ces données ne sont utilisées que pour répondre à votre demande et ne sont jamais cédées à des tiers à des fins commerciales.
                            </p>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">3. Cookies</h2>
                        <Card className="p-6 text-muted-foreground">
                            <p className="mb-4">
                                Ce site n'utilise <strong>aucun cookie publicitaire</strong> ou de traçage commercial.
                            </p>
                            <p>
                                Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés sur votre terminal. Ces cookies ne nécessitent pas de consentement préalable selon la réglementation en vigueur.
                            </p>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-foreground/80">4. Vos droits</h2>
                        <div className="prose text-muted-foreground">
                            <p>
                                Conformément à la réglementation, vous disposez d’un droit d’accès, de rectification, d'effacement et de portabilité de vos données.
                            </p>
                            <p className="mt-2">
                                Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>bad.longuyon@gmail.com</strong>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Confidentialite;
