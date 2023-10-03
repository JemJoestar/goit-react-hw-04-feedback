import css from "./Feedback.module.css"

export const Section = ({children, title}) =>{
    return (<>
        <h1 className={css.title}>{title}</h1>
        {children}
    </>)
}