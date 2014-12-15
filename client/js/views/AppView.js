var AppView = Backbone.View.extend({

  template: _.template($('#index-template').html()),
  
  initialize: function(){
    this.render();
  },

  render: function(){
    console.log('prepare app view');
    new NaviView();
    $('.template-view').html(this.$el.html(this.template));
    
  }

});
