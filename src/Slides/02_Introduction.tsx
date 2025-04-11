import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const IntroductionSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Introduction to Playwright</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Why use Playwright?</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Why use Playwright?</Title>
        <List>
          <ListItem>
            Playwright is an <em>open-source tool</em> developed by Microsoft for end-to-end testing of web
            applications.
          </ListItem>
          <ListItem fragment>
            It supports <em>multiple browsers</em> (Chromium, Firefox, WebKit) and enables reliable and fast testing.
          </ListItem>
          <ListItem fragment>
            It is designed to be robust, fast, and <em>easy to use</em>.
          </ListItem>
        </List>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">What can you do with Playwright?</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">What can you do with Playwright?</Title>
        <List>
          <ListItem>
            <strong>Automate</strong> user interactions on web browsers.
          </ListItem>
          <ListItem fragment>
            Perform <strong>end-to-end tests</strong> and <em>integration tests</em>.
          </ListItem>
          <ListItem fragment>
            Conduct <strong>unit tests</strong> (via Playwright Component, currently experimental).
          </ListItem>
          <ListItem fragment>
            Execute <strong>accessibility testing</strong> to ensure web applications are usable by everyone.
          </ListItem>
          <ListItem fragment>
            Implement <em>visual regression</em> testing to detect UI changes.
          </ListItem>
          <ListItem fragment>
            Analyze <em>code coverage</em> to ensure comprehensive test coverage.
          </ListItem>
        </List>
      </Slide>
    </Slide>
  );
};
