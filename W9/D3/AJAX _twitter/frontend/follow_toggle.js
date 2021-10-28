class FollowToggle  {
  constructor(el) {
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.render();
    this.el.on("click", this.handleClick.bind(this));
  }
  render() {
    if (this.followState){
      this.el.text('Unfollow!')
      this.el.data("initial-follow-state", false)
    } else {
      this.el.text('Follow!')
      this.el.data("initial-follow-state", true)
    }
  }

  handleClick(event) {
    event.preventDefault();
    let method 
    if (this.followState) {
      method = "DELETE";
    } else {
      method = "POST";
    }
    
    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: method,
      dataType: "json"
    }).then((el)=> {
      if (this.followState) {
        this.followState = false
        // this.el.data("initial-follow-state", false)
      } else {
        this.followState = true
        // this.el.data("initial-follow-state", true)
      }
      this.render.call(this)
    })
  }




}

module.exports = FollowToggle;