import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { IngredientType } from "../../App";
import styles from './burger-ingredients.module.css';
import { CurrencyIcon, Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

type BurgerIngredientsProps = {
  ingredients: IngredientType[];
  onIngredientClick: (ingredient: IngredientType) => void;
};


function BurgerIngredients({ ingredients, onIngredientClick }: BurgerIngredientsProps) {
    const [current, setCurrent] = useState('bun');
    const buns = ingredients.filter(item => item.type === 'bun');
    const sauces = ingredients.filter(item => item.type === 'sauce');
    const mains = ingredients.filter(item => item.type === 'main');

  return (
    <section className={`$styles.ingredients} pt-10`}>
         <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>

         <div className="tabs mb-10" style={{ display: 'flex' }}>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
         
         <ul className={styles.wrapper}>
            <li>
                <h3 className="text text_type_main-medium mb-6">Булки</h3>
                <ul className={`${styles.list} pl-4 pr-4`}>
                    {ingredients.filter((item => item.type === 'bun')).map((card: IngredientType) => (
                    <li key={card._id} onClick={() => onIngredientClick(card)}>
                        <article className={styles.listCard}>
                            <Counter count={1} size="default" extraClass="m-1"/>
                            <img className="pl-4 pr-4" src={card.image} alt={card.name} />
                            <div className={styles.listCardInfo}>
                                <span className="text text_type_digits-default">{card.proteins}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className="text text_type_main-default">{card.name}</h3>
                        </article>
                    </li>
                    ))}
                </ul>
            </li>
            <li>
                <h3 className="text text_type_main-medium mb-6">Соусы</h3>

                <ul className={`${styles.list} pl-4 pr-4`}>
                    {ingredients.filter((item => item.type === 'sauce')).map((card: IngredientType) => (
                    <li onClick={() => {onIngredientClick(card)}} key={card._id}>
                        <article className={styles.listCard}>
                            <img src={card.image} alt={card.name} />
                            <div className={styles.listCardInfo}>
                                <span className="text text_type_digits-default">{card.proteins}</span>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className="text text_type_main-default">{card.name}</h3>
                        </article>
                    </li>
                    ))}
                </ul>
            </li>
            <li>
                <h3 className="text text_type_main-medium mb-6">Начинки</h3>

                <ul className={`${styles.list} pl-4 pr-4`}>
                    {ingredients.filter((item => item.type === 'main')).map((card: IngredientType) => (
                    <li onClick = {() => {onIngredientClick(card)}} key={card._id}>
                        <article className={styles.listCard}>
                            <img src={card.image} alt={card.name} />
                            <div className={styles.listCardInfo}>
                                <span className="text text_type_digits-default">{card.proteins}</span>
                                <CurrencyIcon type="primary" />     
                            </div>
                            <h3 className="text text_type_main-default">{card.name}</h3>
                        </article>
                    </li>
                    ))}
                </ul>
            </li>
         </ul>

         
    </section>
  );
}

// const ingredientPropType = PropTypes.shape({
//   _id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
//   proteins: PropTypes.number.isRequired,
//   fat: PropTypes.number.isRequired,
//   carbohydrates: PropTypes.number.isRequired,
//   calories: PropTypes.number.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   image_mobile: PropTypes.string.isRequired,
//   image_large: PropTypes.string.isRequired,
// });

// BurgerIngredients.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
// };

export default BurgerIngredients;