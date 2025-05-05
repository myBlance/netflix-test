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
                sx={{backgroundColor: '#333',
                    borderRadius: '50px',
                    border: '2px solid #fff',
                    color: '#fff',
                    '& .MuiSelect-icon': {
                        color: '#fff',
                    },
                    '& .MuiSelect-select': {
                        margin: '5px',
                        borderRadius: '50px',
                        padding: '10px 20px',
                        backgroundColor: '#333',
                        color: '#fff',
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
