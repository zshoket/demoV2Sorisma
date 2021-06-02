Ext.define('SORISMA.view.risikofelder.risikofelderViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.risikofelderviewcontroller',




    onItemSelected: function (grid, records, e) {

        var selectedRecord = grid.getSelection();
        var row = grid.store.indexOf(selectedRecord);
        if (row == 0) {
            this.redirectTo('#felderpanelview/0');
        } else {
            this.redirectTo('#felderpanelview/' + row);
        }
    }

    // onItemSelected: function (grid, records, e) {
    //     var record = records[0];
    //     var newId = record.get('id');
    //     if (newId == '5f99767055574829c05cc725') {
    //         this.redirectTo('#felderpanelview/0');
    //     } else if (newId == '5f9982c4205b621070403da6') {
    //         this.redirectTo('#felderpanelview/1');
    //     }
    //     else if (newId == '5f9982c4205b621070403da7') {
    //         this.redirectTo('#felderpanelview/2');
    //     }
    //     else if (newId == '5f9982c4205b621070403da8') {
    //         this.redirectTo('#felderpanelview/3');
    //     }
    //     else if (newId == '5f9982c4205b621070403da9') {
    //         this.redirectTo('#felderpanelview/4');
    //     }
    //     else if (newId == '5f9982c4205b621070403daa') {
    //         this.redirectTo('#felderpanelview/5');
    //     }
    //     else if (newId == '5f9982c4205b621070403dab') {
    //         this.redirectTo('#felderpanelview/6');
    //     }
    //     else if (newId == '5f9982c4205b621070403dac') {
    //         this.redirectTo('#felderpanelview/7');
    //     }
    //     else if (newId == '5f9982c4205b621070403dad') {
    //         this.redirectTo('#felderpanelview/8');
    //     }
    //     else if (newId == '5f9982c4205b621070403dae') {
    //         this.redirectTo('#felderpanelview/9');
    //     }
    //     else if (newId == '5f9982c4205b621070403daf') {
    //         this.redirectTo('#felderpanelview/10');
    //     }
    //     else {
    //         Ext.Msg.alert('Keine Risikofelder Datei gefunden');
    //     }

    // }

});

