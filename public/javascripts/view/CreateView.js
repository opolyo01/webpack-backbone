'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({
    events: {
      'click #create': 'handleCreate'
    },
    template: require('../templates/create-page.html'),
    
    handleCreate: function(e){
      console.log("create");
      window.location.hash = "#home";
      e.preventDefault();
    },

    initialize: function() {
      this.render();
    },
    
    render: function() {
      this.$el.html(this.template({}));
    }
});

