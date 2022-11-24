import React from 'react';

import { AppBar, Box, Button, Container, CssBaseline, Slide, Toolbar, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ObscureThemeProvider from './Theme';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return <Slide in={!trigger}>{children}</Slide>;
}

function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography variant="subtitle1">&copy;{currentYear} ObscurelyMe. All rights reserved.</Typography>
    </Box>
  );
}

export default function App() {
  const loremIpsumString = () => {
    return 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.';
  };

  return (
    <ObscureThemeProvider>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <Container maxWidth="md">
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircleIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,
                  }}
                >
                  Obscurely
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button color="quandary">About</Button>
                <Button color="quandary">Misc</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      {/* {NOTE: Empty toolbar for spacing reasons} */}
      <Toolbar />
      <Container maxWidth="md">
        <Box sx={{ my: 2 }}>{[...new Array(25)].map(loremIpsumString).join('\n')}</Box>
        <Copyright />
      </Container>
    </ObscureThemeProvider>
  );
}
