import grCode from '@Front/asset/repoQrCode.svg';
import { Image } from '@Front/components/Image';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

import defaultClasses from './Thank.module.scss';

export const ThankSlide = () => {
  return (
    <Slide className={defaultClasses.slide}>
      <Title variant="h2">Thank You</Title>
      <List>
        <ListItem fragment>Thank you for your attention</ListItem>
        <ListItem fragment>
          Special thanks to Antoine Heinrich{' '}
          <a href="https://github.com/synnksou" target="_blank" rel="noopener noreferrer">
            (@synnksou on GitHub)
          </a>{' '}
          for his help and for introducing Playwright BDD.
        </ListItem>
        <ListItem fragment>
          Check out his talk at DevLille 2025:{' '}
          <a href="https://dev.events/conferences/dev-lille-ehqmq2x5" target="_blank" rel="noopener noreferrer">
            <strong>Découvrez Playwright avec le Gherkin pour des tests end-to-end efficaces</strong>
          </a>
        </ListItem>
        <ListItem fragment>Do you have any questions ?</ListItem>
      </List>
      <Image src={grCode} role="presentation" fragment />
    </Slide>
  );
};
