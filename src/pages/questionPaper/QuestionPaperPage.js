import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Input from '../../components/Input/input';
import { useMemo } from 'react';
import DowpDownSelect from '../../components/select/Select';
import RadioInputGroup from '../../components/radio/radioGroup';
import TextArea from '../../components/textArea/textArea';

const steps = [
  {
    question: 'ප්‍රතිචාරකයාගේ නම ඇතුපත් කරන්න.',
    type: 'input',
  },
  {
    question: 'ප්‍රතිචාරකයාගේ දුරකතන අංකය ඇතුලත් කරන්න.',
    type: 'input',
  },
  {
    question: 'ප්‍රතිචාරකයාගේ ස්ත්‍රී / පුරුෂ බව.',
    type: 'radio',
  },
  {
    question: 'ප්‍රතිචාරකයාගේ වයස',
    type: 'input',
  },
  {
    question: 'ප්‍රතිචාරකයාගේ රැකියාව.',
    type: 'select',
  },
];

export default function QuestionPaperPage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Component = useMemo(() => {
    switch (steps[activeStep].type) {
      case 'input':
        return Input;
      case 'select':
        return DowpDownSelect;
      case 'radio':
        return RadioInputGroup;
      case 'textarea':
        return TextArea;
      default:
        return null;
    }
  }, [steps[activeStep].type]);

  return (
    <Box height={"90vh"} sx={{ marginTop:5, marginLeft:1, marginRight:1, marginBottom:1,  display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: "row",
          width:"100%",
          marginBottom:4
        }}>
          <Typography marginRight={1} fontWeight={800} fontSize={20}>({activeStep + 1}). </Typography>
          <Typography fontWeight={800} fontSize={22}>{steps[activeStep].question}</Typography>
        </Box>
        <Box margin={2} width={"100%"}>
          <Component question={steps[activeStep].question} />
        </Box>
      </Paper>

      <MobileStepper
        sx={{ backgroundColor: "#EEEFF0" }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}