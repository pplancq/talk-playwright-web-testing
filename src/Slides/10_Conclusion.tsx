import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const ConclusionSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Conclusion</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Summary of Key Points</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Summary of Key Points</Title>
        <List>
          <ListItem>Playwright is a robust, fast, and easy-to-use tool for end-to-end testing.</ListItem>
          <ListItem fragment>
            It supports multiple browsers: <strong>Chromium, Firefox, WebKit</strong>.
          </ListItem>
          <ListItem fragment>Comparison with Cypress highlights its strengths and weaknesses.</ListItem>
          <ListItem fragment>
            Playwright offers powerful tools like <em>CLI mode</em>, <em>UI mode</em>, <em>Codegen</em>, and{' '}
            <em>Trace Viewer</em>.
          </ListItem>
          <ListItem fragment>
            Integration with <strong>Playwright BDD</strong> allows for <em>Gherkin-based</em> tests.
          </ListItem>
        </List>
      </Slide>

      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Final Thoughts</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Final Thoughts</Title>
        <List>
          <ListItem>Playwright is a versatile tool that can significantly improve your testing workflow.</ListItem>
          <ListItem fragment>
            Its <strong>multi-browser</strong> support and powerful features make it a strong contender in the testing
            landscape.
          </ListItem>
        </List>
      </Slide>
    </Slide>
  );
};
