import { AiOutlineClose } from 'react-icons/ai';
import { IconButton } from 'components';

interface MProps {
  open: boolean;
  setOpenModal: (val: boolean) => void;
  children: JSX.Element;
}

const ModalContainer = ({ children, setOpenModal, open }: MProps): JSX.Element => {
  return (
    <div
      className={`${
        open && 'modalOpened'
      } fixed inset-0 z-50 mx-auto flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-70  py-8 outline-none focus:outline-none`}>
      <div className="relative mx-auto w-3/4 p-1 md:w-2/4">
        <div className="right-n absolute -top-5 -right-5 z-50 text-white outline-none focus:outline-none">
          <IconButton onClick={() => setOpenModal(false)}>
            <AiOutlineClose />
          </IconButton>
        </div>

        {children}
      </div>
    </div>
  );
};
export default ModalContainer;
