import React, {useState} from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
// import { Button } from "@mui/material";
import StageChoice from "../components/StageChoice";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../utils/mutations"

import Auth from '../utils/auth';

//CARTER'S ATTEMPTED FORM AND FUNCTIONALITY
export default function AddressForm() {
  const [addJob] = useMutation(ADD_JOB)
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [userFormData, setUserFormData] = useState(
    { company: '',
      description: '',
      jobPostLink: '',
      location: '',
      salary: '',
      title: '',
      skills: '',
      tasks: '',
      contacts: '',
     });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const mutationResponse = await addJob({
        variables: {
          ...userFormData
        }
      });

    
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };



  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='company'>Company</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your company'
            name='company'
            onChange={handleInputChange}
            value={userFormData.company}
            required
          />
          <Form.Control.Feedback type='invalid'>Company name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='description'>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your job description'
            name='description'
            onChange={handleInputChange}
            value={userFormData.description}
            required
          />
          <Form.Control.Feedback type='invalid'>Job Description is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='jobPostLink'>Job Post Link</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your jobPostLink'
            name='jobPostLink'
            onChange={handleInputChange}
            value={userFormData.jobPostLink}
            required
          />
          <Form.Control.Feedback type='invalid'>Job post link is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='location'>Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your location'
            name='location'
            onChange={handleInputChange}
            value={userFormData.location}
            required
          />
          <Form.Control.Feedback type='invalid'>Location is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='salary'>Salary</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your job salary'
            name='salary'
            onChange={handleInputChange}
            value={userFormData.salary}
            required
          />
          <Form.Control.Feedback type='invalid'>Salary is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='title'>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your title'
            name='title'
            onChange={handleInputChange}
            value={userFormData.title}
            required
          />
          <Form.Control.Feedback type='invalid'>Job post link is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor='skills'>Skills</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your skills'
            name='skills'
            onChange={handleInputChange}
            value={userFormData.skills}
            required
          />
          <Form.Control.Feedback type='invalid'>Skills are required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='tasks'>Tasks</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your job tasks'
            name='tasks'
            onChange={handleInputChange}
            value={userFormData.tasks}
            required
          />
          <Form.Control.Feedback type='invalid'>Tasks are required!</Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>

//NEVIN'S ORIGINAL FORM
    // <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    //     <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
    //       <Typography component="h1" variant="h4" align="center">
    //         Add a Job
    //       </Typography>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12} sm={12}>
    //       <TextField
    //         id="CompanyName"
    //         name="CompanyName"
    //         label="Company Name"
    //         fullWidth
    //         autoComplete="given-name"
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         id="lastName"
    //         name="lastName"
    //         label="Location"
    //         fullWidth
    //         autoComplete="family-name"
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         id="address1"
    //         name="address1"
    //         label="Salary"
    //         fullWidth
    //         autoComplete="shipping address-line1"
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <TextField
    //         id="address2"
    //         name="Job Description"
    //         label="Job Description"
    //         fullWidth
    //         autoComplete="shipping address-line2"
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         required
    //         id="city"
    //         name="city"
    //         label="City"
    //         fullWidth
    //         autoComplete="shipping address-level2"
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         id="state"
    //         name="state"
    //         label="State/Province/Region"
    //         fullWidth
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         required
    //         id="zip"
    //         name="zip"
    //         label="Zip / Postal code"
    //         fullWidth
    //         autoComplete="shipping postal-code"
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         required
    //         id="country"
    //         name="country"
    //         label="Country"
    //         fullWidth
    //         autoComplete="shipping country"
    //         variant="standard"
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //     <Button
    //               variant="contained"
    //             //   onClick={}
    //               sx={{ mt: 3, ml: 1 }}
    //             >
    //             Save Job
    //             </Button>
    //     </Grid>
    //   </Grid>
    //   </Paper>
    //   </Container>
  );
}