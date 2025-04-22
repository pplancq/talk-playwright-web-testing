import cypressLogo from '@Front/asset/cypress-logo.svg';
import playwrightLogo from '@Front/asset/playwright-logo.svg';
import { Block } from '@Front/components/Block';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
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
        <Note>
          <MarkdownBlock>{`### Principales différences
- **Support des navigateurs** : Playwright prend en charge Chromium, Firefox et WebKit, tandis que Cypress se concentre principalement sur les navigateurs basés sur Chromium.
- **Langages pris en charge** : Playwright prend en charge plusieurs langages (JS, TS, Python, C#, Java), alors que Cypress est limité à JavaScript et TypeScript.
- **Exécution parallèle** : Playwright prend en charge nativement l'exécution parallèle des tests, ce qui n'est pas le cas de Cypress sans configurations supplémentaires.`}</MarkdownBlock>
        </Note>
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
        <Note>
          <MarkdownBlock>{`### Avantages et inconvénients
- **Playwright** :
    - **Avantages** : Support multi-navigateurs, exécution parallèle, robustesse.
    - **Inconvénients** : Courbe d'apprentissage pour les débutants, communauté plus petite comparée à Cypress.
- **Cypress** :
    - **Avantages** : Interface conviviale, débogage en temps réel.
    - **Inconvénients** : Limité aux navigateurs Chromium, pas de support natif pour l'exécution parallèle.`}</MarkdownBlock>
        </Note>
      </Slide>
    </Slide>
  );
};
