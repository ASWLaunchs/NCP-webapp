import React from "react";
import axios from "axios";
import { Carousel, Layout, Timeline, Card, Tag } from "antd";
const { Content } = Layout;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);
class NcpNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      dotPosition: "top",
      reverse: false,
      i: 4
    };
  }

  componentDidMount() {}

  callback = e => {};

  render() {
    const { error, isLoaded, list, area } = this.state;
    return (
      <div style={{ margin: "10vh 10% 10vh" }}>
        <Timeline.Item>
          <Card
            title="新增治愈首次超过新增确诊"
            extra={<a href="#">详情</a>}
            style={{ width: "100%" }}
          >
            <p>25 个城市现存确诊归零</p>
            <p>
              {" "}
              <Tag color="#2db7f5">2020.02.19</Tag>
            </p>
          </Card>
        </Timeline.Item>
        <Timeline.Item>
          {" "}
          <Card
            title="七万多患者中无症状感染者 1.2%"
            extra={<a href="#">详情</a>}
            style={{ width: "100%" }}
          >
            <p>来自中国疾控中心的一份分析报告</p>
            <p>
              {" "}
              <Tag color="#2db7f5">2020.02.18</Tag>
            </p>
          </Card>
        </Timeline.Item>
        <Timeline.Item>
          {" "}
          <Card
            title="1.88 万湖北人返回温州后"
            extra={<a href="#">详情</a>}
            style={{ width: "100%" }}
          >
            <p>非湖北新增确诊连续下降 13 天</p>
            <p>
              {" "}
              <Tag color="#2db7f5">2020.02.17</Tag>
            </p>
          </Card>
        </Timeline.Item>
        <Timeline.Item>
          {" "}
          <Card
            title="深圳确诊病例平均 15 天出院"
            extra={<a href="#">详情</a>}
            style={{ width: "100%" }}
          >
            <p>有 5 个省份治愈率超过 40%</p>
            <p>
              {" "}
              <Tag color="#2db7f5">2020.02.16</Tag>
            </p>
          </Card>
        </Timeline.Item>
      </div>
    );
  }
}

export default NcpNews;
