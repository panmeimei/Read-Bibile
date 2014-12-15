var AppModel = Backbone.Model.extend({
  initialize: function(){
    
  },
   parse: function(response){
    return response.results;
  }

});