
// imports

import { Backdrop, Fade, Modal, Typography, makeStyles } from '@material-ui/core'

import CloseIcon from '@mui/icons-material/Close';
import SquareIcon from '@mui/icons-material/Square';
import { useState } from 'react';

//* Styles
const useStyles = makeStyles(theme =>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        display: "flex",
        flexDirection:"column",
        // backgroundColor: theme.palette.background.paper,
        borderRadius:theme.spacing(1),
        background: "#F2F2F1",
        // boxShadow:  5px 5px 13px #cacaca,
                    //  -5px -5px 13px #f6f6f6,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 2, 1),
        // position: "relative"
      },
      logoHolder: {
        display: "flex",
        position: "relative",
        height: theme.spacing(5),
        top: theme.spacing(0),
      },
      redSquare: {
        position: "absolute",
        top:theme.spacing(1),
        left: theme.spacing(2),
        // height: theme.spacing(2)
        color:"#BD3A1C",
      },
      greenSquare: {
        color: "#41B1A1",
        zIndex : 10,
        position: "absolute",
        top: theme.spacing(2),
        left: theme.spacing(3),
      },
      icon: {
          borderRadius: theme.spacing(2)
      },
      modalHeader: {
           display: "flex"
      }
}))


const DatePicker = ({HomeworkTitle}) => {
    // const classes = useStyles();
    const [open, setOpen] = useState(false)
    

    // open and close functionality
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

        // useStyle
        const {paper, modal, redSquare, greenSquare, icon, logoHolder, modalHeader} = useStyles()
        
  return (
    <div>
    <button type="button" onClick={handleOpen}>
      react-transition-group
    </button>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
     
      <Fade in={open}>
        <div className={paper}>
          <div className={modalHeader}>
          <div className={logoHolder}>
          <span className={redSquare}><SquareIcon className={icon} /></span>
          <span className={greenSquare}><SquareIcon className={icon} /></span>
          </div>
          <Typography variant="h5" >hello</Typography> 
          </div>
          <span></span>
          <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">react-transition-group animates me.</p>
        </div>
      </Fade>

      
    </Modal>
  </div>
  )
}

export default DatePicker