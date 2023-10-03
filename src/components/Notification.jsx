import css from "./Feedback.module.css"

export const Notification = ({message}) => {
    return <p className={css.text}>{message}</p>
}