Ext.define("SORISMA.view.graphic.graphicViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.graphicviewcontroller",

  oniFrameButton: function (button) {
    debugger;
    // document.iframeid.location.reload();
    window.frames[0].location.reload();
    this.redirectTo("#d3Sunburst");
  },
});
