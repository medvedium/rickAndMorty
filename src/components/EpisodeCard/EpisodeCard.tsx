import React from "react";
import { Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const EpisodeCard = ({ item }: any) => {
  return (
    <Grid item lg={3} md={3} xs={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography> 
          <Typography>Episode: {item.episode}</Typography>
          <Typography>Air Date: {item.air_date}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/episode/${item.id}`}>
            More info
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EpisodeCard;
