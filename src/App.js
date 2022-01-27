
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import styled from '@emotion/styled';
import './App.css';
import Spinner from './components/Spinner';

const Container = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const FormContainer = styled.div`
background-color: #FFF;
padding: 3rem;
`;

function App() {

  const [summary, setSummary] = useState({ show:false})
  const [loading, setLoading] = useState(false)

  return (
    <Container>
      <Header title="Car insurance budgeting tool" />
      <FormContainer>
        <Form setSummary={setSummary} setLoading={setLoading} />
        {summary.show === true && <Results summary={summary}  />}
        {loading ? <Spinner /> : null}
        
      </FormContainer>
    </Container>
  );
}

export default App;
