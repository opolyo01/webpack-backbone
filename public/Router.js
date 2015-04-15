'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var CreateView = require("./view/CreateView");
var EditView = require("./view/EditView");
var HomeView = require("./view/HomeView");
var HeaderView = require('./view/Header');

module.exports = Backbone.Router.extend({
    edit: null,
    create: null,
    home: null,
    container:null,
    
    initialize: function() { 
    },

    routes: {
        "edit": "editRoute",
        "create": "createRoute",
        "home": "homeRoute",
        '*path': "homeRoute"
    },

    homeRoute: function(){
        this.home = new HomeView({el: $("#container")});
        var header = new HeaderView({model: {
              loggedIn: true
        }});
    },

    editRoute: function () {
        this.edit = new EditView({el: $("#container")});
        var header = new HeaderView({model: {
              loggedIn: false
        }});
    },

    createRoute: function(){
        this.create = new CreateView({el: $("#container")});
        var header = new HeaderView({model: {
              loggedIn: false
        }});
    }
});
