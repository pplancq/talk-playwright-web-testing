import playwrightConfig from '@Front/asset/playwrightConfig.gif';
import { Block } from '@Front/components/Block';
import { CodeBlock } from '@Front/components/CodeBlock';
import { Image } from '@Front/components/Image';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const PlaywrightInstallSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Getting started with Playwright</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation prerequisites</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation prerequisites</Title>
        <List>
          <ListItem style={{ listStyle: 'none' }}>
            Install Node via Volta
            <List fragment fragmentIndex={1}>
              <ListItem fragment fragmentIndex={1}>
                <Block>Install Volta:</Block>
                <CodeBlock language="powershell">winget install Volta.Volta</CodeBlock>
                <CodeBlock language="bash">curl https://get.volta.sh | bash</CodeBlock>
              </ListItem>
              <ListItem fragment fragmentIndex={2}>
                Install Node.js:
                <CodeBlock language="bash">volta install node@22</CodeBlock>
              </ListItem>
              <ListItem fragment fragmentIndex={3}>
                Pin Node.js version for the project:
                <CodeBlock language="bash">volta pin node@18</CodeBlock>
              </ListItem>
            </List>
          </ListItem>
        </List>

        <Note>
          <MarkdownBlock>{`### Prérequis d'installation
- **Installer Node via Volta** :
    - Installer Volta : \`winget install Volta.Volta\` ou \`curl https://get.volta.sh | bash\`
    - Installer Node.js : \`volta install node@22\`
    - Verrouiller la version de Node.js pour le projet : \`volta pin node@18\``}</MarkdownBlock>
        </Note>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Starting a Playwright Test Project</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Starting a Playwright Test Project</Title>
        <List>
          <ListItem>
            <Block>Install Playwright</Block>
            <CodeBlock language="bash">npm init playwright@latest</CodeBlock>
          </ListItem>
          <ListItem fragment>
            Configure Playwright: <code>playwright.config.ts</code> to define browsers, test directories, etc.
          </ListItem>
        </List>
        <Image src={playwrightConfig} aria-hidden height={350} fragment />
        <Note>
          <MarkdownBlock>{`### Démarrer un projet de test Playwright
- **Installer Playwright** : \`npm init playwright@latest\`
- **Configurer Playwright** : \`playwright.config.ts\` pour définir les navigateurs, les répertoires de tests, etc.`}</MarkdownBlock>
        </Note>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Writing and Running a Test</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Writing and Running a Test</Title>
        <List>
          <ListItem>
            Running in cli mode: <code>npx playwright test</code>
          </ListItem>
          <ListItem fragment fragmentIndex={1}>
            Running in UI mode: <code>npx playwright test --ui</code>
          </ListItem>
          <ListItem fragment fragmentIndex={2}>
            <Block>Test example</Block>
            <CodeBlock
              language="javascript"
              highlightLines="1-6|1|3,6|4|5|1-6"
            >{`import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});`}</CodeBlock>
          </ListItem>
        </List>
        <Note>
          <MarkdownBlock>{`### Écrire et exécuter un test
- **Exécution en mode CLI** : \`npx playwright test\`
- **Exécution en mode UI** : \`npx playwright test --ui\`
- **Exemple de test** :
  \`\`\`typescript
  import { test, expect } from '@playwright/test';

  test('a un titre', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
  \`\`\``}</MarkdownBlock>
        </Note>
      </Slide>
    </Slide>
  );
};
