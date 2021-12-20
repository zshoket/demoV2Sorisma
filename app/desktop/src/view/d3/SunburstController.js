Ext.define("SORISMA.view.d3.SunburstController", {
  extend: "Ext.app.ViewController",
  alias: "controller.d3-sunburst",
  action: "changeView",
  refs: {
    PersonnelView: {
      autoCreate: true,
      selector: "#personnelview",
      xtype: "personnelview",
    },
  },

  control: {
    "button[action=changeView]": {
      tap: "changeView",
    },
  },

  changeView: function () {
    this.redirectTo("personnelview");
  },

  closeIframe: function () {
    document.getElementById("mainChart").contentWindow.location.reload(true);

    // window.frames[0].location.reload();
    // document.radarChart.location.reload();
  },

  addToList: function () {
    if (localStorage.storageName2 == null) {
      Ext.Msg.alert("Please Select a UseCase First");
    } else {
      console.log(localStorage.storageName2);
    }
  },

  myShowFn: function () {
    // window.localStorage.clear();
    // document.getElementById("mainChart").contentWindow.location.reload(true);
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

  onButtonForward: function (button) {
    this.redirectTo("#merklistview");
  },
});
