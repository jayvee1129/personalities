import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  Collapse,
  Box,
} from "@mui/material";
import personalities from "./Data";

function App() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % personalities.length);
    setExpanded(false);
  };

  const handlePrevious = () => {
    setIndex((prev) =>
      prev === 0 ? personalities.length - 1 : prev - 1
    );
    setExpanded(false);
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const person = personalities[index];

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E2F",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "white",
            fontSize: "2rem",
          }}
        >
          THE GOATS OF MOBILE LEGENDS
        </Typography>

        {/* Identification Box */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 4,
            borderRadius: 4,
            overflow: "hidden",
            background: "linear-gradient(180deg, #2E2B72 0%, #3B378F 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            border: "1px solid rgba(139, 92, 226, 0.5)", 
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem", 
              mb: 1,
            }}
          >
            JOHN VICTOR SALAC
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#999999ff", 
              mb: 1,
            }}
          >
            CPEITEL3
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            BSIT-3A
          </Typography>
        </Paper>

        {/* Styled Card */}
        <Card
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            background: "linear-gradient(180deg, #2E2B72 0%, #3B378F 100%)",
            color: "white",
            border: "1px solid rgba(139, 92, 226, 0.5)", 
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={person.image}
            alt={person.name}
          />

          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="caption"
              sx={{
                opacity: 0.7,
                letterSpacing: 1,
              }}
            >
              GOATS OF MLBB MPLPH {index + 1} OF {personalities.length}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                fontWeight: "bold",
              }}
            >
              {person.name}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.8,
                mb: 2,
              }}
            >
              MLBB Professional Figure
            </Typography>

            <Button
              onClick={toggleDescription}
              sx={{
                color: "#00E5FF",
                textTransform: "none",
                p: 0,
                minWidth: 0,
                "&:hover": {
                  background: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              {expanded ? "Hide details" : "Show details"}
            </Button>

            <Collapse in={expanded}>
              <Typography
                variant="body2"
                sx={{ mt: 2, lineHeight: 1.6 }}
              >
                {person.description}
              </Typography>
            </Collapse>
          </CardContent>

          {/* Bottom Navigation Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2,
              borderTop: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          >
            <Button
              variant="outlined"
              onClick={handlePrevious}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.4)",
                "&:hover": {
                  borderColor: "white",
                },
              }}
            >
              BACK
            </Button>

            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                backgroundColor: "#5C6BC0",
                "&:hover": {
                  backgroundColor: "#7986CB",
                },
              }}
            >
              NEXT
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default App;