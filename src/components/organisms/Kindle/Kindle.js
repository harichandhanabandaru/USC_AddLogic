import React from 'react'
import kindleinput from '../../atoms/Kindle/kindleinput'
import kindledropdown from '../../atoms/Kindle/kindledropdown'
import Button from '@material-ui/core/Button'
import Modal from "@material-ui/Modal";
import Box from "@material-ui/Box";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Kindlesent from './Kindlesent'
import kindlehelpbtn from '../../atoms/Buttons/kindlehelpbtn'

function Kindle() {

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>send to kindle </Button>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography>Set up your Kindle</Typography>
          <Typography>related typography</Typography>
          <Grid>
            <Grid>
              <Grid item>
                <kindleinput />
              </Grid>
              <Grid item>
                <kindledropdown />
              </Grid>
            </Grid>
            <Grid>
              <Kindlesent />
            </Grid>
            <Grid>
              <kindlehelpbtn/>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default Kindle
