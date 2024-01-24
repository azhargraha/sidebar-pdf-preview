import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import Placeholder from '@/components/Placeholder';
import useListenMessage from '@/hooks/useListenMessage';

const singleGuides = [
  'Jenis naskah ini hanya bisa drafting **single file**',
  'Pastikan lampiran sudah menempel dengan naskah utamanya sebagai satu file pdf.',
];

export default function Single() {
  const { file } = useListenMessage();

  return file ? (
    <Viewer fileUrl={file} />
  ) : (
    <Placeholder guides={singleGuides} />
  );
}
