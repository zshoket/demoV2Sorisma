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
    debugger
    window.frames[0].location.reload();
    // document.radarChart.location.reload();
    // window.iframe.contentWindow.document.reload();
    // document.getElementById("").style.visibility = "visible";
    // document.getElementById("markBtn").classList.remove('style1');

    // document.getElementById("markBtn").classList.add('style2');
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
