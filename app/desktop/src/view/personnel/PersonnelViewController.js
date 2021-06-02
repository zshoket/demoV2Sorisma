Ext.define("SORISMA.view.personnel.PersonnelViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.personnelviewcontroller",

  refs: {
    HomeView: {
      autoCreate: true,
      selector: "#homeview",
      xtype: "homeview",
    },
  },

  onItemSelected: function (grid, records, e) {
    var selectedRecord = grid.getSelection();
    var row = grid.store.indexOf(selectedRecord);
    if (row == 0) {
      this.redirectTo("#homeview/0");
    } else {
      this.redirectTo("#homeview/" + row);
    }
  },

  onApprove: function (grid, info) {
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
});

// # This Block is for Navigating in One View to Another with a Button Click # \\
// !**It is Not Being Used Here for Now!

/* action: "changeView",
    refs: {
        HomeView: {
            autoCreate: true,
            selector: '#homeview',
            xtype: 'homeview',
        },
    
    },

    control: {
        'button[action=changeView]' : {
           tap: 'changeView'
       }
  
  },

        changeView: function(){
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
             }, */
