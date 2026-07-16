export interface PageMetadata {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; // Aceita SVG
  keywords: string[];
  path: string; // Gerado dinamicamente para o Router
}
