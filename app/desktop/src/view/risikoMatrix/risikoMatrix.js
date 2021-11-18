Ext.define("SORISMA.view.risikoMatrix.risikoMatrix", {
  extend: "Ext.panel.Panel",
  xtype: "risikomatrix",
  requires: [
    "SORISMA.view.risikoMatrix.risikoMatrixController",
    "SORISMA.view.risikoMatrix.risikoMatrixModel",
    "Ext.form.FieldSet",
    "Ext.form.field.*",
    "Ext.navigation.View",
    "Ext.container.*",
  ],

  controller: "risikomatrix-risikomatrix",
  viewModel: {
    type: "risikomatrix-risikomatrix",
  },
  scrollable: false,

  defaultType: "panel",

  html: '<iframe src="html/graph.html" scrolling="no" height="900" width="100%"></iframe>',

  items: [
    {
      xtype: "button",
      width: "7%",
      floating: true,
      style: { position: "absolute", left: "91.5%", top: "1.5%" },
      text: "Info",
      iconCls: "x-fa fa-info-circle",
      tooltip: "Informationen über diese Seite und was Sie hier tun können",
      handler: "showInfo",
    },
    {
      xtype: "button",
      text: "Weiter",
      iconCls: "x-fa fa-3x fa-forward",
      docked: true,
      width: "8%",
      floating: true,
      style: { position: "absolute", left: "91%", top: "96%" },
      docked: "bottom",
      tooltip: "Weiter zu Visualisierung",
      handler: "onButtonForward",
    },
  ],
});
