Template.player.rendered = function () {
  Template.player.init()
}

Template.player.init = function() {
  $('.ui.embed.player').embed({
    url: "https://emb.d.tube/#!/" + FlowRouter.getParam("author") + "/" + FlowRouter.getParam("permlink") + "/true/true"
  });
}