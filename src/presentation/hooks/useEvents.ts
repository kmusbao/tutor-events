/**
 * React-hook, связывающий UI с use cases.
 */

import { useCallback, useEffect, useMemo, useState } from "react";

import { ValidationError } from "@/application/errors/ValidationError";
import { CreateEventUseCase } from "@/application/useCases/CreateEventUseCase";
import { GetEventsUseCase } from "@/application/useCases/GetEventsUseCase";
import type { CreateEventInput, EventItem, FormErrors } from "@/domain/entities/Event";
import type { IEventRepository } from "@/domain/repositories/IEventRepository";

/** Состояние и действия для работы со списком мероприятий в UI. */
export function useEvents(repository: IEventRepository) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  const getEventsUseCase = useMemo(
    () => new GetEventsUseCase(repository),
    [repository],
  );

  const createEventUseCase = useMemo(
    () => new CreateEventUseCase(repository),
    [repository],
  );

  useEffect(() => {
    let cancelled = false;

    getEventsUseCase
      .execute()
      .then((loadedEvents) => {
        if (!cancelled) {
          setEvents(loadedEvents);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [getEventsUseCase]);

  const createEvent = useCallback(
    async (input: CreateEventInput): Promise<FormErrors | null> => {
      try {
        const event = await createEventUseCase.execute(input);
        setEvents((prev) => [event, ...prev]);
        return null;
      } catch (error) {
        if (error instanceof ValidationError) {
          return error.errors;
        }

        throw error;
      }
    },
    [createEventUseCase],
  );

  return { events, loading, createEvent };
}
