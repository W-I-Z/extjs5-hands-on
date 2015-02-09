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
        'ExtBoard.view.category.list.PanelModel',
        'ExtBoard.view.category.list.View'
    ],

    controller: 'categoryListPanel',
    viewModel: 'categoryListPanel',

    title: 'カテゴリー',
    layout: 'fit',

    tbar: {
        items: [
            {
                text: 'add',
                handler: 'onClickAdd'
            },
            {
                text: 'edit',
                handler: 'onClickEdit',
                bind: {
                    disabled: '{!enableEditButton}'
                }
            },
            {
                text: 'delete',
                handler: 'onClickDelete',
                bind: {
                    disabled: '{!enableDeleteButton}'
                }
            }
        ]
    },

    items: [
        {
            xtype: 'categoryListView',
            reference: 'listView',
            listeners: {
                select: 'onSelectCategory',
                scope: 'controller'
            }
        }
    ]

});