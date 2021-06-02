Ext.define('SORISMA.store.dataviewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dataviewstore',
    model: 'SORISMA.model.Risikos',
 

    proxy: {
        type: "ajax", 
        
        url: "http://51.15.76.202:3001/api/jointData",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true
});
    // getDataOfStore:  function (store){
    //     var rawData = store.getAuswirkung();
    //     var allRecords = (auswirkungviewstore.getData().getSource() || auswirkungviewstore.getData()).getRange();
    //     var myRecords = (store.getData().getSource() || store.getData()).getRange();
    // }



// var chained1 = Ext.create('Ext.data.ChainedStore', {
//     source: nbe2,
//     listeners: {
//         beforeload: function () {
//             console.log('chained1: beforeload');
//         }
//     }
// });

// var chained2 = Ext.create('Ext.data.ChainedStore', {
//     source: nbe3,
//     listeners: {
//         beforeload: function () {
//             console.log('chained2: beforeload');
//         }
//     }
// });