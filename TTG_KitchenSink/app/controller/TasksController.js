/*
 * File: app/controller/TasksController.js
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

Ext.define('TouchTreeGrid.controller.TasksController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Task'
        ],
        stores: [
            'TaskAccordion',
            'Task2Store',
            'Task3Store'
        ],
        views: [
            'AccordionCont',
            'Task2Cont',
            'Task3Cont'
        ],

        refs: {
            accordionCont: {
                autoCreate: true,
                selector: 'accordionCont',
                xtype: 'accordionCont'
            },
            task2Cont: {
                autoCreate: true,
                selector: 'task2Cont',
                xtype: 'task2Cont'
            },
            task3Cont: {
                autoCreate: true,
                selector: 'task3Cont',
                xtype: 'task3Cont'
            }
        },

        control: {
            "container#task2": {
                leafItemTap: 'onTask2LeafItemTap',
                nodeItemTap: 'onTask2NodeItemTap'
            },
            "container#task3": {
                leafItemTap: 'onTask3LeafItemTap'
            }
        }
    },

    onTask2LeafItemTap: function(me, list, index, target, record, e) {
        Ext.Msg.alert('You tapped leaf! : ' + record.get('text'));

    },

    onTask2NodeItemTap: function(me, list, index, target, record, e) {
        Ext.Msg.alert('You tapped Node! : ' + record.get('text'));

    },

    onTask3LeafItemTap: function(me, list, index, target, record, e) {
        Ext.Msg.alert('You tapped leaf! : ' + record.get('text'));

    }

});