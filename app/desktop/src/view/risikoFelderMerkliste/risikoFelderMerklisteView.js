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
  selectable: {
    columns: false,
    rows: true, // Can select cells and rows, but not columns
    checkbox: true, // Uses the draggable selection extender
  },
  columns: [
    // {
    //   text: "Auswahl",
    //   xtype: "checkcolumn",
    //   // dataIndex: 'active',
    //   editable: false,
    //   width: 220,
    // },
    {
      text: "Risikofelder",
      dataIndex: "felderName",
      editable: false,
      cell: { userCls: "bold" },
      width: 250,
    },
    {
      text: "Dimension",
      dataIndex: "dimension",
      editable: false,
      width: 200,
    },

    {
      text: "Charakteristische Risiken",
      dataIndex: "charRisiken",
      editable: false,
      width: 450,
    },
    {
      text: "Risikolevel",
      dataIndex: "riskLevel",
      editable: false,
      width: 150,
    },
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
      text: "Risiko entfernen",
      iconCls: "x-fa fa-check",
      style: { position: "absolute", left: "68.5%", top: "85%" },
      docked: "bottom",
      tooltip: "Ausgewählten Steckbrief entfernen",
      handler: "removeToList",
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
      handler: "goBack",
    },
  ],

  listeners: {
    select: "onItemSelected",
    // show: "onShowFn",
  },
});
