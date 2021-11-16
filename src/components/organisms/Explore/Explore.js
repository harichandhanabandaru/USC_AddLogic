import React from 'react'
import ExploreTabs from '../../molecules/ExploreTabs';
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Box from '@material-ui/core/Box'

function Explore() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Explore</Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box>
            <ExploreTabs />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Explore;
