import React, { useEffect, useState } from 'react';

import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import Modal from './components/modal/modal';
import IngredientDetails from './components/ingredient-details/ingredient-details';
import OrderDetails from './components/order-details/order-details';
export const API_URL = 'https://norma.education-services.ru/api/ingredients';

export type IngredientType = {
  _id: string;
  name: string;
  type: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
};

export type ModalType = 'ingredient' | 'order' | null;

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientType | null>(null);


  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Ошибка сервера');
        }
        return res.json();
      })
      .then((data) => {
        setIngredients(data.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  const openIngredientModal = (ingredient: IngredientType) => {
    setSelectedIngredient(ingredient);
    setModalType('ingredient');
  };

  const openOrderModal = () => {
    setModalType('order');
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedIngredient(null);
  };

  if (error) {
    return <p>Ошибка загрузки: {error}</p>;
  }
  return (
    <div className="App-container">
      <AppHeader />

      <main className='App-main'>
        <BurgerIngredients ingredients={ingredients} onIngredientClick={openIngredientModal} />
        <BurgerConstructor ingredients={ingredients} onOrderButtonClick={openOrderModal} />

        {modalType === 'ingredient' && selectedIngredient && (
          <Modal onClose={closeModal}>
            <IngredientDetails {...selectedIngredient} />
          </Modal>
        )}

        {modalType === 'order' && (
          <Modal onClose={closeModal}>
            <OrderDetails />
          </Modal>
        )}

      </main>
    </div>
  );
}

export default App;
