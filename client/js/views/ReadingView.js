var ReadingView = Backbone.View.extend({

  className: 'reading-view',

  render: function(){
    console.log('reading model: '+this.model);
    $('.template-view').html(this.$el.html(this.model.get('content')));
  }
});