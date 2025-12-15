import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shirt, Info } from "lucide-react";
import tshirtFront from "@/assets/tshirt-front.jpg";
import tshirtBack from "@/assets/tshirt-back.jpg";
import tshirtWorn from "@/assets/tshirt-worn.jpg";

const Boutique = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    { src: tshirtFront, alt: "T-shirt ASBL - Vue de face" },
    { src: tshirtBack, alt: "T-shirt ASBL - Vue de dos" },
    { src: tshirtWorn, alt: "T-shirt ASBL - Porté" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Boutique</h1>
          <p className="text-xl md:text-2xl animate-fade-in">L'équipement officiel du club</p>
        </div>
      </section>

      {/* Produit */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Galerie d'images */}
            <div className="space-y-4 animate-fade-in">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl bg-muted">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg transition-all ${
                      selectedImage === index 
                        ? "ring-2 ring-primary ring-offset-2" 
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Infos produit */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <Badge className="mb-4 bg-primary">Officiel</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">T-shirt ASBL</h2>
                <p className="text-muted-foreground text-lg">
                  T-shirt rouge officiel de l'Association Sportive de Badminton de Longuyon, de la marque Goodbad.
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">10,00 €</span>
              </div>

              <Card className="p-6 bg-muted">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Shirt className="w-5 h-5 text-primary" />
                  Tailles disponibles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 bg-background rounded-lg font-medium border border-border"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Comment acheter ?
                </h3>
                <p className="text-muted-foreground">
                  Voir directement sur place pour en acheter. Rendez-vous lors d'une séance d'entraînement.
                </p>
              </Card>

              <Card className="p-6 border-accent bg-accent/10">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important :</strong> L'achat de ce t-shirt est strictement réservé aux adhérent·e·s de l'ASBL et est nécessaire pour participer aux championnats par équipe.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boutique;
