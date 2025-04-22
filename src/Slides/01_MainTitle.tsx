import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
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
        <Paragraph>
          Exploring <strong>Strengths</strong>, <em>Weaknesses</em>, and Best Practices for Web Testing
        </Paragraph>
        <Note>
          <MarkdownBlock>{`### Playwright pour les tests web
- **Explorer les forces, faiblesses et meilleures pratiques pour les tests web**`}</MarkdownBlock>
        </Note>
      </Slide>
    </>
  );
};
