Ext.define('SORISMA.view.ursachen.ursachen', {
    extend: 'Ext.grid.Grid',
    xtype: 'ursachenview',
    cls: 'ursachenview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: { type: 'ursachenviewcontroller' },
    viewModel: { type: 'ursachenviewmodel' },
    store: { type: 'ursachenviewstore' },
    rowNumbers: true,
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Risikoursachen',
            dataIndex: 'name',
            editable: false,
            width: 460,
            cell: { userCls: 'bold' }
        }, {
            text: 'Kennung',
            dataIndex: 'identifikator',
            editable: false,
            width: 150
        },
         {
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
            
        }  
    ],

    listeners: {

        select: 'onItemSelected',

    }


});
