/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtBoard.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'ExtBoard.view.main.MainController',
        'ExtBoard.view.main.MainModel',
        'ExtBoard.view.category.list.Panel',
        'ExtBoard.view.thread.list.Panel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border',
        regionWeights: {
            west: 20,
            north: 10
        }
    },

    items: [
        {
            region: 'west',
            xtype: 'categoryListPanel',
            split: true,
            width: 250
        },
        {
            region: 'north',
            xtype: 'threadListPanel',
            split: true,
            height: 400
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    title: 'Tab 1',
                    html: '<h2>Content appropriate for the current navigation.</h2>'
                }
            ]
        }
    ]
});
