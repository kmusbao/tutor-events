/**
 * Получение списка мероприятий (слой Application).
 */

import type { EventItem } from "@/domain/entities/Event";
import type { IEventRepository } from "@/domain/repositories/IEventRepository";

/** Загружает все мероприятия через репозиторий. */
export class GetEventsUseCase {
  constructor(private readonly repository: IEventRepository) {}

  async execute(): Promise<EventItem[]> {
    return this.repository.getAll();
  }
}
