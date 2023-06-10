import './FullLayout.style.scss';
import NavigationBar from "../NavigationBar/NavigationBar";
import OrderDetailsBar from "../OrderDetailsBar/OrderDetailsBar";

import useFullLayout from './FullLayout.hook';

const FullLayout = props => {
  const { children } = props;
  const {
    navigationBarProps,
    orderDetailsBar,
  } = useFullLayout();

  return (
    <div className="layout">
      <NavigationBar {...navigationBarProps} />
      <div className='main-content'>
        {children}
      </div>
      <OrderDetailsBar {...orderDetailsBar} />
    </div>
  );
}

export default FullLayout;