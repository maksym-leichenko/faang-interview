import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CreateInterval from './index/CreateInterval'

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth={false}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add new one interval
        </Button>
        <CreateInterval open={open} handleClose={handleClose} />
      </main>
    </Container>
  )
}
