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
    this.redirectTo("#varEin");
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

  registerUser: function () {
    var dialog = Ext.create({
      xtype: "dialog",
      title: "Anmeldeformular für Neue Benutzer",

      maximizable: false,
      html: '<p align="center"><iframe src="html/registerForm.html" align="center" scrolling="yes" height="600px" width="900px" ></iframe>',

      buttons: {
        ok: function () {
          // standard button (see below)
          dialog.destroy();
        },
      },
    });

    dialog.show();
  },
});
