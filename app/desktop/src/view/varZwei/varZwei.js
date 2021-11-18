Ext.define("SORISMA.view.varZwei.varZwei", {
  extend: "Ext.panel.Panel",
  xtype: "varZwei",
  controller: "varZweiController",
  viewModel: {
    type: "varZweiModel",
  },
  requires: [
    "SORISMA.view.varZwei.varZweiController",
    "SORISMA.view.varZwei.varZweiModel",
    "Ext.form.FieldSet",
    "Ext.form.field.*",
    "Ext.navigation.View",
    "Ext.container.*",
  ],
  scrollable: true,

  defaultType: "panel",

  html: [
    '<iframe src="html/FinalSpinDiagram.html" scrolling="no" height="900px" width="100%" ></iframe>',
  ],

  items: [
    {
      xtype: "button",

      width: "8%",
      floating: true,
      style: { position: "absolute", left: "91%", top: "2%" },

      text: "Info",
      iconCls: "x-fa fa-info-circle",
      tooltip: "Informationen über diese Seite und was Sie hier tun können",
      handler: "showInfo",
    },
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
      handler: "goBack",
    },
  ],
});
