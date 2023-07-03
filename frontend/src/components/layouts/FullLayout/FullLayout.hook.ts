import { removeCookie } from "typescript-cookie";
// Store
import useNavigationStore, { PageName } from "src/store/navigation"
import useProductStore from "src/store/products";
// Types
import { NavigationBarProps } from "../NavigationBar/NavigationBar.types";
import { OrderDetailsBarProps } from "../OrderDetailsBar/OrderDetailsBar.types";

const useFullLayout = () => {
  const { navigateToPage } = useNavigationStore();
  const productStore = useProductStore();
  
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
    products: productStore.orderCartItems,
  }

  return {
    navigationBarProps,
    orderDetailsBar,
  }
}

export default useFullLayout;