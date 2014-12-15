var App = new (Backbone.Router.extend({
  routes:{
    '': 'index',
    'dailybible': 'fetchBible'
  },

  start: function(){
    Backbone.history.start({pushState: true});
  },
 
  index: function(e){

    new AppView({model: new AppModel()});
  },
  fetchBible: function(){

    var reading = new Reading();
    var self = this;

    reading.fetch({
      success: function() {
        var readingView = new ReadingView({model: reading});
        readingView.render();
      },
      error: function(err){
        if(err) throw err;
      }
    });
    
  }
}));

        
$(function(){
  App.start();
});