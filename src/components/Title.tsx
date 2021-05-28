import React from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  children: React.ReactElement | string
}

export default function Title({ children }: Props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}
