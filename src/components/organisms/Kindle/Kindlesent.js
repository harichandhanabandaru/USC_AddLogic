import React from 'react'
import Typography from '@material-ui/icons/Typography'
import Button from '@material-ui/core/Button'
import {Modal,Box} from '@material-ui/core'
import Btn from '../../atoms/Buttons/Btn';

function Kindlesent(onclicked) {

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add email</Button>

      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography>The grid</Typography>
          <Typography> Heading and conetent </Typography>
          <Typography> below heading text </Typography>

          <Button onClick={handleClose} > continue Reading</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Kindlesent
