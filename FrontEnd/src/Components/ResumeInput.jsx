import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRoles from '../assets/jobRoles.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { addresumeAPI } from '../services/apiServices';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Info', 'Contact Details', 'Educational Details','Review & Submit'];

export default function ResumeInput({resumeDetails,setResumeDetails}) {

  const navigate=useNavigate()

  const handleSkillsAndSummary=()=>{
    setResumeDetails({...resumeDetails,skill:jobSkills[resumeDetails.jobTitle],summary:summaries[resumeDetails.jobTitle] })
    handleNext()
  }

  console.log(resumeDetails);
  

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


   const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = React.useCallback((step) => {
    return step === 1;
  }, []);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleSubmit = async() => {

    const {name,location,jobTitle, email, contactNumber,linkedin, github, degree, college, year,skill, summary} =resumeDetails

    if(name==''||location==''||jobTitle==''||email==''||contactNumber==''||linkedin==''|| github==''||degree==''||college==''||year==''||skill==''||summary==''){
// sweet alert
Swal.fire({
  title: "plz fill the compleate form",
  icon: "warning",
})
    }
    // API call
else{
      try{
      const res = await addresumeAPI(resumeDetails)
      console.log(res);
     if(res.status==201){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
// navigation through id

const resumeid=res.data.id
setTimeout(()=>{
  navigate(`/resume/${resumeid}`)
})
     }

    }
    catch(err){
      console.log(err);
          Swal.fire({
  position: "top-end",
  icon: "failed",
  title: "Your work has been not saved",
  showConfirmButton: false,
  timer: 1500
});
    }

  };
}

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    if (activeStep === steps.length) {
      // If the user has completed all steps and hits "Finish", focus the "Reset" button.
      resetButtonRef.current.focus();
      return;
    }
    if (activeStep === 0 && previousActiveStep === steps.length) {
      // If the user has completed all steps and hits "Reset", focus the "Next" button.
      nextButtonRef.current.focus();
      return;
    }
    if (isStepOptional(previousActiveStep) && !isStepOptional(activeStep)) {
      // If the user hits "Skip" and the next step is not optional, focus the "Next" button.
      //  nextButtonRef.current.focus();
    }
  }, [activeStep, isStepOptional]);

  const renderFormControl=(stepsCount)=>{
    switch(stepsCount){
      case 0 :
        return(
         <Box>

           <h1>Personal Info</h1>
          <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <Stack direction='column'
             sx={{
              gap:2,
             }}>
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,name:e.target.value})} value={resumeDetails.name} id="fullName" label="Full Name" variant="standard" sx={{width:400}} />
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,location:e.target.value})} value={resumeDetails.location} id="location" label="Location" variant="standard" sx={{width:400}} />
        <Box sx={{ minWidth: 200 }}>
          {/* form controll */}
       <FormControl variant="standard" sx={{  minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">Job Title</InputLabel>
        <Select
          defaultValue={''}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={}
          onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})}
        >
         { 
            jobRoles.jobRoles.map(item=>(
                <MenuItem value={item} key={item}>{item}</MenuItem>
          ))
          }
        </Select>
      </FormControl>
    </Box>
      </Stack>
    </Box>
         </Box>
          
        )
      break
      case 1 :
        return(
         <Box>
           <h1>Contact Info</h1>
          <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="on"
    >
      <Stack direction='column'
             sx={{
              gap:2
             }}>
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,email:e.target.value})} value={resumeDetails.email} id="email" label="Email" variant="standard" sx={{width:400}} />
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,contactNumber:e.target.value})} value={resumeDetails.contactNumber} id="contactNumber" label="Contact Number" variant="standard" sx={{width:400}} />
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} value={resumeDetails.linkedin} id="linkedin" label="LinkedIn" variant="standard" sx={{width:400}}  />
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,github:e.target.value})} value={resumeDetails.github} id="github" label="GitHub" variant="standard" sx={{width:400}}  />
      </Stack>
    </Box>
         </Box>
        )
      break
      case 2 :
        return(
           <Box>
           <h1>Education Info</h1>
          <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="on"
    >
      <Stack direction='column'
             sx={{
              gap:2
             }}>
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,degree:e.target.value})} value={resumeDetails.degree} id="degree" label="Degree" variant="standard" sx={{width:400}} />
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,college:e.target.value})} value={resumeDetails.college} id="collage" label="Collage / Univercity" variant="standard" sx={{width:400}} />
        <TextField onChange={(e)=>setResumeDetails({...resumeDetails,year:e.target.value})} value={resumeDetails.year} id="year" label="Year Of Graduation" variant="standard" sx={{width:400}}  />
      </Stack>
    </Box>
         </Box>
        )
      break
      case 3 :
        return(
                   <Box>
           <h1>Summery</h1>
          <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="on"
    >
      <Stack direction='column'
             sx={{
              gap:2
              }}>
      </Stack>
    </Box>
         </Box>
        )
      break
    }
  }

  return (
    <div>
       <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleSubmit} ref={resetButtonRef}>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* Changing content related with active steps */}
          <Box>
            {
              renderFormControl(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <div >
              { activeStep === steps.length - 1 ? 
              <Button onClick={handleSkillsAndSummary}> Generate skills & Resume </Button>
               :
               <Button onClick={handleNext}>Next</Button>
               }
            </div>
          </Box>
        </React.Fragment>
        
      )}
    </Box>
    <Box>
      
    </Box>
    </div>
  )
}
