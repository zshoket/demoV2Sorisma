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

      width: "8%",
      floating: true,
      style: { position: "absolute", left: "92%", top: "0%" },

      text: "Info",
      iconCls: "x-fa fa-info-circle",
      tooltip: "Informationen über diese Seite und was Sie hier tun können",
      handler: "showInfo",
    },
  ],
});
