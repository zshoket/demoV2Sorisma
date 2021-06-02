Ext.define('SORISMA.view.risikofelder.risikofelderView', {
    extend: 'Ext.grid.Grid',
    xtype: 'risikofelderview',
    cls: 'risikofelderview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: { type: 'risikofelderviewcontroller' },
    viewModel: { type: 'risikofelderviewmodel' },
    store: { type: 'risikofelderviewstore' },
    rowNumbers: true,
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Risikorisikofelder',
            dataIndex: 'felderName',
            editable: false,
            width: 220,
            cell: { userCls: 'bold' }
        }, {
            text: 'Soziotechnische Dimension',
            dataIndex: 'dimension',
            editable: false,
            width: 160
        },
        {
            text: 'Stoßrichtung der Digitalisierung',
            dataIndex: 'stossrichtung',
            editable: false,
            width: 200
        },
        {
            text: 'Kurzbeschreibung',
            dataIndex: 'kurzbeschreibung',
            editable: false,
            width: 300
        },
        {
            text: 'Veränderte Bedeutung des Risikofelds durch Industrie 4.0',
            dataIndex: 'riskLevel',
            editable: false,
            width: 150
        },
        {
            text: 'Charakteristische Risikoursachen',
            dataIndex: 'charRisikoursachen',
            editable: false,
            width: 150
        },
        {
            text: 'Charakteristische Risiken',
            dataIndex: 'charRisiken',
            editable: false,
            width: 150
        },
        {
            text: 'Charakteristische Risikoauswirkungen',
            dataIndex: 'charRisikoauswirkungen',
            editable: false,
            width: 150
        }

        /* {
            text: 'Risiken anzeigen',
            width: 140,
            hideable: false,
            sortable: false,
            disableSelection: true,
            menuDisabled: true,
            rowSelect: false,
            cell: {
                tools: {
                    approve: {
                    iconCls: "x-fa fa-paperclip",
                    handler: 'onMyClick'
                    }
                 }
            }
            
        }  */
    ],

    listeners: {

        select: 'onItemSelected',

    }


});
