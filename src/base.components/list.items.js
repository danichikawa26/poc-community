import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import VideocamIcon from '@material-ui/icons/Videocam';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(64),
    },
  }),
);

export default function MainListItems(isListOpen) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
console.log(isListOpen);
console.log(open);
  return (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Início"/>
    </ListItem>
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <NoteAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Criar conteúdo"/>
      {!isListOpen && open ? <ExpandLess/> : <ExpandMore/>}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button >
          <ListItemText primary="Publicação" classeName={classes.nested}/>
        </ListItem>
        <ListItem button >
          <ListItemText primary="Criar stories" classeName={classes.nested}/>
        </ListItem>
        <ListItem button >
          <ListItemText primary="Criar evento" classeName={classes.nested}/>
        </ListItem>
      </List>
    </Collapse>
    <ListItem button>
      <ListItemIcon>
        <VideocamIcon/>
      </ListItemIcon>
      <ListItemText primary="Iniciar ao vivo"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ArtTrackIcon/>
      </ListItemIcon>
      <ListItemText primary="Ver publicações"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventAvailableIcon/>
      </ListItemIcon>
      <ListItemText primary="Ver eventos"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon/>
      </ListItemIcon>
      <ListItemText primary="Gerenciar conta"/>
    </ListItem>
  </div>
  )
};
