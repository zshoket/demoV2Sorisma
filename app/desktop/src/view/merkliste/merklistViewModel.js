Ext.define("SORISMA.view.rmerkliste.merklistViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.merklistviewmodel",
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
    },
  },
});
