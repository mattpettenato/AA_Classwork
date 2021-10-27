const FollowToggle = require('./follow_toggle.js');

$(function(){
  $('.follow-toggle').each( function() {
    let follow = new FollowToggle(this);
  })
});

