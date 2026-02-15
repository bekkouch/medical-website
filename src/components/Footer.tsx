import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card" itemScope itemType="https://schema.org/Physician">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        {/* Coordonnées */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary" itemProp="name">Dr NASRI Ammar</h3>
          <p className="text-sm text-muted-foreground mb-1" itemProp="medicalSpecialty">Angiologue</p>
          <p className="text-sm text-muted-foreground mb-4" itemProp="jobTitle">Médecin Expert près la Cour d'Appel de Dijon</p>
          <div className="space-y-2 text-sm text-muted-foreground" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>
                <span itemProp="streetAddress">1, avenue du 08 MAI 1945</span>,{" "}
                <span itemProp="postalCode">38130</span>{" "}
                <span itemProp="addressLocality">Échirolles</span>,{" "}
                <span itemProp="addressRegion">Isère</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+33979326493" itemProp="telephone" className="hover:text-primary transition-colors">09 79 32 64 93</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:nasriexpertise@gmail.com" itemProp="email" className="hover:text-primary transition-colors">nasriexpertise@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Pages</h3>
          <nav aria-label="Plan du site" className="space-y-2 text-sm text-muted-foreground">
            <Link to="/" className="block hover:text-primary transition-colors">Accueil</Link>
            <Link to="/le-docteur" className="block hover:text-primary transition-colors">Le Docteur</Link>
            <Link to="/expertise-medicale" className="block hover:text-primary transition-colors">Expertise Médicale</Link>
            <Link to="/missions" className="block hover:text-primary transition-colors">Missions</Link>
            <Link to="/infos-pratiques" className="block hover:text-primary transition-colors">Infos Pratiques</Link>
            
          </nav>
        </div>

        {/* Zone d'intervention */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Zones d'intervention</h3>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Grenoble • Échirolles • Isère (38)</p>
            <p>Grenoble-Alpes Métropole</p>
            <p>Interventions dans toute la France</p>
            <p className="mt-3">Médecin conseil de victimes</p>
            <p>Indépendant des compagnies d'assurances</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Cabinet Dr NASRI Ammar — Médecin Expert Grenoble Échirolles Isère</p>
          <p><Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link> • Politique de confidentialité</p>
        </div>
      </div>
    </footer>);

}