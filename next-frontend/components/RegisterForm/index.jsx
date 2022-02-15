import {format} from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SuccessImg from "./success.svg";
import Link from 'next/link';
import Button from '../global/Button';
import {
    TextField,
    FormControlLabel,
    FormControl,
    RadioGroup,
    Radio,
    Checkbox,
    InputLabel,
    Select,
    MenuItem,
    ThemeProvider,
    createTheme,
    withStyles
} from '@material-ui/core';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import styles from "./RegisterForm.module.scss";

const customTheme = createTheme({
  typography: {
    fontFamily:"'Inter', sans-serif",
    htmlFontSize: 10
  },
  props: {
    MuiRadio: {
      disableRipple: true
    },
    MuiCheckbox: {
      disableRipple: true
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: "1.4rem",
        lineHeight: "1.2"
      }
    },
    MuiSelect: {
      root: {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"

      }
    },
    MuiMenuItem: {
      root: {
        fontSize: "1.4rem",
      }
    }

  }
});

const CustomForm = (props) => {
    const { status, message, onValidated} = props;

    const [email, setEmail] = useState('');
    const [pFName, setPFName] = useState('');
    const [pLName, setPLName] = useState('');
    const [pDOB, setPDOB] = useState(new Date());
    const [pClub, setPClub] = useState('');
    const [pGender, setPGender] = useState('male');
    const [program, setProgram] = useState('');
    const [gFName, setGFName] = useState('');
    const [gLName, setGLName] = useState('');
    const [gPhone, setGPhone] = useState('');
    const [gRelation, setGRelation] = useState('');
    const [comment, setComment] = useState('');
    const [tnc, setTnc] = useState(false);


    useEffect(() => {
    if(status === "success") clearFields();

    }, [status])

    const clearFields = () => {
        setEmail('');
        setPFName('');
        setPLName('');
        setPDOB(new Date());
        setPClub('');
        setPGender('male');
        setProgram('');
        setGFName('');
        setGLName('');
        setGPhone('');
        setGRelation('');
        setComment('');
        setTnc(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        email.indexOf("@") > -1 &&
        pFName &&
        pLName &&
        pDOB &&
        pClub &&
        pGender &&
        program &&
        gFName &&
        gLName &&
        gPhone &&
        gRelation &&
        tnc &&

        onValidated({
            MERGE0: email,
            MERGE1: pFName,
            MERGE2: pLName,
            MERGE13: format(pDOB, 'yyyy-MM-dd'),
            MERGE7: gPhone,
            MERGE12: pClub,
            MERGE3: pGender,
            MERGE4: program,
            MERGE5: gFName,
            MERGE6: gLName,
            MERGE8: gRelation,
            MERGE11: comment,
        })
    }

    return (
    <ThemeProvider theme={customTheme}>
      <div className={styles["form-wrapper"]}>

        <h1 className={'h1' + ' ' + styles['contact-form-heading']}>
            Register today and get <span>world cup</span> ready!
        </h1>

        <div className={styles['contact-form-misc']}>
            Already a member?{' '}
            <a href="https://rfi.teamapp.com/" rel="noreferrer" target="_blank">Login here</a>.
        </div>

        <div className={`${styles["form-msg"]} ${ status === "success"? styles["is-success"] : ''}`}>
            {status ==="error" && (
                <div className={styles["form-error"]} dangerouslySetInnerHTML={{__html:message}}/>
            )}
            {status ==="success" && (
                <h3 className={`${styles["form-success-msg"]} text-center`} >Thanks for registering your interest. We’ll be in touch soon.</h3>
            )}
        </div>

        <form className={` ${ status === "success"? styles['is-hidden'] : ''}`}onSubmit={e => handleSubmit(e)}>
            <fieldset className={styles['form-section']}>
                <legend className={styles['form-section-heading']}>
                    Player Details
                </legend>
                <div className={styles['form-row']}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            First Name *
                        </label>
                        <TextField
                          className={styles['form-input-text']}
                          id="p-first-name"
                          name="p-first-name"
                          placeholder="First Name"
                          value={pFName}
                          required
                          variant="outlined"
                          onChange={(e) => {setPFName(e.target.value)}}
                        />
                    </div>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Last Name *
                        </label>
                        <TextField
                          className={styles['form-input-text']}
                          id="p-last-name"
                          name="p-last-name"
                          placeholder="Last Name"
                          value={pLName}
                          required
                          variant="outlined"
                          onChange={(e) => {setPLName(e.target.value)}}
                        />
                    </div>
                </div>

                <div className={styles['form-row']}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Date of birth *
                        </label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            className={styles['form-input-text']}
                            disableToolbar
                            format="dd/MM/yyyy"
                            id="date-picker"
                            openTo="year"
                            views={["year", "date"]}
                            value={pDOB}
                            onChange={(date) => {setPDOB(date)}}
                            required
                            inputVariant="outlined"
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Current Club *
                        </label>
                        <TextField
                          className={styles['form-input-text']}
                          id="p-current-club"
                          name="p-current-club"
                          placeholder="Current Club"
                          variant="outlined"
                          value={pClub}
                          onChange={(e) => {setPClub(e.target.value)}}
                        />
                    </div>
                </div>

                <div className={styles['form-row']}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Gender *
                        </label>
                        <RadioGroup
                          row
                          className={styles['form-radio-group']}
                          aria-label="position"
                          id="p-gender"
                          name="p-gender"
                          required
                          value={pGender}
                          onChange={(e) => {setPGender(e.target.value)}}
                        >
                          <FormControlLabel
                            value="male"
                            className={styles['form-radio']}
                            control={<Radio color="primary" />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="female"
                            className={styles['form-radio']}
                            control={<Radio color="primary" />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="other"
                            className={styles['form-radio']}
                            control={<Radio color="primary" />}
                            label="Other"
                          />
                        </RadioGroup>
                    </div>
                </div>

                <div className={styles['form-row']}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Program *
                        </label>
                        <RadioGroup
                          row
                          className={styles['form-radio-program-group']}
                          aria-label="position"
                          id="p-gender"
                          name="p-gender"
                          required
                          value={program}
                          onChange={(e) => {setProgram(e.target.value)}}
                        >
                            <FormControlLabel
                                value="initiation"
                                control={<Radio color="primary" style={{display: 'none'}}/>}
                                label={<div className={`${styles['form-radio-program']} ${program == 'initiation' ? styles['is-checked'] : ''}`}>Initiation</div>}
                            />
                            <FormControlLabel
                                value="development"
                                control={<Radio color="primary" style={{display: 'none'}}/>}
                                label={<div className={`${styles['form-radio-program']} ${program == 'development' ? styles['is-checked'] : ''}`}>Development</div>}
                            />
                        </RadioGroup>
                    </div>
                </div>
            </fieldset>


            <fieldset className={styles['form-section']}>
                <legend className={styles['form-section-heading']}>
                    Guardian Details
                </legend>
                <div className={styles['form-row']}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            First Name *
                        </label>
                        <TextField
                          className={styles['form-input-text']}
                          id="g-first-name"
                          name="g-first-name"
                          placeholder="First Name"
                          value={gFName}
                          required
                          variant="outlined"
                          onChange={(e) => {setGFName(e.target.value)}}
                        />
                    </div>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Last Name *
                        </label>
                        <TextField
                          className={styles['form-input-text']}
                          id="g-last-name"
                          placeholder="Last Name"
                          value={gLName}
                          required
                          variant="outlined"
                          onChange={(e) => {setGLName(e.target.value)}}
                        />
                    </div>
                </div>

                <div className={styles['form-row']}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Email *
                        </label>
                        <TextField
                          className={styles['form-input-text']}
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          required
                          variant="outlined"
                          onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Phone Number *
                        </label>
                        <TextField
                          className={styles['form-input-text']}
                          id="phone"
                          name="phone"
                          placeholder="Phone number"
                          value={gPhone}
                          required
                          variant="outlined"
                          onChange={(e) => {setGPhone(e.target.value)}}
                        />
                    </div>
                </div>

                <div className={styles['form-row']}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Relationship to player *
                        </label>
                        <Select
                            id="g-relation"
                            name="g-relation"
                            value={gRelation}
                            className={styles['form-input-text']}
                            displayEmpty
                            required
                            onChange={(e) => {setGRelation(e.target.value)}}
                        >
                            <MenuItem value="parent">Parent</MenuItem>
                            <MenuItem value="relative">Relative</MenuItem>
                            <MenuItem value="guardian">Guardian</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </div>
                </div>
            </fieldset>


            <fieldset className={styles['form-section']}>
                <legend className={styles['form-section-heading']}>
                    Additional Comments
                </legend>
                <div className={styles["form-row"]}>
                    <div className={styles['form-col']}>
                        <label className={styles['form-label']}>
                            Message (Optional)
                        </label>
                        <TextField
                          id="comment"
                          name="comment"
                          //label="Any other relevant information"
                          value={comment}
                          onChange={(e) => {setComment(e.target.value)}}
                          multiline
                          rows={12}
                          variant="outlined"
                          className={styles['form-textarea']}
                          InputLabelProps={{shrink:false}}
                        />
                    </div>
                </div>

                <div className={styles["form-row"]}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={tnc}
                          onChange={(e) => {setTnc(e.target.checked)}}
                          name="tnc"
                          color="primary"
                          required
                        />
                      }
                      label={<div>I have read and accept the <Link href="/terms-and-conditions"><a  target="_blank">Terms and Conditions</a></Link></div>}
                    />
                </div>
            </fieldset>
            <div className={styles["form-row"]} style={{marginTop: "4rem"}}>
                <Button variant='1'>Submit</Button>
            </div>
        </form>
      </div>
    </ThemeProvider>

    );

};

const RegisterForm = props => {
    const mailchimp_u = '7274089b9f93dfb699f798c53';
    const mailchimp_id = 'eaf8cc3de6';
    const postUrl = `https://teamapp.us1.list-manage.com/subscribe/post?u=${mailchimp_u}&id=${mailchimp_id}`;

    return (
        <div className={styles['contact-form-wrapper']}>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message}) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => { return subscribe(formData)}}
                    />
                )}
            />
        </div>
    );
}

export default RegisterForm;

