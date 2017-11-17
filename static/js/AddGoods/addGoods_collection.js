export var ItemModelAdd = Backbone.Model.extend({ //модель елемента
       default:{
            "name": "",
            "quantity": 1,
            "barcode": null,
        },
        url: "/sell"
});

export var ItemCollectionСhoice = Backbone.Collection.extend({ // колекция элементов
    model: ItemModelAdd
});

export var itemCollectionСhoice = new ItemCollectionСhoice( //екземпляр класса колекций
[
    // {name: "bolt", barcode: 111, quantity:2},
    // {name: "gayka", barcode: 222, quantity:4},
    // {name: "gvozd", barcode: 333, quantity:8}
]
);


export var ItemCollectionеTable = Backbone.Collection.extend({ // колекция элементов
    model: ItemModelAdd
});

export var itemCollectionTable = new ItemCollectionеTable( //екземпляр класса колекций
    [
    {name: "otvertka", barcode: 44, quantity:2},
    {name: "key", barcode: 556, quantity:4},
    {name: "kley", barcode: 789, quantity:8}
    ]
);

