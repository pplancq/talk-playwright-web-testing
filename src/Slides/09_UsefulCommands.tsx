import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const UsefulCommandsSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Useful Playwright Commands</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Installation</Title>
        <List>
          <ListItem>
            Install Playwright <code>npm init playwright@latest</code>
          </ListItem>
          <ListItem fragment>
            Install browsers <code>npx playwright install</code>
          </ListItem>
        </List>
        <Title variant="h3" fragment>
          Running Tests
        </Title>
        <List>
          <ListItem fragment>
            Run all tests <code>npx playwright test</code>
          </ListItem>
          <ListItem fragment>
            Run a specific test <code>npx playwright test tests/todo-page.spec.ts</code>
          </ListItem>
          <ListItem fragment>
            Run in UI mode <code>npx playwright test --ui</code>
          </ListItem>
        </List>
      </Slide>

      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Codegen</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Codegen</Title>
        <List>
          <ListItem>
            Generate test code <code>npx playwright codegen https://example.com</code>
          </ListItem>
        </List>
        <Title variant="h3" fragment>
          Traces
        </Title>
        <List>
          <ListItem fragment>
            Record traces <code>npx playwright test --trace on</code>
          </ListItem>
          <ListItem fragment>
            Show traces <code>npx playwright show-trace path/to/trace.zip</code>
          </ListItem>
        </List>
        <Title variant="h3" fragment>
          Configuration
        </Title>
        <List>
          <ListItem fragment>
            Configure Playwright <code>playwright.config.ts</code>
          </ListItem>
        </List>
      </Slide>
    </Slide>
  );
};
