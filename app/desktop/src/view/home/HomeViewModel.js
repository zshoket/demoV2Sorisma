Ext.define('SORISMA.view.home.HomeViewModel', {
    extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.homeviewmodel',

    data: {
        home_id: 0,
        home_name: "",
        home_unternehmen: "",
        home_dimension: "",
        home_einordnungKette: "",
        home_kurzbeschreibung: "",
        home_reifegrad: "",
        home_nutzenversprechen: "",
        home_herausforderungen: "",
        home_veraenderungenMensch: "",
        home_veraenderungenOrganisation: "",
        home_veraenderungenTechnologie: "",
    }
});
