import { FadeIn } from "@/components/motion";

const MentionsLegales = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-card to-background py-16">
        <FadeIn className="container text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
          <p className="text-muted-foreground">
            Informations légales obligatoires conformément à la loi.
          </p>
        </FadeIn>
      </section>

      <section className="py-16">
        <FadeIn className="container max-w-3xl prose prose-invert prose-sm">
          <h2 className="text-2xl font-bold mb-6 text-foreground">1. Éditeur du site</h2>
          <div className="text-muted-foreground space-y-1 mb-8">
            <p><strong className="text-foreground">Nom :</strong> Dr NASRI Ammar</p>
            <p><strong className="text-foreground">Profession :</strong> Médecin — Angiologue</p>
            <p><strong className="text-foreground">Qualité :</strong> Médecin Expert près la Cour d'Appel de Dijon</p>
            <p><strong className="text-foreground">Adresse du cabinet :</strong> 1, avenue du 08 MAI 1945 — 38130 Échirolles</p>
            <p><strong className="text-foreground">Téléphone :</strong>{" "}
              <a href="tel:+33979326493" className="text-primary hover:underline">09 79 32 64 93</a>
            </p>
            <p><strong className="text-foreground">Email :</strong>{" "}
              <a href="mailto:nasriexpertise@gmail.com" className="text-primary hover:underline">nasriexpertise@gmail.com</a>
            </p>
            <p><strong className="text-foreground">Inscription à l'Ordre :</strong> Inscrit au Conseil de l'Ordre des Médecins de l'Isère</p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">2. Hébergeur</h2>
          <div className="text-muted-foreground space-y-1 mb-8">
            <p><strong>Raison sociale :</strong> GitHub, Inc.</p>
            <p><strong>Site web :</strong>{" "}
              <a href="https://pages.github.com">https://pages.github.com</a>
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">3. Activité professionnelle</h2>
          <div className="text-muted-foreground space-y-2 mb-8">
            <p>Le Dr NASRI Ammar exerce en qualité de médecin angiologue et de médecin expert judiciaire inscrit près la Cour d'Appel de Dijon.</p>
            <p>L'activité de médecin expert est régie par les dispositions du Code de procédure civile et du Code de procédure pénale relatives aux expertises judiciaires.</p>
            <p>En tant que médecin, le Dr NASRI est soumis au Code de déontologie médicale (articles R.4127-1 à R.4127-112 du Code de la santé publique).</p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">4. Propriété intellectuelle</h2>
          <div className="text-muted-foreground space-y-2 mb-8">
            <p>L'ensemble du contenu de ce site (textes, images, graphismes, logo, structure) est la propriété exclusive du Dr NASRI Ammar, sauf mention contraire.</p>
            <p>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.</p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">5. Protection des données personnelles</h2>
          <div className="text-muted-foreground space-y-2 mb-8">
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Les données personnelles collectées via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande.</li>
              <li>Aucune donnée personnelle n'est transmise à des tiers sans votre consentement.</li>
              <li>Les données médicales sont traitées avec la plus stricte confidentialité, conformément au secret médical (article L.1110-4 du Code de la santé publique).</li>
              <li>Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.</li>
            </ul>
            <p>Pour exercer vos droits, contactez :{" "}
              <a href="mailto:nasriexpertise@gmail.com" className="text-primary hover:underline">nasriexpertise@gmail.com</a>
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">6. Cookies</h2>
          <div className="text-muted-foreground space-y-2 mb-8">
            <p>Ce site n'utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.</p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">7. Responsabilité</h2>
          <div className="text-muted-foreground space-y-2 mb-8">
            <p>Les informations fournies sur ce site le sont à titre informatif. Elles ne constituent en aucun cas un avis médical et ne sauraient se substituer à une consultation médicale.</p>
            <p>Le Dr NASRI ne saurait être tenu responsable de l'utilisation qui pourrait être faite des informations contenues sur ce site.</p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-foreground">8. Droit applicable</h2>
          <div className="text-muted-foreground space-y-2 mb-8">
            <p>Le présent site et ses mentions légales sont régis par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default MentionsLegales;
