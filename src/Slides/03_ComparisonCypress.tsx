import { Block } from '@Front/components/Block';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

import defaultClasses from './03_ComparisonCypress.module.scss';

export const ComparisonCypressSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Comparison with Cypress</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Main differences</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Main differences</Title>
        <List>
          <ListItem>
            <strong>Browser support</strong> Playwright supports Chromium, Firefox, and WebKit, while Cypress mainly
            focuses on Chromium-based browsers.
          </ListItem>
          <ListItem fragment animation="fade-up">
            <strong>Supported languages</strong> Playwright supports multiple languages (JS, TS, Python, C#, Java),
            whereas Cypress is limited to JavaScript and TypeScript.
          </ListItem>
          <ListItem fragment animation="fade-up">
            <strong>Parallel execution</strong> Playwright natively supports parallel test execution, which is not the
            case for Cypress without additional configurations.
          </ListItem>
        </List>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h2">Advantages and disadvantages</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Advantages and disadvantages</Title>
        <Block className={defaultClasses.grid}>
          <Title variant="h3">Playwright</Title>
          <List>
            <ListItem fragment animation="fade-up" fragmentIndex={3}>
              <strong>Advantages</strong> Multi-browser support, parallel execution, robustness.
            </ListItem>
            <ListItem fragment animation="fade-up" fragmentIndex={5}>
              <em>Disadvantages</em> Learning curve for beginners, smaller community compared to Cypress.
            </ListItem>
          </List>
          <Title variant="h3">Cypress</Title>
          <List>
            <ListItem fragment animation="fade-up" fragmentIndex={4}>
              <strong>Advantages</strong> User-friendly interface, real-time debugging.
            </ListItem>
            <ListItem fragment animation="fade-up" fragmentIndex={6}>
              <em>Disadvantages</em> Limited to Chromium browsers, no native support for parallel execution.
            </ListItem>
          </List>
        </Block>
      </Slide>
    </Slide>
  );
};
