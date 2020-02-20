import React from "react";
import axios from "axios";
import { Collapse, Card, Row, Col, BackTop, Tag, Button, Icon } from "antd";

const { Panel } = Collapse;
const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);
class NcpNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.result.list,
      area: this.props.result.area,
      i: 4
    };
  }

  componentDidMount() {}

  callback = e => {};

  render() {
    const { list, area } = this.state;
    return (
      <Collapse
        // defaultActiveKey={["1"]}
        onChange={e => this.callback(e, e)}
        accordion
      >
        {(this.state.list || []).map((value, index1) => (
          <Panel header={value} key={index1}>
            <div>
              <Row>
                {this.state.area[index1].cities.map((value, index2) => (
                  <Col span={6} key={60 + index2}>
                    {" "}
                    <Card
                      size="small"
                      title={this.state.area[index1].cities[index2].cityName}
                      style={{ width: "100% " }}
                    >
                      <p>
                        确诊人数:{" "}
                        <Tag color="#f50">
                          {
                            this.state.area[index1].cities[index2]
                              .confirmedCount
                          }
                        </Tag>{" "}
                      </p>
                      <p>
                        死亡人数:{" "}
                        <Tag color="#2db7f5">
                          {this.state.area[index1].cities[index2].deadCount}
                        </Tag>{" "}
                      </p>
                      <p>
                        治愈人数:{" "}
                        <Tag color="#87d068">
                          {" "}
                          {this.state.area[index1].cities[index2].curedCount}
                        </Tag>
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Panel>
        ))}
      </Collapse>
    );
  }
}

export default NcpNum;
