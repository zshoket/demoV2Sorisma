Ext.define('SORISMA.view.dataview.dataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataviewcontroller',

    init: function (view) {
        var me = this;

        me.reloadRiskData();

    },

    reloadRiskData: function () {
        var me = this;

        var view = me.getView();
        var mainVM = Ext.getCmp('mainview').getViewModel();
        var activeriskID = mainVM.get('main_risikoID');
        var record = view.store.getAt(activeriskID);
        if (record) {
            var data = record.getData();
            var vm = me.getViewModel();

            vm.set('data_riskName', data.riskName)

            vm.set('data_riskDocument', data.riskDocument)

            vm.set('data_identifikator', data.identifikator)
            //The Ursachen array as list
            var tempUrsachen = data.risikoUrsachen;
            var strUrsachen = "";
            for (var j in tempUrsachen) {
                strUrsachen = strUrsachen + "<li>" + (tempUrsachen[j]).toString() + "</li>";
            }
            vm.set('data_risikoUrsachen', strUrsachen)

            //The Auswirkung array as list
            var tempAuswrikung = data.risikoAuswirkung;
            var strAuswirkung = "";
            for (var j in tempAuswrikung) {
                strAuswirkung = strAuswirkung + "<li>" + (tempAuswrikung[j]).toString() + "</li>";
            }
            vm.set('data_risikoAuswirkung', strAuswirkung)

        }
    }
});

