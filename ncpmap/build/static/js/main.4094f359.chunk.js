(this.webpackJsonpncpmap=this.webpackJsonpncpmap||[]).push([[0],{337:function(e,t,a){e.exports=a(737)},343:function(e,t,a){},422:function(e,t,a){},737:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),s=(a(343),a(63)),o=a(64),i=a(66),m=a(65),u=a(150),d=a(67),p=a(739),E=a(209),h=a(208),y=a(745),b=a(17),f=a(740),v=(a(344),a(121)),g=a.n(v),x=a(741),k=a(103),I=a(43),w=a(742),j=a(743),O=x.a.Panel,A=(l.a.createElement("p",{style:{paddingLeft:24}},"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).callback=function(e){},a.state={list:a.props.result.list,area:a.props.result.area,i:4},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state;t.list,t.area;return l.a.createElement(x.a,{onChange:function(t){return e.callback(t,t)},accordion:!0},(this.state.list||[]).map((function(t,a){return l.a.createElement(O,{header:t,key:a},l.a.createElement("div",null,l.a.createElement(k.a,null,e.state.area[a].cities.map((function(t,n){return l.a.createElement(I.a,{span:6,key:60+n}," ",l.a.createElement(w.a,{size:"small",title:e.state.area[a].cities[n].cityName,style:{width:"100% "}},l.a.createElement("p",null,"\u786e\u8bca\u4eba\u6570:"," ",l.a.createElement(j.a,{color:"#f50"},e.state.area[a].cities[n].confirmedCount)," "),l.a.createElement("p",null,"\u6b7b\u4ea1\u4eba\u6570:"," ",l.a.createElement(j.a,{color:"#2db7f5"},e.state.area[a].cities[n].deadCount)," "),l.a.createElement("p",null,"\u6cbb\u6108\u4eba\u6570:"," ",l.a.createElement(j.a,{color:"#87d068"}," ",e.state.area[a].cities[n].curedCount))))})))))})))}}]),t}(l.a.Component)),C=a(746),L=(a(422),a(327)),P=a.n(L),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).kok=function(){console.log(a.props.result.history)},a.optioned=function(){return{title:{subtext:"\u75ab\u60c5\u6298\u7ebf\u56fe"},tooltip:{trigger:"axis"},legend:{data:["\u6700\u9ad8\u6c14\u6e29","\u6700\u4f4e\u6c14\u6e29"]},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["2020-02-8","2020-02-9","2020-02-10","2020-02-11","2020-02-12","2020-02-13","2020-02-14"]},yAxis:{type:"value",axisLabel:{formatter:"{value} \u4eba "}},series:[{name:"\u786e\u8bca\u4eba\u6570",type:"line",data:[37162,40224,42708,44730,58839,63932,66576],markPoint:{data:[{type:"max",name:"\u6700\u5927\u503c"},{type:"min",name:"\u6700\u5c0f\u503c"}]},markLine:{data:[{type:"average",name:"\u5e73\u5747\u503c"}]}},{name:"\u6cbb\u6108\u4eba\u6570",type:"line",data:[2651,3283,3998,4742,5646,6728,8101],markPoint:{data:[{name:"\u5468\u6700\u4f4e",value:0,xAxis:1,yAxis:1}]},markLine:{data:[{type:"average",name:"\u5e73\u5747\u503c"},[{symbol:"none",x:"80%",yAxis:"max"},{symbol:"circle",label:{normal:{position:"start",formatter:"\u6700\u5927\u503c"}},type:"max",name:"\u6700\u9ad8\u70b9"}]]}}]}},a.state={size:"small",index:600},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.kok()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C.a,{bordered:!0,title:"\u5386\u53f2\u6570\u636e\u6c47\u603b",size:this.state.size},l.a.createElement(C.a.Item,{label:"\u7d2f\u8ba1\u786e\u8bca"},l.a.createElement(j.a,{color:"#f50"},l.a.createElement("big",null,this.props.result.diagnosed))," ",l.a.createElement("div",null," ",l.a.createElement("small",null,l.a.createElement(b.a,{type:"arrow-up",style:{color:"#f50"}})," \u8f83\u6628\u65e5\u589e\u957f",l.a.createElement("span",{style:{color:"#f50"}},this.props.result.diagnosedIncr),"\u4eba")))," ",l.a.createElement(C.a.Item,{label:"\u73b0\u5b58\u7591\u4f3c"},l.a.createElement(j.a,{color:"purple"},l.a.createElement("big",null,this.props.result.suspect))," ",l.a.createElement("div",null," ",l.a.createElement("small",null,l.a.createElement(b.a,{type:"arrow-up",style:{color:"purple"}})," \u8f83\u6628\u65e5\u589e\u957f",l.a.createElement("span",{style:{color:"purple"}},this.props.result.suspectIncr),"\u4eba")))," ",l.a.createElement(C.a.Item,{label:"\u7d2f\u8ba1\u6b7b\u4ea1"},l.a.createElement(j.a,{color:"#640000"},l.a.createElement("big",null,this.props.result.death))," ",l.a.createElement("div",null," ",l.a.createElement("small",null,l.a.createElement(b.a,{type:"arrow-up",style:{color:"#2db7f5"}})," \u8f83\u6628\u65e5\u589e\u957f",l.a.createElement("span",{style:{color:"#640000"}},this.props.result.deathIncr),"\u4eba")))," ",l.a.createElement(C.a.Item,{label:"\u7d2f\u8ba1\u6cbb\u6108"},l.a.createElement(j.a,{color:"#87d068"},l.a.createElement("big",null,this.props.result.suspect))," ",l.a.createElement("div",null," ",l.a.createElement("small",null,l.a.createElement(b.a,{type:"arrow-up",style:{color:"#87d068"}})," \u8f83\u6628\u65e5\u589e\u957f",l.a.createElement("span",{style:{color:"#87d068"}},this.props.result.suspectIncr),"\u4eba")))," ",l.a.createElement(C.a.Item,{label:"\u73b0\u5b58\u91cd\u75c7"},l.a.createElement(j.a,{color:"#108ee9"},l.a.createElement("big",null,this.props.result.serious))," ",l.a.createElement("div",null," ",l.a.createElement("small",null,l.a.createElement(b.a,{type:"arrow-up",style:{color:"#108ee9"}})," \u8f83\u6628\u65e5\u589e\u957f",l.a.createElement("span",{style:{color:"#108ee9"}},this.props.result.seriousIncr),"\u4eba")))," ",l.a.createElement(C.a.Item,{label:"\u4eca\u65e5\u5176\u4ed6\u6570\u636e"},"\u6cbb\u6108\u7387:"," ",l.a.createElement("span",{style:{color:"#108ee9"}},this.props.result.curesRatio),"%",l.a.createElement("br",null),"\u6b7b\u4ea1\u7387:",l.a.createElement("span",{style:{color:"#108ee9"}}," ",this.props.result.deathsRatio),"%",l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(P.a,{option:this.optioned(),style:{height:"350px",width:"auto",margin:"20px 20px"},className:"react_for_echarts"}))}}]),t}(l.a.Component),z=a(744),M=(p.a.Content,l.a.createElement("p",{style:{paddingLeft:24}},"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).callback=function(e){},a.state={error:null,isLoaded:!1,dotPosition:"top",reverse:!1,i:4},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state;e.error,e.isLoaded,e.list,e.area;return l.a.createElement("div",{style:{margin:"10vh 10% 10vh"}},l.a.createElement(z.a.Item,null,l.a.createElement(w.a,{title:"\u65b0\u589e\u6cbb\u6108\u9996\u6b21\u8d85\u8fc7\u65b0\u589e\u786e\u8bca",extra:l.a.createElement("a",{href:"#"},"\u8be6\u60c5"),style:{width:"100%"}},l.a.createElement("p",null,"25 \u4e2a\u57ce\u5e02\u73b0\u5b58\u786e\u8bca\u5f52\u96f6"),l.a.createElement("p",null," ",l.a.createElement(j.a,{color:"#2db7f5"},"2020.02.19")))),l.a.createElement(z.a.Item,null," ",l.a.createElement(w.a,{title:"\u4e03\u4e07\u591a\u60a3\u8005\u4e2d\u65e0\u75c7\u72b6\u611f\u67d3\u8005 1.2%",extra:l.a.createElement("a",{href:"#"},"\u8be6\u60c5"),style:{width:"100%"}},l.a.createElement("p",null,"\u6765\u81ea\u4e2d\u56fd\u75be\u63a7\u4e2d\u5fc3\u7684\u4e00\u4efd\u5206\u6790\u62a5\u544a"),l.a.createElement("p",null," ",l.a.createElement(j.a,{color:"#2db7f5"},"2020.02.18")))),l.a.createElement(z.a.Item,null," ",l.a.createElement(w.a,{title:"1.88 \u4e07\u6e56\u5317\u4eba\u8fd4\u56de\u6e29\u5dde\u540e",extra:l.a.createElement("a",{href:"#"},"\u8be6\u60c5"),style:{width:"100%"}},l.a.createElement("p",null,"\u975e\u6e56\u5317\u65b0\u589e\u786e\u8bca\u8fde\u7eed\u4e0b\u964d 13 \u5929"),l.a.createElement("p",null," ",l.a.createElement(j.a,{color:"#2db7f5"},"2020.02.17")))),l.a.createElement(z.a.Item,null," ",l.a.createElement(w.a,{title:"\u6df1\u5733\u786e\u8bca\u75c5\u4f8b\u5e73\u5747 15 \u5929\u51fa\u9662",extra:l.a.createElement("a",{href:"#"},"\u8be6\u60c5"),style:{width:"100%"}},l.a.createElement("p",null,"\u6709 5 \u4e2a\u7701\u4efd\u6cbb\u6108\u7387\u8d85\u8fc7 40%"),l.a.createElement("p",null," ",l.a.createElement(j.a,{color:"#2db7f5"},"2020.02.16")))))}}]),t}(l.a.Component)),S=p.a.Footer,T=(E.a.SubMenu,h.a.TabPane),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={current:"num",isLoaded:!1,error:null},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key,list:[],area:[],history:[]})},a.xhr=function(){var e=Object(u.a)(a);return g.a.get("./data.json").then((function(t){e.setState({list:t.data.data.list,area:t.data.data.area,lastUpdate:"\u9875\u9762\u6570\u636e\u66f4\u65b0\u65f6\u95f4\uff1a"+t.data.data.date,history:t.data.data.history,diagnosed:t.data.data.diagnosed,suspect:t.data.data.suspect,death:t.data.data.death,serious:t.data.data.serious,diagnosedIncr:t.data.data.diagnosedIncr,deathIncr:t.data.data.deathIncr,suspectIncr:t.data.data.suspectIncr,curedIncr:t.data.data.curedIncr,seriousIncr:t.data.data.seriousIncr,curesRatio:t.data.data.history[0].curesRatio,deathsRatio:t.data.data.history[0].deathsRatio,isLoaded:!0,error:!1})})).catch((function(t){console.log(t),e.setState({isLoaded:!1,error:t})})),a.state.error?l.a.createElement("div",null,"\u7f51\u7edc\u6ce2\u52a8\u539f\u56e0\uff0c\u5bfc\u81f4\u6570\u636e\u5237\u65b0\u6709\u8bef",l.a.createElement("br",null),"\u8bf7\u518d\u6b21\u5c1d\u8bd5\u5237\u65b0\u9875\u9762\uff0cError: ",a.state.error.message," ",l.a.createElement("br",null),l.a.createElement(y.a,{type:"primary"},"\u70b9\u6211",l.a.createElement(b.a,{type:"smile"}),"\u5237\u65b0\u9875\u9762")):a.state.isLoaded?void 0:l.a.createElement("div",null,"\u52a0\u8f7d\u4e2d...")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.xhr()}},{key:"render",value:function(){return l.a.createElement("div",null," ",l.a.createElement(f.a,{style:{border:"1px solid rgb(235, 237, 240)",marginTop:"0px"},title:"\u5168\u56fdNCP\u60c5\u62a5\u6c47\u603b",subTitle:this.state.lastUpdate}),l.a.createElement(h.a,{defaultActiveKey:"2"},l.a.createElement(T,{tab:l.a.createElement("span",null,l.a.createElement(b.a,{type:"form"}),"\u75ab\u60c5\u6570\u636e"),key:"1"},l.a.createElement("div",{style:{marginTop:"-19px",zIndex:"-1"}}," ",l.a.createElement(A,{result:this.state}))),l.a.createElement(T,{tab:l.a.createElement("span",null,l.a.createElement(b.a,{type:"appstore"}),"\u6570\u636e\u5206\u6790\u56fe"),key:"2"},l.a.createElement(R,{result:this.state,style:{width:"100%"}})),l.a.createElement(T,{tab:l.a.createElement("span",null,l.a.createElement(b.a,{type:"eye"}),"\u65b0\u95fb\u60c5\u62a5"),key:"3"},l.a.createElement(M,null))),l.a.createElement(S,{style:{textAlign:"center"}},"\u6b66\u6c49\u52a0\u6cb9\uff01\u4e2d\u56fd\u52a0\u6cb9\uff01 \xa92020 Cheer up by ASWLaunchs"))}}]),t}(l.a.Component);var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[337,1,2]]]);
//# sourceMappingURL=main.4094f359.chunk.js.map