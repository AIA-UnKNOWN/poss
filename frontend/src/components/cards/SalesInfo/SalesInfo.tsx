import React from 'react';
import './SalesInfo.style.scss';
import type { SalesInfoProps } from './SalesInfo.types';


const SalesInfo: React.FC<SalesInfoProps> = (props) => {
  const { subTotal } = props;
  const DISCOUNT_SALES = 0;
  const TAX_SALES = 50;
  const TOTAL = (subTotal || 0) + DISCOUNT_SALES + TAX_SALES;
  
  return (
    <div className="sales-info">
      <div className="sales-info_details">
        <div className="sales-info_item">
          <span className="sales-info_label">Subtotal</span>
          <span className="sales-info_value">${(subTotal || 0).toFixed(2)}</span>
        </div>
        <div className="sales-info_item">
          <span className="sales-info_label">Discount sales</span>
          <span className="sales-info_value">${DISCOUNT_SALES.toFixed(2)}</span>
        </div>
        <div className="sales-info_item">
          <span className="sales-info_label">Total tax sales</span>
          <span className="sales-info_value">${TAX_SALES.toFixed(2)}</span>
        </div>
      </div>
      <div className="sales-info_total">
        <span className="sales-info_label">Total</span>
        <span className="sales-info_value">${TOTAL.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SalesInfo;
