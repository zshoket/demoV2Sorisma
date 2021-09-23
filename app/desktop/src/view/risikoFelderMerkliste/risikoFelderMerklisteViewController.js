Ext.define("SORISMA.view.risikoFelderMerkliste.risikoFelderMerklisteViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.risikoFelderMerklisteViewcontroller",

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

  onItemSelected: function (grid, info) {
    debugger;
    var myId = info.record.get("id");
    var url1 = "http://51.15.76.202:3001/api/documents/" + myId + "/risikos";
    const getJSON = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    };
    getJSON(url1)
      .then((data) => {
        if (data.length == 0) {
          Ext.Msg.alert("Kein Risiko gefunden");
        } else {
          Ext.create("Ext.window.Window", {
            title: "Verbundene Risiken",
            height: "50%",
            width: "30%",
            layout: "fit",
            scrollable: true,
            closeable: false,
            bbar: [
              {
                // text: "schließen",
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
              }),
            },
          }).show();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
  //     var record = records[0];
  //     var newId = record.get('id');
  //     if (newId == '5f99767055574829c05cc725') {
  //         this.redirectTo('#felderpanelview/0');
  //     } else if (newId == '5f9982c4205b621070403da6') {
  //         this.redirectTo('#felderpanelview/1');
  //     }
  //     else if (newId == '5f9982c4205b621070403da7') {
  //         this.redirectTo('#felderpanelview/2');
  //     }
  //     else if (newId == '5f9982c4205b621070403da8') {
  //         this.redirectTo('#felderpanelview/3');
  //     }
  //     else if (newId == '5f9982c4205b621070403da9') {
  //         this.redirectTo('#felderpanelview/4');
  //     }
  //     else if (newId == '5f9982c4205b621070403daa') {
  //         this.redirectTo('#felderpanelview/5');
  //     }
  //     else if (newId == '5f9982c4205b621070403dab') {
  //         this.redirectTo('#felderpanelview/6');
  //     }
  //     else if (newId == '5f9982c4205b621070403dac') {
  //         this.redirectTo('#felderpanelview/7');
  //     }
  //     else if (newId == '5f9982c4205b621070403dad') {
  //         this.redirectTo('#felderpanelview/8');
  //     }
  //     else if (newId == '5f9982c4205b621070403dae') {
  //         this.redirectTo('#felderpanelview/9');
  //     }
  //     else if (newId == '5f9982c4205b621070403daf') {
  //         this.redirectTo('#felderpanelview/10');
  //     }
  //     else {
  //         Ext.Msg.alert('Keine Risikofelder Datei gefunden');
  //     }

  // }
});
