import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import hellbladeVideogame from '../img/hellbladeVideogame.jpg';
import eldenVideogame from '../img/eldenGame.jpg';
import monkeyVideogame from '../img/monkeyGame.jpg';
import frostVideogame from '../img/frostGame.jpg';
import starVideogame from '../img/starGame.jpg';
import stalkerVideogame from '../img/stalkerGamer.jpg';
import { Container, Typography, CardMedia, IconButton, Divider } from '@mui/material';


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
    <Divider sx={{margin: '50px'}}/>
      <Container>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: '90%', sm: '100%', md: '45%' } }}>
          <Card sx={{ display: { xs: 'grid', sm: 'flex', md: 'flex' }, border: '1px solid #7E7E7E' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', sm: '280px', md: '280px' } }}
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
        </Box>
        <Box sx={{ width: { xs: '90%', sm: '100%', md: '45%' } }}>
          <Card sx={{ display: { xs: 'grid', sm: 'flex', md: 'flex' }, border: '1px solid #7E7E7E' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', sm: '280px', md: '280px' } }}
              image={eldenVideogame}
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
        </Box>

        <Box sx={{ width: { xs: '90%', sm: '100%', md: '45%' } }}>
          <Card sx={{ display: { xs: 'grid', sm: 'flex', md: 'flex' }, border: '1px solid #7E7E7E' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', sm: '280px', md: '280px' } }}
              image={monkeyVideogame}
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
        </Box>

        <Box sx={{ width: { xs: '90%', sm: '100%', md: '45%' } }}>
          <Card sx={{ display: { xs: 'grid', sm: 'flex', md: 'flex' }, border: '1px solid #7E7E7E' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', sm: '280px', md: '280px' } }}
              image={frostVideogame}
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
        </Box>

        <Box sx={{ width: { xs: '90%', sm: '100%', md: '45%' } }}>
          <Card sx={{ display: { xs: 'grid', sm: 'flex', md: 'flex' }, border: '1px solid #7E7E7E' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', sm: '280px', md: '280px' } }}
              image={starVideogame}
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
        </Box>

        <Box sx={{ width: { xs: '90%', sm: '100%', md: '45%' } }}>
          <Card sx={{ display: { xs: 'grid', sm: 'flex', md: 'flex' }, border: '1px solid #7E7E7E' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', sm: '280px', md: '280px' } }}
              image={stalkerVideogame}
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
        </Box>
      </Box>
    </Container>
    </>
    
  );
}
