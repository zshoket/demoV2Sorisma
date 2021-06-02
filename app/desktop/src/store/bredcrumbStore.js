Ext.define("SORISMA.store.bredcrumbStore", {
  extend: "Ext.data.Store",
  alias: "store.bredcrumbStore",

  rootData: {
    text: "menu",
    expanded: true,
    children: [
      {
        text: "Home",
        children: [
          {
            text: "Home",
            iconCls: "x-fa fa-home",
            xtype: "startview",
            leaf: true,
          },
        ],
      },
      {
        text: "Radarchart",
        children: [
          {
            text: "Radar Chart",
            iconCls: "fa fa-stroopwafel fa-spin",
            xtype: "d3Sunburst",
            leaf: true,
          },
        ],
      },
      {
        text: "Steckbrief",
        expanded: true,
        children: [
          {
            text: "Steckbriefe (Datenansicht)",
            iconCls: "x-fa fa-table",
            xtype: "homeview",
            leaf: false,

            expanded: true,
            children: [
              {
                text: "Steckbrief 1",
                iconCls: "leaf",
                leaf: true,
                expanded: false,
              },
              {
                text: "Steckbrief 2",
                leaf: true,
                expanded: false,
              },
            ],
          },
        ],
      },

      {
        text: "Risiko Graphic",
        children: [
          {
            text: "Risiko Graphic",
            iconCls: "x-fa fa-file",
            xtype: "graphicview",
            leaf: true,
          },
        ],
      },
      {
        text: "Risikofelder",
        children: [
          {
            text: "Risikofelder (Datenansicht)",
            iconCls: "x-fa fa-barcode",
            xtype: "felderpanelview",
            leaf: true,
          },
        ],
      },
    ],
  },

  constructor: function (config) {
    // Since records claim the data object given to them, clone the data
    // for each instance.
    config = Ext.apply(
      {
        root: Ext.clone(this.rootData),
      },
      config
    );

    this.callParent([config]);
  },
});
