import { Component, useState } from 'react';
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

// export class Feeback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = event => {
//     this.setState(prevState => ({
//       [event.target.name]: prevState[event.target.name] + 1,
//     }));
//   };

//   findTotalRating = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   findPositivePersentage = data => {
//     // if(data.neutral+data.bad === 0 && data.good === 0){
//     //     return 0
//     // }else if((data.neutral+data.bad && data.good != 0)){
//     //     return 100
//     // }
//     return Math.floor(
//       (data.good / (data.neutral + data.bad + data.good)) * 100
//     );
//   };

//   render() {
//     return (
//       <div>
//         <Section title={'Please leave feedback'}>
//           <RatingButtonList
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.findTotalRating() !== 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.findTotalRating()}
//               positivePersentage={this.findPositivePersentage(this.state)}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
