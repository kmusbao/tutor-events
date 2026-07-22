/**
 * Cоздание мероприятия.
 */

import { ValidationError } from "@/application/errors/ValidationError";
import { buildEventFromInput } from "@/application/validation/buildEventFromInput";
import { validateEventForm } from "@/application/validation/validateEventForm";
import type { CreateEventInput, EventItem } from "@/domain/entities/Event";
import type { IEventRepository } from "@/domain/repositories/IEventRepository";

/** Валидирует форму, создаёт сущность и сохраняет её в репозитории. */
export class CreateEventUseCase {
  constructor(private readonly repository: IEventRepository) {}

  async execute(input: CreateEventInput): Promise<EventItem> {
    const errors = validateEventForm(input);

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    const event = buildEventFromInput(input);
    await this.repository.create(event);

    return event;
  }
}
