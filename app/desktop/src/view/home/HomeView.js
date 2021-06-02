Ext.define("SORISMA.view.home.HomeView", {
    xtype: "homeview",
    extend: "Ext.form.Panel",
    id: "homeview",
    cls: "homeview",
    controller: { type: "homeviewcontroller" },
    viewModel: { type: "homeviewmodel" },
    store: Ext.create("SORISMA.store.HomeViewStore", {}), // ein Store ist in einem Panel nicht vergesehen
    requires: [
        "SORISMA.store.HomeViewStore",
        "Ext.form.FieldSet",
        "Ext.form.Checkbox",
        "Ext.form.field.*",
        "Ext.Img",
        "Ext.layout.VBox",
    ],
    scrollable: true,

    defaultType: "panel",

    layout: {
        type: "float",
    },

    defaults: {
        bodyPadding: 10,
        border: true,
    },

    items: [
        /*    {
                                                                           xtype: "searchfield",
                                                                           label: "Search",
                                                                           name: "search"
                                                                       }, */
        {
            title: "Name",
            width: "80%",
            height: 100,
            flex: 1,
            split: true,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            margin: "0 10 0 0",
            bind: {
                html: '<p style="font-size:14px;font-weight:bold">{home_name}</p>',
            },
        },
        {
            title: "Dimension",
            width: "18%",
            height: 100,
            split: true,
            flex: 1,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            margin: "0 10 0 0",
            bind: {
                html: '<p style="font-size:14px"> {home_dimension} </p>',
                // html: '<body>{home_dimension}</body>'
            },
        },
        {
            title: "Kurzbeschreibung",
            width: "98.7%",
            height: 170,
            margin: "0 10 0 0",
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            split: true,
            bind: {
                html:
                //'{home_kurzbeschreibung}',
                    '<p style="font-size:14px">{home_kurzbeschreibung}</p>',
            },
        },
        /*  {
                                                                         title: "Unternehmen",
                                                                         width: 280,
                                                                         height: 170,
                                                                         margin: "0 5 0 0",
                                                                           bind: {
                                                                              html: 
                                                                              //'<b style="font-size:13px">{home_unternehmen}</b>',
                                                                              '<img src="{home_unternehmen}" width="250" height="150">'
                                                                          }
                                                                      }, */
        {
            title: "Reifegrad",
            width: "19%",
            height: 170,
            margin: "0 5 0 0",
            split: true,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            items: [{
                xtype: "checkboxgroup",
                width: 300,
                cls: "x-check-group-alt",
                horizontal: true,
                listeners: {
                    change: "myCheck",
                },
                columns: 1,
                items: [{
                        boxLabel: "Basis-Lösung",
                        name: "cb-col-1",
                        disabled: true,
                        checked: false,
                    },
                    {
                        boxLabel: "Schlüssel-Lösung",
                        name: "cb-col-2",
                        disabled: true,
                        checked: false,
                    },
                    {
                        boxLabel: "Schrittmacher-Lösung",
                        name: "cb-col-3",
                        disabled: true,
                        checked: true,
                    },
                ],
            }, ],
        },
        {
            title: "Einordnung in die Wertschöpfungskette",
            width: "79.5%",
            height: 170,
            split: true,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            bind: {
                html: '<ul style="font-size:14px">{home_einordnungKette}</ul>',
            },
        },
        {
            title: "Nutzenversprechen",
            width: "49%",
            height: 160,
            split: true,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            margin: "0 10 0 0",
            bind: {
                html: '<ul style="font-size:14px">{home_nutzenversprechen}</ul>',
            },
        },
        {
            title: "Herausforderungen",
            width: "49.2%",
            height: 160,
            split: true,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            margin: "0 10 0 0",
            bind: {
                html: '<ul style="font-size:14px">{home_herausforderungen}</ul>',
            },
        },
        {
            title: "Veränderungen Mensch",
            width: "32%",
            height: 170,
            split: true,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            margin: "0 10 0 0",
            bind: {
                html: '<ul style="font-size:14px">{home_veraenderungenMensch}</ul>',
            },
        },
        {
            title: "Veränderungen Organisation",
            width: "32.6%",
            height: 170,
            split: true,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            margin: "0 10 0 0",
            bind: {
                html: '<ul style="font-size:14px">{home_veraenderungenOrganisation}</ul>',
            },
        },
        {
            title: "Veränderungen Technologie",
            width: "32.7%",
            split: true,
            height: 170,
            header: {
                style: {
                    backgroundColor: "#7f7f7f",
                },
            },
            margin: "0 10 0 0",
            bind: {
                html: '<ul style="font-size:14px">{home_veraenderungenTechnologie}</ul>',
            },
        },
        {
            title: "",
            width: "99%",
            height: "8%",
            split: false,
            header: false,
            items: [{
                    xtype: "button",
                    docked: true,
                    docked: "bottom",
                    width: "5%",
                    iconCls: "x-fa fa-forward fa-3x",
                    tooltip: "nächster Steckbrief",
                    floating: true,
                    style: { position: "absolute", bottom: "10px", right: "10px" },
                    handler: "onNextSteck",
                },
                {
                    xtype: "button",
                    docked: true,
                    floating: true,
                    width: "5%",
                    iconCls: "x-fa fa-3x fa-backward",
                    style: { position: "absolute", bottom: "10px", left: "10px" },
                    docked: "bottom",
                    tooltip: "voriger Steckbrief",
                    handler: "onPrevSteck",
                },
                {
                    xtype: "button",
                    // docked: true,
                    floating: true,
                    width: "10%",
                    text: "Marken",
                    //   iconCls: "x-fa fa-3x fa-backward",
                    style: { position: "absolute", left: "50%", bottom: "10px" },
                    docked: "bottom",
                    tooltip: "Mark Stecbrief",
                    handler: "markToList",
                },
            ],
        },
    ],
});