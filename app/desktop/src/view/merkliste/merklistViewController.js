Ext.define("SORISMA.view.merkliste.merklistViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.merklistviewcontroller",

  // onItemSelected: function (grid, info) {

  //     var selectedRecord = grid.getSelection();
  //     var row = grid.store.indexOf(selectedRecord);
  //     if (row == 0) {
  //         // this.redirectTo('#felderpanelview/0');

  //         console.log(localStorage.storageName2);
  //     } else {
  //         // this.redirectTo('#felderpanelview/' + row);

  //         console.log(localStorage.storageName2);

  //     }
  // },
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

  refreshGrid: function (grid, info) {
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

    // var selectedSuccessValues = Ext.getCmp("chkid").getDataIndex();
    // var store = me.getView().getStore();
    // if (selectedSuccessValues == "active") {
    //   var selection = me.getView();
    //   if (selection) {
    //     store.remove(selection);
    //   }
    // } else {
    //   console.log("Not Working");
    // }
    // console.log(selectedSuccessValues);
  },

  getToRiskImg: function () {
    this.redirectTo("#graphicview");
  },
});
