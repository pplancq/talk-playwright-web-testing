import { Block } from '@Front/components/Block';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const GettingStartedSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Getting started with Playwright</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">Why use Playwright?</Title>
      </Slide>
      <Slide autoAnimate data-transition="slide-in slide-out">
        <Title variant="h2">Why use Playwright?</Title>
        <List>
          <ListItem>
            Playwright is an <em>open-source tool</em> developed by Microsoft for end-to-end testing of web
            applications.
          </ListItem>
          <ListItem fragment animation="fade-up">
            It supports <em>multiple browsers</em> (Chromium, Firefox, WebKit) and enables reliable and fast testing.
          </ListItem>
          <ListItem fragment animation="fade-up">
            It is designed to be robust, fast, and <em>easy to use</em>.
          </ListItem>
        </List>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h2">What can you do with Playwright?</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h2">What can you do with Playwright?</Title>
        <List>
          <ListItem>Automate user interactions on web browsers.</ListItem>
          <ListItem fragment animation="fade-up" fragmentIndex={1}>
            <Block component="span" fragment animation="fade-up" fragmentIndex={1}>
              End-to-end tests
            </Block>
            <Block component="span" fragment animation="fade-left" fragmentIndex={2}>
              , integration tests
            </Block>
            <Block component="span" fragment animation="fade-left" fragmentIndex={3}>
              , and unit tests.
            </Block>
          </ListItem>
          <ListItem fragment animation="fade-up" fragmentIndex={4}>
            <Block component="span" fragment animation="fade-up" fragmentIndex={4}>
              Multi-language support: JavaScript, TypeScript
            </Block>
            <Block component="span" fragment animation="fade-right" fragmentIndex={5}>
              , Python
            </Block>
            <Block component="span" fragment animation="fade-right" fragmentIndex={6}>
              , C#
            </Block>
            <Block component="span" fragment animation="fade-right" fragmentIndex={7}>
              , Java.
            </Block>
          </ListItem>
        </List>
      </Slide>
    </Slide>
  );
};
