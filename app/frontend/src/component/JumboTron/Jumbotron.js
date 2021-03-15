import React from 'react';
import { Jumbotron as JBT, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background-color: #ffff;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

class Jumbotron extends React.Component {
    render(){
        return ( 
            <Styles>
                <JBT fluid className='jumbo'>
                    <div className='overlay'></div>
                    <Container>
                        <h1>Welcome</h1>
                    </Container>
                </JBT>
            </Styles>
        )
    }
}

export default Jumbotron;
