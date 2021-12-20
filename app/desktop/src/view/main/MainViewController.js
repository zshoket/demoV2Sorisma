Ext.define("SORISMA.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",

  routes: {
    ":xtype": { action: "mainRoute" },
    "homeview/:id": {
      action: "showUsecase",
      conditions: {
        ":id": "([0-9]+)",
      },
    },
    "dataview/:id": {
      action: "showDataOfRisiko",
      conditions: {
        ":id": "([0-9]+)",
      },
    },
    "felderpanelview/:id": {
      action: "showFelderData",
      conditions: {
        ":id": "([0-9]+)",
      },
    },
  },

  showUsecase: function (id) {
    var me = this;

    me.getViewModel().set("main_activeID", id);
    var centerview = me.lookup("centerview");
    var navview = this.lookup("navview");
    var menuview = navview.items.items[0];
    var node = menuview.getStore().findNode("xtype", "homeview");
    if (!centerview.getComponent("homeview")) {
      centerview.add({
        xtype: "homeview",
        itemId: "homeview",
        heading: node.get("text"),
      });
    }
    centerview.setActiveItem("homeview");
    var vm = this.getViewModel();
    vm.set("heading", node.get("text"));

    var homeview = Ext.getCmp("homeview");
    if (homeview) {
      var homeController = homeview.getController();
      homeController.reloadData();
    }
    menuview.setSelection(node);
  },

  showDataOfRisiko: function (id) {
    var me = this;

    me.getViewModel().set("main_risikoID", id);
    var centerview = me.lookup("centerview");
    var navview = this.lookup("navview");
    var menuview = navview.items.items[0];
    var node = menuview.getStore().findNode("xtype", "dataview");
    if (!centerview.getComponent("dataview")) {
      centerview.add({
        xtype: "dataview",
        itemId: "dataview",
        heading: node.get("text"),
      });
    }
    centerview.setActiveItem("dataview");
    var vm = this.getViewModel();
    vm.set("heading", node.get("text"));

    var dataview = centerview.query("dataview")[0];
    if (dataview) {
      var dataController = dataview.getController();
      dataController.reloadRiskData();
    }
    menuview.setSelection(node);
  },

  showFelderData: function (id) {
    var me = this;

    me.getViewModel().set("main_felderID", id);
    var centerview = me.lookup("centerview");
    var navview = this.lookup("navview");
    var menuview = navview.items.items[0];
    var node = menuview.getStore().findNode("xtype", "felderpanelview");
    if (!centerview.getComponent("felderpanelview")) {
      centerview.add({
        xtype: "felderpanelview",
        itemId: "felderpanelview",
        heading: node.get("text"),
      });
    }
    centerview.setActiveItem("felderpanelview");
    var vm = this.getViewModel();
    vm.set("heading", node.get("text"));

    var felderview = centerview.query("felderpanelview")[0];
    if (felderview) {
      var felderController = felderview.getController();
      felderController.reloadFelderData();
    }
    menuview.setSelection(node);
  },

  mainRoute: function (xtype) {
    var navview = this.lookup("navview");
    var menuview = navview.items.items[0];

    var centerview = this.lookup("centerview");
    var exists = Ext.ClassManager.getByAlias("widget." + xtype);
    if (exists === undefined) {
      console.log(xtype + " does not exist");
      return;
    }
    var node = menuview.getStore().findNode("xtype", xtype);
    if (node == null) {
      console.log("unmatchedRoute: " + xtype);
      return;
    }
    if (!centerview.getComponent(xtype)) {
      centerview.add({
        xtype: xtype,
        itemId: xtype,
        heading: node.get("text"),
      });
    }

    var homeview = Ext.getCmp("homeview");
    if (homeview) {
      var homeController = homeview.getController();
      homeController.reloadData();
    }

    var dataview = Ext.getCmp("dataview");
    if (dataview) {
      var dataController = dataview.getController();
      dataController.reloadRiskData();
    }

    var felderview = Ext.getCmp("felderpanelview");
    if (felderview) {
      var felderController = felderview.getController();
      felderController.reloadFelderData();
    }

    centerview.setActiveItem(xtype);
    menuview.setSelection(node);
    var vm = this.getViewModel();
    vm.set("heading", node.get("text"));
  },

  onMenuViewSelectionChange: function (tree, node) {
    if (node == null) {
      return;
    }
    var nodeXtype = node.get("xtype");
    var vm = this.getViewModel();
    if (nodeXtype != undefined) {
      if (!document.location.hash.includes(nodeXtype)) {
        if (nodeXtype === "homeview") {
          var activeID = vm.get("main_activeID");
          this.redirectTo(nodeXtype + "/" + activeID);
        } else if (nodeXtype === "dataview") {
          var activeriskID = vm.get("main_risikoID");
          this.redirectTo(nodeXtype + "/" + activeriskID);
        } else if (nodeXtype === "felderpanelview") {
          var activefelderID = vm.get("main_felderID");
          this.redirectTo(nodeXtype + "/" + activefelderID);
        } else {
          this.redirectTo(nodeXtype);
        }
      }
    }
  },

  onTopViewNavToggle: function () {
    var vm = this.getViewModel();
    vm.set("navCollapsed", !vm.get("navCollapsed"));
  },

  /* onHeaderViewDetailToggle: function (button) {
          var vm = this.getViewModel();
          vm.set('detailCollapsed', !vm.get('detailCollapsed'));
          if(vm.get('detailCollapsed')===true) {
              button.setIconCls('x-fa fa-arrow-left');
          }
          else {
              button.setIconCls('x-fa fa-arrow-right');
          }
      }, */

  showInfo: function (button) {
    var lastPart = window.location.href.split("/").pop();

    if (lastPart == "#startview") {
      Ext.Msg.show({
        title: "Information",
        message: "Start Page Details dazu hier",
        width: 300,
        buttons: Ext.MessageBox.CANCEL,
        icon: Ext.MessageBox.INFO,
        multiLine: true,
        prompt: { maxlength: 280, autocapitalize: true },
      });
    } else if (lastPart == "#reifegrad") {
      Ext.Msg.show({
        title: "Information",
        message: "Reifegrad Details dazu hier",
        width: 300,
        buttons: Ext.MessageBox.CANCEL,
        icon: Ext.MessageBox.INFO,
        multiLine: true,
        prompt: { maxlength: 280, autocapitalize: true },
      });
    } else if (lastPart == "#d3Sunburst") {
      Ext.Msg.show({
        title: "Information",
        message: "RadarChart Details dazu hier",
        width: 300,
        buttons: Ext.MessageBox.CANCEL,
        icon: Ext.MessageBox.INFO,
        multiLine: true,
        prompt: { maxlength: 280, autocapitalize: true },
      });
    } else if (lastPart == "#merklistview") {
      Ext.Msg.show({
        title: "Information",
        message: "Merkliste Details dazu hier",
        width: 300,
        buttons: Ext.MessageBox.CANCEL,
        icon: Ext.MessageBox.INFO,
        multiLine: true,
        prompt: { maxlength: 280, autocapitalize: true },
      });
    } else if (lastPart == "#graphicview") {
      Ext.Msg.show({
        title: "Information",
        message: "Graphicview Details dazu hier",
        width: 300,
        buttons: Ext.MessageBox.CANCEL,
        icon: Ext.MessageBox.INFO,
        multiLine: true,
        prompt: { maxlength: 280, autocapitalize: true },
      });
    }
    // else if (lastPart == "#homeview/0") {
    //   Ext.Msg.show({
    //     title: "Information",
    //     message: "Stecbrief Details dazu hier",
    //     width: 300,
    //     buttons: Ext.MessageBox.CANCEL,
    //     icon: Ext.MessageBox.INFO,
    //     multiLine: true,
    //     prompt: { maxlength: 280, autocapitalize: true },
    //   });
    // }
    else if (lastPart >= 0 && lastPart <= 10) {
      Ext.Msg.show({
        title: "Information",
        message: "FelderPanel Details dazu hier",
        width: 300,
        buttons: Ext.MessageBox.CANCEL,
        icon: Ext.MessageBox.INFO,
        multiLine: true,
        prompt: { maxlength: 280, autocapitalize: true },
      });
    } else if (lastPart == "#risikomatrix") {
      Ext.Msg.show({
        title: "Information",
        message: "Risikobewurtung Details dazu hier",
        width: 300,
        buttons: Ext.MessageBox.CANCEL,
        icon: Ext.MessageBox.INFO,
        multiLine: true,
        prompt: { maxlength: 280, autocapitalize: true },
      });
    }
  },

  onBottomViewlogout: function () {
    localStorage.setItem("LoggedIn", false);
    this.getView().destroy();
    Ext.Viewport.add([{ xtype: "loginview" }]);
  },

  testFn: function (node, prevNode, eOpts) {
    var myNode = node.getSelection();
    var data = myNode.getData();
    var uri = data.xtype;

    this.redirectTo("#" + uri);
  },

  //	onActionsViewLogoutTap: function( ) {
  //		var vm = this.getViewModel();
  //		vm.set('firstname', '');
  //		vm.set('lastname', '');
  //
  //		Session.logout(this.getView());
  //		this.redirectTo(AppCamp.getApplication().getDefaultToken().toString(), true);
  //	}
});
