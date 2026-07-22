/**
 * Сущности «Мероприятие» и «Участник».
 */

export type EventStatus = "Предстоит" | "Идет регистрация" | "Завершено";

/** Участник учебного мероприятия. */
export interface Attendee {
  id: string;
  name: string;
  role: string;
  dept: string;
}

/** Учебное мероприятие с метаданными и списком участников. */
export interface EventItem {
  id: string;
  title: string;
  dateTime: string;
  status: EventStatus;
  responsible: string[];
  attendees: Attendee[];
}

/** Входные данные формы создания мероприятия. */
export interface CreateEventInput {
  id: string;
  title: string;
  dateTime: string;
  status: EventStatus;
  responsibleInput: string;
  attendeesInput: string;
}

/** Ошибки валидации формы создания мероприятия. */
export interface FormErrors {
  id?: string;
  title?: string;
  dateTime?: string;
}
