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
    window.frames[0].location.reload();
  },

  addToList: function () {
    var renderEl = this.element.down(".renderEl"),
      button = this.add({
        xtype: "button",
        text: "Sample",
      });
    renderEl.appendChild(button.element);
  },
});
