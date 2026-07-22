/**
 *  Начальные mock-данные мероприятий.
 */

import type { EventItem } from "@/domain/entities/Event";

/** Стартовый набор мероприятий для in-memory репозитория. */
export const initialEvents: EventItem[] = [
  {
    id: "EVT-001",
    title: "Введение в React и Hooks",
    dateTime: "2026-07-25 14:00",
    status: "Предстоит",
    responsible: ["Иванов И.И.", "Петров П.П."],
    attendees: [
      {
        id: "ST-101",
        name: "Сидоров А.Н.",
        role: "Junior Developer",
        dept: "Отдел разработки",
      },
      {
        id: "ST-102",
        name: "Козлова М.В.",
        role: "QA Engineer",
        dept: "Тестирование",
      },
    ],
  },
  {
    id: "EVT-002",
    title: "Продвинутый TypeScript",
    dateTime: "2026-07-28 11:00",
    status: "Идет регистрация",
    responsible: ["Смирнов А.А."],
    attendees: [
      {
        id: "ST-103",
        name: "Морозов Д.С.",
        role: "Frontend Developer",
        dept: "Отдел разработки",
      },
    ],
  },
];
