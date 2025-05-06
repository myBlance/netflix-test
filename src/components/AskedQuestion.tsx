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
import { useTranslation } from 'react-i18next';

const Accordion = styled((props: AccordionProps) => (
  	<MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
	border: `1px solid`,
	background: 'linear-gradient(rgba(130, 130, 130, 0.5), rgba(130, 130, 130, 0.5)), var(--bg-color)',
	
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
	background: 'linear-gradient(rgba(130, 130, 130, 0.5), rgba(130, 130, 130, 0.5)), var(--bg-color)',
	color: 'var(--text-color)',
	flexDirection: 'row',
	[`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
		transform: 'rotate(45deg)',
	},
	[`& .${accordionSummaryClasses.content}`]: {
		marginRight: '8px',
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    color: 'var(--text-color)',
    padding: '16px',
	background: 'linear-gradient(rgba(130, 130, 130, 0.5), rgba(130, 130, 130, 0.5)), var(--bg-color)',
}));

const AskedQuestions: React.FC = () => {
    const { t } = useTranslation();

    const questions = [
    {
        title: t("Faq.q1.title"),
        description: t("Faq.q1.description"),
    },
    {
        title: t("Faq.q2.title"),
        description: t("Faq.q2.description"),
    },
    {
        title: t("Faq.q3.title"),
        description: t("Faq.q3.description"),
    },
    {
        title: t("Faq.q4.title"),
        description: t("Faq.q4.description"),
    },
    {
        title: t("Faq.q5.title"),
        description: t("Faq.q5.description"),
    },
    {
        title: t("Faq.q6.title"),
        description: t("Faq.q6.description"),
    },
    ];
    
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className="asked-questions-container">
			<h2 className="asked-questions-title">{t("questions-title")}</h2>
            {questions.map((question, index) => (
                <Accordion className='accordion-container'
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}

                >
                    <AccordionSummary className='accordion-summary'
                        expandIcon={<AddIcon className="accordion-icon" sx={{fontSize:26}} />}
                        aria-controls={`panel${index}d-content`}
                        id={`panel${index}d-header`}
                    >
                        <Typography component="span" >{question.title}</Typography>
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
