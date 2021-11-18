Ext.define("SORISMA.view.startScreen.startView", {
  xtype: "startview",
  cls: "startview",
  controller: { type: "startviewcontroller" },
  viewModel: { type: "startviewmodel" },
  requires: ["SORISMA.store.bredcrumbStore", "Ext.BreadcrumbBar"],
  extend: "Ext.Container",
  scrollable: true,

  defaultType: "panel",

  //   html: '<iframe src="../uploads/logo.png" scrolling="no" height="900" width="100%"></iframe>',
  //   html: '<div style="display: block; margin-left: auto; margin-right: auto;  text-align: center; width: 50%; right: 40%"><a href="http://51.15.76.202:80/"><img src="../uploads/logo.png" alt="Sorismalogo" width="40%" height="100" top: "20%"></a></div>',
  html: '<iframe style="display: block; margin-left: auto; margin-right: auto;  text-align: center; right: 40%" width="560" height="315" src="https://www.sorisma.de/wp-content/uploads/2020/07/SORISMA_Animation_200730.mp4" frameborder="0" allowfullscreen></iframe',

  items: [
    {
      xtype: "button",
      text: "Weiter",
      //   iconCls: "x-fa fa-3x fa-forward",
      docked: true,
      width: "10%",
      floating: true,
      style: { position: "absolute", right: "5%", top: "95%" },
      docked: "bottom",
      tooltip: "Weiter",
      handler: "onButtonForward",
    },
    {
      xtype: "button",

      width: "8%",
      floating: true,
      style: { position: "absolute", left: "91%", top: "0%" },

      text: "Info",
      iconCls: "x-fa fa-info-circle",
      tooltip: "Informationen über diese Seite und was Sie hier tun können",
      handler: "showInfo",
    },
    // {
    //   xtype: "button",
    //   text: "Show Breadcrumb Bar",
    //   docked: true,
    //   width: "10%",
    //   floating: true,
    //   style: { position: "absolute", right: "15%", top: "95%" },
    //   docked: "bottom",
    //   tooltip: "Show Breads",
    //   handler: "onApprove",
    // },

    {
      xtype: "label",
      html: "Details eintragen",
      style: { position: "absolute", top: "57%" },
    },
    {
      style: { position: "absolute", right: "85%", top: "60%" },
      xtype: "textfield",
      label: "Spielername",
      name: "spielername",
    },

    {
      xtype: "label",
      html: "Funktion in Unternehmen",
      style: { position: "absolute", top: "75%" },
    },
    {
      style: { position: "absolute", right: "90%", top: "79%" },
      xtype: "checkboxfield",
      name: "leitungIT",
      label: "Leitung IT",
      value: "leitung",
      checked: true,
    },
    {
      style: { position: "absolute", right: "90%", top: "82%" },
      xtype: "checkboxfield",
      name: "vertrieb",
      label: "Vertrieb",
      value: "vertrieb",
      checked: false,
    },
    {
      style: { position: "absolute", right: "90%", top: "85%" },
      xtype: "checkboxfield",
      name: "marketing",
      label: "Marketing",
      value: "Marketing",
      checked: false,
    },
    {
      style: { position: "absolute", right: "90%", top: "88%" },
      xtype: "checkboxfield",
      name: "geschaeftsleitung",
      label: "Geschäftsleitung",
      value: "geschaeftsleitung",
      checked: false,
    },
  ],
});
