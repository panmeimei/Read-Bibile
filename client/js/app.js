var App = new (Backbone.Router.extend({
  routes:{
    '': 'index',
    'dailybible': 'showBible'
  },
  initialize: function(){
     
  },
  start: function(){
    Backbone.history.start({pushState: true});
  },
 
  index: function(){
  //  $('body').append('<a>daily bible</a>');
   // this.navigate('/dailybible', {trigger: true});
  },
  showBible: function(){
    console.log('show bible');
    var reading = new Reading();
    reading.fetch({
      success: function() {
        new AppView({model: new AppModel({reading: reading})}).render();
      },
      error: function(err){
        if(err) throw err;
      }
    });
    
  }
}));

        
$(function(){
  App.start()
});