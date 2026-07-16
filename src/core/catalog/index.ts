import { PageMetadata } from '../types/metadata';
import { normalizeText } from '../utils/string'; // <-- Faltava esta linha!

// O Vite busca todos os metadata.ts dentro de src/pages
const metadataModules = import.meta.glob('../../pages/**/metadata.{ts,tsx}', { eager: true });

export const getPagesCatalog = (): PageMetadata[] => {
  const pages: PageMetadata[] = [];

  for (const path in metadataModules) {
    const module = metadataModules[path] as { default: Omit<PageMetadata, 'path'> };
    if (module.default) {
      pages.push({
        ...module.default,
        path: `/${module.default.id}`
      });
    }
  }

  // Ordena alfabeticamente pelo título
  return pages.sort((a, b) => a.title.localeCompare(b.title));
};

export const searchPages = (query: string): PageMetadata[] => {
  const normalizedQuery = normalizeText(query);
  const catalog = getPagesCatalog();

  if (!normalizedQuery) return catalog;

  return catalog.filter(page => {
    const searchString = normalizeText(`${page.title} ${page.description} ${page.keywords.join(' ')}`);
    return searchString.includes(normalizedQuery);
  });
};
