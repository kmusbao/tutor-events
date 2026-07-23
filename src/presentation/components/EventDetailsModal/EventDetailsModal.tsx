/**
 * Модальное окно с деталями мероприятия.
 */

import CloseIcon from "@mui/icons-material/Close";

import {
  Avatar,
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import Slide from "@mui/material/Slide";

import type { TransitionProps } from "@mui/material/transitions";

import { forwardRef } from "react";

import type { EventItem } from "@/domain/entities/Event";
import ParticipantsTable from "@/presentation/components/ParticipantsTable/ParticipantsTable";

/** Анимация появления модального окна снизу вверх. */
const Transition = forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/** Пропсы модального окна деталей мероприятия. */
interface EventDetailsModalProps {
  open: boolean;
  event: EventItem | null;
  onClose: () => void;
}

/** Модальное окно с подробной информацией о мероприятии. */
export default function EventDetailsModal({
  open,
  event,
  onClose,
}: EventDetailsModalProps) {
  if (!event) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slots={{ transition: Transition }}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ position: "relative", pr: 6 }}>
        Детали мероприятия
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {event.title}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Chip label={event.id} />
            <Chip label={event.status} color="success" />
          </Stack>

          <Typography>📅 {event.dateTime}</Typography>

          <Box>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>
              Ответственные
            </Typography>
            <Stack direction="row" spacing={1}>
              {event.responsible.map((person) => (
                <Chip
                  key={person}
                  label={person}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Участники</Typography>
            <ParticipantsTable attendees={event.attendees} />
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
