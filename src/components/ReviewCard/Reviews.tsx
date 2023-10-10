import React from "react";
import { Grid, Box } from "@mui/material";
import ReviewCard from "./ReviewCard";
import reviews from "./data.json";

interface ReviewProps {
  name: string;
  location: string; // Make it a union type
  rating: number;
  date: string;
  feedback: string;
}

const Reviews: React.FC = () => {
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        {reviews.map((review: ReviewProps, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <ReviewCard
              name={review.name}
              location={review.location}
              rating={review.rating}
              date={review.date}
              feedback={review.feedback}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
