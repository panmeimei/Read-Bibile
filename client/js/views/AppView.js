var AppView = Backbone.View.extend({
  //model:app
  className:'app-view',
  
  
  render: function(){
    console.log('prepare reading view');
    var readingView = new ReadingView({model: this.model.get('reading')});
    this.$el.html(readingView.render());
    $('body').html(this.$el);
  }

});
