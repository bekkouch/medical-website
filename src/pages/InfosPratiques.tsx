import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Car, Train, ExternalLink } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const InfosPratiques = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-card to-background py-16">
        <FadeIn className="container text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Infos Pratiques</h1>
          <p className="text-muted-foreground">
            Toutes les informations pour préparer votre visite au cabinet.
          </p>
        </FadeIn>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl grid gap-8 md:grid-cols-2">
          <FadeIn variant="scaleIn">
            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.5!2d5.7252!3d45.1486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af4857e5db2e7%3A0x0!2s1%20Avenue%20du%208%20Mai%201945%2C%2038130%20%C3%89chirolles!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du cabinet Dr NASRI"
              />
            </div>
          </FadeIn>

          <Stagger className="space-y-6">
            <StaggerItem>
              <Card className="border-border bg-card">
                <CardContent className="flex gap-4 pt-6">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-sm text-muted-foreground">1, avenue du 08 MAI 1945<br />38130 Échirolles</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-border bg-card">
                <CardContent className="flex gap-4 pt-6">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+33979326493" className="text-sm text-primary hover:underline">09 79 32 64 93</a>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-border bg-card">
                <CardContent className="flex gap-4 pt-6">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:nasriexpertise@gmail.com" className="text-sm text-primary hover:underline">nasriexpertise@gmail.com</a>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-border bg-card">
                <CardContent className="flex gap-4 pt-6">
                  <ExternalLink className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Fiche CHU Grenoble</h3>
                    <a href="https://www.chu-grenoble.fr/patients-et-accompagnants/offre-de-soin/dr-ammar-nasri" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      Voir la fiche sur le site du CHU
                    </a>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8">Accès au cabinet</h2>
          </FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2">
            <StaggerItem>
              <Card className="border-border bg-background">
                <CardContent className="flex gap-4 pt-6">
                  <Train className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Transports en commun</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Tramway : Ligne A — Arrêt Échirolles</p>
                      <p>Bus : Lignes desservant le secteur</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-border bg-background">
                <CardContent className="flex gap-4 pt-6">
                  <Car className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">En voiture</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Stationnement disponible à proximité</p>
                      <p>Accès facile depuis l'autoroute A480</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="py-16">
        <FadeIn className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Interventions dans toute la France</h2>
          <p className="text-muted-foreground">
            Le Dr NASRI se déplace pour les expertises médicales sur l'ensemble du territoire français.
          </p>
        </FadeIn>
      </section>
    </div>
  );
};

export default InfosPratiques;
