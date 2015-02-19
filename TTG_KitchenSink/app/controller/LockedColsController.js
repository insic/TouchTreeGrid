/*
 * File: app/controller/LockedColsController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.controller.LockedColsController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Census',
            'BigDataModel',
            'Dow2012'
        ],
        stores: [
            'CensusFreezeStore',
            'BigDataStore',
            'Dow2012'
        ],
        views: [
            'BigDataCont',
            'Dow2012LockedCont',
            'CensusFreezeCont'
        ],

        refs: {
            censusFreezeCont: {
                autoCreate: true,
                selector: 'censusFreezeCont',
                xtype: 'censusFreezeCont'
            },
            dow2012LockedCont: {
                autoCreate: true,
                selector: 'dow2012LockedCont',
                xtype: 'dow2012LockedCont'
            },
            bigDataCont: {
                autoCreate: true,
                selector: 'bigDataCont',
                xtype: 'bigDataCont'
            }
        },

        control: {
            "container#censusFreezeCont": {
                handlePinch: 'onCensusFreezeContHandlePinch'
            },
            "button": {
                tap: 'onSimButtonTap'
            }
        }
    },

    onCensusFreezeContHandlePinch: function(container,e, profile) {
        //Ext.Msg.alert('Scale: ' + e.scale.toString());  // used when testing on mobile device

        var gridcont, gridcontX, listItemId, listItemIdX, gridlist, gridlistX,
            i, j, pArr, pArrX, newIdx, priorIdx, profile, priorProfile, scale, colArrX;

        gridcont = container.down('#censusfreeze');
        gridcontX = container.down('#censusfreezeX');

        listItemId = gridcont.getListItemId();
        listItemIdX = gridcontX.getListItemId();

        gridlist = gridcont.down('#'+listItemId);
        gridlistX = gridcontX.down('#'+listItemIdX);


        priorProfile = gridcont.config.activeProfile;

        pArr = gridcont.config.profileConfigArr;
        pArrX = gridcontX.config.profileConfigArr;

        for (i=0; i<pArr.length; i++) {  // Up to developer to order profileConfigArr[] consistently across grids
            if (pArr[i].profile === priorProfile) {
                priorIdx = i;
            }
            if (!e && pArr[i].profile === profile) {
                newIdx = i;
            }
        }

        if (e){  // Processing pinch event
            scale = e.scale;
            if (scale > 1) {
                // expand
                if (priorIdx >= pArr.length-1) {return;}  // can't expand further
                newIdx = priorIdx+1;
                gridcont.config.activeProfile = pArr[newIdx].profile;
            }
            if (scale < 1) {
                // shrink
                if (priorIdx === 0) {return;}  // can't shrinnk further
                newIdx = priorIdx-1;
                gridcont.config.activeProfile = pArr[newIdx].profile;
            }
            var btns = container.down('#simButtons');
            btns.setPressedButtons([newIdx]);
        }
        else {
            gridcont.config.activeProfile = profile;  // Updated via button press
        }

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Resizing...'
        });

        // Remove any CLS applied for other profiles
        for (i=0; i<pArr.length; i++) {
            if (!Ext.isEmpty(pArr[i].addCls)) {
                gridcont.removeCls(pArr[i].addCls);
            }
        }
        // Add new CLS
        if (!Ext.isEmpty(pArr[newIdx].addCls)) {
            gridcont.addCls(pArr[newIdx].addCls);
        }

        // Remove any CLS applied for other profiles
        for (i=0; i<pArrX.length; i++) {
            if (!Ext.isEmpty(pArrX[i].addCls)) {
                gridcontX.removeCls(pArrX[i].addCls);
            }
        }
        // Add new CLS
        if (!Ext.isEmpty(pArrX[newIdx].addCls)) {
            gridcontX.addCls(pArrX[newIdx].addCls);
        }

        gridlist.setItemHeight(pArr[newIdx].itemHeight);
        gridlistX.setItemHeight(pArr[newIdx].itemHeight);

        gridcont.setWidth(pArr[newIdx].width);
        gridlist.setWidth(pArr[newIdx].width);

        gridcont.setMinWidth(pArr[newIdx].minWidth);
        gridlist.setMinWidth(pArr[newIdx].minWidth);


        this.loadColumnsCensusFreeze(gridcont);

        gridcontX.doRefreshList(true);   // Don't change collapse levels when refreshing

        Ext.Function.defer(function(){
           Ext.Viewport.setMasked(false);
        }, 500);

    },

    onSimButtonTap: function(button, e, eOpts) {
         if (button.config.buttonGroup !== 'simButtons'){return;}

        var profile = button.config.profile;

        var container = this.getCensusFreezeCont();

        this.onCensusFreezeContHandlePinch(container, null, profile);
    },

    loadCensusFreezeStore: function() {
        var me = this;

        var gridcont = me.getCensusFreezeCont().down('#censusfreeze');
        var gridurl = './data/censusmaine2000TREE.json';

        commonController.loadStore(me, gridcont, gridurl, 'Loading Census...');

    },

    loadColumnsCensusFreeze: function(gridcont, noRefresh) {
        var activeProfile = gridcont.config.activeProfile;

        if (activeProfile === 'default') {
            var colArr = [
            {
                header: "Total",
                dataIndex: "TotalPopulation",
                width: "100px",
                renderer: "this.formatNumbers(values.TotalPopulation, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Male",
                dataIndex: "Male",
                width: "100px",
                renderer: "this.formatNumbers(values.Male, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Female",
                dataIndex: "Female",
                width: "100px",
                renderer: "this.formatNumbers(values.Female, 0)",
                style: "text-align:  right;"
            },
            {
                header: "<5yrs",
                dataIndex: "Under5years",
                width: "100px",
                renderer: "this.formatNumbers(values.Under5years, 0)",
                style: "text-align:  right;"
            },
            {
                header: "5-9",
                dataIndex: "Age5to9",
                width: "100px",
                renderer: "this.formatNumbers(values.Age5to9, 0)",
                style: "text-align:  right;"
            },
            {
                header: "10-14",
                dataIndex: "Age10to14",
                width: "100px",
                renderer: "this.formatNumbers(values.Age10to14, 0)",
                style: "text-align:  right;"
            },
            {
                header: "15-19",
                dataIndex: "Age15to19",
                width: "100px",
                renderer: "this.formatNumbers(values.Age15to19, 0)",
                style: "text-align:  right;"
            },
            {
                header: "20-24",
                dataIndex: "Age20to24",
                width: "100px",
                renderer: "this.formatNumbers(values.Age20to24, 0)",
                style: "text-align:  right;"
            },
            {
                header: "25-34",
                dataIndex: "Age25to34",
                width: "100px",
                renderer: "this.formatNumbers(values.Age25to34, 0)",
                style: "text-align:  right;"
            },
            {
                header: "35-44",
                dataIndex: "Age35to44",
                width: "100px",
                renderer: "this.formatNumbers(values.Age35to44, 0)",
                style: "text-align:  right;"
            },
            {
                header: "45-54",
                dataIndex: "Age45to54",
                width: "100px",
                renderer: "this.formatNumbers(values.Age45to54, 0)",
                style: "text-align:  right;"
            },
            {
                header: "55-59",
                dataIndex: "Age55to59",
                width: "100px",
                renderer: "this.formatNumbers(values.Age55to59, 0)",
                style: "text-align:  right;"
            },
            {
                header: "60-64",
                dataIndex: "Age60to64",
                width: "100px",
                renderer: "this.formatNumbers(values.Age60to64, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65-74",
                dataIndex: "Age65to74",
                width: "100px",
                renderer: "this.formatNumbers(values.Age65to74, 0)",
                style: "text-align:  right;"
            },
            {
                header: "75-84",
                dataIndex: "Age75to84",
                width: "100px",
                renderer: "this.formatNumbers(values.Age75to84, 0)",
                style: "text-align:  right;"
            },
            {
                header: "85+",
                dataIndex: "Age85andOver",
                width: "100px",
                renderer: "this.formatNumbers(values.Age85andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Median",
                dataIndex: "MedianAge",
                width: "100px",
                renderer: "this.formatNumbers(values.MedianAge, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+",
                dataIndex: "Age18andOver",
                width: "100px",
                renderer: "this.formatNumbers(values.Age18andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+ Male",
                dataIndex: "Age18andOverMale",
                width: "100px",
                renderer: "this.formatNumbers(values.Age18andOverMale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+ Fem",
                dataIndex: "Age18andOverFemale",
                width: "100px",
                renderer: "this.formatNumbers(values.Age18andOverFemale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "21+",
                dataIndex: "Age21andOver",
                width: "100px",
                renderer: "this.formatNumbers(values.Age21andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "62+",
                dataIndex: "Age62andOver",
                width: "100px",
                renderer: "this.formatNumbers(values.Age62andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+",
                dataIndex: "Age65andOver",
                width: "100px",
                renderer: "this.formatNumbers(values.Age65andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+ Male",
                dataIndex: "Age65andOverMale",
                width: "100px",
                renderer: "this.formatNumbers(values.Age65andOverMale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+ Fem",
                dataIndex: "Age65andOverFemale",
                width: "100px",
                renderer: "this.formatNumbers(values.Age65andOverFemale, 0)",
                style: "text-align:  center;"
            }
            ];
        }


        if (activeProfile === 'small') {
            var colArr = [
            {
                header: "Total",
                dataIndex: "TotalPopulation",
                width: "70px",
                renderer: "this.formatNumbers(values.TotalPopulation, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Male",
                dataIndex: "Male",
                width: "70px",
                renderer: "this.formatNumbers(values.Male, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Female",
                dataIndex: "Female",
                width: "70px",
                renderer: "this.formatNumbers(values.Female, 0)",
                style: "text-align:  right;"
            },
            {
                header: "<5yrs",
                dataIndex: "Under5years",
                width: "70px",
                renderer: "this.formatNumbers(values.Under5years, 0)",
                style: "text-align:  right;"
            },
            {
                header: "5-9",
                dataIndex: "Age5to9",
                width: "70px",
                renderer: "this.formatNumbers(values.Age5to9, 0)",
                style: "text-align:  right;"
            },
            {
                header: "10-14",
                dataIndex: "Age10to14",
                width: "70px",
                renderer: "this.formatNumbers(values.Age10to14, 0)",
                style: "text-align:  right;"
            },
            {
                header: "15-19",
                dataIndex: "Age15to19",
                width: "70px",
                renderer: "this.formatNumbers(values.Age15to19, 0)",
                style: "text-align:  right;"
            },
            {
                header: "20-24",
                dataIndex: "Age20to24",
                width: "70px",
                renderer: "this.formatNumbers(values.Age20to24, 0)",
                style: "text-align:  right;"
            },
            {
                header: "25-34",
                dataIndex: "Age25to34",
                width: "70px",
                renderer: "this.formatNumbers(values.Age25to34, 0)",
                style: "text-align:  right;"
            },
            {
                header: "35-44",
                dataIndex: "Age35to44",
                width: "70px",
                renderer: "this.formatNumbers(values.Age35to44, 0)",
                style: "text-align:  right;"
            },
            {
                header: "45-54",
                dataIndex: "Age45to54",
                width: "70px",
                renderer: "this.formatNumbers(values.Age45to54, 0)",
                style: "text-align:  right;"
            },
            {
                header: "55-59",
                dataIndex: "Age55to59",
                width: "70px",
                renderer: "this.formatNumbers(values.Age55to59, 0)",
                style: "text-align:  right;"
            },
            {
                header: "60-64",
                dataIndex: "Age60to64",
                width: "70px",
                renderer: "this.formatNumbers(values.Age60to64, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65-74",
                dataIndex: "Age65to74",
                width: "70px",
                renderer: "this.formatNumbers(values.Age65to74, 0)",
                style: "text-align:  right;"
            },
            {
                header: "75-84",
                dataIndex: "Age75to84",
                width: "70px",
                renderer: "this.formatNumbers(values.Age75to84, 0)",
                style: "text-align:  right;"
            },
            {
                header: "85+",
                dataIndex: "Age85andOver",
                width: "70px",
                renderer: "this.formatNumbers(values.Age85andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Median",
                dataIndex: "MedianAge",
                width: "70px",
                renderer: "this.formatNumbers(values.MedianAge, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+",
                dataIndex: "Age18andOver",
                width: "70px",
                renderer: "this.formatNumbers(values.Age18andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+ Male",
                dataIndex: "Age18andOverMale",
                width: "70px",
                renderer: "this.formatNumbers(values.Age18andOverMale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+ Fem",
                dataIndex: "Age18andOverFemale",
                width: "70px",
                renderer: "this.formatNumbers(values.Age18andOverFemale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "21+",
                dataIndex: "Age21andOver",
                width: "70px",
                renderer: "this.formatNumbers(values.Age21andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "62+",
                dataIndex: "Age62andOver",
                width: "70px",
                renderer: "this.formatNumbers(values.Age62andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+",
                dataIndex: "Age65andOver",
                width: "70px",
                renderer: "this.formatNumbers(values.Age65andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+ Male",
                dataIndex: "Age65andOverMale",
                width: "70px",
                renderer: "this.formatNumbers(values.Age65andOverMale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+ Fem",
                dataIndex: "Age65andOverFemale",
                width: "70px",
                renderer: "this.formatNumbers(values.Age65andOverFemale, 0)",
                style: "text-align:  center;"
            }
            ];
        }


        if (activeProfile === 'large') {
            var colArr = [
            {
                header: "Total",
                dataIndex: "TotalPopulation",
                width: "130px",
                renderer: "this.formatNumbers(values.TotalPopulation, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Male",
                dataIndex: "Male",
                width: "130px",
                renderer: "this.formatNumbers(values.Male, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Female",
                dataIndex: "Female",
                width: "130px",
                renderer: "this.formatNumbers(values.Female, 0)",
                style: "text-align:  right;"
            },
            {
                header: "<5yrs",
                dataIndex: "Under5years",
                width: "130px",
                renderer: "this.formatNumbers(values.Under5years, 0)",
                style: "text-align:  right;"
            },
            {
                header: "5-9",
                dataIndex: "Age5to9",
                width: "130px",
                renderer: "this.formatNumbers(values.Age5to9, 0)",
                style: "text-align:  right;"
            },
            {
                header: "10-14",
                dataIndex: "Age10to14",
                width: "130px",
                renderer: "this.formatNumbers(values.Age10to14, 0)",
                style: "text-align:  right;"
            },
            {
                header: "15-19",
                dataIndex: "Age15to19",
                width: "130px",
                renderer: "this.formatNumbers(values.Age15to19, 0)",
                style: "text-align:  right;"
            },
            {
                header: "20-24",
                dataIndex: "Age20to24",
                width: "130px",
                renderer: "this.formatNumbers(values.Age20to24, 0)",
                style: "text-align:  right;"
            },
            {
                header: "25-34",
                dataIndex: "Age25to34",
                width: "130px",
                renderer: "this.formatNumbers(values.Age25to34, 0)",
                style: "text-align:  right;"
            },
            {
                header: "35-44",
                dataIndex: "Age35to44",
                width: "130px",
                renderer: "this.formatNumbers(values.Age35to44, 0)",
                style: "text-align:  right;"
            },
            {
                header: "45-54",
                dataIndex: "Age45to54",
                width: "130px",
                renderer: "this.formatNumbers(values.Age45to54, 0)",
                style: "text-align:  right;"
            },
            {
                header: "55-59",
                dataIndex: "Age55to59",
                width: "130px",
                renderer: "this.formatNumbers(values.Age55to59, 0)",
                style: "text-align:  right;"
            },
            {
                header: "60-64",
                dataIndex: "Age60to64",
                width: "130px",
                renderer: "this.formatNumbers(values.Age60to64, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65-74",
                dataIndex: "Age65to74",
                width: "130px",
                renderer: "this.formatNumbers(values.Age65to74, 0)",
                style: "text-align:  right;"
            },
            {
                header: "75-84",
                dataIndex: "Age75to84",
                width: "130px",
                renderer: "this.formatNumbers(values.Age75to84, 0)",
                style: "text-align:  right;"
            },
            {
                header: "85+",
                dataIndex: "Age85andOver",
                width: "130px",
                renderer: "this.formatNumbers(values.Age85andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "Median",
                dataIndex: "MedianAge",
                width: "130px",
                renderer: "this.formatNumbers(values.MedianAge, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+",
                dataIndex: "Age18andOver",
                width: "130px",
                renderer: "this.formatNumbers(values.Age18andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+ Male",
                dataIndex: "Age18andOverMale",
                width: "130px",
                renderer: "this.formatNumbers(values.Age18andOverMale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "18+ Fem",
                dataIndex: "Age18andOverFemale",
                width: "130px",
                renderer: "this.formatNumbers(values.Age18andOverFemale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "21+",
                dataIndex: "Age21andOver",
                width: "130px",
                renderer: "this.formatNumbers(values.Age21andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "62+",
                dataIndex: "Age62andOver",
                width: "130px",
                renderer: "this.formatNumbers(values.Age62andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+",
                dataIndex: "Age65andOver",
                width: "130px",
                renderer: "this.formatNumbers(values.Age65andOver, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+ Male",
                dataIndex: "Age65andOverMale",
                width: "130px",
                renderer: "this.formatNumbers(values.Age65andOverMale, 0)",
                style: "text-align:  right;"
            },
            {
                header: "65+ Fem",
                dataIndex: "Age65andOverFemale",
                width: "130px",
                renderer: "this.formatNumbers(values.Age65andOverFemale, 0)",
                style: "text-align:  center;"
            }
            ];
        }

        gridcont.setColumns(colArr);
        if (!noRefresh) {
            gridcont.doRefreshList(true);   // Don't change collapse levels when refreshing
        }

    }

});