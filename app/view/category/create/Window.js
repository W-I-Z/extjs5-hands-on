/**
 * カテゴリ登録ウィンドウクラス。
 *
 * @class ExtBoard.view.category.create.Window
 * @extend Ext.window.Window
 */
Ext.define('ExtBoard.view.category.create.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.categoryCreateWindow',

    requires: [
        'ExtBoard.view.category.create.WindowController',
        'ExtBoard.view.category.create.Form'
    ],

    controller: 'categoryCreateWindow',

    title: 'カテゴリー登録',
    width: 350,
    modal: true,

    items: [
        {
            xtype: 'categoryCreateForm',
            reference: 'categoryCreateForm'
        }
    ]

});