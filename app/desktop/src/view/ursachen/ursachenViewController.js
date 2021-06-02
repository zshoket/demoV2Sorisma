Ext.define("SORISMA.view.ursachen.ursachenViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.ursachenviewcontroller",

  onMyClick: function (grid, info) {
    var newId = info.record.get("id");
    var url1 =
      "http://51.15.76.202:3001/api/risikoursachens/" + newId + "/risikos";

    Ext.create("Ext.window.Window", {
      title: "Verbundene Risiken",
      height: "50%",
      width: "30%",
      layout: "fit",
      scrollable: true,
      closeable: false,
      bbar: [
        {
          //   text: "schließen",
          iconCls: "x-fa fa-3x fa-times",
          tooltip: "schließen",
          handler: function () {
            this.up("window").close();
          },
        },
      ],
      autoShow: true,
      items: {
        xtype: "grid",
        store: { type: "arraystore" },
        scrollable: true,
        border: true,
        columns: [
          {
            text: "Risk Name",
            editable: false,
            dataIndex: "name",
            width: 250,
            cell: { userCls: "bold" },
          },
          {
            text: "Dimension",
            dataIndex: "dimension",
            editable: false,
            width: 150,
          },
        ],
        store: Ext.create("Ext.data.ArrayStore", {
          extend: "Ext.data.Store",
          alias: "store.arraystore",
          model: "SORISMA.model.Risikos",
          proxy: {
            type: "ajax",
            url: url1,
            headers: {
              Accept: "application/json",
            },
            reader: {
              type: "json",
              rootProperty: "items",
            },
          },
          autoLoad: true,
        }), // A dummy empty data store
      },
    }).show();
  },

  //   onItemSelected: function (grid, records, e) {
  //     var record = records[0];
  //     var newId = record.get("id");
  //     var url1 =
  //       "http://51.15.76.202:3001/api/risikoursachens/" + newId + "/risikos";
  //     window.location = url1;
  //   },
});
