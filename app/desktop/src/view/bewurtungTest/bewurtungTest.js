Ext.define("SORISMA.view.bewurtungTest.bewurtungTest", {
  extend: "Ext.panel.Panel",
  xtype: "bewurtungTest",
  controller: "varZweiController",
  viewModel: {
    type: "varZweiModel",
  },
  requires: [
    "SORISMA.view.bewurtungTest.bewurtungTestController",
    "SORISMA.view.bewurtungTest.bewurtungTestModel",
    "Ext.form.FieldSet",
    "Ext.form.field.*",
    "Ext.navigation.View",
    "Ext.container.*",
  ],
  scrollable: true,

  defaultType: "panel",

  html: [
    '<iframe src="html/autoBewurtung.html" scrolling="no" height="900px" width="100%" ></iframe>',
  ],

  items: [
  ],
});
