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

  init: function () {
    this.control({
      checkcolumn: {
        checkchange: this.checkboxChanged,
      },
    });
  },

  removeToList: function (record) {
    debugger;
    var selectedSuccessValues = Ext.getCmp("chkid").getDataIndex();
    if (selectedSuccessValues == "active") {
      var index = this.data.indexOf(record);
      this.data.removeAt(index);
      if (this.pruneModifiedRecords) {
        this.modified.remove(record);
      }
      if (this.snapshot) {
        this.snapshot.remove(record);
      }
      this.fireEvent("remove", this, record, index);
    }
    // console.log(selectedSuccessValues);
  },

  getToRiskImg: function () {
    this.redirectTo("#graphicview");
  },
});
