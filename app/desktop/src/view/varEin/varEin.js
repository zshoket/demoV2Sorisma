Ext.define("SORISMA.view.varEin.varEin", {
  extend: "Ext.panel.Panel",
  xtype: "varEin",
  controller: "varEinController",
  cls: 'varEin',
  viewModel: {
    type: "varEinModel",
  },
  requires: [
    "SORISMA.view.varEin.varEinController",
    "SORISMA.view.varEin.varEinModel",
    "Ext.form.FieldSet",
    "Ext.form.field.*",
    "Ext.navigation.View",
    "Ext.container.*",
  ],

  scrollable: false,
  defaultType: "panel",

  html: '<iframe name="radarChart" src="html/digitalRiefegrad.html" scrolling="no" height="900px" width="100%" ></iframe>',

  // items: [

  //   {
  //     xtype: 'radiogroup',
  //     fieldLabel: 'Single Column',
  //     vertical: true,
  //     columns: 1,
  //     labelCls: 'customRadioGroup',
  //     name: 'rb-col1',
  //     items: [
  //       {
  //         xtype: "label",
  //         html: "Technologie",
  //         cls: 'my-label-style'
  //       },
  //       {
  //         boxLabel: 'Digitale Technologien werden im Unternehmen umfassend eingesetzt',
  //         name: 'rb', value: '1',
  //         // checked: true,
  //         labelAlign: 'left',
  //       }, {
  //         boxLabel: 'An vielen Stellen im Unternehmen werden digitale Technologien eingesetzt',
  //         name: 'rb', value: '2',
  //         labelAlign: 'left',
  //         // checked: true
  //       }, {
  //         boxLabel: 'Digitale Technologien werden im Unternehmen vereinzelt eingesetzt',
  //         name: 'rb', value: '3',
  //         labelAlign: 'left',
  //       },
  //       {
  //         boxLabel: 'Digitalisierung steckt in den Kinderschuhen',
  //         name: 'rb', value: '4',
  //         labelAlign: 'left',
  //       }
  //     ],
  //   },
  //   {
  //     xtype: "button",
  //     floating: true,
  //     text: "Submit",
  //     iconCls: "x-fa fa-check",
  //     style: { position: "absolute", left: "65%", top: "92%" },
  //     docked: "bottom",
  //     tooltip: "Submit",
  //     handler: "addmarkedToList",
  //   },

  //   {
  //     xtype: 'radiogroup',
  //     fieldLabel: 'Second Column',
  //     vertical: true,
  //     columns: 1,

  //     name: 'rb-col2',
  //     items: [
  //       {
  //         xtype: "label",
  //         html: "Organisation",
  //         cls: 'my-label-style'
  //       },
  //       {
  //         boxLabel: 'Digtalisterungsoktivitäten folgen keiner konkreten Stratege',
  //         // checked: true,
  //         labelAlign: 'left', value: '5'
  //       }, {
  //         boxLabel: 'Einzelne Projekte sind strategisch aufeinander abgestimmt',
  //         labelAlign: 'left', value: '6'
  //       }, {
  //         boxLabel: 'Einzelne Projekte sind zu strategischen Programmen zusammengefasst',
  //         labelAlign: 'left', value: '7'
  //       },
  //       {
  //         boxLabel: 'Es existiert eine Dtgitalisierungsstrategie für das gesamte Unternehmen',
  //         labelAlign: 'left', value: '8'
  //       },
  //     ]
  //   },

  //   {
  //     xtype: 'radiogroup',
  //     fieldLabel: 'Third Column',
  //     vertical: true,
  //     columns: 1,

  //     name: 'rb-col3',
  //     items: [
  //       {
  //         xtype: "label",
  //         html: "Mensch",
  //         cls: 'my-label-style'
  //       },
  //       {
  //         boxLabel: 'Die Arbeitswelt ist starr strukturiert und analog gestaltet',
  //         labelAlign: 'left', value: '9'
  //       }, {
  //         boxLabel: 'Es existieren vereinzelt flexibel gestaltete Arbeitsstrukturen',
  //         labelAlign: 'left', value: '10'
  //       }, {
  //         boxLabel: 'An vielen Stellen ist die Arbeitswelt flexibel gestaltet und digitalisiert',
  //         labelAlign: 'left', value: '11'
  //       },
  //       {
  //         boxLabel: 'Die Arbeitswelt ist flexibel ausgerichtet und alle Tätigkeiten werden digital unterstützt',
  //         // checked: true,
  //         labelAlign: 'left', value: '12'
  //       }
  //     ],
  //     // listeners: { change: "testFn" },
  //   }
  // ]
});

