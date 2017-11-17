import {
  ItemModel,
  ItemCollection,
  itemcCllection,
} from "./sell_colection.js"; 
export var ItemView = Backbone.View.extend({ //вид елемента
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
export var ItemColectionPayView = Backbone.View.extend({
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
        var dataCollection = itemcCllection.toJSON()
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
             itemcCllection.add(data);
             console.log("Last coll", itemcCllection.last());
             console.log("colection tut",itemcCllection);
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

export var ItemColectionView = Backbone.View.extend({ //вид колекции
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
	    var itemView = new ItemView({model:itemcCllection.last() });
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
export var itemPayView = new ItemColectionPayView({collection: itemcCllection});
export var itemsView = new ItemColectionView({collection: itemcCllection}); //экземпляр класса вид колекции


export var ItemSercheTest = Backbone.View.extend({
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
             itemcCllection.add(data);
             console.log("Last coll", itemcCllection.last());
             console.log("colection tut",itemcCllection.toJSON());
            }
        });
   },   

     
});
// module.exports = getBarcode;
export var sell = new ItemSercheTest();
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