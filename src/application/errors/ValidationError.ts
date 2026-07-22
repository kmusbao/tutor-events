/**
 * Ошибка валидации доменных/прикладных правил.
 */

import type { FormErrors } from "@/domain/entities/Event";

/** Выбрасывается use case при невалидных входных данных формы. */
export class ValidationError extends Error {
  constructor(public readonly errors: FormErrors) {
    super("Validation failed");
    this.name = "ValidationError";
  }
}
