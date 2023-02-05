import React from "react";
import { Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CharacterCard = ({ item }: any) => {
  console.log(item);
  return (
    <Grid item lg={3} md={3} xs={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 300 }} image={item.image} title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/character/${item.id}`}>
            More info
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
