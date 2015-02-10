/**
 * スレッド一覧のコンポーネントクラス。
 *
 * @class ExtBoard.view.thread.list.Panel
 * @extend Ext.grid.Panel
 */
Ext.define('ExtBoard.view.thread.list.Panel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.threadListPanel',

    title: 'スレッド一覧',

    columns: [
        {text: 'タイトル', dataIndex: 'title', flex: 1},
        {text: '登録者', dataIndex: 'author'}
    ]
});