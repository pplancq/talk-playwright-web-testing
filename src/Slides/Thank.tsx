import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const ThankSlide = () => {
  return (
    <Slide>
      <Title variant="h2">Thank You</Title>
      <List>
        <ListItem fragment>Thank you for your attention</ListItem>
        <ListItem fragment>Do you have any questions ?</ListItem>
      </List>
    </Slide>
  );
};
