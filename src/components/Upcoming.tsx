import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import hellbladeVideogame from '../img/hellbladeVideogame.jpg';
import { Container, Typography, CardMedia, IconButton } from '@mui/material';


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Container>
    <Card sx={{ display: 'flex', border: '1px solid #7E7E7E', maxWidth: '500px' }}>
      
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={hellbladeVideogame}
        alt="Hellblade videogame"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Senua's Saga: Hellblade II
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Platform: Xbox
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Genre(s): Action, adventure
          </Typography>
        </CardContent>
      </Box>
    </Card>
    </Container>
  );
}
