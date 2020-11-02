import React,{useRef,useEffect} from 'react'
import {Drawer as DrawerUp ,List, ListItem} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function Drawer(props) {
    console.log(props);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
          if (ref.current.contains(event.target)) {
            return;
          }
          props.onDrawerChange(false);
        };
    
        document.body.addEventListener("click", onBodyClick);
    
        return () => {
          document.body.removeEventListener("click", onBodyClick);
        };
      }, []);

    const drawerLook = makeStyles({
        drawer: {
            type: 'dark'
        }
    })
    const classes = drawerLook();

    return (
        <div ref={ref}>
        <DrawerUp  className={classes.drawer} anchor="right" open={props.drawerOn} >
            <List>
                <ListItem>
                    coś
                </ListItem>
            </List>
        </DrawerUp>
        </div>
    )
}


export default Drawer
