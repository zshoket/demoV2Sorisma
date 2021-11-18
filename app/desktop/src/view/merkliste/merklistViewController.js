Ext.define("SORISMA.view.merkliste.merklistViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.merklistviewcontroller",

  onShowFn: function () {
    var me = this;
    me.getView()
      .getStore()
      .setFilters([
        function (item) {
          var filterArr = JSON.parse(localStorage.getItem("storageName2"));
          return filterArr.includes(item.id);
        },
      ]);
  },

  clrList: function (grid, info) {
    var me = this;
    me.getView().getStore().removeAll();

    me.getView().getStore().sync();

    window.localStorage.clear();
  },

  goBack: function (grid, info) {
    var me = this;
    me.getView().getStore().sync();
    this.redirectTo("#d3Sunburst");
  },

  init: function () {
    this.control({
      checkcolumn: {
        checkchange: this.checkboxChanged,
      },
    });
  },

  removeToList: function () {
    var me = this;
    var store = me.getView().getStore();
    var selection = me.getView().getSelection();
    store.remove(selection);
  },

  getToRiskImg: function () {
    debugger;
    var me = this;
    var store = me.getView().getStore();
    var mySelection = me.getView().getSelection();
    if (mySelection == null || undefined) {
      Ext.Msg.alert(
        "Bitte wählen Sie zuerst einen Use Case aus, um aktive Risikofelder zu sehen."
      );
    } else {
      this.redirectTo("#graphicview");
    }
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
