import { useEffect, useState } from "react";
import { removeCookie } from "typescript-cookie";

import useNavigationStore, { PageName } from "src/store/navigation"
// Types
import { NavigationBarProps } from "../NavigationBar/NavigationBar.types";
import { OrderDetailsBarProps } from "../OrderDetailsBar/OrderDetailsBar.types";
import { Product } from "src/components/cards/Product/Product.types";
// Utils
import { getOrderCartItems } from "src/utils/orderCart.helper";

const useFullLayout = () => {
  const { navigateToPage } = useNavigationStore();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = getOrderCartItems();
    setProducts(products);
    
    window.addEventListener('storageChange', updateOderCartItems);
    return () => {
      window.removeEventListener('storageChange', updateOderCartItems);
    }
  }, []);

  const updateOderCartItems = e => {
    const products = getOrderCartItems();
    const newlyAddedProduct = e.newProduct; // e.newProduct => src/utils/orderCart.helper,addOrderCartItem
    setProducts([...products, newlyAddedProduct]);
  }
  
  const logout = () => {
    removeCookie('ut');
    location.href = '/signin';
  }

  const navigationBarProps: NavigationBarProps = {
    companyName:"AIA POSS",
    logoUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png`,
    upperNav: [
      {
        label: PageName.PRODUCTS,
        onClick: navigateToPage,
      },
      {
        label: PageName.TRANSACTIONS,
        onClick: navigateToPage,
      },
      {
        label: PageName.DASHBOARD,
        onClick: navigateToPage,
      },
      {
        label: PageName.INVENTORY,
        onClick: navigateToPage,
      },
    ],
    lowerNav: [
      {
        label: PageName.SIGN_OUT,
        onClick: logout,
      },
    ],
  }
  const orderDetailsBar: OrderDetailsBarProps = {
    products,
  }

  return {
    navigationBarProps,
    orderDetailsBar,
  }
}

export default useFullLayout;