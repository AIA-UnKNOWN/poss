import { useState } from "react";

const useInventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return {
    isModalOpen,
    toggleModal,
  }
}

export default useInventory;