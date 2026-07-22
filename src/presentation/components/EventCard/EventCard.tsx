/**
 * @file Карточка одного мероприятия (слой Presentation/UI).
 */

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";

import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

import type { EventItem } from "@/domain/entities/Event";

/** Пропсы карточки мероприятия. */
interface EventCardProps {
  event: EventItem;
  onClick: (event: EventItem) => void;
}

/** Интерактивная карточка мероприятия в списке. */
export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <Card
      onClick={() => onClick(event)}
      sx={{
        cursor: "pointer",
        borderRadius: 4,
        transition: "0.25s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Chip label={event.id} size="small" />
          <Chip
            label={event.status}
            color={event.status === "Предстоит" ? "success" : "warning"}
          />
        </Stack>

        <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
          {event.title}
        </Typography>

        <Stack spacing={1} sx={{ mt: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthIcon fontSize="small" />
            <Typography variant="body2">{event.dateTime}</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <GroupsIcon fontSize="small" />
            <Typography variant="body2">
              {event.attendees.length} участников
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
