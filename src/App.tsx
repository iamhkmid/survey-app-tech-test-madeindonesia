import Container from './Components/Container';
import SurveyProvider from './Contexts';

function App() {
  return (
    <SurveyProvider>
      <Container />
    </SurveyProvider>
  );
}

export default App;
