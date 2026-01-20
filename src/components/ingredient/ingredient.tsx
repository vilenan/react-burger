import styles from './ingredient.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientType } from '../../App'

type IngredientProps = {
    card: IngredientType;
}
function Ingredient({card}: IngredientProps) {
    return (
        <article className={styles.card}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img className="pl-4 pr-4" src={card.image} alt={card.name} />
            <div className={styles.info}>
                <span className="text text_type_digits-default">{card.proteins}</span>
                <CurrencyIcon type="primary" />
            </div>
            <h3 className="text text_type_main-default">{card.name}</h3>
        </article>
    )
}

export default Ingredient;

