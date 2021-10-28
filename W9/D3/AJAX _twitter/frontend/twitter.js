const FollowToggle = require('./follow_toggle.js');

$(document).ready(function() {
  $('.follow-toggle').each( function() {
    let follow = new FollowToggle(this);

    console.log(follow);
  })
});



