Ext.define('SORISMA.view.risiko.risiko', {
    extend: 'Ext.grid.Grid',
    xtype: 'risikoview',
    cls: 'risikoView',
    controller: { type: 'risikoviewcontroller' },
    viewModel: { type: 'risikoviewmodel' },
    store: { type: 'risikoviewstore' },
    rowNumbers: true,
    groupField: 'identifikator',
    columns: [
        {
            text: 'Risiko',
            dataIndex: 'name',
            editable: false,
            width: 460,
            cell: { userCls: 'bold' }
        },
        {
            text: 'Eintrittswahrscheinlichkeit',
            dataIndex: 'eintritWahr',
            editable: false,
            width: 330
        },
        {
            text: 'Schadenshöhe',
            dataIndex: 'schadenshohe',
            editable: false,
            width: 230
        }, {
            text: 'Dimension',
            dataIndex: 'dimension',
            editable: false,
            width: 150
        },
        {
            text: 'Kennung',
            dataIndex: 'identifikator',
            editable: false,
            width: 150
        },
        // {
        //     text: 'Risikofelder zeigen',
        //     width: 200,
        //     hideable: false,
        //     sortable: false,
        //     disableSelection: true,
        //     menuDisabled: true,
        //     rowSelect: false,
        //     cell: {
        //         tools: {
        //             approve: {
        //                 iconCls: "x-fa fa-angle-double-right",
        //                 handler: 'onButton'
        //             }
        //         }
        //     }

        // }
    ],

    listeners: {

        select: 'onItemSelected',

    }


});
