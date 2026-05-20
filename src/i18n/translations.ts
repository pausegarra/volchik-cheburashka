export type Locale = 'es' | 'ru';

export const translations = {
  es: {
    title: 'Volchik & Cheburashka',
    seoDescriptionHome:
      'Historias ilustradas de Volchik y Cheburashka: felicitaciones, ternura y momentos para compartir.',
    heroAlt: 'Volchik y Cheburashka en paisaje nevado',
    logoAlt: 'Logo de Volchik y Cheburashka',
    subtitle: 'Pequeñas historias ilustradas por Volchik & Cheburashka para regalar emociones.',
  },
  ru: {
    title: 'Volchik & Cheburashka',
    seoDescriptionHome:
      'Иллюстрированные истории Волчика и Чебурашки: поздравления, тепло и моменты, которыми хочется делиться.',
    heroAlt: 'Волчок и Чебурашка в зимнем пейзаже',
    logoAlt: 'Логотип Волчика и Чебурашки',
    subtitle: 'Маленькие истории, иллюстрированные Волчиком и Чебурашкой, чтобы дарить эмоции.',
  },
} as const;
