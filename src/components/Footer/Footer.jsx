import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        DVR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function StickyFooter() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme => theme.palette.primary.light,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">PHONE-BOOK for KIDS</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
