Ext.define("SORISMA.view.d3.Sunburst", {
  extend: "Ext.panel.Panel",
  xtype: "d3Sunburst",
  controller: "d3-sunburst",
  cls: "Sunburst",
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

  html: '<iframe id="mainChart" name="radarChart" src="html/radarChartIMG.html" scrolling="no" height="900px" width="100%" ></iframe>',

  items: [
    // {
    //   xtype: "button",
    //   width: "8%",
    //   floating: true,
    //   style: { position: "absolute", left: "92%", top: "2%" },
    //   text: "Info",
    //   iconCls: "x-fa fa-info-circle",
    //   tooltip: "Informationen über diese Seite und was Sie hier tun können",
    //   handler: "showInfo",
    // },
    // {
    //   xtype: "button",
    //   id: 'markBtn',
    //   // cls: 'style1',
    //   floating: true,
    //   text: "Merken",
    //   iconCls: "x-fa fa-check",
    //   style: { position: "absolute", left: "65%", top: "92%" },
    //   docked: "bottom",
    //   tooltip: "Markierung in Liste",
    //   handler: "addToList",
    // },
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
  listeners: {
    show: "myShowFn",
  },
});
