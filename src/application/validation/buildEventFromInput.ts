import type {
  Attendee,
  CreateEventInput,
  EventItem,
} from "@/domain/entities/Event";

/** Преобразует строку с ФИО через запятую в список участников. */
function parseAttendees(attendeesInput: string): Attendee[] {
  return attendeesInput
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name, index) => ({
      id: `ST-${Date.now()}-${index}`,
      name,
      role: "Слушатель",
      dept: "Не указано",
    }));
}

/** Создаёт EventItem из валидных данных формы. */
export function buildEventFromInput(input: CreateEventInput): EventItem {
  return {
    id: input.id.trim(),
    title: input.title.trim(),
    dateTime: input.dateTime.replace("T", " "),
    status: input.status,
    responsible: input.responsibleInput
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean),
    attendees: parseAttendees(input.attendeesInput),
  };
}
