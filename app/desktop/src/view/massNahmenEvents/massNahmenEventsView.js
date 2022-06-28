Ext.define('SORISMA.view.massNahmenEvents.massNahmenEventsView', {
    extend: 'Ext.grid.Grid',
    xtype: 'massNahmenEventsview',
    cls: 'massNahmenEventsview',
    controller: { type: 'massNahmenEventsviewcontroller' },
    viewModel: { type: 'massNahmenEventsviewmodel' },
    // store: { type: 'massNahmenEventsviewstore' },
    // rowNumbers: true,

    scrollable: true,

    defaultType: "panel",
  
    html: '<iframe id="riskundevents" name="risk&Events" src="html/eventsZuRisiken.html" scrolling="yes" height="900px" width="100%" ></iframe>',
    // plugins: {
    //     rowedit: {
    //         autoConfirm: false
    //     }
    // },
    // columns: [
    //     {
    //         text: 'Risiko Name',
    //         dataIndex: 'risikoName',
    //         editable: false,
    //         width: 250,
    //         cell: { userCls: 'bold' },

    //     },
    //     {
    //         text: 'Liste der Events',
    //         dataIndex: 'eventList',
    //         editable: false,
    //         width: 550
    //     },
    //     /*  {
    //          text: 'Unternehmen',
    //          dataIndex: 'unternehmen_id',
    //          editable: false,
    //          width: 230
    //      }, */
    //     {
    //         text: 'Liste der Massnahmen',
    //         dataIndex: 'massNahmListe',
    //         editable: false,
    //         width: 450
    //     },
    //     // {
    //     //     text: 'Kurzbeschreibung',
    //     //     dataIndex: 'kurzbeschreibung',
    //     //     editable: false,
    //     //     width: 230
    //     // },
    //     // {
    //     //     text: 'Reifegrad',
    //     //     dataIndex: 'reifegrad',
    //     //     editable: false,
    //     //     width: 230,
    //     // },
    //     // {
    //     //     text: 'Nutzenversprechen',
    //     //     dataIndex: 'nutzenversprechen',
    //     //     editable: false,
    //     //     width: 230
    //     // },
    //     // {
    //     //     text: 'Veränderungen Mensch',
    //     //     dataIndex: 'veraenderungenMensch',
    //     //     editable: false,
    //     //     width: 230
    //     // },
    //     // {
    //     //     text: 'Veränderungen Organisation',
    //     //     dataIndex: 'veraenderungenOrganisation',
    //     //     editable: false,
    //     //     width: 230
    //     // },
    //     // {
    //     //     text: 'Veränderungen Technologie',
    //     //     dataIndex: 'veraenderungenTechnologie',
    //     //     editable: false,
    //     //     width: 230
    //     // },
    //     // {
    //     //     text: 'Risiken anzeigen',
    //     //     width: 140,
    //     //     hideable: false,
    //     //     sortable: false,
    //     //     disableSelection: true,
    //     //     menuDisabled: true,
    //     //     rowSelect: false,
    //     //     cell: {
    //     //         tools: {
    //     //             approve: {
    //     //                 iconCls: "x-fa fa-forward",
    //     //                 handler: 'onApprove'
    //     //             }
    //     //         }
    //     //     }

    //     }
    // ],
    listeners: {

        select: 'onItemSelected',

    }


});
