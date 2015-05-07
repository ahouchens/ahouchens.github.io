import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['teal', 'item'],
  click: function() {
    if (this.get('item.scrollTo')) {
      // scroll to
      Ember.$('html, body').animate({
        scrollTop: Ember.$(this.get('item.scrollTo')).offset().top
      }, 750, 'swing');
    } else {
      // pass action on ...
      this.sendAction('action', this);
    }
  }
});
