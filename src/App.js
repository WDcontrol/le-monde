import React from 'react'
import styled from 'styled-components'
import RouterComponent from "./config/router"

const StyledApp = styled.div`
  text-align: center;
`

function App() {
  return (
    <StyledApp>
      <RouterComponent />
    </StyledApp>
  );
}

export default App;
