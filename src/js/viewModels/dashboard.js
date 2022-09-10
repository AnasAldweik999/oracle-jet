/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['../accUtils', "require", "exports", "knockout",
  "ojs/ojbootstrap", "ojs/ojarraydataprovider",
  "text!../json/departmentData.json", "ojs/ojcore",
  "ojs/ojtable", "ojs/ojknockout", "ojs/ojchart"],
  function (accUtils, require, exports, ko, ojbootstrap_1, ArrayDataProvider, deptData, oj) {
    "use strict";

    function DashboardViewModel() {

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.');
        document.title = "Dashboard";
        // Implement further logic if needed



      };
      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };

      this.threeDValue = ko.observable("off");
      this.numSeries = 5;
      this.valueCache = {};
      this.getValue = (id) => {
        let value = this.valueCache[id];
        if (value != null)
          return value;
        else {
          value = 10 + Math.round(Math.random() * 50);
          this.valueCache[id] = value;
          return value;
        }
      };
      this.getData = () => {
        const data = [];
        for (let i = 1; i < this.numSeries + 1; i++) {
          data.push({
            id: i,
            series: `Series ${i}`,
            group: "Group 1",
            value: this.getValue(i),
          });
        }
        return data;
      };
      this.chartData = ko.observableArray(this.getData());
      this.dataProvider = new ArrayDataProvider(this.chartData, {
        keyAttributes: "id",
      });



    }

    return DashboardViewModel;
  }


);
