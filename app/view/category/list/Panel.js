/**
 * カテゴリ一覧のコンポーネントクラス。
 *
 * @class ExtBoard.view.category.list.Panel
 * @extend Ext.panel.Panel
 */
Ext.define('ExtBoard.view.category.list.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.categoryListPanel',

    requires: [
        'ExtBoard.view.category.list.PanelController',
        'ExtBoard.view.category.list.View'
    ],

    controller: 'categoryListPanel',

    title: 'カテゴリー',
    layout: 'fit',

    tbar: {
        items: [
            {
                text: 'add',
                handler: 'onClickAdd'
            }
        ]
    },

    items: [
        {
            xtype: 'categoryListView'
        }
    ]

});