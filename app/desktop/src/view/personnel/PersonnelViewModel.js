Ext.define('SORISMA.view.personnel.PersonnelViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.personnelviewmodel',
	data: {
		data: {
			per_id: 0,
			name: "",
			unternehmen: "",
			dimension: "",
			einordnungKette: "",
			kurzbeschreibung: "",
			reifegrad: "",
			nutzenversprechen: "",
			herausforderungen: "",
			veraenderungenMensch: "",
			veraenderungenOrganisation: "",
			veraenderungenTechnologie: "",
		}
	}
});
