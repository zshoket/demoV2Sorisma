Ext.define('SORISMA.view.risiko.risikoViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.risikoviewcontroller',

  refs: {
    dataview: {
      autoCreate: true,
      selector: '#dataview',
      xtype: 'dataview',
    }
  },


  onItemSelected: function (grid, records, e) {
    debugger
    var selectedRecord = grid.getSelection();
    var row = grid.store.indexOf(selectedRecord);
    var record = records[0];
    var newId = record.get('risikoFelderId');
    if (row <= 40) {
      this.redirectTo('#dataview/' + row);
    }
    else if (newId == '5f99767055574829c05cc725') {
      this.redirectTo('#felderpanelview/0');
    } else if (newId == '5f9982c4205b621070403da6') {
      this.redirectTo('#felderpanelview/1');
    }
    else if (newId == '5f9982c4205b621070403da7') {
      this.redirectTo('#felderpanelview/2');
    }
    else if (newId == '5f9982c4205b621070403da8') {
      this.redirectTo('#felderpanelview/3');
    }
    else if (newId == '5f9982c4205b621070403da9') {
      this.redirectTo('#felderpanelview/4');
    }
    else if (newId == '5f9982c4205b621070403daa') {
      this.redirectTo('#felderpanelview/5');
    }
    else if (newId == '5f9982c4205b621070403dab') {
      this.redirectTo('#felderpanelview/6');
    }
    else if (newId == '5f9982c4205b621070403dac') {
      this.redirectTo('#felderpanelview/7');
    }
    else if (newId == '5f9982c4205b621070403dad') {
      this.redirectTo('#felderpanelview/8');
    }
    else if (newId == '5f9982c4205b621070403dae') {
      this.redirectTo('#felderpanelview/9');
    }
    else if (newId == '5f9982c4205b621070403daf') {
      this.redirectTo('#felderpanelview/10');
    }
    else {
      Ext.Msg.alert('Keine Risikofelder Datei gefunden');
    }
  }


  // onButton: function (grid, info) {
  //   var newId = info.record.get('id');
  //   var url = "http://localhost:3001/api/risikos/" + newId + "/risikoFelders"
  //   if (url == []) {
  //     Ext.Msg.alert('No Riskscause Found');
  //   } else {
  //     window.location = url;
  //   }
  // },

});

