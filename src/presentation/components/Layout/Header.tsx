/**
 * Шапка приложения «Учебный портал».
 */

import AddIcon from "@mui/icons-material/Add";
import SchoolIcon from "@mui/icons-material/School";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

/** Пропсы компонента шапки. */
interface HeaderProps {
  onCreateClick: () => void;
}

/** Верхняя панель приложения с заголовком и действиями. */
export default function Header({ onCreateClick }: HeaderProps) {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #38bdf8 100%)",
        color: "white",
        py: 6,
        mb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <SchoolIcon fontSize="large" />
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Учебный портал
              </Typography>
            </Stack>

            <Typography variant="h6" sx={{ mt: 1, opacity: 0.85 }}>
              Управление учебными мероприятиями
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            startIcon={<AddIcon />}
            onClick={onCreateClick}
            sx={{
              bgcolor: "white",
              color: "primary.main",
              borderRadius: 3,
              px: 3,
              "&:hover": {
                bgcolor: "grey.100",
                transform: "translateY(-2px)",
              },
              transition: "0.2s",
            }}
          >
            Создать мероприятие
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
