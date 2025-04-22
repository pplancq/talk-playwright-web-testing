import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const WhatNextSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">What's Next ?</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Beyond Basics</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">Beyond Basics</Title>
        <List>
          <ListItem>
            <strong>MCP Server Integration:</strong> Centralized test management and orchestration.
          </ListItem>
          <ListItem fragment>
            <strong>Advanced Features:</strong> Explore visual comparisons, network mocking, and more.
          </ListItem>
          <ListItem fragment>
            <strong>Community and Plugins:</strong> Leverage the growing ecosystem for enhanced capabilities.
          </ListItem>
        </List>
        <Note>
          <MarkdownBlock>{`### Et après ?
- **Au-delà des bases** :
    - **Intégration avec MCP Server** : Gestion centralisée des tests et orchestration.
    - **Fonctionnalités avancées** : Explorez les comparaisons visuelles, le mock réseau, et plus encore.
    - **Communauté et plugins** : Profitez de l'écosystème croissant pour des capacités améliorées.`}</MarkdownBlock>
        </Note>
      </Slide>
    </Slide>
  );
};
