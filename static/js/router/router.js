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