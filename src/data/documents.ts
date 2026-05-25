export type DocSection = {
  title: string;
  anchor: string;
  description: string;
  items: { label: string; href: string; external?: boolean }[];
};

const ORIGIN = "https://mostovskoevoa.ru";

export const docSections: DocSection[] = [
  {
    title: "Лицензия и реестровые документы",
    anchor: "license",
    description:
      "Документы, подтверждающие право вести образовательную деятельность.",
    items: [
      {
        label: "Реестровая выписка (Минобрнауки РФ)",
        href: `${ORIGIN}/images/scan/202408291.pdf`,
        external: true,
      },
      {
        label: "Свидетельство председателя ВОА",
        href: `${ORIGIN}/images/scan/2.jpg`,
        external: true,
      },
    ],
  },
  {
    title: "Образовательные программы",
    anchor: "programs",
    description:
      "Аннотации и рабочие программы профессиональной подготовки и переподготовки водителей.",
    items: [
      {
        label: "Программа подготовки водителей категории «A»",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
      {
        label: "Программа подготовки водителей категории «B»",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
      {
        label: "Программа подготовки водителей категории «C»",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
      {
        label: "Переподготовка с категории «C» на «B»",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
      {
        label: "Переподготовка с категории «B» на «C»",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
      {
        label: "Переподготовка с категории «C» на «D»",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
    ],
  },
  {
    title: "Учебные планы и графики",
    anchor: "plans",
    description: "Учебные планы, маршруты и календарные графики групп.",
    items: [
      {
        label: "Учебные планы",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
      {
        label: "Учебные маршруты",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
      {
        label: "Календарные графики групп",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
    ],
  },
  {
    title: "Платные образовательные услуги",
    anchor: "paid",
    description: "Договоры, положения и прайс-лист.",
    items: [
      {
        label: "Положение об оказании платных образовательных услуг",
        href: `${ORIGIN}/index.php/platnye-obrazovatelnye-uslugi`,
        external: true,
      },
      {
        label: "Заявление на обучение",
        href: `${ORIGIN}/index.php/platnye-obrazovatelnye-uslugi`,
        external: true,
      },
      {
        label: "Договор на оказание платных образовательных услуг (двухсторонний)",
        href: `${ORIGIN}/index.php/platnye-obrazovatelnye-uslugi`,
        external: true,
      },
      {
        label: "Договор на оказание платных образовательных услуг (трёхсторонний)",
        href: `${ORIGIN}/index.php/platnye-obrazovatelnye-uslugi`,
        external: true,
      },
      {
        label: "Прейскурант оказываемых платных услуг",
        href: `${ORIGIN}/index.php/platnye-obrazovatelnye-uslugi`,
        external: true,
      },
    ],
  },
  {
    title: "Стандарты и регламенты",
    anchor: "standards",
    description: "Образовательные стандарты и нормативные требования.",
    items: [
      {
        label: "Архив образовательных стандартов",
        href: `${ORIGIN}/images/standart.zip`,
        external: true,
      },
      {
        label: "Методические рекомендации по организации образовательного процесса",
        href: `${ORIGIN}/index.php/obrazovanie`,
        external: true,
      },
    ],
  },
];

export const usefulLinks = [
  {
    label: "Министерство образования, науки и молодёжной политики Краснодарского края",
    href: "https://minobr.krasnodar.ru/",
  },
  {
    label: "ГУОБДД МВД России",
    href: "https://гибдд.рф/",
  },
  {
    label: "Всероссийское общество автомобилистов",
    href: "http://www.voa.ru/",
  },
  {
    label: "Билеты ПДД онлайн",
    href: "http://www.pdd24.com/pdd-onlain",
  },
];
