/**
 * ExtBoard.view.thread.list.Panelのビューコントローラクラス。
 *
 * @class ExtBoard.view.thread.list.PanelController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.thread.list.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.threadListPanel',

    requires: [
        'ExtBoard.view.thread.create.Window',
        'ExtBoard.model.Thread'
    ],

    /**
     * 登録ボタンクリックのイベントリスナー。
     */
    onClickAdd: function() {
        // 新規の登録フォームウィンドウを表示する
        this.showCreateWindow(ExtBoard.model.Thread.create());
    },

    /**
     * 編集ボタンクリックのイベントリスナー。
     */
    onClickEdit: function() {
        var me = this,
            records = me.getView().getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        // 選択されているスレッドの登録フォームウィンドウを表示する
        me.showCreateWindow(records[0]);
    },

    /**
     * 削除ボタンクリックのイベントリスナー。
     */
    onClickDelete: function() {
        var me = this,
            view = me.getView(),
            records = view.getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        records[0].erase();
    },

    /**
     * selectイベントリスナー。
     * @param selection
     * @param record
     */
    onSelectThread: function(selection, record) {
        var me = this;
        me.getViewModel().setData({
            'enableEditButton': true,
            'enableDeleteButton': true
        });

        //me.redirectTo(record.getId());
    },

    /**
     * 登録フォームウィンドウを表示する。
     * @param record スレッド
     */
    showCreateWindow: function(record) {
        var window = Ext.widget('threadCreateWindow');
        window.setRecord(record);
        window.getViewModel().setThreadsStore(this.getView().getStore());
        window.show();
    }
});