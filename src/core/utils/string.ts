export const normalizeText = (text: string): string => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-zA-Z0-9 ]/g, '') // Remove caracteres especiais
    .toLowerCase()
    .trim();
};
