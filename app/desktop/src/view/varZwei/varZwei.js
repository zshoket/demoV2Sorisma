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

  // html: '<iframe name="radarChart1" src="html/funcTesting - Variation 5.html" scrolling="no" height="900px" width="100%" ></iframe>',

  // items: [
  //   {
  //     xtype: "button",
  //     floating: true,
  //     width: "10%",
  //     text: "Ausblenden",
  //     iconCls: "x-fa fa-retweet",
  //     style: { position: "absolute", left: "85%", top: "92%" },
  //     docked: "bottom",
  //     tooltip: "Ausblenden",
  //     handler: "closeIframe",
  //   },

  // {
  //   xtype: "button",
  //   floating: true,
  //   width: "10%",
  //   text: "Merken",
  //   iconCls: "x-fa fa-check",
  //   style: { position: "absolute", left: "75%", top: "92%" },
  //   docked: "bottom",
  //   tooltip: "Markierung in Liste",
  //   handler: "addToList",
  // },
  // ],
});
