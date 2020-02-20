import React from "react";
import {
  Carousel,
  Row,
  Col,
  Descriptions,
  Radio,
  Tag,
  Statistic,
  Icon
} from "antd";
import axios from "axios";
import "./NcpMap.css";
import ReactEcharts from "echarts-for-react";

class NcpMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      index: 600
    };
  }

  componentDidMount() {
    this.kok();
  }

  kok = () => {
    console.log(this.props.result.history);
  };

  optioned = () => {
    const option = {
      title: {
        subtext: "疫情折线图"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["最高气温", "最低气温"]
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "2020-02-8",
          "2020-02-9",
          "2020-02-10",
          "2020-02-11",
          "2020-02-12",
          "2020-02-13",
          "2020-02-14"
        ]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} 人 "
        }
      },
      series: [
        {
          name: "确诊人数",
          type: "line",
          data: [37162, 40224, 42708, 44730, 58839, 63932, 66576],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "治愈人数",
          type: "line",
          data: [2651, 3283, 3998, 4742, 5646, 6728, 8101],
          markPoint: {
            data: [{ name: "周最低", value: 0, xAxis: 1, yAxis: 1 }]
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {
                  symbol: "none",
                  x: "80%",
                  yAxis: "max"
                },
                {
                  symbol: "circle",
                  label: {
                    normal: {
                      position: "start",
                      formatter: "最大值"
                    }
                  },
                  type: "max",
                  name: "最高点"
                }
              ]
            ]
          }
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div>
        <Descriptions bordered title="历史数据汇总" size={this.state.size}>
          <Descriptions.Item label="累计确诊">
            <Tag color="#f50">
              <big>{this.props.result.diagnosed}</big>
            </Tag>{" "}
            <div>
              {" "}
              <small>
                <Icon type="arrow-up" style={{ color: "#f50" }} /> 较昨日增长
                <span style={{ color: "#f50" }}>
                  {this.props.result.diagnosedIncr}
                </span>
                人
              </small>
            </div>
          </Descriptions.Item>{" "}
          <Descriptions.Item label="现存疑似">
            <Tag color="purple">
              <big>{this.props.result.suspect}</big>
            </Tag>{" "}
            <div>
              {" "}
              <small>
                <Icon type="arrow-up" style={{ color: "purple" }} /> 较昨日增长
                <span style={{ color: "purple" }}>
                  {this.props.result.suspectIncr}
                </span>
                人
              </small>
            </div>
          </Descriptions.Item>{" "}
          <Descriptions.Item label="累计死亡">
            <Tag color="#640000">
              <big>{this.props.result.death}</big>
            </Tag>{" "}
            <div>
              {" "}
              <small>
                <Icon type="arrow-up" style={{ color: "#2db7f5" }} /> 较昨日增长
                <span style={{ color: "#640000" }}>
                  {this.props.result.deathIncr}
                </span>
                人
              </small>
            </div>
          </Descriptions.Item>{" "}
          <Descriptions.Item label="累计治愈">
            <Tag color="#87d068">
              <big>{this.props.result.suspect}</big>
            </Tag>{" "}
            <div>
              {" "}
              <small>
                <Icon type="arrow-up" style={{ color: "#87d068" }} /> 较昨日增长
                <span style={{ color: "#87d068" }}>
                  {this.props.result.suspectIncr}
                </span>
                人
              </small>
            </div>
          </Descriptions.Item>{" "}
          <Descriptions.Item label="现存重症">
            <Tag color="#108ee9">
              <big>{this.props.result.serious}</big>
            </Tag>{" "}
            <div>
              {" "}
              <small>
                <Icon type="arrow-up" style={{ color: "#108ee9" }} /> 较昨日增长
                <span style={{ color: "#108ee9" }}>
                  {this.props.result.seriousIncr}
                </span>
                人
              </small>
            </div>
          </Descriptions.Item>{" "}
          <Descriptions.Item label="今日其他数据">
            治愈率:{" "}
            <span style={{ color: "#108ee9" }}>
              {this.props.result.curesRatio}
            </span>
            %
            <br />
            死亡率:
            <span style={{ color: "#108ee9" }}>
              {" "}
              {this.props.result.deathsRatio}
            </span>
            %
            <br />
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <ReactEcharts
          option={this.optioned()}
          style={{ height: "350px", width: "auto", margin: "20px 20px" }}
          className="react_for_echarts"
        />
      </div>
    );
  }
}

export default NcpMap;
