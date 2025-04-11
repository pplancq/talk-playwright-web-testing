import { CodeBlock } from '@Front/components/CodeBlock';
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
      </Slide>
    </Slide>
  );
};
