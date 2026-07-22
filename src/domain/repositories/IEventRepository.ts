import type { EventItem } from "@/domain/entities/Event";

/** Интерфейс доступа к хранилищу мероприятий. */
export interface IEventRepository {
  /** Возвращает все мероприятия. */
  getAll(): Promise<EventItem[]>;

  create(event: EventItem): Promise<void>;
}
