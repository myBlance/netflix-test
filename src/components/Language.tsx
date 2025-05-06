import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import i18n from '../I18N/i18n';

const Language: React.FC = () => {
    const [language, setLanguage] = useState<string>(i18n.language);

    const handleChange = (event: SelectChangeEvent) => {
        const newLang = event.target.value;
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    return (        
        <div className='language'>
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Chọn ngôn ngữ' }}
                sx={{  
                    marginTop:'10px',
                    backgroundColor: '#333',
                    borderRadius: '50px',
                    color: '#fff',
                    padding: '5px 10px',                    
                    '& .MuiSelect-icon': {
                        color: '#fff',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #fff',
                        borderRadius: '50px',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #fff',
                    },
                    '& .MuiSelect-select': {
                        padding: '10px 20px',
                        borderRadius: '50px',
                        backgroundColor: '#333',
                    },
                }}
            >
                <MenuItem value="vi">Tiếng Việt</MenuItem>
                <MenuItem value="en">English</MenuItem>
            </Select>
        </div>
    )
            
};

export default Language;
