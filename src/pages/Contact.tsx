import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Contact</h1>
          <p className="text-xl md:text-2xl animate-fade-in">Rejoignez-nous dès maintenant</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informations de contact */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Une question ? Envie de nous rejoindre ? N'hésitez pas à nous contacter, nous serons ravis de vous
                  répondre !
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        Salle des Sports Léo Lagrange
                        <br />
                        Avenue du Général de Gaulle
                        <br />
                        54260 Longuyon, France
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:bad.longuyon@gmail.com"
                        className="text-primary hover:underline"
                      >
                        bad.longuyon@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Téléphone</h3>
                      <a href="tel:+33611616166" className="text-primary hover:underline">
                        +33 6 11 61 61 66
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/share/1aGGikfTeq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/badminton_longuyon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>

              {/* Bureau Members */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Les membres du bureau</h3>
                <div className="space-y-3">
                  <Card className="p-4">
                    <p className="font-semibold">Gabriel Hillard</p>
                    <p className="text-sm text-muted-foreground">Président de l'ASBL</p>
                  </Card>
                  <Card className="p-4">
                    <p className="font-semibold">Stéphanie Cuel-Oller</p>
                    <p className="text-sm text-muted-foreground">Trésorière de l'ASBL</p>
                  </Card>
                  <Card className="p-4">
                    <p className="font-semibold">Marion Ambroisine</p>
                    <p className="text-sm text-muted-foreground">Secrétaire de l'ASBL</p>
                  </Card>
                  <Card className="p-4">
                    <p className="font-semibold">Kévin Sanem</p>
                    <p className="text-sm text-muted-foreground">Responsable compétitions de l'ASBL</p>
                  </Card>
                  <Card className="p-4">
                    <p className="font-semibold">Élise Marchesi</p>
                    <p className="text-sm text-muted-foreground">Responsable communication de l'ASBL</p>
                  </Card>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>

              {/* Formulaire Standard (sans AJAX) pour test/activation */}
              <form
                action="https://formsubmit.co/aubrypierre69@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Champs cachés de configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://badminton-longuyon.fr/" />

                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="Votre nom"
                    defaultValue={formData.name}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2"
                    placeholder="votre.email@exemple.com"
                    defaultValue={formData.email}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2"
                    placeholder="06 XX XX XX XX"
                    defaultValue={formData.phone}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="mt-2 min-h-[150px]"
                    placeholder="Votre message..."
                    defaultValue={formData.message}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map section (placeholder) */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nous trouver</h2>
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted-foreground/20 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.8!2d5.6!3d49.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x860dd623fdab50a9%3A0x7ed5d778ff03d98e!2sSalle%20des%20Sports%20L%C3%A9o%20Lagrange!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salle des Sports Léo Lagrange"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
