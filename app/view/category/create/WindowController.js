/**
 * ExtBoard.view.category.create.Windowのビューコントローラクラス。
 *
 * @class ExtBoard.view.category.create.WindowController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.category.create.WindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categoryCreateWindow',

    /**
     * カテゴリの登録・更新処理。
     */
    onClickSubmit: function() {
        var me = this,
            form = me.lookupReference('categoryCreateForm'),
            categories = Ext.getStore('Categories'),
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
            categories.add(record);
        }

        // カテゴリ情報を同期する
        categories.sync();

        // 登録ウィンドウを非表示にする
        me.getView().hide();

        // 登録・更新したカテゴリのスレッド一覧に遷移する
        me.redirectTo(record.getId());
    }

});