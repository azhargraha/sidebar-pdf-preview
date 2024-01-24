import { useState, useEffect } from 'react';

const useListenMessage = () => {
  const [file, setFile] = useState('');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.source === 'nuxt-host') {
        setFile(event.data.data.file);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return { file };
};

export default useListenMessage;
