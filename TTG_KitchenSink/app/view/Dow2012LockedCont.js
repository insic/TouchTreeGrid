/*
 * File: app/view/Dow2012LockedCont.js
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

Ext.define('TouchTreeGrid.view.Dow2012LockedCont', {
    extend: 'Ext.Container',
    alias: 'widget.dow2012LockedCont',

    requires: [
        'Ext.Container'
    ],

    config: {
        itemId: 'dow2012LockedCont',
        layout: 'hbox',
        items: [
            {
                xtype: 'touchtreegrid',
                store: 'dow2012store',
                columns: [
                    {
                        header: 'Close<br>Date',
                        dataIndex: 'CloseDate',
                        width: '100px',
                        // total grid width must be pixels to work with thumb currently
                        style: 'text-align: center; font-weight: bold; color: #008abc; border-right: none;',
                        styleSorted: 'text-align: center; font-weight: bold; color: #008abc; border-right: none; background-color: #dedede',
                        headerStyle: 'text-align: center; border-right: none',
                        headerStyleSorted: 'text-align: center; background-color: #dedede',
                        renderer: 'Ext.Date.format(values.CloseDate, "n/j/Y")',
                        sortable: true,
                        addDataIndexToDiv: true
                    },
                    {
                        header: 'Close<br>Price',
                        dataIndex: 'Close',
                        width: '70px',
                        // total grid width must be pixels to work with thumb currently
                        style: 'text-align: right;font-weight: bold; padding-right: .4em;',
                        styleSorted: 'text-align: right;font-weight: bold; padding-right: .4em; background-color: #dedede',
                        headerStyle: 'text-align: center;',
                        headerStyleSorted: 'text-align: center; background-color: #dedede',
                        renderer: 'this.formatNumbers(values.Close, 0)',
                        sortable: true,
                        addDataIndexToDiv: true// test cell tapping for Close Price 
                    }
                ],
                header: {
                    maxHeight: '3.2em',
                    minHeight: '3.2em'
                },
                variableHeights: false,
                listItemId: 'dow2012LockedlistX',
                helpHtml: './resources/html/Dow2012Locked.html',
                simpleList: true,
                columnSorting: true,
                linkedGridsParentItemId: 'dow2012LockedCont',
                linkedGridsArr: [
                    {
                        itemId: 'dow2012Locked'
                    }
                ],
                includeThumb: true,
                thumbConfig: {
                    className: 'Ext.Button',
                    height: '30px',
                    width: '25px',
                    offset: '2px',
                    top: '5px',
                    text: '',
                    iconCls: 'fa-exchange',
                    style: 'padding: 0;background-color: #605d52; opacity:0.85; border-radius: .5em; border: 1px solid transparent;'
                },
                cls: [
                    'x-touchtreegrid-list',
                    'x-touchtreegrid-list-dow2012Horiz'
                ],
                itemId: 'dow2012LockedX',
                style: 'border-right: 2px solid gray;',
                width: '170px'
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                scrollable: {
                    direction: 'horizontal',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'touchtreegrid',
                        store: 'dow2012store',
                        columns: [
                            {
                                header: 'Open<br>Price',
                                dataIndex: 'Open',
                                width: '4.375em',
                                style: 'text-align: right;font-weight: normal; padding-right: .4em;',
                                styleSorted: 'text-align: right;font-weight: bold; padding-right: .4em; background-color: #dedede',
                                headerStyle: 'text-align: center;',
                                headerStyleSorted: 'text-align: center; background-color: #dedede',
                                renderer: 'this.formatNumbers(values.Open, 0)',
                                sortable: true
                            },
                            {
                                header: 'High<br>Price',
                                dataIndex: 'High',
                                width: '4.375em',
                                style: 'text-align: right;font-weight: normal; padding-right: .4em;',
                                styleSorted: 'text-align: right;font-weight: bold; padding-right: .4em; background-color: #dedede',
                                headerStyle: 'text-align: center;',
                                headerStyleSorted: 'text-align: center; background-color: #dedede',
                                renderer: 'this.formatNumbers(values.High, 0)',
                                sortable: true
                            },
                            {
                                header: 'Low<br>Price',
                                dataIndex: 'Low',
                                width: '4.375em',
                                style: 'text-align: right;font-weight: normal; padding-right: .4em;',
                                styleSorted: 'text-align: right;font-weight: bold; padding-right: .4em; background-color: #dedede',
                                headerStyle: 'text-align: center;',
                                headerStyleSorted: 'text-align: center; background-color: #dedede',
                                renderer: 'this.formatNumbers(values.Low, 0)',
                                sortable: true
                            },
                            {
                                header: '<br>Volume',
                                dataIndex: 'Volume',
                                width: '5.625em',
                                style: 'text-align: right;font-weight: normal; padding-right: .4em; border-right: 1px solid #9b9b9b',
                                styleSorted: 'text-align: right;font-weight: bold; padding-right: .4em; background-color: #dedede',
                                headerStyle: 'text-align: center;',
                                headerStyleSorted: 'text-align: center; background-color: #dedede',
                                renderer: 'this.formatNumbers(values.Volume, 0)',
                                sortable: true
                            },
                            {
                                header: '<br>Chg',
                                dataIndex: 'Chg',
                                width: '3.125em',
                                style: 'text-align: right;font-weight: normal; padding-right: .4em;',
                                styleSorted: 'text-align: right;font-weight: bold; padding-right: .4em; background-color: #dedede',
                                headerStyle: 'text-align: center;',
                                headerStyleSorted: 'text-align: center; background-color: #dedede',
                                renderer: 'this.renderer_formatWithColor(values.Chg, 0)',
                                sortable: true
                            },
                            {
                                header: '<br>Chg%',
                                dataIndex: 'ChgPct',
                                width: '4.375em',
                                style: 'text-align: right;font-weight: normal; padding-right: .4em;',
                                styleSorted: 'text-align: right;font-weight: bold; padding-right: .4em; background-color: #dedede',
                                headerStyle: 'text-align: center;',
                                headerStyleSorted: 'text-align: center; background-color: #dedede',
                                renderer: 'this.renderer_formatWithColor(values.ChgPct, 2, "", "%")',
                                sortable: true
                            }
                        ],
                        header: {
                            maxHeight: '3.2em',
                            minHeight: '3.2em'
                        },
                        variableHeights: false,
                        listItemId: 'dow2012Lockedlist',
                        renderers: {
                            renderer_formatWithColor: function (value, decPlaces, prefix, suffix, thouSeparator, decSeparator)
                        {var clr = (value >= 0) ? 'green' : 'red';
                        return '<span style="color:' + clr + ';">' + this.formatNumbers(value, decPlaces, prefix, suffix, thouSeparator, decSeparator) +
                            '</span>';}
                        },
                        helpHtml: './resources/html/Dow2012Locked.html',
                        simpleList: true,
                        columnSorting: true,
                        linkedGridsParentItemId: 'dow2012LockedCont',
                        linkedGridsArr: [
                            {
                                itemId: 'dow2012LockedX'
                            }
                        ],
                        cls: [
                            'x-touchtreegrid-list',
                            'x-touchtreegrid-list-dow2012Horiz'
                        ],
                        itemId: 'dow2012Locked',
                        minWidth: '26em',
                        width: '26em'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();
        var me = this;

        // Ensure that thumb gets created due to timing issues for some scenarios
        me.down('#dow2012LockedX').prepLinkedGridsArr();
    }

});