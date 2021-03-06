import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import Paper from "material-ui/Paper";
import Button from "../components/Button";


const paperStyles = {
  width: "100%",
  height: "auto",
  background: "white",
  margin: "1em 0",
  position: "relative",
  padding: "1em"
};
const BiteBody = styled.span`
  color: black;
  width: 15em;
`;
const BookedStatusIcon = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
  margin: 0.6em;
  border: 3px solid;
  border-color: ${props => (props.isBooked ? "green" : "orange")};
  border-radius: 50%;
  font-size: 2em;
  color: ${props => (props.isBooked ? "green" : "orange")};
`;
const SeeMoreButton = Button.extend`
	background: transparent;
	&:after {
		content: "See Details"
	}
}
`;
const BiteDateContainer = styled.div`
  display: inline;
  height: 80%;
  width: 20%;
  text-align: center;
  color: gray;
`;

// BitePaper takes ({isBooked, restaurant, otherParty, city, biteId})
export const BitePaper = ({ isBooked, restaurant, otherParty, city, biteId, startMonth, startDay, endMonth, endDay }) => {
    return <Paper style={paperStyles} children={<div>
            <BookedStatusIcon isBooked={isBooked} className={isBooked ? `fa fa-check` : `fa fa-hourglass-o`} />
            <Grid>
              <Row>
                <Col xs={12} md={2}>
                  <BiteDateContainer>
                    <span style={{ display: "inline-block" }}>
                      <h5>{startMonth}</h5>
                      <h2 style={{ lineHeight: 0 }}>{startDay}</h2>
                    </span>
                    <p style={{ display: "inline-block", margin: "0em 0.25em", fontSize: "4.5em" }}>
                      /
                    </p>
                    <span style={{ display: "inline-block" }}>
                      <h5>{endMonth}</h5>
                      <h2 style={{ lineHeight: 0 }}>{endDay}</h2>
                    </span>
                  </BiteDateContainer>
                </Col>
                <Col xs={12} md={10}>
                  <BiteBody>
                    <h3 style={{ marginTop: "0em" }}>{restaurant}</h3>
                    {/**
                     * if there is another party, display their name, else display nobody
                     * this needs to be refactored a bit
                     */}
                    <h4>
                      <p>
                        {otherParty
                          ? `with ${otherParty.firstName} ${otherParty.lastName}`
                          : ""}
                      </p>
                    </h4>
                    <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: "0.5em" }} />
                    {city}
                    <div style={{marginTop: "1em"}}>
                      <Link to={`/bite/detail/${biteId}`}>
                        <SeeMoreButton primary>
                          <span>
                            <i className="fa fa-list" style={{ marginRight: "0.5em" }}aria-hidden="true" />
                          </span>
                        </SeeMoreButton>
                      </Link>
                    </div>
                  </BiteBody>
                </Col>
              </Row>
            </Grid>
          </div>} />;
};

