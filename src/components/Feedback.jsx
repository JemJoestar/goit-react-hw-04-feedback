import { Component } from 'react';
import { RatingButtonList } from './RatingButtonList';
import { Statistics } from './Statistics';

import { Notification } from './Notification';
import { Section } from './Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  findTotalRating = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  findPositivePersentage = data => {
    // if(data.neutral+data.bad === 0 && data.good === 0){
    //     return 0
    // }else if((data.neutral+data.bad && data.good != 0)){
    //     return 100
    // }
    return Math.floor(
      (data.good / (data.neutral + data.bad + data.good)) * 100
    );
  };

  render() {
    return (
      <div >
        <Section title={'Please leave feedback'}>
          <RatingButtonList
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.findTotalRating() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.findTotalRating()}
              positivePersentage={this.findPositivePersentage(this.state)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
