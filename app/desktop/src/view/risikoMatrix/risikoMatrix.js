Ext.define("SORISMA.view.risikoMatrix.risikoMatrix", {
    extend: "Ext.panel.Panel",
    xtype: "risikomatrix",
    requires: [
        "SORISMA.view.risikoMatrix.risikoMatrixController",
        "SORISMA.view.risikoMatrix.risikoMatrixModel",
        "Ext.form.FieldSet",
        "Ext.form.field.*",
        "Ext.navigation.View",
        "Ext.container.*",
    ],

    controller: "risikomatrix-risikomatrix",
    viewModel: {
        type: "risikomatrix-risikomatrix",
    },
    scrollable: true,

    defaultType: "panel",

    html: '<iframe src="html/graph.html" scrolling="no" height="900" width="100%"></iframe>',
});