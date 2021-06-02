Ext.define('SORISMA.store.risikoViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.risikoviewstore',
    model: 'SORISMA.model.Risikos',
    storeId: 'nbe1',
    getRisiko: function(){
        return Ext.Array.map(this.getData().getSource(), function(record){
            return record.data;
        });
    },
    proxy: {
        type: "ajax", 
        url: "http://51.15.76.202:3001/api/risikos",
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
