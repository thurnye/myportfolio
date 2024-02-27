import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface State extends SnackbarOrigin {
}
export interface Notify {
   message: string,
   severity: 'success' | 'error' | 'info'
}
interface CompNotificationProps {
   open: boolean;
   setOpen: (op: boolean) => void;
   notify: Notify;
   setNotify: (msg: Notify) => void;

}

const CompNotification: FC<CompNotificationProps> = (props: CompNotificationProps) => {
   const {open, setOpen, notify, setNotify} = props;

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(!open);
    };

  return (
    <Box sx={{ width: 500 }}>
      {/* <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={() => {
            setOpen(!open);
            setNotify('')
         }}
      >
         <Alert
    onClose={handleClose}
    severity={severity}
    variant="filled"
    sx={{ width: '100%' }}
  >
    {notify.message}
  </Alert>
      </Snackbar> */}

      <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose} 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity={notify.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notify.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CompNotification;