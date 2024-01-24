import React from 'react';
import Image from 'next/image';

import DocumentPreviewIcon from '@/../public/document-preview.svg';

interface IPlaceholderProps {
  guides: string[];
}

const Placeholder: React.FC<IPlaceholderProps> = ({ guides }) => {
  const renderText = (str: string) => {
    // Convert **bold**
    str = str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert _italic_
    str = str.replace(/_(.*?)_/g, '<em>$1</em>');

    return (
      <p
        className="placeholder-text"
        dangerouslySetInnerHTML={{ __html: str }}
      />
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#F5F5F5]">
      <div className="flex flex-col justify-center items-center max-w-[480px] gap-8">
        <div className="p-1 bg-sky-100 rounded-2xl">
          <Image
            src={DocumentPreviewIcon}
            alt="Document Preview Icon"
            height={116}
            width={116}
          />
        </div>
        <p className="text-center placeholder-text">
          Naskah yang anda upload akan ditampilkan pada area ini. Klik tombol
          “upload file” atau drop file pada side panel di samping
        </p>
        <div className="bg-white rounded-2xl py-6 px-8">
          <ul className="flex flex-col gap-4">
            {guides.map((guide, i) => (
              <li key={i} className="placeholder-list">
                {renderText(guide)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
