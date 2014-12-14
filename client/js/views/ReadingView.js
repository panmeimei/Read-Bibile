var ReadingView = Backbone.View.extend({

  className: 'reading-view',

  // template: _.template('<h3><%= title %></h3><a href="#"><img src = "<%= imgUrl %>"></a>\
  //   By <%= author %><p><%= summary %></p>'),

  initialize : function(){

  },

  render: function(){
    console.log('reading model: '+this.model);
    return this.$el.html(this.model.get('content'));
  }
});