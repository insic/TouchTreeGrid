/*
 * File: app/view/DateExamples.js
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

Ext.define('CalendarPicker.view.DateExamples', {
    extend: 'Ext.Container',
    alias: 'widget.dateexamples',

    requires: [
        'Ext.Toolbar',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.Img'
    ],

    config: {
        itemId: 'dateexamples',
        style: 'background: white;',
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                cls: 'kayak-toolbar',
                docked: 'top',
                itemId: 'appTitle',
                ui: 'plain',
                title: 'Calendar Picker Examples'
            },
            {
                xtype: 'container',
                itemId: 'firstSet',
                style: 'background: white;',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'container',
                        height: '4em',
                        itemId: 'language',
                        maxWidth: '100%',
                        width: '20em',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'fieldset',
                                maxWidth: '90%',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'languageSelect',
                                        label: 'Language',
                                        labelWidth: '6em',
                                        value: 'en',
                                        displayField: 'language',
                                        store: 'languageStore',
                                        usePicker: false,
                                        valueField: 'code'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: '6em',
                        itemId: 'example1',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2em',
                                margin: '1em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar.png'
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: '1.5em',
                                        html: 'CHECK IN',
                                        style: 'padding-top: .2em; font-size: .8em; color: orange;'
                                    },
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('checkin', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        flex: 1,
                                        cls: 'kayak-button',
                                        height: '2.5em',
                                        itemId: 'checkin_btn',
                                        maxHeight: '2.5em',
                                        maxWidth: '8em',
                                        minHeight: '2.5em',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'kayak-button-dayname-month',
                                                itemId: 'checkin_dayname_month'
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: 'kayak-button-select',
                                                html: 'Select',
                                                itemId: 'checkin_day'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: '1.5em',
                                        html: 'CHECK OUT',
                                        style: 'padding-top: .2em; font-size: .8em; color: orange;'
                                    },
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('checkout', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        flex: 1,
                                        cls: 'kayak-button',
                                        height: '2.5em',
                                        itemId: 'checkout_btn',
                                        maxHeight: '2.5em',
                                        maxWidth: '8em',
                                        minHeight: '2.5em',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'kayak-button-dayname-month',
                                                itemId: 'checkout_dayname_month'
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: 'kayak-button-select',
                                                html: 'Select',
                                                itemId: 'checkout_day'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                height: '',
                                html: 'Kayak Droid/IOS-style selection (collapsible)',
                                maxHeight: '3em',
                                maxWidth: '75%',
                                minHeight: '1.5em',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: '6em',
                        itemId: 'example2',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2em',
                                margin: '1em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar.png'
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: '1.5em',
                                        html: 'CHECK IN',
                                        style: 'padding-top: .2em; font-size: .8em; color: orange;'
                                    },
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('checkin2', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        flex: 1,
                                        cls: 'kayak-button',
                                        height: '2.5em',
                                        itemId: 'checkin_btn2',
                                        maxHeight: '2.5em',
                                        maxWidth: '8em',
                                        minHeight: '2.5em',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'kayak-button-dayname-month',
                                                itemId: 'checkin_dayname_month2'
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: 'kayak-button-select',
                                                html: 'Select',
                                                itemId: 'checkin_day2'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: '1.5em',
                                        html: 'CHECK OUT',
                                        style: 'padding-top: .2em; font-size: .8em; color: orange;'
                                    },
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('checkin2', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        flex: 1,
                                        cls: 'kayak-button',
                                        height: '2.5em',
                                        itemId: 'checkout_btn2',
                                        maxHeight: '2.5em',
                                        maxWidth: '8em',
                                        minHeight: '2.5em',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'kayak-button-dayname-month',
                                                itemId: 'checkout_dayname_month2'
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: 'kayak-button-select',
                                                html: 'Select',
                                                itemId: 'checkout_day2'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'Range selection in same calendar popup',
                                maxHeight: '3em',
                                maxWidth: '75%',
                                minHeight: '1.5em',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'example2B',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2em',
                                margin: '1em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar.png'
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                minHeight: '4.5em',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: '1.5em',
                                        html: 'CHECK IN',
                                        style: 'padding-top: .2em; font-size: .8em; color: orange;'
                                    },
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('checkin2B', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        flex: 1,
                                        cls: 'kayak-button',
                                        height: '2.5em',
                                        itemId: 'checkin_btn2B',
                                        maxHeight: '2.5em',
                                        maxWidth: '8em',
                                        minHeight: '2.5em',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'kayak-button-dayname-month',
                                                itemId: 'checkin_dayname_month2B'
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: 'kayak-button-select',
                                                html: 'Select',
                                                itemId: 'checkin_day2B'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                minHeight: '4.5em',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'container',
                                        height: '1.5em',
                                        html: 'CHECK OUT',
                                        style: 'padding-top: .2em; font-size: .8em; color: orange;'
                                    },
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('checkin2B', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        flex: 1,
                                        cls: 'kayak-button',
                                        height: '2.5em',
                                        itemId: 'checkout_btn2B',
                                        maxHeight: '2.5em',
                                        maxWidth: '8em',
                                        minHeight: '2.5em',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'container',
                                                cls: 'kayak-button-dayname-month',
                                                itemId: 'checkout_dayname_month2B'
                                            },
                                            {
                                                xtype: 'container',
                                                flex: 1,
                                                cls: 'kayak-button-select',
                                                html: 'Select',
                                                itemId: 'checkout_day2B'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'Range selection - IOS Style Calendar.  Demonstrates option at end of list to append more months.',
                                maxWidth: '75%',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'example2C',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2em',
                                margin: '1em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar.png'
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                height: '2.6em',
                                maxWidth: '15em',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('sel_date', this);
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        cls: 'sel-date',
                                        itemId: 'sel_date',
                                        styleHtmlCls: 'sel-date-html',
                                        styleHtmlContent: true,
                                        clearIcon: false,
                                        inputCls: 'sel-date-label',
                                        label: 'Date:',
                                        labelWidth: '35%',
                                        placeHolder: 'Select',
                                        readOnly: true
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'Single Date Selection (Form Field example), Future Dates Disabled. IOS Style Calendar.  Demonstrates pull-refresh style option to insert more months at beginning and single-expand accordion option.',
                                maxWidth: '75%',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        height: '6em',
                        itemId: 'example3',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2em',
                                margin: '1em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar.png'
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '5em',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('multisel_btn', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        cls: 'multisel-button',
                                        height: '2.5em',
                                        html: 'Select',
                                        itemId: 'multisel_btn',
                                        maxHeight: '2.5em',
                                        maxWidth: '8em',
                                        minHeight: '2.5em',
                                        layout: 'fit'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                itemId: 'multisel_dates_html',
                                maxWidth: '10em',
                                styleHtmlCls: 'multisel-dates-html',
                                styleHtmlContent: true,
                                layout: 'fit',
                                scrollable: false
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'Multi-selection (Weekends+Holidays disabled)',
                                maxHeight: '5em',
                                maxWidth: '75%',
                                minHeight: '1.5em',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'example4',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2.5em',
                                margin: '.5em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar_view_day.png'
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '7em',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('lookup_btn', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        cls: 'financial-btn',
                                        height: '2.5em',
                                        html: 'Calendar',
                                        itemId: 'lookup_btn',
                                        maxHeight: '2.5em',
                                        maxWidth: '7em',
                                        minHeight: '2.5em',
                                        padding: '0 0 0 .8em',
                                        layout: 'fit'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                layout: 'fit'
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'Day Planner (under construction).  Tap between Year, List and Day views. Select day in year view.  Swipe left+right to quickly change day or month in Day view.  New "yearMonthSelect" component utilizes TouchTreeGrid to prompt for specific month+year.  Different functionality for Phone vs. Tablet.',
                                maxWidth: '75%',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'example5',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2.5em',
                                margin: '.5em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/santa.png'
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '7em',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('filter_btn', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        cls: 'christmas-btn',
                                        height: '2.5em',
                                        html: 'Calendar',
                                        itemId: 'filter_btn',
                                        maxWidth: '7em',
                                        layout: 'fit'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                maxWidth: '10em',
                                layout: 'fit'
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'Custom Filter example (Christmas calendar for next 12 years).  Filters can be used to only include months with Selected or Custom dates.',
                                maxWidth: '75%',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'example6',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2.5em',
                                margin: '.5em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar_view_month.png'
                            },
                            {
                                xtype: 'container',
                                height: '4em',
                                width: '10em',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('day_count_btn', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        cls: 'financial-btn',
                                        height: '2.5em',
                                        html: 'Day Counts',
                                        itemId: 'day_count_btn',
                                        style: 'text-align: center',
                                        layout: 'fit'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                layout: 'fit'
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'Financial Calendar example (Day Counts from Today).',
                                maxWidth: '75%',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'example7',
                        style: 'border: 1px solid gray;',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                height: '2.5em',
                                margin: '.5em .5em 0 .5em',
                                width: '2em',
                                src: './resources/images/calendar_view_month.png'
                            },
                            {
                                xtype: 'container',
                                height: '4em',
                                width: '10em',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('optionDates_btn', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        cls: 'financial-btn',
                                        height: '2.5em',
                                        html: 'Option Dates',
                                        itemId: 'optionDates_btn',
                                        style: 'text-align: center',
                                        layout: 'fit'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                height: '4em',
                                width: '10em',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'container',
                                        listeners: {
                                            tap: {
                                                fn: function() {
                                                      this.fireEvent('optionDatesMatrix_btn', this.up('container'));
                                                  },
                                                element: 'element'
                                            }
                                        },
                                        cls: 'financial-btn',
                                        height: '2.5em',
                                        html: 'Matrix (Tablets)',
                                        itemId: 'optionDates_btn',
                                        style: 'text-align: center',
                                        layout: 'fit'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                html: 'MarketWatch-style Options Expiratioon Financial Calendar example.  Demonstrates auto-generated legend  with different docking options.  Phones docked top+bottom with scrolling list.',
                                maxWidth: '75%',
                                styleHtmlCls: 'example-descr-html',
                                styleHtmlContent: true
                            }
                        ]
                    }
                ]
            }
        ]
    }

});