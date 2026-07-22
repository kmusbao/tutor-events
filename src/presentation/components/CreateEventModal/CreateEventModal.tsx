/**
 * Модальное окно создания мероприятия .
 * Собирает данные формы и передаёт их в use case через callback.
 */

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

import { useState } from "react";

import type { CreateEventInput, FormErrors } from "@/domain/entities/Event";

/** Пропсы модального окна создания мероприятия. */
interface CreateEventModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (input: CreateEventInput) => Promise<FormErrors | null>;
}

/** Начальное состояние формы создания мероприятия. */
const emptyForm: CreateEventInput = {
  id: "",
  title: "",
  dateTime: "",
  status: "Предстоит",
  responsibleInput: "",
  attendeesInput: "",
};

/** Форма создания нового учебного мероприятия. */
export default function CreateEventModal({
  open,
  onClose,
  onCreate,
}: CreateEventModalProps) {
  const [form, setForm] = useState<CreateEventInput>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const submit = async () => {
    const validationErrors = await onCreate(form);

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    onClose();
    setForm(emptyForm);
    setErrors({});
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Новое мероприятие</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Код"
            error={!!errors.id}
            helperText={errors.id}
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />

          <TextField
            label="Название"
            error={!!errors.title}
            helperText={errors.title}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <TextField
            type="datetime-local"
            label="Дата и время"
            error={!!errors.dateTime}
            helperText={errors.dateTime}
            slotProps={{ inputLabel: { shrink: true } }}
            value={form.dateTime}
            onChange={(e) => setForm({ ...form, dateTime: e.target.value })}
          />

          <TextField
            label="Ответственные"
            placeholder="Иванов, Петров"
            value={form.responsibleInput}
            onChange={(e) =>
              setForm({ ...form, responsibleInput: e.target.value })
            }
          />

          <TextField
            multiline
            rows={3}
            label="Участники"
            value={form.attendeesInput}
            onChange={(e) =>
              setForm({ ...form, attendeesInput: e.target.value })
            }
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button variant="contained" onClick={submit}>
          Создать
        </Button>
      </DialogActions>
    </Dialog>
  );
}
