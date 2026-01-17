import React from "react";
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';

type IngredientDetailsProps = {
  name: string;
  image: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
}

function IngredientDetails({ name, calories, proteins, fat, carbohydrates, image }:IngredientDetailsProps) {
  return (
    <div className={styles.ingredientDetails}>
      <h2 className="text text_type_main-large">Детали ингредиента</h2>
      <div className={styles.content}>
        <img className="mb-4" src={image} alt={name} />
        <p className="text text_type_main-medium mb-8">{name}</p>
        <ul className={`${styles.info} text text_type_main-default text_color_inactive`}>
          <li className={`${styles.infoItem} text text_type_main-default`}>Калории, ккал <span>{calories}</span></li>
          <li className={`${styles.infoItem} text text_type_main-default`}>Белки, г <span>{proteins}</span></li>
          <li className={`${styles.infoItem} text text_type_main-default`}>Жиры, г <span>{fat}</span></li>
          <li className={`${styles.infoItem} text text_type_main-default`}>Углеводы, г <span>{carbohydrates}</span></li>
        </ul>
      </div>
    </div>
  );
}

export default IngredientDetails;