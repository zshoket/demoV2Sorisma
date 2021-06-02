Ext.define("SORISMA.view.main.MainViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.mainviewmodel",
    data: {
        name: '<div><a href="http://51.15.76.202:80/"><img src="/uploads/logo.png" alt="Sorismalogo"></a></div>',
        navCollapsed: false,
        navview_max_width: 300,
        navview_min_width: 44,
        topview_height: 75,
        bottomview_height: 50,
        headerview_height: 50,
        footerview_height: 50,
        detailCollapsed: true,
        main_activeID: 0,
        main_felderID: 0,
        main_risikoID: 0, // ID of the currently active entry
    },
    formulas: {
        navview_width: function(get) {
            return get("navCollapsed") ?
                get("navview_min_width") :
                get("navview_max_width");
        },
        /* detailview_width: function(get) {
                                                                            return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
                                                                        } */
    },
    stores: {
        menu: {
            type: "tree",
            root: {
                expanded: true,
                children: [{
                        text: "Home",
                        iconCls: "x-fa fa-home",
                        xtype: "startview",
                        leaf: true,
                    },
                    {
                        text: "Radar Chart",
                        iconCls: "fa fa-stroopwafel fa-spin",
                        xtype: "d3Sunburst",
                        leaf: true,
                    },
                    {
                        text: "Steckbriefe (Datenansicht)",
                        iconCls: "x-fa fa-table",
                        xtype: "homeview",
                        leaf: false,

                        expanded: true,
                        children: [{
                                text: "Steckbrief 1",
                                iconCls: "leaf",
                                leaf: true,
                                expanded: false,
                            },
                            {
                                text: "Steckbrief 2",
                                // iconCls: "leaf",
                                leaf: true,
                                expanded: false,
                            },
                        ],
                    },
                    {
                        text: "Risiko Graphic",
                        iconCls: "x-fa fa-file",
                        xtype: "graphicview",
                        leaf: true,
                    },
                    // {
                    //   text: "Steckbriefe (Listenansicht)",
                    //   iconCls: "x-fa fa-table",
                    //   xtype: "personnelview",
                    //   leaf: true,
                    // },
                    // {
                    //   text: "Risikoursachen (Listenansicht)",
                    //   iconCls: "x-fa fa-file",
                    //   xtype: "ursachenview",
                    //   leaf: true,
                    // },
                    // {
                    //   text: "Risiken (Datenansicht)",
                    //   iconCls: "x-fa fa-list-alt",
                    //   xtype: "dataview",
                    //   leaf: true,
                    // },
                    // {
                    //   text: "Risiken (Listenansicht)",
                    //   iconCls: "x-fa fa-th-list",
                    //   xtype: "risikoview",
                    //   leaf: true,
                    // },
                    // {
                    //   text: "Risikoauswirkung(Listenansicht)",
                    //   iconCls: "x-fa fa-indent",
                    //   xtype: "auswirkungview",
                    //   leaf: true,
                    // },
                    // {
                    //   text: "Risikofelder (Listenansicht)",
                    //   iconCls: "x-fa fa-align-justify",
                    //   xtype: "risikofelderview",
                    //   leaf: true,
                    // },
                    {
                        text: "Risikofelder (Datenansicht)",
                        iconCls: "x-fa fa-barcode",
                        xtype: "felderpanelview",
                        leaf: true,
                    },
                    // {
                    //   text: "Risikobewertung",
                    //   iconCls: "x-fa fa-barcode",
                    //   xtype: "risikomatrix",
                    //   leaf: true,
                    // },
                ],
            },
        },
    },
});