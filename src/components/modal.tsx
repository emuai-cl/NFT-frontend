import React from "react"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#___gatsby")

type CustomModalProps = {
  isOpen: boolean
  onAfterOpen?: () => void
  closeModal: () => void
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onAfterOpen = () => {},
  closeModal = () => {},
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  )
}
