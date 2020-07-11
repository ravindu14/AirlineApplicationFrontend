import React, { Component } from "react";

import Layout from "components/layout";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";
import Button from "components/button";

import "./styles.scss";

class TicketPricingPage extends Component<HomePageProps> {
  state = {
    departureMonth: null,
    flightClass: null,
    od: null,
    seatCount: null,
    weather: null,
    flyPoint: null,
    bookPoint: null,
    buyPoint: null,
    predictedCount: null,
  };

  render() {
    const { predictedCount } = this.state;

    return (
      <Layout>
        <div className="count-main-page">
          <div className="count-main-page-header">Predict Ticket Pricing</div>
          <div className="count-main-page-container">
            <Row>
              <Col>
                <div className="count-main-page-container-label">
                  Departure Month
                </div>
              </Col>
              <Col>
                <Input
                  id="input1"
                  text={this.state.departureMonth}
                  onChange={(departureMonth) =>
                    this.setState({
                      ...this.state,
                      departureMonth,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="count-main-page-container-label">
                  Flight class
                </div>
              </Col>
              <Col>
                <Input
                  id="input1"
                  onChange={(input2) =>
                    this.setState({
                      ...this.state,
                      input2,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="count-main-page-container-label">
                  Origin/Destination
                </div>
              </Col>
              <Col>
                <Input id="input1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="count-main-page-container-label">
                  Seat Count
                </div>
              </Col>
              <Col>
                <Input id="input1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="count-main-page-container-label">Weather</div>
              </Col>
              <Col>
                <Input id="input1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="count-main-page-container-label">Fly Point</div>
              </Col>
              <Col>
                <Input id="input1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="count-main-page-container-label">Buy Point</div>
              </Col>
              <Col>
                <Input id="input1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="count-main-page-container-label">
                  Book Point
                </div>
              </Col>
              <Col>
                <Input id="input1" />
              </Col>
            </Row>
            <div className="count-main-page-container-button">
              <Button
                type={Button.TYPE.SUCCESS}
                onClick={() => this.setState({ predictedCount: 150 })}
              >
                Predict Passenger Count
              </Button>
            </div>
          </div>
          {predictedCount && (
            <div className="count-main-page-prediction">
              {`The prediction count is ${predictedCount} passenger`}
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default TicketPricingPage;
