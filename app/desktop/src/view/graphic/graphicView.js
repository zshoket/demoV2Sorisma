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
      text: "Zurück",
      iconCls: "x-fa fa-backward",
      tooltip: "zurück zur Übersicht",
      handler: "oniFrameButton",
    },
    {
      xtype: "button",
      docked: true,
      width: "8%",
      floating: true,
      style: { position: "absolute", left: "91%", top: "2%" },
      docked: "bottom",
      text: "Info",
      iconCls: "x-fa fa-info-circle",
      tooltip: "Informationen über diese Seite und was Sie hier tun können",
      handler: "showInfo",
    },
  ],
});
