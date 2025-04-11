import cypressLogo from '@Front/asset/cypress-logo.svg';
import playwrightLogo from '@Front/asset/playwright-logo.svg';
import { Block } from '@Front/components/Block';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';
import { Svg } from '@pplancq/svg-react';

import defaultClasses from './03_ComparisonCypress.module.scss';

export const ComparisonCypressSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Comparison with Cypress</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Main differences</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Main differences</Title>
        <List>
          <ListItem>
            <strong>Browser support</strong> Playwright supports Chromium, Firefox, and WebKit, while Cypress mainly
            focuses on Chromium-based browsers.
          </ListItem>
          <ListItem fragment>
            <strong>Supported languages</strong> Playwright supports multiple languages (JS, TS, Python, C#, Java),
            whereas Cypress is limited to JavaScript and TypeScript.
          </ListItem>
          <ListItem fragment>
            <strong>Parallel execution</strong> Playwright natively supports parallel test execution, which is not the
            case for Cypress without additional configurations.
          </ListItem>
        </List>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Advantages and disadvantages</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Advantages and disadvantages</Title>
        <Block className={defaultClasses.grid}>
          <Title variant="h4">
            <Svg src={playwrightLogo} role="presentation" />
            <span id="playwright">Playwright</span>
          </Title>
          <List>
            <ListItem fragment fragmentIndex={3}>
              <strong>Advantages</strong> Multi-browser support, parallel execution, robustness.
            </ListItem>
            <ListItem fragment fragmentIndex={5}>
              <em>Disadvantages</em> Learning curve for beginners, smaller community compared to Cypress.
            </ListItem>
          </List>
          <Title variant="h4">
            <Svg src={cypressLogo} role="presentation" />
            <span id="cypress">Cypress</span>
          </Title>
          <List>
            <ListItem fragment fragmentIndex={4}>
              <strong>Advantages</strong> User-friendly interface, real-time debugging.
            </ListItem>
            <ListItem fragment fragmentIndex={6}>
              <em>Disadvantages</em> Limited to Chromium browsers, no native support for parallel execution.
            </ListItem>
          </List>
        </Block>
      </Slide>
    </Slide>
  );
};
