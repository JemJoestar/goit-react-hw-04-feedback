import css from "./Feedback.module.css"

export const GoodPercentage = ({positivePersentage}) => {
    return <p className={css.text}>Positive feedback: {positivePersentage}%</p>
}

