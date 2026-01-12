import React from 'react';
// import PropTypes from 'prop-types';
import './BurgerConstructor.css';
import {Button, CurrencyIcon, DragIcon, LockIcon, DeleteIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
/* eslint-disable @typescript-eslint/no-explicit-any */



function BurgerConstructor({ ingredients }: { ingredients: any[] }) {
    const bun = ingredients.find(item => item.type === 'bun');
    return (
        <section className="burger-constructor" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
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
           
                <div className="burger-constructor-ingredients">
                    <div className="burger-constructor-ingredients-item">
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
                    <div className="burger-constructor-ingredients-item">
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
                    <div className="burger-constructor-ingredients-item">
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
                           <div className="burger-constructor-ingredients-item">
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
                    <div className="burger-constructor-ingredients-item">
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
                    <div className="burger-constructor-ingredients-item">
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
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
                <div className='burger-constructor-total mt-8'>
                    <span className="text text_type_digits-medium" style={{ display: 'flex', alignItems: 'center'}}>610 <CurrencyIcon type="primary" /></span>
                    <Button htmlType="button" type="primary" size="large" extraClass="ml-2">
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