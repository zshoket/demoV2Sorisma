Ext.define("SORISMA.view.d3.SunburstController", {
  extend: "Ext.app.ViewController",
  alias: "controller.d3-sunburst",
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
    document.radarChart.location.reload()
  },

  addToList: function () {
    if (localStorage == null) {
      Ext.Msg.alert('Please Select a UseCase First');
    } else {
      alert("Hello! I am an alert box!!");
    }
    // if (window.location !== window.parent.location) {
    //   alert("I have an iframe");
    // } else {
    //   console.log("Not an Iframe");
    // }
  },
});
