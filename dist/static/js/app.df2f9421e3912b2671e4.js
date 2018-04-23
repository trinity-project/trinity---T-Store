webpackJsonp([0],{JyTi:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={name:"headNav",data:()=>({title:"T Store"}),mounted(){},methods:{}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container-fluid"},[e("h1",[e("span",{staticClass:"glyphicon glyphicon-shopping-cart",attrs:{"aria-hidden":"true"}}),this._v(this._s(this.title))])])])},staticRenderFns:[]};var o=i("VU/8")(n,s,!1,function(t){i("JyTi")},"data-v-6d2d2ac8",null).exports,c={name:"index",data:()=>({IpPort:"118.89.44.106:8766",CommodityItem:[{name:"Cucumber",price:1,img:"static/img/cucumber.png",origin:"China",weight:"500g",quantity:0},{name:"Pizza",price:2,img:"static/img/pizza.jpg",origin:"United States",weight:"1kg",quantity:0},{name:"Cherry",price:3,img:"static/img/cherry.jpg",origin:"Chile",weight:"200g",quantity:0}],activeDetail:{},Amount:0,Description:"",WalletInfo:{PrivateKey:"",PublicKey:"",ScriptHash:"",Address:"Login in to transfer",Balance:0},InstantKey:"",PaymentLink:"",PaymentQRCode:"",Peer:"",PeerQRCode:"",PaymentList:{},Websock:null,LoginFlag:!1}),filters:{FormatNo:function(t){return t+1},FormatPrice:function(t){return t?t.toFixed(2)+"TNC":"0TNC"}},watch:{CommodityItem:{handler:function(t){this.CalcTotalmoney()},deep:!0},WalletInfo:{handler:function(t){this.GetAssetsBalance()},deep:!0},PaymentLink:{handler:function(t){this.PaymentQRCode="http://qr.liantu.com/api.php?text="+t},deep:!0},Peer:{handler:function(t){this.PeerQRCode="http://qr.liantu.com/api.php?text="+t},deep:!0}},mounted(){this.$nextTick(function(){var t=this;setTimeout(function(){console.log("render complete"),t.CreateKey(),t.initWebSocket()},3e3)})},methods:{CommodityDetails:function(t){this.activeDetail=t},FormatCommodityItem:function(t){let e=[];return t.forEach(function(t,i){t.quantity>0&&e.push(t)}),e},CreateKey:function(){let t=ab2hexstring(generatePrivateKey()),e=ab2hexstring(getPublicKey(t,0));this.InstantKey=getPublicKeyEncoded(e)},ChangeQuantity:function(t,e){e>0?t.quantity++:t.quantity<1?t.quantity=0:t.quantity--},DetailsChangeQuantity:function(){let t=this;t.CommodityItem.forEach(function(e,i){e.name===t.activeDetail.name&&e.quantity++}),$(".closeDetails").click()},ClearQuantity:function(t){t.quantity=0},CalcTotalmoney:function(){let t=this;this.Amount=0,this.CommodityItem.forEach(function(e,i){t.Amount+=e.price*e.quantity})},copyfun:function(){var t=new ClipboardJS(".btncopy");t.on("success",function(t){t.clearSelection()}),t.on("error",function(t){console.error("Action:",t.action),console.error("Trigger:",t.trigger)})},copyfun1:function(){var t=new ClipboardJS(".btncopy1");t.on("success",function(t){t.clearSelection()}),t.on("error",function(t){console.error("Action:",t.action),console.error("Trigger:",t.trigger)})},threadPoxiForTxid(){if(this.WebsockForTxid.readyState===this.WebsockForTxid.OPEN)(t=this).WebsocketSendForTxid(agentData);else if(this.WebsockForTxid.readyState===this.WebsockForTxid.CONNECTING){var t=this;setTimeout(function(){t.WebsocketSendForTxid(agentData)},300)}else{this.initWebSocketForTxid();t=this;setTimeout(function(){t.WebsocketSend(agentData)},500)}},initWebSocket(){const t="ws://"+this.IpPort;this.Websock=new WebSocket(t),this.Websock.onmessage=this.WebsocketOnmessage,this.Websock.onclose=this.WebsocketClose},WebsocketOnmessage(t){const e=JSON.parse(t.data),i=e.MessageType;if(console.log(e),"PaymentLinkAck"==i){this.PaymentLink=e.MessageBody.PaymentLink;const t=e.MessageBody.PaymentLink.substring(2);let i=base58decode(t).toString();console.log(i);let n=i.split("&");this.Peer=n[0];var a={Hr:n[1],Description:n[4]};this.PaymentList={},this.PaymentList=a}"PaymentAck"==i&&"Success"==e.MessageBody.State&&this.PaymentList.Hr==e.MessageBody.Hr&&($(".closePaymentLink").click(),swal({title:"Success",type:"success",confirmButtonText:"Close",allowOutsideClick:"ture"}))},WebsocketSend:function(){console.log("发送信息：1"),this.Websock.send("1")},CreatePaymentLink:function(){""==this.Description&&(this.Description=this.Amount+"TNC");var t={MessageType:"PaymentLink",Sender:this.InstantKey+"@"+this.IpPort,MessageBody:{Parameter:{Amount:this.Amount,Assets:"TNC",Description:this.Description}}};console.log(JSON.stringify(t)),this.Websock.send(JSON.stringify(t)),this.Description=""},WebsocketClose(t){console.log("连接关闭:"+t.code)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col-md-1 col-lg-2 col-xl-3"}),t._v(" "),i("div",{staticClass:"col-md-10 col-lg-8 col-xl-6 main-column"},[t._m(0),t._v(" "),t._l(t.CommodityItem,function(e){return i("div",{staticClass:"col-sm-6 col-md-4",staticStyle:{"margin-top":"20px"}},[i("div",{staticClass:"thumbnail"},[i("img",{attrs:{src:e.img}}),t._v(" "),i("div",{staticClass:"caption"},[i("h3",[t._v(t._s(e.name))]),t._v(" "),i("p",[i("a",{staticClass:"btn btn-primary",attrs:{role:"button"},on:{click:function(i){t.ChangeQuantity(e,1)}}},[t._v(t._s(t._f("FormatPrice")(e.price)))]),t._v(" "),i("a",{staticClass:"btn btn-default",attrs:{role:"button","data-toggle":"modal","data-target":"#Details"},on:{click:function(i){t.CommodityDetails(e)}}},[t._v("Details")])])])])])}),t._v(" "),i("div",{staticClass:"col-md-12 col-lg-12 col-xl-12",staticStyle:{"margin-top":"10px"}},[i("div",{staticClass:"well"},[t._v("\n            Shopping Cart\n          ")]),t._v(" "),0!==t.Amount?i("table",{staticClass:"table table-striped table-hover"},[t._m(1),t._v(" "),t._l(t.FormatCommodityItem(t.CommodityItem),function(e,a){return i("tbody",[i("tr",[i("td",[t._v(t._s(t._f("FormatNo")(a)))]),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[i("a",{on:{click:function(i){t.ChangeQuantity(e,-1)}}},[t._v(" - ")]),t._v(t._s(e.quantity)),i("a",{on:{click:function(i){t.ChangeQuantity(e,1)}}},[t._v(" + ")])]),t._v(" "),i("td",[t._v(t._s(t._f("FormatPrice")(e.price*e.quantity)))]),t._v(" "),i("td",[i("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true"},on:{click:function(i){t.ClearQuantity(e)}}})])])])})],2):t._e(),t._v(" "),0!==t.Amount?i("div",{staticClass:"col-md-8 col-lg-7 col-xl-12"},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Description"}})]):t._e(),t._v(" "),0!==t.Amount?i("div",{staticClass:"text-right col-md-8 col-lg-5 col-xl-12",staticStyle:{height:"44px",padding:"5px 0"}},[t._v("Amount: "+t._s(t._f("FormatPrice")(t.Amount))+"   "),i("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#PaymentLinkForm",type:"button"},on:{click:function(e){t.CreatePaymentLink()}}},[t._v("Payment")])]):t._e()])],2),t._v(" "),i("div",{staticClass:"col-md-1 col-lg-2 col-xl-3"}),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"Details",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-body clearfloat"},[t._m(2),t._v(" "),i("img",{attrs:{src:t.activeDetail.img}}),t._v(" "),i("h2",[t._v(t._s(t.activeDetail.name))]),t._v(" "),i("p",[t._v("Net Weight: "+t._s(t.activeDetail.weight))]),t._v(" "),i("p",[t._v("Price: "+t._s(t._f("FormatPrice")(t.activeDetail.price)))]),t._v(" "),i("p",[t._v("Place of origin: "+t._s(t.activeDetail.origin))]),t._v(" "),i("button",{staticClass:"btn btn-primary",staticStyle:{margin:"20px 0"},attrs:{type:"button"},on:{click:function(e){t.DetailsChangeQuantity()}}},[t._v("Add to Cart")])])])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"PaymentLinkForm",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-body clearfloat"},[t._m(3),t._v(" "),i("h3",[t._v("Requested Payment")]),t._v(" "),i("h4",[i("span",{staticStyle:{color:"red"}},[t._v("Amount: "+t._s(t._f("FormatPrice")(t.Amount)))]),i("br"),t._v("\n                Payment Code:"),i("br")]),t._v(" "),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.PaymentLink,expression:"PaymentLink"}],staticClass:"form-control request-amount",attrs:{id:"Paymentlink",readonly:"readonly",placeholder:"PaymentLink",type:"text"},domProps:{value:t.PaymentLink},on:{input:function(e){e.target.composing||(t.PaymentLink=e.target.value)}}}),t._v(" "),i("span",{staticClass:"input-group-btn"},[i("button",{staticClass:"btn btn-default btncopy",attrs:{"data-clipboard-target":"#Paymentlink",type:"button"},on:{click:t.copyfun}},[i("span",{staticClass:"glyphicon glyphicon-file",attrs:{"aria-hidden":"true"}}),t._v("Copy")])])]),t._v(" "),t._m(4),t._v(" "),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.Peer,expression:"Peer"}],staticClass:"form-control request-amount",attrs:{id:"Peer",readonly:"readonly",placeholder:"PaymentLink",type:"text"},domProps:{value:t.Peer},on:{input:function(e){e.target.composing||(t.Peer=e.target.value)}}}),t._v(" "),i("span",{staticClass:"input-group-btn"},[i("button",{staticClass:"btn btn-default btncopy1",attrs:{"data-clipboard-target":"#Peer",type:"button"},on:{click:t.copyfun1}},[i("span",{staticClass:"glyphicon glyphicon-file",attrs:{"aria-hidden":"true"}}),t._v("Copy")])])]),t._v(" "),i("div",{staticClass:"alert alert-info clearfloat",attrs:{role:"alert"}},[i("img",{attrs:{src:t.PaymentQRCode}}),i("span",[t._v("Payment Code")]),i("br"),t._v(" ")]),t._v(" "),i("div",{staticClass:"alert alert-info clearfloat",attrs:{role:"alert"}},[i("img",{attrs:{src:t.PeerQRCode}}),i("span",[t._v("TNAP")]),i("br"),t._v("(Trinity Network Access Point)")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header text-left"},[e("h1",[this._v("Commodity List")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("No.")]),t._v(" "),i("th",[t._v("Commodity")]),t._v(" "),i("th",[t._v("Quantity")]),t._v(" "),i("th",[t._v("Amount")]),t._v(" "),i("th",[t._v("Edit")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close closeDetails",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close closePaymentLink",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[this._v("\n                TNAP(Trinity Network Access Point):"),e("br")])}]};var l={name:"App",data:()=>({}),mounted:function(){this.$nextTick(function(){})},components:{headNav:o,index:i("VU/8")(c,r,!1,function(t){i("Ufhc")},"data-v-0041be85",null).exports},methods:{}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("head-nav"),this._v(" "),e("index")],1)},staticRenderFns:[]};var m=i("VU/8")(l,d,!1,function(t){i("ynK+")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:m},template:"<App/>"})},Ufhc:function(t,e){},"ynK+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.df2f9421e3912b2671e4.js.map