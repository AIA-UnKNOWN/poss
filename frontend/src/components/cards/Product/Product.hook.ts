import { useState, useEffect } from "react";
import type { ProductHook } from "./Product.types";


const useProduct = ({
  photoUrl,
  quantity,
}: ProductHook) => {
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState('/empty-image.jpg');

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    setProductQuantity(quantity);
  }, [quantity]);

  const fetchImage = async () => {
    if (!photoUrl) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/${photoUrl}`);
      if (!response.ok) return;
      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImageUrl(imageObjectURL);
    } catch(error) {
      console.log('photoUrl cannot be found');
    }
  }

  return {
    // States
    productQuantity,
    imageUrl,
  }
}

export default useProduct;