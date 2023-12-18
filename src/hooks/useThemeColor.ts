import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const useThemeColor = () => {
  const [searchParams] = useSearchParams();
  const isDarkMode = searchParams.get('mode') === 'admin';

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      return;
    }

    document.documentElement.setAttribute('data-theme', 'light');
  }, [isDarkMode]);

  return null;
};

export default useThemeColor;
