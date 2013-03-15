HAL.Views.Links = Backbone.View.extend({
  initialize: function(opts) {
    this.vent = opts.vent;
  },

  className: 'links',

  template: _.template($('#resource-links-template'));

  render: function(links) {
    this.$el.html(this.template({ links: links }));
  }
});
