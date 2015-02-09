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
            form = me.lookupReference('categoryCreateForm');

        if (!form.isValid()) {
            // バリデーションエラー
            return;
        }

        Ext.getStore('Categories').add(form.getValues());
        me.getView().hide();
    }

});