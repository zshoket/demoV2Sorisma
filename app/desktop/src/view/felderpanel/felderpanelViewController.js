Ext.define('SORISMA.view.felderpanel.felderpanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.felderpanelviewcontroller',

    init: function (view) {
        var me = this;

        me.reloadFelderData();

    },

    reloadFelderData: function () {
        var me = this;

        var view = me.getView();
        var mainVM = Ext.getCmp('mainview').getViewModel();
        var activefelderID = mainVM.get('main_felderID');
        var record = view.store.getAt(activefelderID);
        if (record) {
            var data = record.getData();
            var vm = me.getViewModel();

            vm.set('data_felderName', data.felderName)

            vm.set('data_riskLevel', data.riskLevel)

            vm.set('data_kurzbeschreibung', data.kurzbeschreibung)


            var tempCharUrsachen = data.charRisikoursachen;
            var strCharUrsachen = "";
            for (var j in tempCharUrsachen) {
                strCharUrsachen = strCharUrsachen + "<li>" + (tempCharUrsachen[j]).toString() + "</li>";
            }
            vm.set('data_charRisikoursachen', strCharUrsachen)



            var tempCharAuswrikung = data.charRisikoauswirkungen;
            var strCharAuswirkung = "";
            for (var j in tempCharAuswrikung) {
                strCharAuswirkung = strCharAuswirkung + "<li>" + (tempCharAuswrikung[j]).toString() + "</li>";
            }
            vm.set('data_charRisikoauswirkungen', strCharAuswirkung)

            var tempCharRisiken = data.charRisiken;
            var strCharRisiken = "";
            for (var j in tempCharRisiken) {
                strCharRisiken = strCharRisiken + "<li>" + (tempCharRisiken[j]).toString() + "</li>";
            }
            vm.set('data_charRisiken', strCharRisiken)

            var tempstossrichtung = data.stossrichtung;
            var strstossrichtung = "";
            for (var j in tempstossrichtung) {
                strstossrichtung = strstossrichtung + "<li>" + (tempstossrichtung[j]).toString() + "</li>";
            }
            vm.set('data_stossrichtung', strstossrichtung)

            var tempdimension = data.dimension;
            var strdimension = "";
            for (var j in tempdimension) {
                strdimension = strdimension + "<li>" + (tempdimension[j]).toString() + "</li>";
            }
            vm.set('data_dimension', strdimension)

        }
    },

    onButtonFwd: function (button) {

        var lastPart = window.location.href.split("/").pop();
        // this.redirectTo('#felderpanelview/2');
        lastPart++;
        if (lastPart <= 10) {
            this.redirectTo('#felderpanelview/' + lastPart);
        }
        else {
            Ext.Msg.alert('Keine Risikofelder mehr');
        }
    },

    onButtonBack: function (button) {

        var lastPart = window.location.href.split("/").pop();
        // this.redirectTo('#felderpanelview/2');
        lastPart--;
        if (lastPart <= 10) {
            this.redirectTo('#felderpanelview/' + lastPart);
        }
        if (lastPart == -1) {
            Ext.Msg.alert('Sie sind am Start');
            this.redirectTo('#felderpanelview/' + 0);
        }
    }
});

