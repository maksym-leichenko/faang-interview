import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
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
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
  const [fromDate, setFromDate] = React.useState<Date | null>(new Date());
  const [toDate, setToDate] = React.useState<Date | null>(new Date());
  const [isPublic, setIsPublic] = React.useState(true);
  const [mockTypes, setMockTypes] = React.useState({
    algo: true,
    sd: false,
    'sd-front': false,
    'sd-mobile': false,
    front: false,
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMockTypes({ ...mockTypes, [event.target.name]: event.target.checked });
  };

  const handlePublicChange = () => {
    setIsPublic(!isPublic);
  };


  const handleDateChange = (date: Date | null) => {
    setFromDate(date);
    setToDate(date);
  };

  const submitHandler = async () => {

  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    submitHandler();
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Create new interval
          </Typography>
          <Button autoFocus color="inherit" onClick={() => submitHandler()}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false}>
        <form onSubmit={onSubmit}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={3}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date when u avalible for mock"
                  format="MM/dd/yyyy"
                  value={fromDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker-from"
                  label="Time from u avalible for mock"
                  value={fromDate}
                  onChange={setFromDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker-to"
                  label="Time to u avalible for mock"
                  value={toDate}
                  onChange={setToDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
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
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">What type of mock u want practice?</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={mockTypes.algo} onChange={handleChange} name="algo" />}
                      label="Algo mocks"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={mockTypes.sd} onChange={handleChange} name="sd" />}
                      label="Syctem design mocks"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={mockTypes['sd-front']} onChange={handleChange} name="sd-front" />}
                      label="Syctem design mocks (Front-end)"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={mockTypes['sd-mobile']} onChange={handleChange} name="sd-mobile" />}
                      label="Syctem design mocks (Mobile)"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={mockTypes.front} onChange={handleChange} name="front" />}
                      label="Front-end tasks"
                    />
                  </FormGroup>
                  <FormHelperText>Select minimum one type</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">Dont u midnt this mock will be public?</FormLabel>
                  <RadioGroup aria-label="quiz" name="quiz" value={isPublic} onChange={handlePublicChange}>
                    <FormControlLabel value={true} control={<Radio />} label="Yea, okey!" />
                    <FormControlLabel value={false} control={<Radio />} label="No, next time." />
                  </RadioGroup>
                </FormControl>
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        </form>
      </Container>
    </Dialog>
  );
}
