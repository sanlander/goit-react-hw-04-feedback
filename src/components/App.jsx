import { Component } from 'react';
import { Box } from 'Box';
import { Notification, Statistics, FeedbackOptions, Section } from './Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleState = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = (
      (good / countTotalFeedback) *
      100
    ).toFixed();

    return (
      <Box pl={'24px'} as="section">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleState}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
