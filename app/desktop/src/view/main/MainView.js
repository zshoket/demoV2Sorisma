Ext.define("SORISMA.view.main.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",
  controller: "mainviewcontroller",
  id: "mainview",
  viewModel: {
    type: "mainviewmodel",
  },
  requires: [
    "SORISMA.store.bredcrumbStore",
    "Ext.BreadcrumbBar",
    "Ext.layout.Fit",
  ],
  layout: "fit",
  //   items: [
  //     {
  //       xtype: "navview",
  //       reference: "navview",
  //       docked: "left",
  //       bind: { width: "{navview_width}" },
  //       listeners: { select: "onMenuViewSelectionChange" },
  //     },
  //     {
  //       xtype: "headerview",
  //       reference: "headerview",
  //       docked: "top",
  //       bind: { height: "{headerview_height}" },
  //     },
  //     {
  //       xtype: "footerview",
  //       reference: "footerview",
  //       docked: "bottom",
  //       bind: { height: "{footerview_height}" },
  //     },
  //     { xtype: "centerview", reference: "centerview" },
  //     //{ xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
  //   ],
  items: [
    {
      xtype: "navview",
      reference: "navview",
      docked: "left",
      bind: { width: "{navview_width}" },
      listeners: { select: "onMenuViewSelectionChange" },
    },
    {
      xtype: "breadcrumbbar",
      docked: "top",
      showIcons: true,
      store: "bredcrumbStore",
      menu: {
        layout: {
          overflow: "scroller",
        },
      },
      items: [
        {
          //   xtype: "component",
          html: "Menu:",
          style: {
            "margin-left": "10px",
            "margin-right": "10px",
          },
        },
      ],
    },
    {
      xtype: "headerview",
      reference: "headerview",
      docked: "top",
      bind: { height: "{headerview_height}" },
    },
    {
      xtype: "footerview",
      reference: "footerview",
      docked: "bottom",
      bind: { height: "{footerview_height}" },
    },
    { xtype: "centerview", reference: "centerview" },
  ],
});
