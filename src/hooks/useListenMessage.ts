import { useState, useEffect } from 'react';

const useListenMessage = () => {
  const [file, setFile] = useState('');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.source === 'SIDEBAR-DRAFTING-HOST') {
        setFile(event.data.data.file);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return { file };
};

export default useListenMessage;
