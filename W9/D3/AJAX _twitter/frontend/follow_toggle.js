class FollowToggle  {
  constructor(el) {
    this.el = el;
    this.userId = $(el).data("user-id");
    this.followState = $(el).data("initial-follow-state");
  }




}

module.exports = FollowToggle;