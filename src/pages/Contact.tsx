import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé !", {
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white">
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
                        Gymnase Jean Bouin
                        <br />
                        Rue du Stade
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
                        href="mailto:contact@badminton-longuyon.com"
                        className="text-primary hover:underline"
                      >
                        contact@badminton-longuyon.com
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
                      <a href="tel:+33600000000" className="text-primary hover:underline">
                        06 XX XX XX XX
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com/badminton_longuyon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <Card className="p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[150px]"
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
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
              <div className="aspect-video bg-muted-foreground/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Carte interactive - Gymnase Jean Bouin, Longuyon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
