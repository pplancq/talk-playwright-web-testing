import { CodeBlock } from '@Front/components/CodeBlock';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const PlaywrightBddInstallSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Integration with Playwright BDD</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation Playwright BDD</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation Playwright BDD</Title>
        <List>
          <ListItem>
            Install <code>npm i -D playwright-bdd</code>
          </ListItem>
          <ListItem fragment>
            Update <code>playwright.config.ts</code>
          </ListItem>
        </List>
        <CodeBlock
          fragment
          highlightLines="1-12|2|4-7|5|6|9-12|10|1-12"
        >{`import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: 'steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});`}</CodeBlock>
        <Note>
          <MarkdownBlock>{`### Installation de Playwright BDD
- **Installer** : \`npm i -D playwright-bdd\`
- **Mettre à jour playwright.config.ts** :
  \`\`\`typescript
  import { defineConfig } from '@playwright/test';
  import { defineBddConfig } from 'playwright-bdd';

  const testDir = defineBddConfig({
    features: 'sample.feature',
    steps: 'steps.js',
  });

  export default defineConfig({
    testDir,
    reporter: 'html',
  });
  \`\`\``}</MarkdownBlock>
        </Note>
      </Slide>
    </Slide>
  );
};
