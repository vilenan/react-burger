import React from 'react';
// import PropTypes from 'prop-types';
import './BurgerIngredients.css';
import { CurrencyIcon, Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
/* eslint-disable @typescript-eslint/no-explicit-any */


function BurgerIngredients({ ingredients }: { ingredients: any[] }) {
    const [current, setCurrent] = React.useState('bun');
    
  return (
    <section className="ingredients pt-10">
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
         
         <ul className='ingredients-wrapper'>
            <li>
                <h3 className="text text_type_main-medium mb-6">Булки</h3>
                <ul className="ingredients-list pl-4 pr-4">
                    {ingredients.filter((item => item.type === 'bun')).map((card: any) => (
                    <li key={card._id}>
                        <article className="ingredients-list-card">
                            <Counter count={1} size="default" extraClass="m-1"/>
                            <img className="pl-4 pr-4" src={card.image} alt={card.name} />
                            <div className="ingredients-list-card-info">
                                <CurrencyIcon type="primary" />
                                <span className="text text_type_digits-default">{card.proteins}</span>      
                            </div>
                            <h3 className="text text_type_main-small">{card.name}</h3>
                        </article>
                    </li>
                    ))}
                </ul>
            </li>
            <li>
                <h3 className="text text_type_main-medium mb-6">Соусы</h3>

                <ul className="ingredients-list pl-4 pr-4">
                    {ingredients.filter((item => item.type === 'sauce')).map((card: any) => (
                    <li key={card._id}>
                        <article className="ingredients-list-card">
                            <img src={card.image} alt={card.name} />
                            <div className="ingredients-list-card-info">
                                <CurrencyIcon type="primary" />
                                <span className="text text_type_digits-default">{card.proteins}</span>      
                            </div>
                            <h3 className="text text_type_main-small">{card.name}</h3>
                        </article>
                    </li>
                    ))}
                </ul>
            </li>
            <li>
                <h3 className="text text_type_main-medium mb-6">Начинки</h3>

                <ul className="ingredients-list pl-4 pr-4">
                    {ingredients.filter((item => item.type === 'main')).map((card: any) => (
                    <li key={card._id}>
                        <article className="ingredients-list-card">
                            <img src={card.image} alt={card.name} />
                            <div className="ingredients-list-card-info">
                                <CurrencyIcon type="primary" />
                                <span className="text text_type_digits-default">{card.proteins}</span>      
                            </div>
                            <h3 className="text text_type_main-small">{card.name}</h3>
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