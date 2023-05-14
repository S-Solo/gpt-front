import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import "./RequestDemoModal.scss";

const RequestDemoModal = ({ onClose = () => {} }) => {
  return (
    <Modal>
      <div className="request-demo">
        <h1 className="request-demo-heading">Have a great idea for us ?</h1>
        <div className="request-demo-content">
          <div className="request-demo-content-left">
            <div className="request-demo-content-left-input">
              <label>Full Name</label>
              <Input className="input" />
            </div>
            <div className="request-demo-content-left-input">
              <label>Email</label>
              <Input className="input" />
            </div>
          </div>
          <div className="request-demo-content-right">
            <textarea placeholder="Please describe your idea" />
          </div>

          <div>
            <Button primary={false} onClick={onClose} className="margin-top-l">
              Cancel
            </Button>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RequestDemoModal;
