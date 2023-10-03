import css from './Feedback.module.css';

import { Total } from './Total';
import { GoodPercentage } from './GoodPercentage';
import { Rating } from './Rating';


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePersentage,
}) => {
  return (
    <div className={css.ratingList}>
      <Rating good={good} neutral={neutral} bad={bad}/>
      <Total total={total} />
      <GoodPercentage positivePersentage={positivePersentage} />
    </div>
  );
};
