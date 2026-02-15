import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Shield, Scale, FileText, Users, Gavel, MapPin } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-gradient-to-b from-card to-background">
        <div className="container text-center max-w-3xl">
          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Médecin Expert près la Cour d'Appel de Dijon — Grenoble Métropole
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Dr NASRI Ammar<br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-primary">Médecin Expert à Échirolles</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-muted-foreground mb-3">
              Angiologue — Médecin conseil de victimes en Isère
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Médecin expert indépendant basé à Échirolles (Grenoble Métropole), j'accompagne les victimes d'accidents lors des expertises médicales amiables et judiciaires dans l'Isère et sur l'ensemble du territoire français. Mon rôle est de défendre vos intérêts et d'assurer une juste évaluation de vos préjudices corporels.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/infos-pratiques">
                <Button size="lg">Prendre rendez-vous</Button>
              </Link>
              <a href="tel:+33979326493">
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="h-4 w-4" />
                  09 79 32 64 93
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Points clés */}
      <section className="py-16">
        <div className="container">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Indépendant", desc: "Totalement indépendant des compagnies d'assurances. Je me consacre exclusivement à la défense des victimes à Grenoble et en Isère." },
              { icon: Scale, title: "Expertise judiciaire & amiable", desc: "Assistance lors des expertises amiables et judiciaires pour une évaluation juste de vos préjudices dans la métropole grenobloise." },
              { icon: Users, title: "Conseil de victimes", desc: "Accompagnement personnalisé des victimes d'accidents de la route, du travail et de la vie quotidienne dans l'Isère (38)." },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <Card className="border-border bg-card hover:border-primary/30 transition-colors">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <s.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* L'expertise médicale */}
      <section className="py-16 bg-card">
        <FadeIn className="container max-w-3xl text-center">
          <Gavel className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Expertise Médicale à Grenoble & en Isère</h2>
          <p className="text-muted-foreground mb-4">
            L'expertise médicale d'une victime d'un accident a pour objectif de déterminer précisément les dommages corporels et psychologiques liés aux conséquences de l'accident. Le Dr NASRI intervient à Échirolles, Grenoble et dans tout le département de l'Isère.
          </p>
          <p className="text-muted-foreground mb-8">
            Le médecin expert évalue les séquelles dans le cadre d'une discussion médico-légale pour en tirer des conséquences juridiques et déterminer une juste indemnisation des préjudices.
          </p>
          <Link to="/expertise-medicale">
            <Button variant="outline">En savoir plus</Button>
          </Link>
        </FadeIn>
      </section>

      {/* Zone d'intervention locale */}
      <section className="py-16">
        <FadeIn className="container max-w-3xl text-center">
          <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Zone d'intervention</h2>
          <p className="text-muted-foreground mb-8">
            Le cabinet du Dr NASRI est situé à Échirolles, au cœur de Grenoble-Alpes Métropole. Interventions dans tout le département de l'Isère et sur l'ensemble du territoire français.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Grenoble", "Échirolles", "Saint-Martin-d'Hères", "Fontaine",
              "Saint-Égrève", "Seyssinet-Pariset", "Meylan", "Sassenage",
              "Voiron", "Bourgoin-Jallieu", "Vienne", "Isère (38)",
            ].map((city) => (
              <span key={city} className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                {city}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <FadeIn className="container max-w-2xl text-center">
          <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Besoin d'un médecin conseil en Isère ?</h2>
          <p className="text-muted-foreground mb-8">
            Contactez le cabinet à Échirolles pour préparer votre expertise médicale. Je vous guiderai dans la constitution de votre dossier médical et l'analyse de vos postes de préjudice.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/infos-pratiques">
              <Button size="lg">Contactez-nous</Button>
            </Link>
            <a href="mailto:nasriexpertise@gmail.com">
              <Button variant="outline" size="lg">nasriexpertise@gmail.com</Button>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Index;
