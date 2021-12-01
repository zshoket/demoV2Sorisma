Ext.define("SORISMA.view.reifegrad.reifegradController", {
  extend: "Ext.app.ViewController",
  alias: "controller.reifegradController",

  goBack: function () {
    this.redirectTo("#startview");
  },

  goAhead: function () {
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
