'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({
    events: {
      'click #edit': 'handleEdit'
    },
    template: require('../templates/edit-page.html'),
    
    handleEdit: function(e){
      e.preventDefault();
    },

    initialize: function() {
      this.render();
    },
    
    render: function() {
      this.$el.html(this.template({}));
    }
});
