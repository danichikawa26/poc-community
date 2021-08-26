// @ts-nocheck
import React from 'react';
import clsx from 'clsx';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DataTable from "./data.table";
import MainListItems from './list.items';
import lightTheme from './themes/light.theme';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  media: {
    height: 140,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    display: 'flex'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const card = clsx(classes.root, classes.card);
  const theme = createTheme({
    palette: {
      lightTheme,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="contrastText"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
                <HelpOutlineIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
                <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
          open={open}
        >
          <div className={classes.toolbarIcon}></div>
          <Divider />
          <List><MainListItems isListOpen={open} /></List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid container item spacing={3} xs={12} md={8}>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper} ><Typography variant="h3">350</Typography><Typography variant="body1">Seguidores</Typography></Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper}>
                    <Typography variant="h3">58</Typography><Typography variant="body1">Novos comentários</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" component="subtitle2">Próximo evento</Typography>
                  <Paper className={fixedHeightPaper}></Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" component="subtitle2">Publicação destacada do mês</Typography>
                    <Card className={card}>
                      <CardActionArea className={classes.cardContent}>
                        <ImageIcon />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                      </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                  <DataTable />
                </Grid>
              </Grid>
              <Grid container item spacing={3} xs={12} md={4}>
                <Grid item xs={12} md={12}>
                  <Paper className={classes.paper}>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Paper className={classes.paper}>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper}>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper}>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Box pt={4}></Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
