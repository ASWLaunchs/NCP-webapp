import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Tabs, Menu, Icon, PageHeader, Button, Layout } from "antd";
import "antd/dist/antd.css";
import NcpNum from "./NcpNum.jsx";
import NcpMap from "./NcpMap.jsx";
import NcpNews from "./NcpNews.jsx";
import axios from "axios";
// import NcpNews from "./NcpNews.jsx";
const { Footer } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;
class Ncpnav extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    current: "num",
    isLoaded: false,
    error: null
  };

  componentDidMount() {
    this.xhr();
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key,
      list: [],
      area: [],
      history: []
    });
  };

  xhr = () => {
    const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios
      .get("./data.json")
      .then(function(response) {
        _this.setState({
          list: response.data.data.list, //全国省份NCP感染数据汇总
          area: response.data.data.area, //省份地区NCP感染数据详情
          lastUpdate: "页面数据更新时间：" + response.data.data.date, //数据更新时间
          history: response.data.data.history, //历史记录
          diagnosed: response.data.data.diagnosed, //累计确诊人数
          suspect: response.data.data.suspect, //累计治愈
          death: response.data.data.death, //累计死亡
          serious: response.data.data.serious, //现存重症
          diagnosedIncr: response.data.data.diagnosedIncr, //今日疑似比较昨日疑似
          deathIncr: response.data.data.deathIncr, //今日死亡比较昨日死亡
          suspectIncr: response.data.data.suspectIncr, //今日治愈比较昨日治愈
          curedIncr: response.data.data.curedIncr, //今日治愈比较昨日治愈
          seriousIncr: response.data.data.seriousIncr, //今日确诊比较昨日确
          curesRatio: response.data.data.history[0].curesRatio, //治愈率
          deathsRatio: response.data.data.history[0].deathsRatio, //死亡率
          isLoaded: true,
          error: false
        });
      })
      .catch(function(error) {
        console.log(error);
        _this.setState({
          isLoaded: false,
          error: error
        });
      });
    if (this.state.error) {
      return (
        <div>
          网络波动原因，导致数据刷新有误
          <br />
          请再次尝试刷新页面，Error: {this.state.error.message} <br />
          <Button type="primary">
            点我
            <Icon type="smile" />
            刷新页面
          </Button>
        </div>
      );
    } else if (!this.state.isLoaded) {
      return <div>加载中...</div>;
    }
  };

  render() {
    return (
      <div>
        {" "}
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)",
            marginTop: "0px"
          }}
          title="全国NCP情报汇总"
          subTitle={this.state.lastUpdate}
        />
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
                <Icon type="form" />
                疫情数据
              </span>
            }
            key="1"
          >
            <div style={{ marginTop: "-19px", zIndex: "-1" }}>
              {" "}
              <NcpNum result={this.state} />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="appstore" />
                数据分析图
              </span>
            }
            key="2"
          >
            <NcpMap result={this.state} style={{ width: "100%" }} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="eye" />
                新闻情报
              </span>
            }
            key="3"
          >
            <NcpNews />
          </TabPane>
        </Tabs>
        <Footer style={{ textAlign: "center" }}>
          武汉加油！中国加油！ ©2020 Cheer up by ASWLaunchs
        </Footer>
        {/* <span
          id="Span"
          style={{ color: "red", fontWeight: "bolder", position: "fixed" }}
        >
          武汉加油，中国加油！
        </span> */}
      </div>
    );
  }
}

export default Ncpnav;
