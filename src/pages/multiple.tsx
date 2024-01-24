import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import Placeholder from '@/components/Placeholder';
import useListenMessage from '@/hooks/useListenMessage';

const multipleGuides = [
  'Jenis naskah ini bisa drafting **multi file**.',
  'Gunakan format nama file _**“jenis naskah - nomor urut - perihal.pdf”**_ agar surat tersusun secara otomatis saat drafting multi file.',
  'Pastikan lampiran sudah menempel dengan naskah utamanya sebagai satu file pdf.',
];

export default function Multiple() {
  const { file } = useListenMessage();

  return file ? (
    <Viewer fileUrl={file} />
  ) : (
    <Placeholder guides={multipleGuides} />
  );
}
