// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';

// import mockData from '../utils/mock'

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);



// export default function TabModalDialogs(props) {

//   const {handleClose, open} = props
//   // const [open, setOpen] = React.useState(false);

//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };
//   // const handleClose = () => {
//   //   setOpen(false);
//   // };
//   // eslint-disable-next-line no-lone-blocks
//   {mockData.map((data) => {
//     return (
//         <div>
//         <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           {data.name}
//         </DialogTitle>
//         <DialogContent dividers>
//         {/* {data.groups.map((group) => {
//             const {name, tabs} = group
//             return (
//                 <div>
//                     <Typography gutterBottom>
//                         {name}
//                     </Typography>

//                     {tabs.map(() => {
//                         const {title, url} = tabs
//                         return(
//                             <div>
//                                 <span>{title}</span>
//                                 <a href={url}>{url}</a>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )
//         })} */}
//         <p>Modal Content</p>
//         </DialogContent>

//         <DialogActions>
//           <Button autoFocus onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//         </Dialog>
//         </div>
//     );
// })
// }
// }

import React from 'react'
import styles from '../components/style/modal.module.css'


function TabModal(props) {
  const {closeModal} = props

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className= {styles.titleCloseBtn}>
        <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className={styles.title}>
          <h1>Title</h1>
        </div>

        <div className={styles.body}> 
          <p>This will contain the Titles and url of tabs</p>
        </div>
        <div className={styles.modalFooter}>
          <button id={styles.closeBtn} onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default TabModal



