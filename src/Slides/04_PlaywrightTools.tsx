import playwrightCliGif from '@Front/asset/playwrightCli.gif';
import playwrightCodegenGif from '@Front/asset/playwrightCodegen.gif';
import playwrightTraceGif from '@Front/asset/playwrightTrace.gif';
import playwrightUiGif from '@Front/asset/playwrightUi.gif';
import { Image } from '@Front/components/Image';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

import defaultClasses from './04_PlaywrightTools.module.scss';

export const PlaywrightToolsSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Playwright Tools</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">CLI Mode</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">CLI Mode</Title>
        <Paragraph>
          The CLI mode is perfect for continuous integration (CI) environments, allowing you to run tests directly from
          the command line. It offers numerous options such as running tests in headless mode, executing specific tests,
          and selecting the browser, making it an essential tool for automated testing pipelines.
        </Paragraph>
        <Image src={playwrightCliGif} alt="Playwright CLI" fragment aria-hidden />
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">UI Mode</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">UI Mode</Title>
        <Paragraph>
          The UI mode allows you to explore, run, and debug tests with a time-travel experience. It displays all test
          files in a sidebar, allowing you to run them individually and see detailed traces of each action.
        </Paragraph>
        <List className={defaultClasses.list}>
          <ListItem fragment>
            Features
            <List>
              <ListItem fragment>
                Filter tests by name, project, tag, or execution status (passed, failed, skipped).
              </ListItem>
              <ListItem fragment>Timeline view of actions with DOM snapshots.</ListItem>
              <ListItem fragment>Visual debugging of actions and DOM inspection.</ListItem>
            </List>
          </ListItem>
        </List>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">UI Mode</Title>
        <Image src={playwrightUiGif} alt="Playwright CLI" aria-hidden />
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Codegen</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Codegen</Title>
        <Paragraph>
          Codegen automatically generates test code by recording actions performed in the browser. It's a great way to
          quickly get started with tests.
        </Paragraph>
        <List className={defaultClasses.list}>
          <ListItem fragment>
            Usage
            <List>
              <ListItem fragment>Record actions and generate robust locators</ListItem>
              <ListItem fragment>Automatic assertions for visibility, text, and element value</ListItem>
            </List>
          </ListItem>
        </List>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Codegen</Title>
        <Image src={playwrightCodegenGif} alt="Playwright CLI" aria-hidden />
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">Trace</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Trace</Title>
        <Paragraph>
          The Trace Viewer is a GUI tool that allows you to explore traces recorded after running Playwright scripts.
          Traces are useful for debugging failed tests in CI.
        </Paragraph>
        <Image src={playwrightTraceGif} alt="Playwright CLI" height={450} fragment aria-hidden />
      </Slide>
    </Slide>
  );
};
