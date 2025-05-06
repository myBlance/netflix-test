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
                    marginTop:'15px',
                    backgroundColor: 'var(--bg-color)',
                    borderRadius: '50px',
                    color: 'var(--text-color)',
                    padding: '5px 10px',                    
                    '& .MuiSelect-icon': {
                        color: 'var(--text-color)',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid var(--text-color)',
                        borderRadius: '50px',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #333',
                    },
                    '& .MuiSelect-select': {
                        padding: '8px 20px',
                        borderRadius: '50px',
                        backgroundColor: 'var(--bg-color)',
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
