Ext.define("SORISMA.view.risikoFelderMerkliste.risikoFelderMerklisteView", {
  extend: "Ext.grid.Grid",
  xtype: "risikoFelderMerklisteView",
  cls: "risikoFelderMerklisteView",
  requires: ["Ext.grid.rowedit.Plugin"],
  controller: { type: "risikoFelderMerklisteViewcontroller" },
  viewModel: { type: "risikoFelderMerklisteViewModel" },
  store: {
    type: "risikofelderviewstore",
  },
  rowNumbers: false,
  plugins: {
    rowedit: {
      autoConfirm: false,
    },
  },
  columns: [
    {
      text: "Auswahl",
      xtype: "checkcolumn",
      // dataIndex: 'active',
      editable: false,
      width: 220,
    },
    {
      text: "Risikofelder",
      dataIndex: "felderName",
      editable: false,
      cell: { userCls: "bold" },
      width: 660,
    },
    {
      text: "Dimension",
      dataIndex: "dimension",
      editable: false,
      width: 200,
    },
    {
      text: "Risikolevel",
      dataIndex: "riskLevel",
      editable: false,
      width: 350,
    },

    /* {
            text: 'Risiken anzeigen',
            width: 140,
            hideable: false,
            sortable: false,
            disableSelection: true,
            menuDisabled: true,
            rowSelect: false,
            cell: {
                tools: {
                    approve: {
                    iconCls: "x-fa fa-paperclip",
                    handler: 'onMyClick'
                    }
                 }
            }
            
        }  */
  ],

  listeners: {
    select: "onItemSelected",
    // show: "onShowFn",
  },
});
