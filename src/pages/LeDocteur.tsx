import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase, User } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const LeDocteur = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-card to-background py-16">
        <div className="container grid gap-10 md:grid-cols-2 items-center">
          <FadeIn variant="scaleIn">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
              <User className="h-32 w-32 text-primary/25" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Votre Médecin Expert</p>
              <h1 className="text-4xl font-bold mb-6">Dr NASRI Ammar</h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Angiologue de formation, le Dr NASRI Ammar est Médecin Expert près la Cour d'Appel de Dijon et médecin conseil de victimes. Indépendant des compagnies d'assurances, il se consacre exclusivement à l'assistance des victimes d'accidents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Son rôle est de préparer au mieux l'expertise en vous guidant dans la constitution du dossier médical, d'analyser les différents postes de préjudice, et de vous assister lors de la future expertise médicale.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Parcours & Qualifications</h2>
          </FadeIn>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {[
              { icon: GraduationCap, title: "Doctorat en Médecine", desc: "Spécialisation en angiologie" },
              { icon: Award, title: "Médecin Expert Judiciaire", desc: "Inscrit près la Cour d'Appel de Dijon" },
              { icon: Briefcase, title: "Médecin Conseil de Victimes", desc: "Assistance exclusive des victimes lors des expertises médicales" },
              { icon: Award, title: "Expertise en Dommage Corporel", desc: "Formation spécialisée en réparation juridique du dommage corporel" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="border-border bg-card">
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

      {/* Domaines */}
      <section className="py-16 bg-card">
        <FadeIn className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-8">Domaines d'intervention</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Accidents de la route",
              "Accidents du travail",
              "Accidents de la vie",
              "Accidents de sport",
              "Dommage corporel",
              "Expertise amiable",
              "Expertise judiciaire",
              "Évaluation des préjudices",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default LeDocteur;
