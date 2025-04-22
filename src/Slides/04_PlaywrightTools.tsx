import playwrightCliGif from '@Front/asset/playwrightCli.gif';
import playwrightCodegenGif from '@Front/asset/playwrightCodegen.gif';
import playwrightTraceGif from '@Front/asset/playwrightTrace.gif';
import playwrightUiGif from '@Front/asset/playwrightUi.gif';
import { Image } from '@Front/components/Image';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Note } from '@Front/components/Note';
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
          The CLI mode is perfect for <strong>continuous integration (CI)</strong> environments, allowing you to run
          tests directly from the command line. It offers numerous options such as running tests in{' '}
          <em>headless mode</em>, executing <em>specific tests</em>, and <em>selecting the browser</em>, making it an
          essential tool for automated testing pipelines.
        </Paragraph>
        <Image src={playwrightCliGif} alt="Playwright CLI" fragment aria-hidden />
        <Note>
          <MarkdownBlock>{`### Mode CLI
- Le mode CLI est parfait pour les environnements d'intégration continue (CI), vous permettant d'exécuter des tests directement depuis la ligne de commande. Il offre de nombreuses options telles que l'exécution des tests en mode sans tête, l'exécution de tests spécifiques et la sélection du navigateur, ce qui en fait un outil essentiel pour les pipelines de tests automatisés.`}</MarkdownBlock>
        </Note>
      </Slide>
      <Slide autoAnimate autoAnimateRestart>
        <Title variant="h3">UI Mode</Title>
      </Slide>
      <Slide autoAnimate>
        <Title variant="h3">UI Mode</Title>
        <Paragraph>
          The UI mode allows you to <strong>explore</strong>, <strong>run</strong>, and <strong>debug tests</strong>{' '}
          with a <em>time-travel experience</em>. It displays all test files in a sidebar, allowing you to run them
          individually and see detailed traces of each action.
        </Paragraph>
        <List className={defaultClasses.list}>
          <ListItem fragment>
            <strong>Features</strong>
            <List>
              <ListItem fragment>
                <em>Filter tests</em> by name, project, tag, or execution status (passed, failed, skipped).
              </ListItem>
              <ListItem fragment>
                <em>Timeline view</em> of actions with DOM snapshots.
              </ListItem>
              <ListItem fragment>
                <em>Visual debugging</em> of actions and DOM inspection.
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Note>
          <MarkdownBlock>{`### Mode UI
- Le mode UI vous permet d'explorer, d'exécuter et de déboguer des tests avec une expérience de voyage dans le temps. Il affiche tous les fichiers de test dans une barre latérale, vous permettant de les exécuter individuellement et de voir des traces détaillées de chaque action.
- **Fonctionnalités** :
    - Filtrer les tests par nom, projet, tag ou statut d'exécution (réussi, échoué, ignoré).
    - Vue chronologique des actions avec des instantanés du DOM.
    - Débogage visuel des actions et inspection du DOM.`}</MarkdownBlock>
        </Note>
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
          Codegen <strong>automatically generates</strong> test code by <em>recording actions</em> performed in the
          browser. It's a great way to quickly get started with tests.
        </Paragraph>
        <List className={defaultClasses.list}>
          <ListItem fragment>
            <strong>Usage</strong>
            <List>
              <ListItem fragment>
                <em>Record actions</em> and generate robust locators
              </ListItem>
              <ListItem fragment>
                <em>Automatic assertions</em> for visibility, text, and element value
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Note>
          <MarkdownBlock>{`### Codegen
- Codegen génère automatiquement du code de test en enregistrant les actions effectuées dans le navigateur. C'est un excellent moyen de démarrer rapidement avec les tests.
- **Utilisation** :
    - Enregistrer des actions et générer des localisateurs robustes.
    - Assertions automatiques pour la visibilité, le texte et la valeur des éléments.`}</MarkdownBlock>
        </Note>
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
          The Trace Viewer is a GUI tool that allows you to <strong>explore traces</strong> recorded after running
          Playwright scripts. Traces are useful for <em>debugging failed tests in CI</em>.
        </Paragraph>
        <Image src={playwrightTraceGif} alt="Playwright CLI" height={450} fragment aria-hidden />
        <Note>
          <MarkdownBlock>{`### Trace
- Le Trace Viewer est un outil GUI qui vous permet d'explorer les traces enregistrées après l'exécution des scripts Playwright. Les traces sont utiles pour déboguer les tests échoués en CI.`}</MarkdownBlock>
        </Note>
      </Slide>
    </Slide>
  );
};
