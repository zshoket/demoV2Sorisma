Ext.define("SORISMA.view.graphic.graphicViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.graphicviewcontroller",

  oniFrameButton: function (button) {
    // document.iframeid.location.reload();
    window.frames[0].location.reload();
    document.getElementById("iframeid").contentWindow.location.reload(true);
    this.redirectTo("#d3Sunburst");
  },
});
