export const site = {
  name: "Мостовское ВОА",
  shortName: "Автошкола ВОА",
  legalName:
    'Мостовское районное отделение Краснодарского регионального отделения общественной организации «Всероссийское общество автомобилистов»',
  tagline: "Учим водить с 1973 года",
  description:
    "Официальная автошкола Всероссийского общества автомобилистов в посёлке Мостовском. Подготовка водителей категорий A, B, C и переподготовка. Опытные инструкторы, два учебных адреса, очно-заочная форма.",
  url: "https://mostovskoevoa.ru",
  ogImage: "/og-image.svg",
  founded: 1973,
  registered: "20 января 2003",
  director: {
    title: "Директор",
    name: "Круц Павел Викторович",
  },
  chairman: {
    title: "Председатель",
    name: "Кудинов Владислав Викторович",
  },
  phones: ["+7 (918) 327-89-99"],
  emails: ["mos.voa@yandex.ru"],
  hours: [
    { day: "Вторник — Пятница", value: "08:00 — 17:00" },
    { day: "Суббота", value: "08:00 — 16:00" },
    { day: "Обеденный перерыв", value: "12:00 — 13:00" },
    { day: "Воскресенье, Понедельник", value: "Выходной" },
  ],
  addresses: [
    {
      label: "Главный офис",
      value:
        "352570, Краснодарский край, рп Мостовской, ул. Кирова, 1 корп. Б",
      kind: "office" as const,
    },
    {
      label: "Учебный класс",
      value: "352570, Краснодарский край, п. Мостовской, ул. Красная, 88",
      kind: "classroom" as const,
    },
    {
      label: "Учебный класс",
      value:
        "352570, Краснодарский край, п. Мостовской, ул. Кооперативная, 28",
      kind: "classroom" as const,
    },
  ],
  legal: {
    inn: "2342003826",
    ogrn: "1032335004052",
    okpo: "21793915",
    okved: "91.33",
    oktmo: "03633151",
    okato: "03233551",
  },
  socials: [
    // Можно добавить ссылки, когда будут
  ],
};

export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const navigation: NavItem[] = [
  { href: "/", label: "Главная" },
  { href: "/about/", label: "О школе" },
  { href: "/categories/", label: "Категории" },
  { href: "/training/", label: "Обучение" },
  { href: "/staff/", label: "Преподаватели" },
  { href: "/fleet/", label: "Автопарк" },
  { href: "/documents/", label: "Документы" },
  { href: "/contacts/", label: "Контакты" },
];

export const navFooter: NavItem[] = [
  { href: "/about/", label: "О школе" },
  { href: "/categories/a/", label: "Категория A" },
  { href: "/categories/b/", label: "Категория B" },
  { href: "/categories/c/", label: "Категория C" },
  { href: "/categories/", label: "Переподготовка" },
  { href: "/staff/", label: "Преподаватели" },
  { href: "/documents/", label: "Документы" },
  { href: "/contacts/", label: "Контакты" },
];
