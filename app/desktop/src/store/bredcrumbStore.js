Ext.define("SORISMA.store.bredcrumbStore", {
  extend: "Ext.data.TreeStore",
  alias: "store.bredcrumbStore",

  // proxy: {
  //   type: "ajax",
  //   url: "data.json",
  //   reader: {
  //     type: "json",
  //     rootProperty: "children",
  //   },
  // },

  // autoLoad: true,

  //   rootData: {
  //     text: "Ext JS",
  //     expanded: true,
  //     children: [
  //       {
  //         text: "app",
  //         children: [
  //           {
  //             leaf: true,
  //             text: "Application.js",
  //             className: "Ext.app.Applicaton",
  //           },
  //           {
  //             leaf: true,
  //             text: "Controller.js",
  //             className: "Ext.app.Controller",
  //           },
  //           {
  //             leaf: true,
  //             text: "ViewController.js",
  //             className: "Ext.app.ViewController",
  //           },
  //           { leaf: true, text: "ViewModel.js", className: "Ext.app.ViewModel" },
  //         ],
  //       },
  //       {
  //         text: "grid",
  //         expanded: true,
  //         children: [
  //           { leaf: true, text: "Grid.js", className: "Ext.grid.Grid" },
  //           {
  //             leaf: true,
  //             text: "PagingToolbar.js",
  //             className: "Ext.grid.PagingToolbar",
  //           },
  //           { leaf: true, text: "Tree.js", className: "Ext.grid.Tree" },
  //         ],
  //       },
  //       {
  //         text: "menu",
  //         children: [
  //           { leaf: true, text: "CheckItem.js", className: "Ext.menu.CheckItem" },
  //           { leaf: true, text: "Item.js", className: "Ext.menu.Item" },
  //           { leaf: true, text: "Manager.js", className: "Ext.menu.Manager" },
  //           { leaf: true, text: "Menu.js", className: "Ext.menu.Menu" },
  //           { leaf: true, text: "RadioItem.js", className: "Ext.menu.RadioItem" },
  //           { leaf: true, text: "Separator.js", className: "Ext.menu.Separator" },
  //         ],
  //       },
  //       {
  //         text: "tab",
  //         children: [
  //           { leaf: true, text: "Bar.js", className: "Ext.tab.Bar" },
  //           { leaf: true, text: "Panel.js", className: "Ext.tab.Panel" },
  //           { leaf: true, text: "Tab.js", className: "Ext.tab.Tab" },
  //         ],
  //       },
  //       { leaf: true, text: "ActionSheet.js", className: "Ext.ActionSheet" },
  //       { leaf: true, text: "Audio.js", className: "Ext.Audio" },
  //       { leaf: true, text: "Button.js", className: "Ext.Button" },
  //       { leaf: true, text: "Component.js", className: "Ext.Component" },
  //       { leaf: true, text: "Container.js", className: "Ext.Container" },
  //       { leaf: true, text: "Editor.js", className: "Ext.Editor" },
  //       { leaf: true, text: "Gadget.js", className: "Ext.Gadget" },
  //       { leaf: true, text: "Img.js", className: "Ext.Img" },
  //       { leaf: true, text: "LoadMask.js", className: "Ext.LoadMask" },
  //       { leaf: true, text: "MessageBox.js", className: "Ext.MessageBox" },
  //       { leaf: true, text: "Panel.js", className: "Ext.Panel" },
  //       { leaf: true, text: "Sheet.js", className: "Ext.Sheet" },
  //     ],
  //   },

  //   constructor: function (config) {
  //     // Since records claim the data object given to them, clone the data
  //     // for each instance.
  //     config = Ext.apply(
  //       {
  //         root: Ext.clone(this.rootData),
  //       },
  //       config
  //     );

  //     this.callParent([config]);
  //   },
  // });

  rootData: {
    text: "menu",
    expanded: true,
    children: [
      {
        text: "Home",
        xtype: "startview",
        leaf: true,
        // children: [
        //   {
        //     text: "Home",
        //     xtype: "startview",
        //     leaf: true,
        //   },
        // ],
      },
      {
        text: "Radarchart",
        xtype: "d3Sunburst",
        leaf: true,
        // children: [
        //   {
        //     text: "Radar Chart",
        //     // iconCls: "fa fa-stroopwafel fa-spin",
        //     xtype: "d3Sunburst",
        //     leaf: true,
        //   },
        // ],
      },
      {
        text: "Steckbriefe (Datenansicht)",
        expanded: true,
        xtype: "homeview",
        leaf: true,
        // children: [
        //   {
        //     text: "Steckbriefe (Datenansicht)",
        //     // iconCls: "x-fa fa-table",
        //     xtype: "homeview",
        //     leaf: false,

        //     expanded: true,
        //     children: [
        //       {
        //         text: "Steckbrief 1",
        //         iconCls: "leaf",
        //         leaf: true,
        //         expanded: false,
        //       },
        //       {
        //         text: "Steckbrief 2",
        //         leaf: true,
        //         expanded: false,
        //       },
        //     ],
        // },
        // ],
      },

      {
        text: "Risiko Graphic",
        xtype: "graphicview",
        leaf: true,
        // children: [
        //   {
        //     text: "Risiko Graphic",
        //     // iconCls: "x-fa fa-file",
        //     xtype: "graphicview",
        //     leaf: true,
        //   },
        // ],
      },
      {
        text: "Risikofelder (Datenansicht)",
        xtype: "felderpanelview",
        leaf: true,
        // children: [
        //   {
        //     text: "Risikofelder (Datenansicht)",
        //     // iconCls: "x-fa fa-barcode",
        //     // xtype: "felderpanelview",
        //     // leaf: true,
        //   },
        // ],
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
