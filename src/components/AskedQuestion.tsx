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
          title: "Netflix là gì?",
          description: "Netflix là dịch vụ phát trực tuyến cung cấp nhiều loại chương trình truyền hình, phim ảnh, anime, tài liệu, và nhiều hơn nữa trên hàng nghìn thiết bị kết nối internet. Xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn, không có quảng cáo – tất cả chỉ với một mức giá tháng thấp. Luôn có điều gì đó mới để khám phá, và các chương trình TV và phim mới được thêm vào mỗi tuần!",
        },
        {
          title: "Netflix có giá bao nhiêu?",
          description: "Các gói dịch vụ dao động từ $6.99 đến $19.99 mỗi tháng. Không có chi phí phát sinh, không hợp đồng.",
        },
        {
          title: "Tôi có thể xem ở đâu?",
          description: "Xem ngay lập tức từ bất kỳ thiết bị kết nối internet nào có ứng dụng Netflix, hoặc phát trực tuyến từ laptop, máy tính bảng hoặc điện thoại của bạn.",
        },
        {
          title: "Làm thế nào để hủy đăng ký?",
          description: "Netflix rất linh hoạt. Không có hợp đồng rườm rà và cam kết dài hạn. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ với hai cú click.",
        },
        {
          title: "Tôi có thể xem gì trên Netflix?",
          description: "Netflix có một thư viện phong phú các phim điện ảnh, tài liệu, chương trình truyền hình, anime, các bộ phim gốc đoạt giải thưởng của Netflix và nhiều hơn nữa.",
        },
        {
          title: "Netflix có phù hợp cho trẻ em không?",
          description: "Trải nghiệm Netflix dành cho trẻ em được bao gồm trong gói thành viên của bạn, giúp phụ huynh kiểm soát trong khi trẻ em thưởng thức các chương trình và phim dành cho gia đình trong không gian riêng của chúng.",
        },
    ];
    
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className="asked-questions-container">
			<h2 className="asked-questions-title">Những câu hỏi thường gặp</h2>
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
