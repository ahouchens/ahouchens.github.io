import Ember from 'ember';

export default Ember.Controller.extend({
   menuItems: [
    {
      label: 'Introduction',
      scrollTo: '#introduction',
      color: 'teal'
    },
    {
      label: 'Skills & Technologies',
      scrollTo: '#skills',
      color: 'teal'
    }
  ]
});
