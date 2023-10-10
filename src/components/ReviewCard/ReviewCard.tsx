import React from "react";
import { Paper, Typography, Rating as MuiRating, Grid } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

interface ReviewProps {
  name: string;
  location: string;
  rating: number;
  date: string;
  feedback: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  location,
  rating,
  date,
  feedback,
}) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "16px", textAlign: "left" }}>
        <ThemeProvider theme={theme}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {location}
          </Typography>
          <MuiRating name="rating" value={rating} precision={0.5} readOnly />
          <Typography></Typography>
          <Typography variant="body2" component="h2">
            {feedback}
          </Typography>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
};

export default ReviewCard;
