import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Worker } from '@react-pdf-viewer/core';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React PDF Exploration - SIDEBAR</title>
        <link rel="icon" type="image/png" href="/logo-jds.png" />
      </Head>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className='h-screen'>
          <Component {...pageProps} />
        </div>
      </Worker>
    </>
  );
}
