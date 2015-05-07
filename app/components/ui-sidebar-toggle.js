import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['ui', 'sticky', 'labeled', 'icon', 'button'],
  didInsertElement: function() {
    Ember.$('.ui.sticky').sticky();
  },
  actions: {
    toggleMenu: function() {
      Ember.$('#ui-sidebar').sidebar('toggle');
    }
  },
  click: function() {
    this.send('toggleMenu');
  }
});
