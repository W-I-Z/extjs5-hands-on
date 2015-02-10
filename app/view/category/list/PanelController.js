/**
 * ExtBoard.view.category.list.Panelのビューコントローラクラス。
 *
 * @class ExtBoard.view.category.list.PanelController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.category.list.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categoryListPanel',

    requires: [
        'ExtBoard.view.category.create.Window',
        'ExtBoard.model.Category'
    ],

    /**
     * 追加ボタンクリックのイベントリスナー。
     */
    onClickAdd: function() {
        // 新規の登録フォームウィンドウを表示する
        this.showCreateWindow(ExtBoard.model.Category.create());
    },

    /**
     * 編集ボタンクリックのイベントリスナー。
     */
    onClickEdit: function() {
        var me = this,
            records = me.lookupReference('listView').getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        // 選択されているカテゴリの登録フォームウィンドウを表示する
        me.showCreateWindow(records[0]);
    },

    /**
     * 削除ボタンクリック時のイベントリスナー。
     */
    onClickDelete: function() {
        var me = this,
            records = me.lookupReference('listView').getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        // 選択されているカテゴリを削除する
        records[0].erase();
    },

    /**
     * selectイベントリスナー。
     * @param selection
     * @param record
     */
    onSelectCategory: function(selection, record) {
        var me = this;

        // 編集ボタン・削除ボタンをenabledにする
        me.getViewModel().setData({
            'enableEditButton': true,
            'enableDeleteButton': true
        });

        // 選択されたカテゴリのスレッド一覧に遷移する
        me.redirectTo(record.getId());
    },

    /**
     * deselectイベントリスナー。
     */
    onDeselectCategory: function() {
        // 編集ボタン・削除ボタンをdisabledにする
        this.getViewModel().setData({
            'enableEditButton': false,
            'enableDeleteButton': false
        });
    },

    /**
     * 登録フォームウィンドウを表示する
     * @param record カテゴリ
     */
    showCreateWindow: function(record) {
        var window = Ext.widget('categoryCreateWindow');
        window.setRecord(record);
        window.show();
    }
});