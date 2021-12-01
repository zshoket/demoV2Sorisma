Ext.define("SORISMA.view.main.header.HeaderView", {
  extend: "Ext.Toolbar",
  xtype: "headerview",
  cls: "headerview",
  viewModel: {},
  items: [
    {
      xtype: "container",
      cls: "headerviewtext",
      bind: { html: "{heading}" },
    },
    {
      xtype: "button",
      text: "Info",
      iconCls: "x-fa fa-info-circle",
      style: {
        color: "white",
        backgroundColor: "#808080",
        position: "absolute",
        left: "92%",
      },
      tooltip: "Informationen über diese Seite und was Sie hier tun können",
      handler: "showInfo",
    },
  ],
});
