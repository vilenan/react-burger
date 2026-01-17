import React from "react";
import PropTypes from 'prop-types';
import styles from './order-details.module.css';

function OrderDetails(){
    return (

      <div className={styles.orderDetails}>
        <p className="text text_type_digits-large mb-8">123456</p>
        <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
        <span className={`${styles.orderDetailsCheck} mb-15`}></span>
        <p className="text text_type_main-small mb-2">Ваш заказ уже начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    )
};

export default OrderDetails;