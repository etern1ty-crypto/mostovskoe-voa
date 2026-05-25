export type Vehicle = {
  category: string;
  model: string;
  description: string;
  features: string[];
  placeholderCaption: string;
};

export const fleet: Vehicle[] = [
  {
    category: "B",
    model: "Lada Granta",
    description:
      "Учебный седан с дублирующими педалями сцепления и тормоза, знаком «У» и опознавательным фонарём.",
    features: [
      "МКПП, бензин",
      "Дублирующие педали",
      "Опознавательные знаки «У»",
      "Полное техническое обслуживание",
    ],
    placeholderCaption: "Lada Granta — категория B",
  },
  {
    category: "B",
    model: "Renault Logan",
    description:
      "Седан для городской и трассовой практики. Дублирующая педаль сцепления и тормоза, дополнительные зеркала.",
    features: [
      "МКПП, бензин",
      "Дополнительные зеркала",
      "Современный салон",
      "Регулярное ТО",
    ],
    placeholderCaption: "Renault Logan — категория B",
  },
  {
    category: "C",
    model: "ГАЗ-3309",
    description:
      "Грузовой автомобиль для категории C. Соответствует требованиям ГИБДД для приёма практического экзамена.",
    features: [
      "Грузовой ТС категории C",
      "Дублирующие органы управления",
      "Подходит для площадки и города",
    ],
    placeholderCaption: "ГАЗ-3309 — категория C",
  },
  {
    category: "A",
    model: "Учебный мотоцикл",
    description:
      "Мотоцикл для отработки фигур категории A на оборудованной площадке.",
    features: [
      "Площадка по требованиям ГИБДД",
      "Защитное снаряжение",
      "Радиосвязь с инструктором",
    ],
    placeholderCaption: "Учебный мотоцикл — категория A",
  },
];
