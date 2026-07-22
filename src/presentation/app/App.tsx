/**Корневой компонент приложения.
 * Координирует UI-компоненты и делегирует бизнес-логику hook useEvents.
 */

import { useState } from "react";

import { CircularProgress, Container, CssBaseline } from "@mui/material";

import type { EventItem } from "@/domain/entities/Event";
import { eventRepository } from "@/infrastructure/container";
import CreateEventModal from "@/presentation/components/CreateEventModal/CreateEventModal";
import EventDetailsModal from "@/presentation/components/EventDetailsModal/EventDetailsModal";
import EventGrid from "@/presentation/components/EventGrid/EventGrid";
import Header from "@/presentation/components/Layout/Header";
import { useEvents } from "@/presentation/hooks/useEvents";

/** Главный контейнер приложения: список мероприятий и модальные окна. */
export default function App() {
  const { events, loading, createEvent } = useEvents(eventRepository);

  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const openDetails = (event: EventItem) => {
    setSelectedEvent(event);
    setDetailsOpen(true);
  };

  const closeDetails = () => {
    setDetailsOpen(false);
    setSelectedEvent(null);
  };

  if (loading) {
    return (
      <>
        <CssBaseline />
        <Container sx={{ display: "flex", justifyContent: "center", py: 10 }}>
          <CircularProgress />
        </Container>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <Header onCreateClick={() => setCreateOpen(true)} />

      <Container maxWidth="lg" sx={{ pb: 5 }}>
        <EventGrid events={events} onEventClick={openDetails} />
      </Container>

      <EventDetailsModal
        open={detailsOpen}
        event={selectedEvent}
        onClose={closeDetails}
      />

      <CreateEventModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={createEvent}
      />
    </>
  );
}
