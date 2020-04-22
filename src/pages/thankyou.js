import React from 'react';
import Layout from  '../components/layout.component';
import styled from 'styled-components'

const ThankYou = styled.div`
  
`;

const Contact = ({location}) => (
    <Layout location={location}>
    <ThankYou>
          <div>
            <h1>Thank You!</h1>
          </div>
        </ThankYou>
    </Layout>
);
export default Contact