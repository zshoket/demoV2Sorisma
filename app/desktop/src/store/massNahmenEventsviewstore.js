Ext.define('SORISMA.store.massNahmenEventsviewstore', {
    extend: 'Ext.data.Store',
    alias: 'store.massNahmenEventsviewstore',
    model: 'SORISMA.model.Usecase',

    proxy: {
        type: "ajax", 
      //  url: "http://localhost:3002/getAll",
    // url: "http://51.15.76.202:3001/api/documents/",
     url: "http://localhost:3001/api/eventsZuRisikos",
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
