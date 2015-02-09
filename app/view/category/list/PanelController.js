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
        'ExtBoard.view.category.create.Window'
    ],

    onClickAdd: function() {
        Ext.widget('categoryCreateWindow').show();
    }
});