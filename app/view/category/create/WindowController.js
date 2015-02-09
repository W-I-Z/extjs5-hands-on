/**
 * ExtBoard.view.category.create.Windowのビューコントローラクラス。
 *
 * @class ExtBoard.view.category.create.WindowController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.category.create.WindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categoryCreateWindow',

    stores: [
        'Categories'
    ],

    onClickSubmit: function() {
        var me = this,
            form = me.lookupReference('categoryCreateForm'),
            record;

        if (!form.isValid()) {
            // バリデーションエラー
            return;
        }

        form.updateRecord();
        record = form.getRecord();
        if (!Ext.isDefined(record.store)) {
            Ext.getStore('Categories').add(record);
        }
        me.getView().hide();
    }

});