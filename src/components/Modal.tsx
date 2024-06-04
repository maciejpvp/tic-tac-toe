interface ModalProps {
  show: boolean;
  children: React.ReactNode;
}

const Modal = ({ show, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="bg-stone-800 rounded-lg shadow-lg p-4 w-full max-w-md transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: show ? "translateY(0)" : "translateY(-20px)" }}
      >
        <div className="flex justify-center flex-col text-center gap-10 py-3 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
