import { useState } from 'react';
import { Box } from 'Box';
import { Notification, Statistics, FeedbackOptions, Section } from './Feedback';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleState = value => {
    setFeedback(feedback => ({
      ...feedback,
      [value]: feedback[value] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = (
    (good / countTotalFeedback) *
    100
  ).toFixed();

  return (
    <Box pl={'24px'} as="section">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
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
