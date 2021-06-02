Ext.define("SORISMA.view.graphic.graphicView", {
  extend: "Ext.grid.Grid",
  xtype: "graphicview",

  controller: { type: "graphicviewcontroller" },
  viewModel: { type: "graphicviewmodel" },

  scrollable: true,

  defaultType: "panel",

  html: '<iframe id="iframeid" src="html/graphIMG.html" scrolling="yes" height="900px" width="100%">',

  items: [
    {
      xtype: "button",
      docked: true,
      width: "10%",
      floating: true,
      style: { position: "absolute", bottom: "10px", left: "10px" },
      docked: "bottom",
      iconCls: "x-fa fa-backward",
      tooltip: "Go Back",
      handler: "oniFrameButton",
    },
  ],
});
