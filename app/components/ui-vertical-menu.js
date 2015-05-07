import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'vertical', 'sticky',  'menu'],
  tagName: 'div',
  didInsertElement: function() {
    Ember.$('.ui.sticky').sticky({ context: "#content"});

    Ember.$('.ui.menu').on('click', '.item', function() {
      if(!$(this).hasClass('dropdown')) {
        $(this)
          .addClass('active')
          .siblings('.item')
            .removeClass('active');
      }
    });
  },
  actions: {
    menuLink: function(menuItem) {
      // pass action on ...
      this.sendAction('action', menuItem);
    }
  }
});
