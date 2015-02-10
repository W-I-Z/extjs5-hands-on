/**
 * スレッド一覧のコンポーネントクラス。
 *
 * @class ExtBoard.view.thread.list.Panel
 * @extend Ext.grid.Panel
 */
Ext.define('ExtBoard.view.thread.list.Panel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.threadListPanel',

    requires: [
        'ExtBoard.view.thread.list.PanelController',
        'ExtBoard.view.thread.list.PanelModel'
    ],

    controller: 'threadListPanel',
    viewModel: 'threadListPanel',

    title: 'スレッド一覧',

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

    columns: [
        {text: 'タイトル', dataIndex: 'title', flex: 1},
        {text: '登録者', dataIndex: 'author'}
    ],

    listeners: {
        select: 'onSelectThread',
        scope: 'controller'
    }
});