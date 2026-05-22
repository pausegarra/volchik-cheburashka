export type Locale = 'es' | 'ru';

export const translations = {
  es: {
    title: 'Volchik & Cheburashka',
    seoDescriptionHome:
      'Historias ilustradas de Volchik y Cheburashka: felicitaciones, ternura y momentos para compartir.',
    heroAlt: 'Volchik y Cheburashka en paisaje nevado',
    logoAlt: 'Logo de Volchik y Cheburashka',
    subtitle: 'Pequeñas historias ilustradas por Volchik & Cheburashka para regalar emociones.',
    charactersSection: {
      title: '¿Quiénes son Volchik & Cheburashka?',
      cheburashka: {
        name: 'Cheburashka',
        description:
          'El amigo de las grandes orejas llegado desde Rusia. Tierno, tranquilo y observador. Sabe encontrar magia en los pequeños detalles y siempre escucha antes de hablar.',
      },
      volchik: {
        name: 'Volchik',
        description:
          'El pequeño lobo ibérico. Siempre intenta hacer algo especial. A veces un poco impulsivo, pero con un gran corazón y muchas ganas de regalar sonrisas.',
      },
    },
  },
  ru: {
    title: 'Volchik & Cheburashka',
    seoDescriptionHome:
      'Иллюстрированные истории Волчика и Чебурашки: поздравления, тепло и моменты, которыми хочется делиться.',
    heroAlt: 'Волчок и Чебурашка в зимнем пейзаже',
    logoAlt: 'Логотип Волчика и Чебурашки',
    subtitle: 'Маленькие истории, иллюстрированные Волчиком и Чебурашкой, чтобы дарить эмоции.',
    charactersSection: {
      title: 'Кто такие Волчик и Чебурашка?',
      cheburashka: {
        name: 'Чебурашка',
        description:
          'Маленький друг, приехавший из России. Спокойный, любознательный и любящий маленькие моменты. Он верит, что простые вещи часто самые важные.',
      },
      volchik: {
        name: 'Волчик',
        description:
          'Маленький иберийский волк. Он всегда старается сделать что-то особенное. Иногда немного импульсивный, но с большим сердцем и огромным желанием дарить улыбки.',
      },
    },
  },
} as const;
