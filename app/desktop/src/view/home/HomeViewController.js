Ext.define("SORISMA.view.home.HomeViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.homeviewcontroller",

    init: function(view) {
        var me = this;

        me.reloadData();
    },

    /**
     * Sets the data of the entry in the ViewModel variables.
     * Accesses the 'main_activeID' variable from the mainViewModel
     */
    reloadData: function() {
        var me = this;
        var view = me.getView();
        var mainVM = Ext.getCmp("mainview").getViewModel();
        var activeID = mainVM.get("main_activeID");
        var record = view.store.getAt(activeID);
        if (record) {
            var data = record.getData();
            var vm = me.getViewModel();
            vm.set("home_id", data.id);
            vm.set("home_name", data.name);
            vm.set("home_unternehmen", data.unternehmen_id);
            vm.set("home_dimension", data.dimension);
            vm.set("home_kurzbeschreibung", data.kurzbeschreibung);
            vm.set("home_reifegrad", data.reifegrad);

            var tempKette = data.einordnungKette;
            var strKette = "";
            for (var j in tempKette) {
                strKette = strKette + "<li>" + tempKette[j].toString() + "</li>";
            }
            vm.set("home_einordnungKette", strKette);

            //vm.set('home_einordnungKette', data.einordnungKette)

            var tempNutz = data.nutzenversprechen;
            var strNutz = "";
            for (var j in tempNutz) {
                strNutz = strNutz + "<li>" + tempNutz[j].toString() + "</li>";
            }
            vm.set("home_nutzenversprechen", strNutz);

            //vm.set('home_nutzenversprechen', data.nutzenversprechen)

            var tempHeraus = data.herausforderungen;
            var strHeraus = "";
            for (var j in tempHeraus) {
                strHeraus = strHeraus + "<li>" + tempHeraus[j].toString() + "</li>";
            }
            vm.set("home_herausforderungen", strHeraus);

            //vm.set('home_herausforderungen', data.herausforderungen)

            var tempMensch = data.veraenderungenMensch;
            var strMensch = "";
            for (var j in tempMensch) {
                strMensch = strMensch + "<li>" + tempMensch[j].toString() + "</li>";
            }
            vm.set("home_veraenderungenMensch", strMensch);

            //vm.set('home_veraenderungenMensch', data.veraenderungenMensch)

            var tempOrgan = data.veraenderungenOrganisation;
            var strOrgan = "";
            for (var j in tempOrgan) {
                strOrgan = strOrgan + "<li>" + tempOrgan[j].toString() + "</li>";
            }
            vm.set("home_veraenderungenOrganisation", strOrgan);

            //vm.set('home_veraenderungenOrganisation', data.veraenderungenOrganisation)

            var tempTech = data.veraenderungenTechnologie;
            var strTech = "";
            for (var j in tempTech) {
                strTech = strTech + "<li>" + tempTech[j].toString() + "</li>";
            }
            vm.set("home_veraenderungenTechnologie", strTech);

            //vm.set('home_veraenderungenTechnologie', data.veraenderungenTechnologie)
        }
    },

    myCheck: function(newValue, oldValue) {
        var new1 = Ext.ComponentQuery.query("checkboxgroup")[0];
        alert(new1);
    },

    onNextSteck: function(button) {
        var lastPart = window.location.href.split("/").pop();

        lastPart++;
        if (lastPart <= 55) {
            this.redirectTo("#homeview/" + lastPart);
        } else {
            Ext.Msg.alert("Kein Steckbrief mehr");
        }
    },

    onPrevSteck: function(button) {
        var lastPart = window.location.href.split("/").pop();

        lastPart--;
        if (lastPart <= 55) {
            this.redirectTo("#homeview/" + lastPart);
        }
        if (lastPart == -1) {
            Ext.Msg.alert("Sie sind am Start");
            this.redirectTo("#homeview/" + 0);
        }
    },

    markToList: function(button) {
        this.redirectTo("#graphicview");
    },
});