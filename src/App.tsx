import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Player } from "./types/player";
import MergSort from "./utils/MergSort";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./components/theme";

const App: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number | string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  const handleAddPlayer = () => {
    if (name.trim() && !isNaN(Number(score))) {
      setPlayers([...players, { name, score: Number(score) }]);
      setName("");
      setScore("");
    }
  };

  const handleSortPlayers = () => {
    const playersArray = [...players];
    MergSort(playersArray, 0, playersArray.length - 1);
    setPlayers(playersArray);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "linear-gradient(45deg, #1a1a1a, #282828)",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            p: 4,
            margin: "20px 10px 20px 10px",
            overflowY: "auto",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(55, 71, 79,0.4)",
          }}
        >
          <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
            Player Rankings
          </Typography>
          {players.length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {players.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{player.name}</TableCell>
                      <TableCell>{player.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography color="text.secondary">
              No players added yet.
            </Typography>
          )}
        </Paper>

        <Paper
          elevation={6}
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 4,
            margin: "20px 20px 20px 10px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(55, 71, 79,0.4)",
          }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              Add Player
            </Typography>
            <Box sx={{ display: "flex" }} gap={2}>
              <TextField
                label="Player Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              />
              <TextField
                label="Player Score"
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              />
            </Box>
            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddPlayer}
                sx={{
                  mt: 2,
                  transition: "transform 0.2s ease-in-out",
                  maxWidth: "300px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
                  },
                }}
                disabled={!name.trim() || score === ""}
              >
                Add Player
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSortPlayers}
                disabled={players.length === 0}
                sx={{
                  mt: 2,
                  transition: "transform 0.2s ease-in-out",
                  maxWidth: "300px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Sort by Score
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App;
