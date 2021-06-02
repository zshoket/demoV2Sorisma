Ext.define('SORISMA.view.d3.SunburstController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.d3-sunburst',
    action: "changeView",
    refs: {
        PersonnelView: {
            autoCreate: true,
            selector: '#personnelview',
            xtype: 'personnelview',
        },
    
    },

    control: {
        'button[action=changeView]' : {
           tap: 'changeView'
       }
  
  },
  

        changeView: function(){
            this.redirectTo('personnelview');
             }

});
