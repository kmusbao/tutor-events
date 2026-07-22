/**
 * Валидация формы создания мероприятия (слой Application).
 */

import type { CreateEventInput, FormErrors } from "@/domain/entities/Event";

/** Проверяет обязательные поля формы и возвращает объект ошибок. */
export function validateEventForm(input: CreateEventInput): FormErrors {
  const errors: FormErrors = {};

  if (!input.id.trim()) {
    errors.id = "Введите код";
  }

  if (!input.title.trim()) {
    errors.title = "Введите название";
  }

  if (!input.dateTime.trim()) {
    errors.dateTime = "Выберите дату";
  }

  return errors;
}
