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

  showInfo: function () {
    Ext.Msg.show({
      title: "Information",
      message: "Einige Details dazu hier",
      width: 300,
      buttons: Ext.MessageBox.CANCEL,
      icon: Ext.MessageBox.INFO,
      multiLine: true,
      prompt: { maxlength: 280, autocapitalize: true },
    });
  },
});
