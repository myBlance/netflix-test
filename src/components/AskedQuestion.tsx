import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import 
    MuiAccordionSummary, 
    {
        AccordionSummaryProps,
        accordionSummaryClasses,
    } 
from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import '../styles/AskedQuestion.css';

const Accordion = styled((props: AccordionProps) => (
  	<MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
	border: `1px solid`,
	backgroundColor: '#2a2a2a',
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&::before': {
		display: 'none',
  	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  	<MuiAccordionSummary
		expandIcon={<AddIcon className="accordion-icon" />}
		{...props}
  	/>
))(() => ({
	padding: '8px',
	backgroundColor: '#2a2a2a',
	color: '#ffffff',
	flexDirection: 'row',
	[`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
		transform: 'rotate(45deg)',
	},
	[`& .${accordionSummaryClasses.content}`]: {
		marginRight: '8px',
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    color: '#ffffff',
    padding: '16px',
	backgroundColor: '#2a2a2a',
}));

const AskedQuestions: React.FC = () => {
  const questions = [
    {
      title: "What is Netflix?",
      description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. Watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
	  description: "Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
	  description: "Watch instantly from any internet-connected device that offers the Netflix app, or stream from your laptop, tablet, or phone.",
    },
    {
      title: "How do I cancel?",
	  description: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.",
    },
    {
      title: "What can I watch on Netflix?",
	  description: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
    },
    {
      title: "Is Netflix good for kids?",
	  description: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    },
  ];

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className="asked-questions-container">
			<h2 className="asked-questions-title">Frequently Asked Questions</h2>
            {questions.map((question, index) => (
                <Accordion className='accordion-container'
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}

                >
                    <AccordionSummary className='accordion-summary'
                        expandIcon={<AddIcon className="accordion-icon" />}
                        aria-controls={`panel${index}d-content`}
                        id={`panel${index}d-header`}
                    >
                        <Typography component="span">{question.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='accordion-details'>
                        <Typography>{question.description}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default AskedQuestions;
