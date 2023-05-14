import Button from "../Button/Button";
import IdeaForm from "../IdeaForm/RequestDemoModal";
import Modal from "../Modal/Modal";

const RequestDemoModal = ({ onClose }) => {
  return (
    <Modal>
      <div className="flex flex-col align-center">
        <IdeaForm />
      </div>
    </Modal>
  );
};

export default RequestDemoModal;
