Ext.define("SORISMA.view.risikoMatrix.risikoMatrixController", {
  extend: "Ext.app.ViewController",
  alias: "controller.risikomatrix-risikomatrix",

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
