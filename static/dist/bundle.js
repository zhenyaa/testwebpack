/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sell_sell_view_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AddGoods_addGoods_view_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_router_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_router_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__router_router_js__);
//////////////////////////////////////module SELL/////////////////////////////////////////
// var sell_collection = require('./sell/sell_colection.js');
// console.log(sell_collection);
// console.log("hello");
///////////////////////////////////////END MODULE SELL////////////////////////////////////////////////////////

///////////////////////////////////////MODULE ADDITEM/////////////////////////////////////////////////////////

////////////////////////////////////////END MODULE ADDITEM////////////////////////////////////////////////////
//import "./sell/sell_colection.js"; 
// import "./AddGoods/addGoods_collection.js";
//import {} from "./AddGoods/addGoods_view.js";




//import {Router, router, Hi} from "./router/router.js";

 
//import getBarcode from "./sell/sell_view.js"
 
    



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ItemView */
/* unused harmony export ItemColectionPayView */
/* unused harmony export ItemColectionView */
/* unused harmony export itemPayView */
/* unused harmony export itemsView */
/* unused harmony export ItemSercheTest */
/* unused harmony export sell */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__ = __webpack_require__(2);
 
var ItemView = Backbone.View.extend({ //вид елемента
    //el: $("#valera"),
    tagName: 'tr',
    events:{
       'click .delete': 'destroy',
       'change .huyvrot': 'test91'

    },
    template: _.template($('#item-template').html()),
	initialize: function() {
	    //this._ensureElement();
	      this.model.set({total_amount:this.model.get("price")})
	      this.model.on('destroy', this.remove, this);
	      this.model.on('change', this.render, this);
//		this.render();
//        return this;
	},

	render: function() {
	    var sumPrice = 100500;
		//замечательный шаблон
		this.$el.html(this.template(this.model.toJSON() ));
		//console.log(itemcCllection);
		return this;
	},

	remove: function  () {
    this.$el.remove();
},

    test91: function () {
    alert("onchamge ran");
    // console.log(this.$("input:text").val());
    this.model.set({quantity: this.$("input:text").val()})
    this.model.set({total_amount: (this.model.get("quantity")*this.model.get("price"))})
    this.$("input").val(this.model.get("quantity"))
    },
    destroy: function  (event) {
            event.preventDefault();
            this.model.destroy();
            //alert("model whos destroy");
            //console.log(itemcCllection);
        },
});
// module.exports = ItemView; 
var ItemColectionPayView = Backbone.View.extend({
el: $(".marya"),
template: _.template($('#total-coast').html()),

initialize: function() {
    this.render();
    this.collection.on('remove', this.render, this);
    this.collection.on('change', this.render, this);
    return this;
	},
    events:{
       'click .totalsum': 'pay',
    },

    pay: function(){
        alert("pay");
        var dataCollection = __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */].toJSON()
        console.log("thuy!!!!",dataCollection);
        console.log(JSON.stringify(dataCollection));
        $.ajax({
            type: "POST",
            crossDomain:true,
            url: '/getbarcode/',             // указываем URL и
            dataType : "json",                     // тип загружаемых данных
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(dataCollection),
            error: function(){
            alert('Load was performed.');
            },
             success: function (data, textStatus) { // вешаем свой обработчик на функцию success
             __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */].add(data);
             console.log("Last coll", __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */].last());
             console.log("colection tut",__WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */]);
            }
        });

    },
	render: function() {
	    var totalCoast = 0
		//console.log(this.collection);

		this.collection.each(function(item) {
                totalCoast += item.get('total_amount');
         }, this);
		var markup = this.template({totalCoast: totalCoast});
		this.$el.html(markup);
		//console.log(markup);
		return this;
		console.log(template());
		console.log(this.template());
		this.$el.html(this.template(this.totalCoast));
		//this.$el.html(this.template(directory.model.toJSON()));
		//console.log(itemcCllection);
		return this;
	},
    destroy: function () {
          this.undelegateEvents();
          this.$el.removeData().unbind();

          //this.remove();
          //OR
          this.$el.empty();
      }
});
// module.exports = ItemModel, itemcCllection;

var ItemColectionView = Backbone.View.extend({ //вид колекции
el: $("#valera"),
//tagName: 'div',

initialize: function() {
this.collection.on('add', this.rerender, this);
this.render();
	},
	render: function() {
		this.collection.each(function(item) {
			var itemView = new ItemView({model: item});
			this.$el.append(itemView.render().el);
		}, this);
		console.log(this.collection);
		return this;
	},
	rerender: function(){
	    var itemView = new ItemView({model:__WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */].last() });
	    this.$el.append(itemView.render().el);
	    return this;
	},
    destroy: function () {
          this.undelegateEvents();
          this.$el.removeData().unbind();

          //this.remove();
          //OR
          this.$el.empty();
      }
});
 // module.exports = ItemColectionView;
console.log(this);
console.log(ItemColectionPayView);
var itemPayView = new ItemColectionPayView({collection: __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */]});
var itemsView = new ItemColectionView({collection: __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */]}); //экземпляр класса вид колекции


var ItemSercheTest = Backbone.View.extend({
el: $(".test"),
 tagname: 'div',
//template: _.template($('#Serche_barcode').html()),
template: _.template(' <input type="text" id="barcode" class="span2 search-query ebala"><button onclick="" class="btn IserchBAr">Найти</button>'),

initialize: function() {
    //$(".conteiner").html(this.el);
    this.render();
    return this;
    },
    events:{
        'click .IserchBAr': 'getBar',
    
    },

    render: function() {
    //console.log(this.$el.html(this.template()));
    // var markup = this.template();
    //     this.$el.html(markup);
        console.log("huy")
    this.$el.html(this.template());
    return this;
    },
    destroy: function () {
          this.undelegateEvents();
          this.$el.removeData().unbind();

          //this.remove();
          //OR
          this.$el.empty();
      },
   getBar:function(){
    var barcode = $('#barcode').val()
            $.ajax({
            type: "GET",
            crossDomain:true,
            url: '/getbarcode/',             // указываем URL и
            data: {"barcode": barcode},
            dataType : "json",                     // тип загружаемых данных
            error: function(){
            alert('Load was performed.');
            },
             success: function (data, textStatus) { // вешаем свой обработчик на функцию success
             console.log(data)
             __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */].add(data);
             console.log("Last coll", __WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */].last());
             console.log("colection tut",__WEBPACK_IMPORTED_MODULE_0__sell_colection_js__["a" /* itemcCllection */].toJSON());
            }
        });
   },   

     
});
// module.exports = getBarcode;
var sell = new ItemSercheTest();
// export function getBarcode() {
//             var barcode = $('#barcode').val()
//             $.ajax({
//             type: "GET",
//             crossDomain:true,
//             url: '/getbarcode/',             // указываем URL и
//             data: {"barcode": barcode},
//             dataType : "json",                     // тип загружаемых данных
//             error: function(){
//             alert('Load was performed.');
//             },
//              success: function (data, textStatus) { // вешаем свой обработчик на функцию success
//              console.log(data)
//              itemcCllection.add(data);
//              console.log("Last coll", itemcCllection.last());
//              console.log("colection tut",itemcCllection.toJSON());
//             }
//         });
// };
//module.exports = getBarcode;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ItemModel */
/* unused harmony export ItemCollection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemcCllection; });
var ItemModel = Backbone.Model.extend({ //модель елемента
       default:{
       		"id": 1,
            "name": "",
            "price": null,
            "quantity": 1,
            "ready": 1,
            "total_amount": null
        },
        url: "/sell"
});

var ItemCollection = Backbone.Collection.extend({ // колекция элементов
	model: ItemModel
});


var itemcCllection = new ItemCollection( //екземпляр класса колекций

);

// module.exports = ItemModel, itemcCllection;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ItemSercheView */
/* unused harmony export additem */
/* unused harmony export ItemChoiceView */
/* unused harmony export ItemCollectionСhoiceView */
/* unused harmony export itemsChoiceView */
/* unused harmony export ItemHandheldView */
/* unused harmony export itemHandheldView */
/* unused harmony export AdedetItemView */
/* unused harmony export AdededItemCollectionView */
/* unused harmony export adededItemCollectionView */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__ = __webpack_require__(4);


// import itemCollectionСhoice from "./addGoods_collection.js"
var ItemSercheView = Backbone.View.extend({
el: $(".serchebarcode"),
 tagname: 'div',
//template: _.template($('#Serche_barcode').html()),
template: _.template('<input type="text"  id="barcode" class="span2 search-query" autocomplete="off"> <button onclick="" class="btn fbarcode">Найти</button>'),

initialize: function() {
    //$(".conteiner").html(this.el);
    this.render();
    return this;
    },
    events:{
        'click .fbarcode': 'findBarcode',
    },

    findBarcode : function () {
        alert("klick find barcode");
        //alert(this.$("input").val());
        console.log(this.$("input").val());
        var barcode = this.$("input").val();
            $.ajax({
            type: "GET",
            crossDomain:true,
            url: '/findbarcode/',             // указываем URL и  !!!!!!!!!!!!!!!!
            data: {"barcode": barcode},
            dataType : "json",                     // тип загружаемых данных
                error: function(){
                alert('Load was performed.');
                },
                 success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                    console.log('1!!!!!!!!!!!!!!!!!!!!!',data);
                    //console.log("22222222222222222222222",JSON.parse(data));
                    //var x = JSON.parse(data);
                    var x = data;
                    console.log("1111112222333444", x, typeof(x));
                    console.log(x[1]);
                    var obekt= {};
//                    obekt.barcode = barcode;
//                    obekt.name = x.names[0];
//                    obekt.quantity = 1;
                    x[1].quantity = 1;
                    __WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["b" /* itemCollectionСhoice */].add(x[1]);
                    console.log(__WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["b" /* itemCollectionСhoice */]);
                    $("input").val(" ");
                 //itemcCllection.add(data);
                 //console.log("Last coll", itemcCllection.last());
                 //console.log("colection tut",itemcCllection.toJSON());
                },
            });
    },

    render: function() {
    //console.log(this.$el.html(this.template()));
    // var markup = this.template();
    //     this.$el.html(markup);
        console.log("huy")
        this.$el.html(this.template());
        return this;
    },
    destroy: function () {
          this.undelegateEvents();
          this.$el.removeData().unbind();

          //this.remove();
          //OR
          this.$el.empty();
      }
});

var additem = new ItemSercheView();

var ItemChoiceView = Backbone.View.extend({  /////вид  выбора вариантов товара
    tagName: "tr",
    events:{
        'dblclick': 'migrateModel'
    },

    template: _.template('<td> <%= barcode %></td> <td><%= name %> </td> <td><%= quantity %> </td>'),
    initialize: function () {
        
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;  
    },
    migrateModel: function () {
        alert("DUBLE CLICK");
        var caunt = prompt( ("Ведите количество "+ this.model.get("name")),0);
        this.model.set("quantity",caunt);
        __WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["a" /* itemCollectionTable */].add(this.model);
        //itemCollectionСhoice.remove();
        console.log('this',__WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["b" /* itemCollectionСhoice */].reset());
    },
});

var ItemCollectionСhoiceView = Backbone.View.extend({ /////вид колекции выбора вариантов товара
    el: $("#tableChoise"),
    events:{
        
    },
    initialize: function () {
        this.collection.on('add', this.rerender, this);////////////////!!!!!!!!!!
        this.collection.on('reset',this.showAlert,this);
        this.render;    
     },

    render: function() {
        this.collection.each(function(item) {
            var itemChoiceView = new ItemChoiceView({model: item});
            this.$el.append(itemChoiceView.render().el);
        }, this);
        console.log(this.collection);
        return this;
    },
    showAlert: function () {
        alert("allert collection is reset");
        this.$el.removeData().unbind();
        this.$el.empty();
    },
     rerender: function(){
        var itemChoiceView = new ItemChoiceView({model:__WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["b" /* itemCollectionСhoice */].last() });
        this.$el.append(itemChoiceView.render().el);
        return this;
    },
    destroy: function () {
          this.undelegateEvents();
          this.$el.removeData().unbind();

          //this.remove();
          //OR
          this.$el.empty();
      }

});

var itemsChoiceView = new ItemCollectionСhoiceView({collection: __WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["b" /* itemCollectionСhoice */]});


var ItemHandheldView = Backbone.View.extend({  /////вид  выбора вариантов товара
    el: $("#handheld"),
    events:{
      'click .handadd': 'handAdd',  
    },

    template: _.template('<input type="number"  id="barcode1" class="span2 search-query"> <input type="text"  id="name1" class="span2 search-query"> <input type="number"  id="cuantiti" class="span2 search-query"> <button onclick="" class="btn handadd">Добавить</button>'),
    initialize: function () {
        
    },

    render: function () {
        this.$el.html(this.template());
        return this;  
    },
    handAdd: function () {
        alert("hand add!!!");
        console.log(this.$("input#barcode1").val());
        console.log(this.$("input#name1").val());
        console.log(this.$("input#cuantiti").val());
        handItem = {};
        ////////////////////////////////////////////////////////////!!!!!!!!!!!!!!!!!
        handItem.name = this.$("input#name1").val();
        handItem.quantity = parseInt(this.$("input#cuantiti").val(),10);
        handItem.barcode = parseInt(this.$("input#barcode1").val(),10);
        console.log(handItem);
        __WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["a" /* itemCollectionTable */].add(handItem);
        console.log(__WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["a" /* itemCollectionTable */]);

    },
});

var itemHandheldView =new ItemHandheldView();

var AdedetItemView = Backbone.View.extend({  /////вид  еденичный конечной таблицы добавленых товаров
    tagName: "tr",
    events:{},

    template: _.template('<td> <%= barcode %></td> <td><%= name %> </td> <td><%= quantity %> </td>'),
    initialize: function () {
        
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;  
    },
});

var AdededItemCollectionView = Backbone.View.extend({ /////вид колекции выбора вариантов товара
    el: $("#tableFinish"),
    initialize: function () {
        this.collection.on('add', this.rerender, this);
        this.render;    
     },

    render: function() {
        this.collection.each(function(item) {
            var adedetItemView = new AdedetItemView({model: item});
            this.$el.append(adedetItemView.render().el);
        }, this);
        console.log(this.collection);
        return this;
    },
    rerender: function(){
        var adedetItemView = new AdedetItemView({model:__WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["a" /* itemCollectionTable */].last() });
        this.$el.append(adedetItemView.render().el);
        return this;
    },
    destroy: function () {
          this.undelegateEvents();
          this.$el.removeData().unbind();

          //this.remove();
          //OR
          this.$el.empty();
      }

});

var adededItemCollectionView = new AdededItemCollectionView({collection: __WEBPACK_IMPORTED_MODULE_0__addGoods_collection_js__["a" /* itemCollectionTable */]});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ItemModelAdd */
/* unused harmony export ItemCollectionСhoice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return itemCollectionСhoice; });
/* unused harmony export ItemCollectionеTable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemCollectionTable; });
var ItemModelAdd = Backbone.Model.extend({ //модель елемента
       default:{
            "name": "",
            "quantity": 1,
            "barcode": null,
        },
        url: "/sell"
});

var ItemCollectionСhoice = Backbone.Collection.extend({ // колекция элементов
    model: ItemModelAdd
});

var itemCollectionСhoice = new ItemCollectionСhoice( //екземпляр класса колекций
[
    // {name: "bolt", barcode: 111, quantity:2},
    // {name: "gayka", barcode: 222, quantity:4},
    // {name: "gvozd", barcode: 333, quantity:8}
]
);


var ItemCollectionеTable = Backbone.Collection.extend({ // колекция элементов
    model: ItemModelAdd
});

var itemCollectionTable = new ItemCollectionеTable( //екземпляр класса колекций
    [
    {name: "otvertka", barcode: 44, quantity:2},
    {name: "key", barcode: 556, quantity:4},
    {name: "kley", barcode: 789, quantity:8}
    ]
);



/***/ }),
/* 5 */
/***/ (function(module, exports) {

// export Router = Backbone.Router.extend({
//     routes: {
//         ''     : 'index',
//         'sell' : 'sell',
//         'additem' : 'additem',
//         'admin' : 'admin' 
//     },
 
//     index: function() {
//         console.log('Всем привет от индексного роута!');   
//         sell.destroy();
//          itemsView.destroy();
//          itemPayView.destroy();
//     },
 
//     sell: function() {
//         console.log('это роут Sell');   
//         document.getElementById("sell page").style.display="block"; //show page with id sell page
//         document.getElementById("additem page").style.display="none";   
//         itemPayView.render();
//         itemsView.render();
//         //document.getElementById("1").style.display="none";
//        // document.getElementById("2").style.display="block";
//         sell.render();
//         additem.destroy(); 
//         adededItemCollectionView.destroy();
//         itemsChoiceView.destroy();
//     },

//     additem: function() {
//         console.log('это роут additem');   
//         //var itemserchview = new ItemSercheView();
//         //document.getElementById("2").style.display="none";
//         //document.getElementById("sell page").style.display="block";
//         document.getElementById("additem page").style.display="block"; //show page with id sell page
//         document.getElementById("sell page").style.display="none";
//          additem.render();
//          adededItemCollectionView.render();
//          itemsChoiceView.render();
//          itemHandheldView.render();//
//          sell.destroy();
//          itemsView.destroy();
//          itemPayView.destroy();
//     },
//     admin: function() {
//         console.log('это роут admin'); 
//         sell.destroy();
//          itemsView.destroy();
//          itemPayView.destroy();  
//         //var itemserchview = new ItemSercheView();
//     }

// });
 
// export var router =  Router();
    
// export var Hi =  Backbone.history.start();


Router = Backbone.Router.extend({
    routes: {
        ''     : 'index',
        'sell' : 'sell',
        'additem' : 'additem',
        'admin' : 'admin' 
    },
 
    index: function() {
        console.log('Всем привет от индексного роута!');   
        sell.destroy();
         itemsView.destroy();
         itemPayView.destroy();
    },
 
    sell: function() {
        console.log('это роут Sell');   
        document.getElementById("sell page").style.display="block"; //show page with id sell page
        document.getElementById("additem page").style.display="none";   
        itemPayView.render();
        itemsView.render();
        //document.getElementById("1").style.display="none";
       // document.getElementById("2").style.display="block";
        sell.render();
        additem.destroy(); 
        adededItemCollectionView.destroy();
        itemsChoiceView.destroy();
    },

    additem: function() {
        console.log('это роут additem');   
        //var itemserchview = new ItemSercheView();
        //document.getElementById("2").style.display="none";
        //document.getElementById("sell page").style.display="block";
        document.getElementById("additem page").style.display="block"; //show page with id sell page
        document.getElementById("sell page").style.display="none";
         additem.render();
         adededItemCollectionView.render();
         itemsChoiceView.render();
         itemHandheldView.render();//
         sell.destroy();
         itemsView.destroy();
         itemPayView.destroy();
    },
    admin: function() {
        console.log('это роут admin'); 
        sell.destroy();
         itemsView.destroy();
         itemPayView.destroy();  
        //var itemserchview = new ItemSercheView();
    }

});
 
new  Router();
    
Backbone.history.start();

/***/ })
/******/ ]);