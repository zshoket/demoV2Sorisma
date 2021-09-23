Ext.define(
  "SORISMA.view.risikoFelderMerkliste.risikoFelderMerklisteViewModel",
  {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.risikoFelderMerklisteViewModel",
    data: {
      data: {
        id: "",
        felderName: "",
        dimension: "",
        stossrichtung: "",
        riskLevel: "",
        charRisikoursachen: "",
        charRisiken: "",
        charRisikoauswirkungen: "",
        kurzbeschreibung: "",
      },
    },
  }
);
