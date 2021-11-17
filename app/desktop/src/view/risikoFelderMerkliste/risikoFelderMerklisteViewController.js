Ext.define(
  "SORISMA.view.risikoFelderMerkliste.risikoFelderMerklisteViewController",
  {
    extend: "Ext.app.ViewController",
    alias: "controller.risikoFelderMerklisteViewcontroller",

    // onShowFn: function () {
    //   var me = this;
    //   me.getView()
    //     .getStore()
    //     .setFilters([
    //       function (item) {
    //         var filterArr = JSON.parse(localStorage.getItem("storageName2"));
    //         return filterArr.includes(item.id);
    //       },
    //     ]);
    // },

    goBack: function () {
      this.redirectTo("#felderpanelview/0");
    },

    clrList: function (grid, info) {
      var me = this;
      me.getView().getStore().removeAll();

      me.getView().getStore().sync();
    },

    removeToList: function () {
      debugger;
      var me = this;
      var store = me.getView().getStore();
      var selection = me.getView().getSelection();
      store.remove(selection);
    },
  }
);
