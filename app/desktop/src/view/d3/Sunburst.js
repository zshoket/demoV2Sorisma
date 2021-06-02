
Ext.define('SORISMA.view.d3.Sunburst',{
    extend: 'Ext.panel.Panel',
    xtype: "d3Sunburst",
    controller: 'd3-sunburst',
    viewModel: {
        type: 'd3-sunburst'
    },
    requires: [
        "SORISMA.view.d3.SunburstController",
        "SORISMA.view.d3.SunburstModel",
        "SORISMA.view.personnel.PersonnelView",
        "Ext.form.FieldSet",
        "Ext.form.field.*",
        "Ext.navigation.View",
        "Ext.container.*"
    ],
   scrollable: true,

    defaultType: "panel",
    
    html: '<iframe src="html/funcTesting.html" scrolling="no" height="900" width="100%"></iframe>',

   /*  items: [{
        title: 'DetailView',
        docked : 'right',
        collapsible: true,
        collapsed: true,
        flex: 1,
        split: true,
         items: [{
            xtype: 'button',
            text: 'Click for Details',
            iconCls: "x-fa fa-database",
            action:  'changeView'
        }] 
    }] */

});

