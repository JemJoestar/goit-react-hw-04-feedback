import css from './Feedback.module.css';

export const RatingButtonList = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonList}>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          name={option}
          onClick={onLeaveFeedback}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};
