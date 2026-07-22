/**
 * Сетка карточек мероприятий.
 */

import { Container, Grid } from "@mui/material";

import type { EventItem } from "@/domain/entities/Event";
import EventCard from "@/presentation/components/EventCard/EventCard";

/** Пропсы компонента сетки мероприятий. */
interface EventGridProps {
  events: EventItem[];
  onEventClick: (event: EventItem) => void;
}

/** Адаптивная сетка карточек мероприятий. */
export default function EventGrid({ events, onEventClick }: EventGridProps) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid
            key={event.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <EventCard event={event} onClick={onEventClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
