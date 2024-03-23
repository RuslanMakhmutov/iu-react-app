import classNames from "classnames";
import styles from './MyCard.module.css'
import {useState} from "react";
export const MyCard = ({title = '', expanded = false, type = 'primary', children}) => {
    const [isExpanded, setIsExpanded] = useState(expanded)

    const handleCardHeaderClick = () => {
        setIsExpanded(!isExpanded)
    }

    const cardClassName = classNames(styles.card, {
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
        [styles.expanded]: isExpanded,
    })

    const cardHeaderClassName = classNames(styles['card-header'])
    const carbBodyClassName = classNames(styles['card-body'])

    return (
        <section className={cardClassName}>
            <h1 className={cardHeaderClassName} onClick={handleCardHeaderClick}>{title}</h1>
            <div className={carbBodyClassName}>{children}</div>
        </section>
    )
}