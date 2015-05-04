import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$('#progress-'+this.get('elementId')).progress();
  }
});
