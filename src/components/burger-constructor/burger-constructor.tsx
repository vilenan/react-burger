import React from 'react';
// import PropTypes from 'prop-types';
import { IngredientType } from '../../App';
import styles from './burger-constructor.module.css';
import { Button, CurrencyIcon, DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

type BurgerConstructorProps = {
    ingredients: IngredientType[];
    onOrderButtonClick: () => void;
}

function BurgerConstructor({ ingredients, onOrderButtonClick }: BurgerConstructorProps) {
    const bun = ingredients.find(item => item.type === 'bun');

    const mockIngredients = [
        { id: 1, name: 'Краторная булка N-20343450i', price: 50 },
        { id: 2, name: 'Краторная булка N-200i', price: 508 },
        { id: 3, name: 'Краторная булка N-200i', price: 40 },
        { id: 4, name: 'Краторная булка N-200i', price: 780 },
        { id: 5, name: 'Краторная булка N-200i', price: 60 },
        { id: 6, name: 'Краторная булка N-200i', price: 50 },
    ];

    return (
        <section className={styles.burgerConstructor}>

            {bun && (
                <div className="pl-8">
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>
            )}

            <div className={styles.ingredients}>
                {
                    mockIngredients.map(item => (
                        <div className={styles.ingredientsItem} key={item.id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                            />
                        </div>
                    ))
                }
            </div>
            {bun && (
                <div className="pl-8">
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>
            )}
            <div className={`${styles.total} mt-8`}>
                <span className={`${styles.price} text text_type_digits-medium`}>610 <CurrencyIcon type="primary" /></span>
                <Button onClick={onOrderButtonClick} htmlType="button" type="primary" size="large" extraClass="ml-2">
                    Оформить заказ
                </Button>
            </div>
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

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
// };

export default BurgerConstructor;