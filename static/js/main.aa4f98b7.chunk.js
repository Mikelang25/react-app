(this["webpackJsonpclick-game"]=this["webpackJsonpclick-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Chelsea","image":"chelsea.jpg"},{"id":2,"name":"Manchester United","image":"manchester_united.png"},{"id":3,"name":"Manchester City","image":"manchester_city.png"},{"id":4,"name":"Arsenal","image":"arsenal.jpg"},{"id":5,"name":"Everton","image":"everton.jpg"},{"id":6,"name":"watford","image":"watford.jpg"},{"id":7,"name":"Tottenham","image":"tottenham.jpg"},{"id":8,"name":"Newcastle","image":"newcastle.jpg"},{"id":9,"name":"Liverpool","image":"liverpool.jpeg"},{"id":10,"name":"Swansea","image":"swansea.jpg"},{"id":11,"name":"Aston Villa","image":"astonvilla.png"},{"id":12,"name":"Hull City","image":"hull.png"},{"id":13,"name":"West Ham United","image":"westham.png"},{"id":14,"name":"Sheffield United","image":"sheffield.png"},{"id":15,"name":"Norwich City","image":"norwich.png"}]')},,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(3),c=t.n(r),s=t(4),l=t(5),m=t(7),o=t(6),d=t(8),h=(t(14),{containerStyle:{float:"left",margin:"20px",border:"3pt solid black",width:"205px",height:"205px",textAlign:"center",borderRadius:"5px",cursor:"pointer",backgroundColor:"white",boxShadow:"10px 5px 5px black"},image:{marginTop:"3px"}});var g=function(e){return i.a.createElement("div",{className:"containerStyle",style:h.containerStyle,onClick:function(){return e.markedSelected(e.id)}},i.a.createElement("img",{style:h.image,alt:e.name,src:e.image,id:e.id}))},p=(t(15),t(1)),u=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={characters:p,answer:"",selected:[],score:0,highScore:0},t.markedSelected=function(e){t.state.selected.includes(e)?(t.setState({answer:"That guess is wrong!",selected:[],score:0}),t.updateHigh()):(t.state.selected.push(e),t.setState({answer:"That guess is correct!",score:t.state.score+1}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"shuffleCharacters",value:function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}}},{key:"updateHigh",value:function(){this.state.score>this.state.highScore&&this.setState({highScore:this.state.score})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4 text-center header"},"Premier League Pick Game"),i.a.createElement("div",{className:"col-md-4 text-center header"},i.a.createElement("p",null,this.state.answer)),i.a.createElement("div",{className:"col-md-4 text-center header"},i.a.createElement("p",null,"Score: ",this.state.score," | Highscore: ",this.state.highScore))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3 text-center dir-container"},i.a.createElement("h2",null,"Team Click Game"),i.a.createElement("p",null,"Click on the images to earn points, but don't click the same one twice!")),i.a.createElement("div",{className:"col-md-9 char-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"characters",className:"col-md-11"},this.shuffleCharacters(p),this.state.characters.map((function(a){return i.a.createElement(g,{name:a.name,key:a.id,id:a.id,image:a.image,markedSelected:e.markedSelected})})))))))}}]),a}(i.a.Component);t(16);c.a.render(i.a.createElement(u,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.aa4f98b7.chunk.js.map