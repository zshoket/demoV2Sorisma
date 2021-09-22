Ext.define("SORISMA.view.merkliste.merklistView", {
  extend: "Ext.grid.Grid",
  xtype: "merklistview",
  cls: "merklistview",
  requires: ["Ext.grid.rowedit.Plugin"],
  controller: { type: "merklistviewcontroller" },
  viewModel: { type: "merklistviewmodel" },
  store: {
    type: "personnelviewstore",
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
      dataIndex: 'active',
      editable: false,
      width: 220,
    },
    {
      text: "Steckbrief",
      dataIndex: "name",
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
      text: "Risikofeld",
      dataIndex: "risikofeld",
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
    show: "onShowFn"
  },
});
