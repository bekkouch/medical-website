import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, ClipboardList, UserCheck, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const Missions = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-card to-background py-16">
        <FadeIn className="container text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Missions & Déroulement</h1>
          <p className="text-muted-foreground">
            Les étapes de l'accompagnement par le Dr NASRI dans le cadre de vos expertises médicales.
          </p>
        </FadeIn>
      </section>

      <section className="py-16">
        <Stagger className="container max-w-4xl space-y-6" staggerDelay={0.12}>
          {[
            { icon: MessageSquare, title: "1. Premier contact", desc: "Prise de contact par téléphone ou email. Le Dr NASRI étudie votre situation et vous conseille sur la marche à suivre." },
            { icon: FileText, title: "2. Constitution du dossier", desc: "Analyse de votre dossier médical complet : certificats médicaux, comptes-rendus d'hospitalisation, bilans, arrêts de travail, etc." },
            { icon: ClipboardList, title: "3. Analyse des préjudices", desc: "Évaluation détaillée de l'ensemble des postes de préjudice selon la nomenclature Dintilhac : DFT, DFP, souffrances endurées, préjudice esthétique, etc." },
            { icon: UserCheck, title: "4. Assistance à l'expertise", desc: "Le Dr NASRI vous accompagne lors de l'expertise médicale amiable ou judiciaire pour défendre vos intérêts et s'assurer que tous vos préjudices sont correctement évalués." },
          ].map((step) => (
            <StaggerItem key={step.title}>
              <Card className="border-border bg-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm ml-13">{step.desc}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="py-16 bg-card">
        <FadeIn className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Postes de préjudice évalués</h2>
          <Stagger className="grid gap-3 sm:grid-cols-2" staggerDelay={0.05}>
            {[
              "Déficit Fonctionnel Temporaire (DFT)",
              "Déficit Fonctionnel Permanent (DFP)",
              "Souffrances endurées",
              "Préjudice esthétique",
              "Préjudice d'agrément",
              "Préjudice professionnel",
              "Préjudice sexuel",
              "Tierce personne",
              "Frais médicaux futurs",
              "Incidence professionnelle",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>
      </section>

      <section className="py-16">
        <FadeIn className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Vous avez besoin d'un médecin conseil ?</h2>
          <p className="text-muted-foreground mb-8">
            Contactez le Dr NASRI pour préparer votre expertise médicale.
          </p>
          <Link to="/infos-pratiques">
            <Button size="lg">Prendre rendez-vous</Button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
};

export default Missions;
