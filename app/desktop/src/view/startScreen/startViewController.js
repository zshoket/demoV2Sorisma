Ext.define("SORISMA.view.startScreen.startViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.startviewcontroller",
  refs: {
    startview: {
      autoCreate: true,
      selector: "#startview",
      xtype: "startview",
    },
  },

  onButtonForward: function (button) {
    this.redirectTo("#d3Sunburst");
  },

  // onApprove: function (button) {
  //   Ext.create("Ext.window.Window", {
  //     title: "Breadcrumb Bar",
  //     height: "50%",
  //     width: "30%",
  //     layout: "fit",
  //     scrollable: true,
  //     closeable: false,
  //     bbar: [
  //       {
  //         // text: "schließen",
  //         iconCls: "x-fa fa-3x fa-times",
  //         tooltip: "schließen",
  //         handler: function () {
  //           this.up("window").close();
  //         },
  //       },
  //     ],
  //     autoShow: true,
  //     html: "My Page",
  //     tbar: [
  //       {
  //         xtype: "breadcrumb",
  //         store: { type: "breadcrumbStore" },
  //       },
  //     ],
  //     //   store: bredcrumbStore,
  //   }).show();
  // },
});
