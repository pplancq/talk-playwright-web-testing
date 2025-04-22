import { CodeBlock } from '@Front/components/CodeBlock';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const WriteFirstBddTestSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Write your first BDD test</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Create feature file</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Create feature file</Title>
        <Paragraph>
          Create a feature file named <code>sample.feature</code>
        </Paragraph>
        <CodeBlock highlightLines="1-6" language="gherkin">{`Feature: Playwright site

    Scenario: Check get started link
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"`}</CodeBlock>
        <Note>
          <MarkdownBlock>{`### Créer un fichier feature
- **Créer un fichier feature nommé \`sample.feature\`** :
  \`\`\`
  Fonctionnalité : Site Playwright

  Scénario : Vérifier le lien "Get started"
    Étant donné que je suis sur la page d'accueil
    Quand je clique sur le lien "Get started"
    Alors je vois dans le titre "Installation"
  \`\`\``}</MarkdownBlock>
        </Note>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Implement steps</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Implement steps</Title>
        <Paragraph>
          Implement the steps in <code>steps.js</code>
        </Paragraph>
        <CodeBlock
          highlightLines="1-14|2|4|6-8|9-11|12-14|1-14"
          language="javascript"
        >{`import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on home page', async ({ page }) => {
  await page.goto('https://playwright.dev');
});
When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});
Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});`}</CodeBlock>
        <Note>
          <MarkdownBlock>{`### Implémenter les étapes
- **Implémenter les étapes dans \`steps.js\`** :
  \`\`\`typescript
  import { expect } from '@playwright/test';
  import { createBdd } from 'playwright-bdd';

  const { Given, When, Then } = createBdd();

  Given('je suis sur la page d\\'accueil', async ({ page }) => {
    await page.goto('https://playwright.dev');
  });
  When('je clique sur le lien {string}', async ({ page }, name) => {
    await page.getByRole('link', { name }).click();
  });
  Then('je vois dans le titre {string}', async ({ page }, keyword) => {
    await expect(page).toHaveTitle(new RegExp(keyword));
  });
  \`\`\``}</MarkdownBlock>
        </Note>
      </Slide>
    </Slide>
  );
};
