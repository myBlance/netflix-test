import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    palette: {
        mode: Theme;
        backgroundColor: string;
    };
}

const ThemeContext = createContext<ThemeContextType | undefined>({
    theme: 'light',
    toggleTheme: () => {},
    palette: {
        mode: 'light',
        backgroundColor: '#ffffff',
    },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const palette = {
        mode: theme,
        backgroundColor: theme === 'light' ? '#ffffff' : '#141414',
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, palette }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
