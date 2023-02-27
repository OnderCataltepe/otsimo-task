import { ModalContainer } from 'components';
import type { StringObjectT } from 'types';
interface TMProps {
  open: boolean;
  setOpenModal: (val: boolean) => void;
  text: string;
  type: string;
}
const TextModal = ({ text, open, setOpenModal, type }: TMProps) => {
  const colors: StringObjectT = {
    warning: 'text-red-700'
  };
  return (
    <ModalContainer open={open} setOpenModal={setOpenModal}>
      <div className=" border-2  bg-white p-4 text-center shadow-sm shadow-yellow-50">
        <p className={`md:font-lg font-base text-xl ${colors[text]} `}>{text}</p>
      </div>
    </ModalContainer>
  );
};

export default TextModal;
