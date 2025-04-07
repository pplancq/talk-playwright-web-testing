import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const MainTitleSlide = () => {
  return (
    <>
      <Slide autoAnimate>
        <Title>Playwright for Web Testing</Title>
      </Slide>
      <Slide autoAnimate>
        <Title>Playwright for Web Testing</Title>
        <Paragraph>Exploring Strengths, Weaknesses, and Best Practices for Web Testing</Paragraph>
      </Slide>
    </>
  );
};
