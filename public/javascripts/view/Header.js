'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({
    el: $('#header'),
    template: require('../templates/header.html'),

    initialize: function() {
        this.render();
    },
    
    render: function() {
        this.$el.html(this.template({
            loggedIn: this.model.loggedIn
        }));
        return this;
    }
});
