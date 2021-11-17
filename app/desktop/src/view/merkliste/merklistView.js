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

  selectable: {
    columns: false,
    rows: true, // Can select cells and rows, but not columns
    checkbox: true, // Uses the draggable selection extender
  },
  columns: [
    // {
    //   text: "Auswahl",
    //   xtype: "checkcolumn",
    //   id: "chkid",
    //   dataIndex: "active",
    //   editable: false,
    //   width: 220,
    // },
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

  items: [
    {
      xtype: "button",
      floating: true,
      width: "10%",
      text: "Liste löschen",
      iconCls: "x-fa fa-retweet",
      style: { position: "absolute", left: "82%", top: "85%" },
      docked: "bottom",
      tooltip: "Komplettliste löschen",
      handler: "clrList",
    },
    {
      xtype: "button",
      width: "14%",
      floating: true,
      text: "Steckbrief entfernen",
      iconCls: "x-fa fa-check",
      style: { position: "absolute", left: "68.5%", top: "85%" },
      docked: "bottom",
      tooltip: "Ausgewählten Steckbrief entfernen",
      handler: "removeToList",
    },
    {
      xtype: "button",
      width: "17%",
      floating: true,
      text: "Aktive Risikofelder anzeigen",
      iconCls: "x-fa fa-align-justify",
      style: { position: "absolute", left: "52%", top: "85%" },
      docked: "bottom",
      tooltip: "Aktive Risikofelder anzeigen",
      handler: "getToRiskImg",
    },
    {
      xtype: "button",
      docked: true,
      width: "10%",
      floating: true,
      style: { position: "absolute", bottom: "10px", left: "10px" },
      docked: "bottom",
      text: "Zurück",
      iconCls: "x-fa fa-backward",
      tooltip: "zurück zur Übersicht",
      handler: "refreshGrid",
    },
  ],

  listeners: {
    select: "onItemSelected",
    show: "onShowFn",
  },
});
