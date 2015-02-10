/**
 * ExtBoard.view.thread.create.Windowのビューコントローラクラス。
 *
 * @class ExtBoard.view.thread.create.WindowController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.thread.create.WindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.threadCreateWindow',

    /**
     * スレッドの登録・更新処理。
     */
    onClickSubmit: function() {
        var me = this,
            form = me.lookupReference('threadCreateForm'),
            threads = me.getStore('threads'),
            record;

        if (!form.isValid()) {
            // バリデーションエラー
            return;
        }

        // Form内のレコードを入力値で更新する
        form.updateRecord();
        record = form.getRecord();

        if (!Ext.isDefined(record.store)) {
            // ストアに追加してない（新規の場合）
            threads.add(record);
        }

        // スレッド情報を同期する
        threads.getSource().sync();

        // 登録ウィンドウを非表示にする
        me.getView().hide();
    }

});