Ext.define('SORISMA.store.auswirkungViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.auswirkungviewstore',
    model: 'SORISMA.model.Risikos',
    storeId: 'nbe2',
    getAuswirkung: function(){
        return Ext.Array.map(this.getData().getSource(), function(record){
            return record.data;
        });
    },

    proxy: {
        type: "ajax", 
        url: "http://51.15.76.202:3001/api/risikoauswirkungs",
        
        headers: {
            Accept: "application/json"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true,

});
