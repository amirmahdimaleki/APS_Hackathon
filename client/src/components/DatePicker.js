
// imports

import { Backdrop, Fade, Grid, IconButton, Modal, TextField, Typography, makeStyles } from '@material-ui/core'

import CloseIcon from '@mui/icons-material/Close';
import SquareIcon from '@mui/icons-material/Square';
import { border } from '@mui/system';
import { useState } from 'react';

//* Styles
const useStyles = makeStyles(theme =>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        minWidth:theme.spacing(30),
        minHeight:theme.spacing(70),
        [theme.breakpoints.up("sm")] :{
            minWidth:theme.spacing(80)
        },
        display: "flex",
        flexDirection:"column",
        // backgroundColor: theme.palette.background.paper,
        borderRadius:theme.spacing(1),
        background: "#FFF",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 1),
        // position: "relative"
      },
      logoHolder: {
        display: "flex",
        // position: "relative",
        // justifyContent: "space-between",
        height: theme.spacing(2),
        width: theme.spacing(6)
        // top: theme.spacing(10),
      },
      redSquare: {
        position: "absolute",
        top:theme.spacing(0.25),
        left: theme.spacing(1),
        // height: theme.spacing(2)
        color:"#BD3A1C",
      },
      greenSquare: {
        color: "#41B1A1",
        zIndex : 10,
        position: "absolute",
        top: theme.spacing(1.25),
        left: theme.spacing(2),
      },
      icon: {
          borderRadius: theme.spacing(2)
      },
      modalHeader: {
           display: "flex",
           justifyContent: "space-between",
           position: "relative",
      },
      closeIcon: {
        // marginLeft: theme.spacing(12)
      },
      iconBtn: {
        top: theme.spacing(-1)
      },
      // assignBtn: {
      //   color: 
      // }
      datePickerDiv: {
        display: "flex",
        flexDirection: "col"
      },
       container: {
        display: 'flex',
        flexWrap: 'wrap',
        
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        border: "3px solid ##C7C"
      },
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

      // date state 
      const [selectedDate, setSelectedDate] = useState(new Date().now);
      // date state handler 
      const handleDateChange = (date) => {
        setSelectedDate(date);
      }
        // useStyle
     
          const {paper, modal, redSquare, greenSquare, icon, logoHolder, modalHeader, closeIcon, iconBtn, datePickerDiv, textField, container } = useStyles()
        
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
        {/* the paper of modal */}
        <div className={paper}>
          {/* modal header */}
          <div className={modalHeader}>
          <div className={logoHolder}>
          <span className={redSquare}><SquareIcon className={icon} /></span>
          <span className={greenSquare}><SquareIcon className={icon} /></span>
          <Typography variant="h6" >Class </Typography> 
          </div>
          <div>
          </div>
          <IconButton className={iconBtn}><CloseIcon className={closeIcon} /></IconButton>
          </div>
          {/* date picker of modal */}
          <div className={datePickerDiv}>
          <form className={container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
          </div>

        </div>
      </Fade>

    </Modal>
  </div>
    ) 
      }
export default DatePicker