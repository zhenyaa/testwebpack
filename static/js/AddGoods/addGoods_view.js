import {
    ItemModelAdd, 
    ItemCollectionСhoice, 
    itemCollectionСhoice,
    ItemCollectionеTable, 
    itemCollectionTable}  from "./addGoods_collection.js";

// import itemCollectionСhoice from "./addGoods_collection.js"
export var ItemSercheView = Backbone.View.extend({
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
                    itemCollectionСhoice.add(x[1]);
                    console.log(itemCollectionСhoice);
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

export var additem = new ItemSercheView();

export var ItemChoiceView = Backbone.View.extend({  /////вид  выбора вариантов товара
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
        itemCollectionTable.add(this.model);
        //itemCollectionСhoice.remove();
        console.log('this',itemCollectionСhoice.reset());
    },
});

export var ItemCollectionСhoiceView = Backbone.View.extend({ /////вид колекции выбора вариантов товара
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
        var itemChoiceView = new ItemChoiceView({model:itemCollectionСhoice.last() });
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

export var itemsChoiceView = new ItemCollectionСhoiceView({collection: itemCollectionСhoice});


export var ItemHandheldView = Backbone.View.extend({  /////вид  выбора вариантов товара
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
        itemCollectionTable.add(handItem);
        console.log(itemCollectionTable);

    },
});

export var itemHandheldView =new ItemHandheldView();

export var AdedetItemView = Backbone.View.extend({  /////вид  еденичный конечной таблицы добавленых товаров
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

export var AdededItemCollectionView = Backbone.View.extend({ /////вид колекции выбора вариантов товара
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
        var adedetItemView = new AdedetItemView({model:itemCollectionTable.last() });
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

export var adededItemCollectionView = new AdededItemCollectionView({collection: itemCollectionTable});