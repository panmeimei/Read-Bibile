var AppModel = Backbone.Model.extend({
  //reading: reading
  initialize: function(){
    
  },
   parse: function(response){
    return response.results;
  }

});