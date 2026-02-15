import { Card, CardContent } from "@/components/ui/card";
import { Scale, FileSearch, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const ExpertiseMedicale = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-card to-background py-16">
        <FadeIn className="container text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">L'Expertise Médicale</h1>
          <p className="text-muted-foreground">
            Comprendre le rôle de l'expertise médicale dans l'évaluation et l'indemnisation du dommage corporel.
          </p>
        </FadeIn>
      </section>

      <section className="py-16">
        <FadeIn className="container max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold mb-4">Qu'est-ce que l'expertise médicale ?</h2>
          <p className="text-muted-foreground leading-relaxed">
            L'expertise médicale d'une victime d'un accident (de la route, du sport, de la vie quotidienne…) a pour objectif de déterminer précisément les dommages corporels et psychologiques liés aux conséquences de l'accident.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Les médecins qui interviennent dans le cadre de cette expertise médico-légale ne soignent pas la victime mais déterminent et évaluent ses séquelles corporelles et psychologiques dans le cadre d'une discussion médico-légale pour en tirer des conséquences juridiques et, par conséquent, une indemnisation des préjudices.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Types d'expertises</h2>
          </FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Scale, title: "Expertise amiable", desc: "Organisée par les compagnies d'assurances pour évaluer les préjudices de la victime dans un cadre extra-judiciaire." },
              { icon: FileSearch, title: "Expertise judiciaire", desc: "Ordonnée par un tribunal, elle est réalisée par un expert désigné par le juge dans le cadre d'une procédure contentieuse." },
              { icon: Shield, title: "Contre-expertise", desc: "Lorsque les conclusions d'une première expertise sont contestées, une contre-expertise peut être demandée." },
              { icon: AlertTriangle, title: "Expertise de recours", desc: "Expertise réalisée dans le cadre d'un recours contre une décision d'indemnisation jugée insuffisante." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="border-border bg-background">
                  <CardContent className="flex gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16">
        <FadeIn className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi un médecin conseil ?</h2>
          <Stagger className="space-y-4" staggerDelay={0.08}>
            {[
              "Rééquilibrer les forces face au médecin de la compagnie d'assurance",
              "Préparer votre dossier médical de manière exhaustive",
              "Analyser les différents postes de préjudice pour une évaluation juste",
              "Vous assister et vous défendre lors de l'expertise",
              "Vérifier que tous vos préjudices sont correctement évalués",
            ].map((info) => (
              <StaggerItem key={info}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{info}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="text-center mt-10">
            <Link to="/infos-pratiques">
              <Button size="lg">Demander une consultation</Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default ExpertiseMedicale;
