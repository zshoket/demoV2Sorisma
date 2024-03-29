Ext.define("SORISMA.view.felderpanel.felderpanelView", {
  extend: "Ext.panel.Panel",
  xtype: "felderpanelview",
  requires: [
    "SORISMA.view.felderpanel.felderpanelViewController",
    "SORISMA.view.felderpanel.felderpanelViewModel",
    "SORISMA.store.risikofelderViewStore",
    "Ext.form.FieldSet",
    "Ext.slider.*",
    "Ext.layout.VBox",
  ],
  store: Ext.create("SORISMA.store.risikofelderViewStore", {}),
  controller: { type: "felderpanelviewcontroller" },
  viewModel: {
    type: "felderpanelviewmodel",
  },

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
    {
      title: "Name",
      width: "98%",
      height: "18%",
      split: true,

      header: {
        items: [
          // {
          //   xtype: "button",
          //   text: "Info",
          //   iconCls: "x-fa fa-info-circle",
          //   style: {
          //     color: "white",
          //     backgroundColor: "#808080",
          //   },
          //   tooltip:
          //     "Informationen über diese Seite und was Sie hier tun können",
          //   handler: "showInfo",
          // },
        ],
        style: {
          backgroundColor: "#a01818",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<h1 style="font-size:16px">{data_felderName}</h1>',
      },
    },
    {
      title: "Charakteristische Ursachen",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoursachen1}</ul>',
      },
    },
    {
      title: "Charakteristischer Risikotyp",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisiken1}</ul>',
      },
    },
    {
      title: "Charakteristische Auswirkung",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoauswirkungen1}</ul>',
      },
    },
    // {
    //   title: "Risiktyp trifft für UseCase zu",
    //   width: "16.7%",
    //   height: "18%",
    //   split: true,

    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   margin: "0 10 0 0",
    //   items: [
    //     {
    //       id: "checkbox1",
    //       xtype: "checkbox",
    //       cls: "mycheck",
    //       value: "1",
    //       checked: false,
    //       width: 120,
    //     },
    //   ],
    // },

    {
      title: "Charakteristische Ursachen",
      width: "32.3%",
      height: "18%",
      split: true,
      style: { color: "white !important" },
      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoursachen2}</ul>',
      },
    },
    {
      title: "Charakteristischer Risikotyp",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisiken2}</ul>',
      },
    },
    {
      title: "Charakteristische Auswirkung",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoauswirkungen2}</ul>',
      },
    },
    // {
    //   title: "Risiktyp trifft für UseCase zu",
    //   width: "16.7%",
    //   height: "18%",
    //   split: true,

    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   margin: "0 10 0 0",
    //   items: [
    //     {
    //       id: "checkbox2",
    //       xtype: "checkbox",
    //       cls: "mycheck",
    //       value: "2",
    //       width: 120,
    //     },
    //   ],
    // },

    {
      title: "Charakteristische Ursachen",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoursachen3}</ul>',
      },
    },
    {
      title: "Charakteristischer Risikotyp",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisiken3}</ul>',
      },
    },
    {
      title: "Charakteristische Auswirkung",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoauswirkungen3}</ul>',
      },
    },
    // {
    //   title: "Risiktyp trifft für UseCase zu",
    //   width: "16.7%",
    //   height: "18%",
    //   split: true,

    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   margin: "0 10 0 0",
    //   items: [
    //     {
    //       id: "checkbox3",
    //       xtype: "checkbox",
    //       cls: "mycheck",
    //       value: "3",
    //       width: 120,
    //     },
    //   ],
    // },

    {
      title: "Charakteristische Ursachen",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoursachen4}</ul>',
      },
    },
    {
      title: "Charakteristischer Risikotyp",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisiken4}</ul>',
      },
    },
    {
      title: "Charakteristische Auswirkung",
      width: "32.3%",
      height: "18%",
      split: true,

      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoauswirkungen4}</ul>',
      },
    },
    // {
    //   title: "Risiktyp trifft für UseCase zu",
    //   width: "16.7%",
    //   height: "18%",
    //   split: true,

    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   margin: "0 10 0 0",
    //   items: [
    //     {
    //       id: "checkbox4",
    //       xtype: "checkbox",
    //       cls: "mycheck",
    //       value: "4",
    //       width: 120,
    //     },
    //   ],
    // },
    // {
    //   title: "Kurzbeschreibung",
    //   width: "52%",
    //   height: "47%",
    //   split: true,
    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   items: [
    //     {
    //       xtype: "panel",
    //       width: "88%",
    //       height: "60%",
    //       header: false,
    //       bind: {
    //         html: '<ul style="font-size:15px">{data_kurzbeschreibung}</ul>',
    //       },
    //     },
    // {
    //   xtype: "panel",
    //   title: "Veränderte Bedeutung des Risikofelds durch Industrie 4.0",
    //   width: "100%",
    //   height: "38%",
    //   split: true,
    //   border: false,
    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   margin: "0 10 0 0",
    //   bind: {
    //     html: '<ul style="font-size:14px">{data_riskLevel}</ul>',
    //   },
    // items: [
    //     {
    //         xtype: 'slider',
    //         width: '80%',
    //         floating: true,
    //         values: ['25', '50', '75'],
    //         increment: 25,
    //         minValue: 25,
    //         maxValue: 75,
    //         constrainThumbs: true

    //     },

    // ]
    //     },
    //   ],
    // },

    // {
    //   title: "Einordnung des Risikofelds",
    //   width: "46%",
    //   height: "47%",
    //   layout: {
    //     type: "float",
    //   },
    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   items: [
    //     {
    //       xtype: "panel",
    //       title: "Soziotechnische Dimension",
    //       width: "47.9%",
    //       height: 170,
    //       split: true,
    //       border: true,
    //       style: {
    //         border: ".5px solid grey",
    //       },
    //       flex: 1,
    //       header: {
    //         style: {
    //           backgroundColor: "#7f7f7f",
    //         },
    //       },
    //       margin: "0 10 0 0",
    //       bind: {
    //         html: '<ul style="font-size:15px">{data_dimension}</ul>',
    //       },
    //     },
    //     {
    //       xtype: "panel",
    //       title: "Stoßrichtung der Digitalisierung",
    //       width: "47.9%",
    //       height: 170,
    //       margin: "0 11 0 0",
    //       border: true,
    //       style: {
    //         border: ".5px solid grey",
    //       },
    //       header: {
    //         style: {
    //           backgroundColor: "#7f7f7f",
    //         },
    //       },
    //       split: true,
    //       bind: {
    //         html: '<ul style="font-size:15px">{data_stossrichtung}</ul>',
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Charakteristische Risikoursachen",
    //   width: "33%",
    //   height: "27%",
    //   split: true,
    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   bind: {
    //     html: '<ul style="font-size:15px">{data_charRisikoursachen}</ul>',
    //   },
    // },
    // {
    //   title: "Charakteristische Risiken",
    //   width: "33%",
    //   height: "27%",
    //   split: true,
    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   bind: {
    //     html: '<ul style="font-size:15px">{data_charRisiken}</ul>',
    //   },
    // },
    // {
    //   title: "Charakteristische Risikoauswirkungen",
    //   width: "32.3%",
    //   height: "27%",
    //   split: true,
    //   header: {
    //     style: {
    //       backgroundColor: "#7f7f7f",
    //     },
    //   },
    //   bind: {
    //     html: '<ul style="font-size:15px">{data_charRisikoauswirkungen}</ul>',
    //   },
    // },
    {
      title: "",
      width: "98%",
      height: "10%",
      split: false,
      header: false,
      items: [
        {
          xtype: "button",
          docked: true,
          docked: "bottom",
          width: "10%",
          floating: true,
          style: { position: "absolute", bottom: "10px", right: "10px" },
          iconCls: "x-fa fa-3x fa-forward",
          tooltip: "nächstes Risikofeld",
          handler: "onButtonFwd",
        },
        {
          xtype: "button",
          docked: true,
          width: "10%",
          floating: true,
          style: { position: "absolute", bottom: "10px", left: "10px" },
          docked: "bottom",
          iconCls: "x-fa fa-3x fa-backward",
          tooltip: "voriges Risikofeld",
          handler: "onButtonBack",
        },
        {
          text: "Bewertung beginnen",
          xtype: "button",
          docked: true,
          width: "15%",
          floating: true,
          style: { position: "absolute", bottom: "10px", left: "50%" },
          docked: "bottom",
          iconCls: "x-fa fa-3x fa-check",
          tooltip: "Bewertung beginnen",
          handler: "redirectMe",
        },
      ],
    },
  ],
  listeners: {
    // show: "correctUrl",
  },
});
