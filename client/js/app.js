var App = new (Backbone.Router.extend({
  routes:{
    'home': 'index',
    'dailybible': 'fetchBible'
  },

  start: function(){
    Backbone.history.start({pushState: true});
  },
 
  index: function(e){
    
    console.log('index');
    new AppView({model: new AppModel()});
  },
  fetchBible: function(){

    var reading = new Reading();
    var self = this;

    reading.fetch({
      success: function() {
       // self.appModel.set('reading', reading);
        var readingView = new ReadingView({model: reading});
        readingView.render();
     
        // new AppView({model: new AppModel({reading: reading})}).render();
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