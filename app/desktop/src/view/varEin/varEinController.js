Ext.define("SORISMA.view.varEin.varEinController", {
  extend: "Ext.app.ViewController",
  alias: "controller.varEinController",
  action: "changeView",
  refs: {
    PersonnelView: {
      autoCreate: true,
      selector: "#personnelview",
      xtype: "personnelview",
    },
  },

  control: {
    "button[action=changeView]": {
      tap: "changeView",
    },
  },

  changeView: function () {
    this.redirectTo("personnelview");
  },

  closeIframe: function () {
    // window.frames[0].location.reload();
    document.radarChart2.location.reload();
  },

  addmarkedToList: function () {
    debugger
    // if (document.getElementById('ext-element-123').checked) {
    //   alert('It is done');
    alert(document.getElementById('ext-element-123').value);

    // }
  },

  testFn: function (obj, value) {
    alert(value);
  },
});
