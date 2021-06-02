Ext.define("SORISMA.view.auswirkung.auswirkung", {
  extend: "Ext.grid.Grid",
  xtype: "auswirkungview",
  cls: "auswirkungview",
  requires: ["Ext.grid.rowedit.Plugin"],
  controller: { type: "auswirkungviewcontroller" },
  viewModel: { type: "auswirkungviewmodel" },
  store: { type: "auswirkungviewstore" },
  rowNumbers: true,
  plugins: {
    rowedit: {
      autoConfirm: false,
    },
  },
  columns: [
    {
      text: "Risikoauswirkung",
      dataIndex: "name",
      editable: false,
      width: 460,
      cell: { userCls: "bold" },
    },
    {
      text: "Kennung",
      dataIndex: "identifikator",
      editable: false,
      width: 150,
    },
    {
      text: "Risiko anzeigen",
      width: 140,
      hideable: false,
      sortable: false,
      disableSelection: true,
      menuDisabled: true,
      rowSelect: false,
      cell: {
        tools: {
          approve: {
            iconCls: "x-fa fa-forward",
            handler: "popUpGrid",
          },
        },
      },
    },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
