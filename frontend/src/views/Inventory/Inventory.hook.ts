import { useState } from "react";

const useInventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLabel, setModalLabel] = useState('');

  const toggleModal = (label?: string) => {
    setIsModalOpen(!isModalOpen);
    if (!label) return;
    setModalLabel(label);
  }

  return {
    isModalOpen,
    modalLabel,
    toggleModal,
  }
}

export default useInventory;