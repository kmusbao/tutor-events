/**
 * Таблица участников мероприятия.
 */

import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import type { Attendee } from "@/domain/entities/Event";

/** Пропсы таблицы участников. */
interface ParticipantsTableProps {
  attendees: Attendee[];
}

/** Таблица участников учебного мероприятия. */
export default function ParticipantsTable({
  attendees,
}: ParticipantsTableProps) {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Код</TableCell>
            <TableCell>ФИО</TableCell>
            <TableCell>Должность</TableCell>
            <TableCell>Отдел</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {attendees.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.id}</TableCell>
              <TableCell>
                <Stack direction="row" spacing={1} >
                  {person.name[0]}
                  {person.name}
                </Stack>
              </TableCell>
              <TableCell>{person.role}</TableCell>
              <TableCell>{person.dept}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
