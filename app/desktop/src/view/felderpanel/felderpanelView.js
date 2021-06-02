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
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      margin: "0 10 0 0",
      bind: {
        html: '<h1 style="font-size:14px">{data_felderName}</h1>',
      },
    },
    {
      title: "Kurzbeschreibung",
      width: "52%",
      height: "47%",
      split: true,
      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      items: [
        {
          xtype: "panel",
          width: "88%",
          height: "60%",
          header: false,
          bind: {
            html: '<ul style="font-size:14px">{data_kurzbeschreibung}</ul>',
          },
        },
        {
          xtype: "panel",
          title: "Veränderte Bedeutung des Risikofelds durch Industrie 4.0",
          width: "100%",
          height: "38%",
          split: true,
          border: false,
          header: {
            style: {
              backgroundColor: "#7f7f7f",
            },
          },
          margin: "0 10 0 0",
          bind: {
            html: '<p style="font-size:14px">{data_riskLevel}</p>',
          },
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
        },
      ],
    },

    {
      title: "Einordnung des Risikofelds",
      width: "46%",
      height: "47%",
      layout: {
        type: "float",
      },
      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      items: [
        {
          xtype: "panel",
          title: "Soziotechnische Dimension",
          width: "47.9%",
          height: 170,
          split: true,
          border: true,
          style: {
            border: ".5px solid grey",
          },
          flex: 1,
          header: {
            style: {
              backgroundColor: "#7f7f7f",
            },
          },
          margin: "0 10 0 0",
          bind: {
            html: '<ul style="font-size:14px">{data_dimension}</ul>',
          },
        },
        {
          xtype: "panel",
          title: "Stoßrichtung der Digitalisierung",
          width: "47.9%",
          height: 170,
          margin: "0 11 0 0",
          border: true,
          style: {
            border: ".5px solid grey",
          },
          header: {
            style: {
              backgroundColor: "#7f7f7f",
            },
          },
          split: true,
          bind: {
            html: '<ul style="font-size:14px">{data_stossrichtung}</ul>',
          },
        },
      ],
    },
    {
      title: "Charakteristische Risikoursachen",
      width: "33%",
      height: "27%",
      split: true,
      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoursachen}</ul>',
      },
    },
    {
      title: "Charakteristische Risiken",
      width: "33%",
      height: "27%",
      split: true,
      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      bind: {
        html: '<ul style="font-size:14px">{data_charRisiken}</ul>',
      },
    },
    {
      title: "Charakteristische Risikoauswirkungen",
      width: "32%",
      height: "27%",
      split: true,
      header: {
        style: {
          backgroundColor: "#7f7f7f",
        },
      },
      bind: {
        html: '<ul style="font-size:14px">{data_charRisikoauswirkungen}</ul>',
      },
    },
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
      ],
    },
  ],
});
