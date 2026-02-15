import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Le Docteur", to: "/le-docteur" },
  { label: "Expertise Médicale", to: "/expertise-medicale" },
  { label: "Missions", to: "/missions" },
  { label: "Infos Pratiques", to: "/infos-pratiques" },
  
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-lg font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Dr NASRI Ammar
          </span>
          <span className="text-xs text-muted-foreground -mt-0.5">Médecin Expert</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted ${
                pathname === link.to ? "text-primary bg-muted" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+33979326493" className="ml-2">
            <Button size="sm" className="gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              09 79 32 64 93
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden border-t bg-card px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted ${
                pathname === link.to ? "text-primary bg-muted" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+33979326493" className="block pt-2">
            <Button size="sm" className="w-full gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              09 79 32 64 93
            </Button>
          </a>
        </nav>
      )}
    </header>
  );
}
