Ext.define("SORISMA.view.d3.Sunburst", {
  extend: "Ext.panel.Panel",
  xtype: "d3Sunburst",
  controller: "d3-sunburst",
  viewModel: {
    type: "d3-sunburst",
  },
  requires: [
    "SORISMA.view.d3.SunburstController",
    "SORISMA.view.d3.SunburstModel",
    "SORISMA.view.personnel.PersonnelView",
    "Ext.form.FieldSet",
    "Ext.form.field.*",
    "Ext.navigation.View",
    "Ext.container.*",
  ],
  scrollable: true,

  defaultType: "panel",

  html: '<iframe name="radarChart" src="html/funcTesting.html" scrolling="no" height="900px" width="100%" ></iframe>',

  items: [
    {
      xtype: "button",
      floating: true,
      width: "10%",
      text: "Ausblenden",
      iconCls: "x-fa fa-retweet",
      style: { position: "absolute", left: "75%", top: "92%" },
      docked: "bottom",
      tooltip: "Ausblenden",
      handler: "closeIframe",
    },

    {
      xtype: "button",
      floating: true,
      width: "10%",
      text: "Merken",
      iconCls: "x-fa fa-check",
      style: { position: "absolute", left: "65%", top: "92%" },
      docked: "bottom",
      tooltip: "Markierung in Liste",
      handler: "addToList",
    },

  ],
});
