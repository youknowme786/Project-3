import React from "react"
import styled from "styled-components"
import { Grid, Row, Col } from "react-bootstrap";
import Container from "../components/Container";

const Image = styled.img`
  width: 70%;
  @media (max-width: 768px) {
    margin: 3em 10%;

  }  
`;
const ErrorMessageContainer = styled.div`
  text-align: right;
  margin-top: 45%;
  @media (max-width: 768px) {
    margin-top: 0;
    text-align: center;
  }
`;
const ErrorMessage = styled.h2`
  font-weight: lighter
`
export const PageNotFound = () => <Container margin="25vh 10vw">
           <Grid>
             <Row>
               <Col xs={12} sm={4}>
                 <ErrorMessageContainer>
                   <ErrorMessage>404 error</ErrorMessage>
                   <ErrorMessage>page not found</ErrorMessage>
                 </ErrorMessageContainer>
               </Col>
               <Col xs={12} sm={8}>
                 <Image src={require("../images/404EmptyJar.png")} />
               </Col>
             </Row>
           </Grid>
         </Container>;  


