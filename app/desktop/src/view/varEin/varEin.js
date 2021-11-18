Ext.define("SORISMA.view.varEin.varEin", {
  extend: "Ext.panel.Panel",
  xtype: "varEin",
  controller: "varEinController",
  cls: "varEin",
  viewModel: {
    type: "varEinModel",
  },
  requires: [
    "SORISMA.view.varEin.varEinController",
    "SORISMA.view.varEin.varEinModel",
    "Ext.form.FieldSet",
    "Ext.form.field.*",
    "Ext.navigation.View",
    "Ext.container.*",
  ],

  scrollable: false,
  defaultType: "panel",

  html: '<iframe name="radarChart" src="html/digitalRiefegrad.html" scrolling="no" height="900px" width="100%" ></iframe>',

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
      tooltip: "zurück zur Start",
      handler: "goBack",
    },
    {
      xtype: "button",
      docked: true,
      width: "10%",
      floating: true,
      style: { position: "absolute", left: "80%", top: "94.5%" },
      docked: "bottom",
      text: "Weiter",
      iconCls: "x-fa fa-forward",
      tooltip: "weiter zum UseCase",
      handler: "goAhead",
    },
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
  ],
});
