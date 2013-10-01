/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    stores: [
        'optionDates'
    ],
    views: [
        'CalendarPicker',
        'DateExamples',
        'overlayPanel',
        'matrixView',
        'matrixViewPhone',
        'yearMonthSelect',
        'TouchTreeGrid'
    ],
    controllers: [
        'DateExamplesController',
        'calendarDetailController'
    ],
    name: 'CalendarPicker',

    launch: function() {

        Ext.create('CalendarPicker.view.DateExamples', {fullscreen: true});
    }

});
