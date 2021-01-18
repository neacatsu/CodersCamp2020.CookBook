parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ayqE":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Question=void 0;var r=function(){function e(n){t(this,e),this.currentQuestion,this.questions=n}return n(e,[{key:"getQuestion",value:function(){var t=this,e=Math.floor(Math.random()*this.questions.length);return this.currentQuestion=this.questions[e],this.questions.splice(e,1),fetch("https://api.spoonacular.com/recipes/guessNutrition?title=".concat(this.currentQuestion.apiTitle,"&apiKey=08dba6e965974fdb9c6a8cc7b0f8f4f0")).then(function(t){if(!t.ok)throw new Error("Ups...  Something went wrong!");return t.json()}).then(function(e){var n=e.calories.value;return t.currentQuestion.calories=n,t.currentQuestion.minCalories=n-.1*n,t.currentQuestion.maxCalories=n+.1*n,t.currentQuestion}).catch(function(t){throw Error(t)})}},{key:"checkAnswer",value:function(t){t=parseInt(t);var e=this.currentQuestion.minCalories,n=this.currentQuestion.maxCalories;return t>e&&t<n}},{key:"getPoints",value:function(t){if(t>this.currentQuestion.maxCalories||t<this.currentQuestion.minCalories)return 0;var e=Math.round(this.currentQuestion.calories-this.currentQuestion.minCalories),n=Math.abs(t-this.currentQuestion.calories);return Math.abs(Math.round(n/e*100)-100)}}]),e}();exports.Question=r;
},{}],"Ftab":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Timer=void 0;var r=function(){function t(i){e(this,t),this.time=i,this.timeLeft=this.time,this.timer}return i(t,[{key:"startTimer",value:function(e,t){var i=this;document.querySelector(".timer").classList.add("active"),this.timer=setInterval(function(){if(i.timeLeft-=1,0===i.timeLeft)return i.stopTimer(),t.getResult(e),!0},1e3)}},{key:"getTimeLeft",value:function(){return this.timeLeft}},{key:"stopTimer",value:function(){clearInterval(this.timer),document.querySelector(".timer").classList.remove("active")}}]),t}();exports.Timer=r;
},{}],"eyfy":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Stats=void 0;var r=function(){function e(n){t(this,e),this.points=n}return n(e,[{key:"addPoints",value:function(t){var e=this,n=0,r=setInterval(function(){return n>=t-1&&clearInterval(r),n++,e.points++,document.querySelector(".score span").textContent=e.points,e.points},15)}}]),e}();exports.Stats=r;
},{}],"fOA4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=void 0;var e=require("./Question.js"),t=require("./Timer.js"),i=require("./Stats.js");function n(e,t,i,n,s,a,o){try{var r=e[a](o),c=r.value}catch(u){return void i(u)}r.done?t(c):Promise.resolve(c).then(n,s)}function s(e){return function(){var t=this,i=arguments;return new Promise(function(s,a){var o=e.apply(t,i);function r(e){n(o,s,a,r,c,"next",e)}function c(e){n(o,s,a,r,c,"throw",e)}r(void 0)})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t&&o(e.prototype,t),i&&o(e,i),e}var c=function(){function n(){var e=this;a(this,n),this.questions=[{name:"Banana bread",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/banana-bread.jpg",apiTitle:"banana+bread"},{name:"Spaghetti carbonara",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/carbonara.jpg",apiTitle:"spaghetti+carbonara"},{name:"Cheesecake",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/cheesecake.jpg",apiTitle:"cheesecake"},{name:"Chicken pad thai",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/chicken-pad-thai.jpg",apiTitle:"chicken+pad+thai"},{name:"Chocolate brownie",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/chocolate-brownie.jpg",apiTitle:"chocolate+brownie"},{name:"Hamburger",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/hamburger.jpg",apiTitle:"Hamburger"},{name:"Spaghetti aglio et olio",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/spaghetti-aglio-olio.jpg",apiTitle:"spaghetti+aglio+olio"},{name:"Spaghetti bolognese",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/spaghetti-bolognese.jpg",apiTitle:"spaghetti+bolognese"},{name:"Strawberry shake",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/strawberry-shake.jpg",apiTitle:"strawberry+shake"},{name:"Vanilla ice cream",imgSrc:"/CodersCamp2020.CookBook/static/assets/img/vanilla-ice-cream.jpg",apiTitle:"vanilla+ice+cream"}],this.startBtn=document.querySelector(".start"),this.instructionSection=document.querySelector(".instruction"),this.gameSection=document.querySelector(".game"),this.imgInput=document.querySelector(".dish-img"),this.dishNameInput=document.querySelector(".dish-name"),this.checkBtn=document.querySelector(".submit"),this.answerInput=document.querySelector(".answer"),this.correctAnswer=document.querySelector(".correct-answer"),this.gameOverBlock=document.querySelector(".game-over"),this.finalScoreInput=document.querySelector(".game-over .score span"),this.stats=new i.Stats(0),document.addEventListener("DOMContentLoaded",function(){e.startBtn.addEventListener("click",e.startRound.bind(e),{once:!0}),e.checkBtn.addEventListener("click",function(e){return e.preventDefault()})})}return r(n,[{key:"showQuestionSection",value:function(){this.gameSection.classList.add("active"),this.instructionSection.classList.remove("active")}},{key:"startRound",value:function(){var i=s(regeneratorRuntime.mark(function i(){var n,s,a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=new e.Question(this.questions),s=new t.Timer(15),this.gameSection.classList.contains("active")||this.showQuestionSection(),i.next=5,n.getQuestion();case 5:return a=i.sent,this.reset(),i.next=9,a.imgSrc;case 9:return this.imgInput.src=i.sent,i.next=12,a.name;case 12:return this.imgInput.alt=i.sent,i.next=15,a.name;case 15:return this.dishNameInput.textContent=i.sent,i.t0=s,i.next=19,n;case 19:i.t1=i.sent,i.t2=this,i.t0.startTimer.call(i.t0,i.t1,i.t2),this.sumUpRoundFunction=this.sumUpRound.bind(this,n,s),this.checkBtn.addEventListener("click",this.sumUpRoundFunction,{once:!0});case 24:case"end":return i.stop()}},i,this)}));return function(){return i.apply(this,arguments)}}()},{key:"sumUpRound",value:function(e,t,i){i.preventDefault(),t.stopTimer();var n=e.checkAnswer(this.answerInput.value);t.getTimeLeft();this.getResult(e,n)}},{key:"getResult",value:function(e,t){if(this.checkBtn.removeEventListener("click",this.sumUpRoundFunction),t){this.correctAnswer.textContent="Correct answer is: ".concat(e.currentQuestion.calories,"."),this.imgInput.classList.add("true");var i=e.getPoints(+this.answerInput.value);this.stats.addPoints(i),this.questions.length<6?setTimeout(this.endGame.bind(this),15*i):setTimeout(this.startRound.bind(this),15*i+500)}else this.imgInput.classList.add("false"),this.correctAnswer.textContent="Correct answer is: ".concat(e.currentQuestion.calories,"."),this.questions.length<6?this.endGame():setTimeout(this.startRound.bind(this),500)}},{key:"reset",value:function(){this.correctAnswer.textContent="...",this.answerInput.value="",this.imgInput.classList.remove("false"),this.imgInput.classList.remove("true")}},{key:"endGame",value:function(){var e=this;setTimeout(function(){console.log("Koniec gry!"),e.reset(),e.gameOverBlock.classList.add("active"),e.finalScoreInput.textContent=e.stats.points},1e3)}}]),n}();exports.Game=c;
},{"./Question.js":"ayqE","./Timer.js":"Ftab","./Stats.js":"eyfy"}],"PC6C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MENU=exports.API=void 0;var o={getRecipeInformation:function(o,e){return"https://api.spoonacular.com/recipes/".concat(o,"/information?apiKey=").concat(e)},searchFor:function(o,e){return"https://api.spoonacular.com/recipes/complexSearch?query=".concat(o,"&number=9&apiKey=").concat(e)}};exports.API=o;var e={mainPage:{name:"Main Page",link:"/CodersCamp2020.CookBook/index.html"},randomRecipe:{name:"Random Recipe",link:"/CodersCamp2020.CookBook/random.html"},nutritionGame:{name:"Nutrition Game",link:"/CodersCamp2020.CookBook/nutritionGame.html"},calculator:{name:"Calculator",link:"/CodersCamp2020.CookBook/calculator.html"},shoppingList:{name:"Shopping List",link:"/CodersCamp2020.CookBook/list.html"}};exports.MENU=e;
},{}],"ecPM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MainMenu=exports.sendRequest=exports.createResultBox=exports.createElementWithInnerText=exports.createElementWithClasses=exports.createNavigationList=exports.appendChildrenToElement=void 0;var e=require("../GlobalData.js"),t="a69c65ede3bb4ac3b262c5b425b4f835",n=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o in n)e.appendChild(n[o]);return e};exports.appendChildrenToElement=n;var r=function(t){var n=o("ul","navigationList");for(var r in e.MENU)if(console.log(e.MENU[r]),e.MENU[r]!==t){var a=document.createElement("li");a.innerHTML="<a href=".concat(e.MENU[r].link,">").concat(e.MENU[r].name,"</a>"),n.appendChild(a)}return n};exports.createNavigationList=r;var o=function(e){for(var t,n=document.createElement(e),r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return(t=n.classList).add.apply(t,o),n};exports.createElementWithClasses=o;var a=function(e,t){for(var n,r=document.createElement(e),o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];return(n=r.classList).add.apply(n,a),r.innerText=t,r};exports.createElementWithInnerText=a;var i=function(e,t){e.forEach(function(e){var r=document.createElement("article");r.id=e.id;var o=document.createElement("img");o.src=e.image;var a=document.createElement("p");a.innerText=e.title,n(r,o,a),n(t,r)})};exports.createResultBox=i;var c=function(n,r){var o=n.value.trim().replace("","%20");fetch(e.API.searchFor(o,t)).then(function(e){if(!e.ok)throw new Error("Ups...  Something went wrong!");return e.json()}).then(function(e){if(0===e.results.length){var t=document.createElement("p");t.innerText="Sorry, there isn't any result for Your search",r.appendChild(t)}else i(e.results,r)}).catch(function(e){resultsSection.innerHTML="<p>".concat(e,"</p>"),console.log(e)})};exports.sendRequest=c;var l=function(t){var i=o("nav","menu","container"),l=o("div","logo");l.innerHTML="<a href=".concat(e.MENU.mainPage.link,">CookBook</a>");var s=a("button","Click","navigationBtn"),d=o("div","navigationBox","navigationBoxHidden"),u=r(t),v=o("form","search"),m=o("input"),p=a("button","Search"),f=a("span","Please, insert text!","tooltip");n(v,m,p,f),n(d,u,v),n(i,l,s,d);var h=o("div","backdrop"),E=o("div","modal","container"),x=a("button","x"),g=document.createElement("section");n(E,x,g),n(h,E);var y=document.getElementById("swquiz-app");document.body.insertBefore(i,y),document.body.insertBefore(h,y);var L=document.querySelector("form input"),C=document.querySelector("form button"),k=document.querySelector(".tooltip"),b=document.querySelector(".backdrop"),B=b.firstElementChild.firstElementChild,M=b.firstElementChild.lastElementChild,T=document.querySelector(".logo"),q=function(){k.classList.remove("active")};L.addEventListener("click",function(e){return q()}),C.addEventListener("click",function(e){if(e.preventDefault(),""!==L.value){q(),b.style.opacity=1,b.style.zIndex=100;var t="Results for search: ".concat(L.value),n=document.createElement("h2");n.innerText=t,M.appendChild(n),c(L,M),N(),L.value=""}else k.classList.add("active")}),B.addEventListener("click",function(e){e.preventDefault(),b.style.opacity=0,b.style.zIndex=-100,M.innerText=""}),b.addEventListener("click",function(e){b.style.opacity=0,b.style.zIndex=-100,M.innerText=""}),b.firstElementChild.addEventListener("click",function(e){e.stopPropagation()}),M.addEventListener("click",function(e){"1"==Boolean(e.target.id)&&window.location.replace("/CodersCamp2020.CookBook/recipe.html?id=".concat(e.target.id))});var S=document.querySelector(".navigationBtn"),w=document.querySelector(".navigationBox"),N=function(){w.classList.toggle("navigationBoxHidden")};S.addEventListener("click",function(e){N(),q()}),T.addEventListener("mouseenter",function(e){console.log("hej"),T.animate([{transform:"rotateY(0deg)"},{transform:"rotateY(360deg)"}],{duration:500,iteration:1})})};exports.MainMenu=l;
},{"../GlobalData.js":"PC6C"}],"Irt2":[function(require,module,exports) {
"use strict";var e=require("./app/Game.js"),a=require("./app/MainMenu.js"),r=require("./GlobalData.js");(0,a.MainMenu)(r.MENU.nutritionGame);var i=new e.Game;
},{"./app/Game.js":"fOA4","./app/MainMenu.js":"ecPM","./GlobalData.js":"PC6C"}]},{},["Irt2"], null)
//# sourceMappingURL=nutritionGame.9bb88f34.js.map