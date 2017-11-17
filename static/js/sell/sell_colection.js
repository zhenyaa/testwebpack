export var ItemModel = Backbone.Model.extend({ //модель елемента
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

export var ItemCollection = Backbone.Collection.extend({ // колекция элементов
	model: ItemModel
});


export var itemcCllection = new ItemCollection( //екземпляр класса колекций

);

// module.exports = ItemModel, itemcCllection;