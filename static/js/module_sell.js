
export default ItemSercheView = Backbone.View.extend({
el: $(".serchebarcode"),
 tagname: 'div',
//template: _.template($('#Serche_barcode').html()),
template: _.template('<input type="text"  id="barcode" class="span2 search-query"> <button onclick="" class="btn">Найти</button>'),

initialize: function() {
    //$(".conteiner").html(this.el);
    this.render();
    return this;
    },
    events:{

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