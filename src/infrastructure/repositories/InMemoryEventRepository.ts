import type { EventItem } from "@/domain/entities/Event";
import type { IEventRepository } from "@/domain/repositories/IEventRepository";
import { initialEvents } from "@/infrastructure/data/initialEvents";

/** Хранит мероприятия в памяти; подходит для прототипа и тестов. */
export class InMemoryEventRepository implements IEventRepository {
  private events: EventItem[];

  constructor(seed: EventItem[] = initialEvents) {
    this.events = [...seed];
  }

  async getAll(): Promise<EventItem[]> {
    return [...this.events];
  }

  async create(event: EventItem): Promise<void> {
    this.events = [event, ...this.events];
  }
}
