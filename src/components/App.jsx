import { useState } from 'react';
import { Box } from 'Box';
import { Notification, Statistics, FeedbackOptions, Section } from './Feedback';

export function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const handleState = value => {
    switch (value) {
      case 'good':
        setGoodFeedback(prSt => (prSt += 1));
        return;
      case 'neutral':
        setNeutralFeedback(prSt => (prSt += 1));
        return;
      default:
        setBadFeedback(prSt => (prSt += 1));
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = (
    (good / countTotalFeedback) *
    100
  ).toFixed();

  return (
    <Box pl={'24px'} as="section">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleState}
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
