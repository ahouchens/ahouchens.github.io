import Ember from 'ember';

export default Ember.Controller.extend({
   menuItems: [
    {
      label: 'Introduction',
      scrollTo: '#content',
      color: 'teal'
    },
    {
      label: 'Skills & Technologies',
      scrollTo: '#skills',
      color: 'teal'
    },
    {
      label: 'Professional Experience',
      scrollTo: '#experience',
      color: 'teal'
    },
    {
      label: 'Find Me On',
      scrollTo: '#find-me',
      color: 'teal'
    }
  ]
});
