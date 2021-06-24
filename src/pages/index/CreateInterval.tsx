import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Form } from 'react-final-form';
import { TextField, Checkboxes, Radios, DatePicker, TimePicker } from 'mui-rff';
import { IIntervalData } from '@/types/interval';
import api from '@/api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ICreateIntervalProps = {
  open: boolean,
  handleClose: () => void,
}



export default function CreateInterval({ open, handleClose }: ICreateIntervalProps) {
  const classes = useStyles();

  const onSubmit = async (values: IIntervalData) => {
    const res = await api.interval.create(values);
    console.log(res);
  };

  const validate = (values: IIntervalData) => {
    const errors: { [key: string]: string } = {};
    if (!values.mocksCount) {
      errors.mocksCount = 'Required';
    }
    if (values?.mocksCount < 1) {
      errors.mocksCount = 'Required';
    }
    if (!values.dateFrom) {
      errors.dateFrom = 'Required';
    }
    if (!values.dateTo) {
      errors.dateTo = 'Required';
    }
    return errors;
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Form
        onSubmit={onSubmit}
        initialValues={{ isPublic: "yes", mocksCount: 1, mockTypes: ['algo'] }}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Create new interval
                </Typography>
                <Button
                  autoFocus
                  color="inherit"
                  type="submit"
                  disabled={submitting}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={3}>
                  <DatePicker
                    label="Date when u avalible for mock"
                    format="MM/dd/yyyy"
                    name="dateFrom"
                    margin="normal"
                    dateFunsUtils={DateFnsUtils}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TimePicker
                    name="dateFrom"
                    margin="normal"
                    label="Time from u avalible for mock (FROM)"
                    dateFunsUtils={DateFnsUtils}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TimePicker
                    name="dateTo"
                    margin="normal"
                    label="Time from u avalible for mock (TO)"
                    dateFunsUtils={DateFnsUtils}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth>
                    <TextField
                      id="standard-full-width"
                      label="How many mock interview do u want for this period?"
                      style={{ margin: 8 }}
                      placeholder=""
                      helperText=""
                      fullWidth
                      type="number"
                      margin="normal"
                      name="mocksCount"
                      required={true}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Checkboxes
                    label="What type of mock u want practice?"
                    name="mockTypes"
                    formControlProps={{ margin: 'none' }}
                    data={[
                      { label: 'Algo mocks', value: 'algo' },
                      { label: 'Syctem design mocks', value: 'sd' },
                      { label: 'Syctem design mocks (Front-end)', value: 'sdFront' },
                      { label: 'Syctem design mocks (Mobile)', value: 'sdMobile' },
                      { label: 'Front-end tasks', value: 'front' },
                    ]}
                  />
                  <FormHelperText>Select minimum one type</FormHelperText>

                </Grid>
                <Grid item xs={12}>
                  <Radios
                    label="Dont u midnt this mock will be public?"
                    name="isPublic"
                    formControlProps={{ margin: 'none' }}
                    data={[
                      { label: 'Yea, okey!', value: "yes" },
                      { label: 'No, next time.', value: "no" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth>
                    <TextField
                      id="standard-full-width-comment"
                      label="Do u want add something?"
                      style={{ margin: 8 }}
                      placeholder="Type ur comment here.."
                      helperText=""
                      fullWidth
                      margin="normal"
                      name="notes"
                      multiline
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Container>
          </form>
        )}
      />
    </Dialog>
  );
}
