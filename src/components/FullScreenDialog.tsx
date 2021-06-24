import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type IProps = {
  open: boolean,
  handleClose: () => void,
  children: any,
}

export default function FullScreenDialog({ children, open, handleClose }: IProps) {
  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      {children}
    </Dialog>
  );
}
