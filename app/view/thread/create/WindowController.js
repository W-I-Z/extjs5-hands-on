/**
 * ExtBoard.view.thread.create.Windowのビューコントローラクラス。
 *
 * @class ExtBoard.view.thread.create.WindowController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.thread.create.WindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.threadCreateWindow',

    onClickSubmit: function() {
        var me = this,
            form = me.lookupReference('threadCreateForm'),
            threads = me.getViewModel().getStore('threads'),
            record;

        if (!form.isValid()) {
            // バリデーションエラー
            return;
        }

        form.updateRecord();
        record = form.getRecord();
        if (!Ext.isDefined(record.store)) {
            threads.add(record);
        }

        me.getView().hide();
    }

});