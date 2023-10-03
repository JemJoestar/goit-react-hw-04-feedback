import { useState } from 'react';
import { RatingButtonList } from './RatingButtonList';
import { Statistics } from './Statistics';

import { Notification } from './Notification';
import { Section } from './Section';

export const Feedback = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const addFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;
      default: {
      }
    }
  };

  const findTotalRating = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };
  const findPositivePersentage = data => {
    return Math.floor(
      (data.good / (data.neutral + data.bad + data.good)) * 100
    );
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <RatingButtonList
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {findTotalRating() !== 0 ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={findTotalRating()}
            positivePersentage={findPositivePersentage({
              good: goodFeedback,
              neutral: neutralFeedback,
              bad: badFeedback,
            })}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
