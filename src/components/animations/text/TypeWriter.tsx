import { useState, useEffect } from 'react';

interface TProps {
  text: string;
}

const TypeWriter = ({ text }: TProps): JSX.Element => {
  const [finalText, setFinalText] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFinalText(text.slice(0, finalText.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [finalText]);

  return (
    <div className="flex w-full items-center justify-center">
      <span>
        <div className="font-poppins text-2xl text-orangePrimary md:text-4xl md:leading-relaxed">
          {finalText}
        </div>
      </span>
    </div>
  );
};
export default TypeWriter;
