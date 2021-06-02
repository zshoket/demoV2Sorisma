Ext.define("SORISMA.view.startScreen.startViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.startviewcontroller",
    refs: {
        startview: {
            autoCreate: true,
            selector: "#startview",
            xtype: "startview",
        },
    },

    onButtonForward: function(button) {
        this.redirectTo("#d3Sunburst");
    },
});