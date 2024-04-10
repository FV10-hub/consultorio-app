interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
}

export const PacientesModal: React.FC<ModalProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
      </div>
      <form>
        <h3 className="font-bold text-lg">Add new task</h3>
        <div className="modal-action">
          <input
            value={"newTaskValue"}
            onChange={(e) => {}}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
