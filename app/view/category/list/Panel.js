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
                glyph: 'xf067@FontAwesome',
                handler: 'onClickAdd'
            },
            {
                glyph: 'xf044@FontAwesome',
                handler: 'onClickEdit',
                bind: {
                    disabled: '{!enableEditButton}'
                }
            },
            {
                glyph: 'xf00d@FontAwesome',
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
                deselect: 'onDeselectCategory',
                scope: 'controller'
            }
        }
    ]

});