/**
 * スレッド登録ウィンドウクラス。
 *
 * @class ExtBoard.view.thread.create.Window
 * @extend Ext.window.Window
 */
Ext.define('ExtBoard.view.thread.create.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.threadCreateWindow',

    requires: [
        'ExtBoard.view.thread.create.WindowController',
        'ExtBoard.view.thread.create.WindowModel',
        'ExtBoard.view.thread.create.Form'
    ],

    controller: 'threadCreateWindow',
    viewModel: 'threadCreateWindow',

    title: 'スレッド登録',
    width: 350,
    modal: true,

    items: [
        {
            xtype: 'threadCreateForm',
            reference: 'threadCreateForm'
        }
    ],

    setRecord: function(record) {
        var me = this;
        me.lookupReference('threadCreateForm').loadRecord(record);
    }

});