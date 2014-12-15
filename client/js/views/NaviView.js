var NaviView = Backbone.View.extend({

  template: _.template($('#navi-template').html()),
  
  initialize: function(){
    this.render();
  },

  events:{
    'click .dailybible-link': 'directToBible',
    'click .home-link': 'directToHome',
    'click li': 'activeLink'
  },

  activeLink: function(e){
    e.preventDefault();
    $('ul > li').removeClass('active');
    e.target.parentNode.className += ' active';
    console.log('target', e.target.parentNode.className);

  },

  directToHome: function(e){
    e.preventDefault();
    App.navigate('', {trigger: true});
  },

  directToBible: function(e){
    App.navigate('/dailybible', {trigger: true});
  },

  render: function(){
    console.log('prepare navi view');
    $('.navi-view').html(this.$el.html(this.template));
    
  }

});
