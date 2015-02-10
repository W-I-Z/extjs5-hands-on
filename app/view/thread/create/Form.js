/**
 * スレッド登録フォームコンポーネントクラス。
 *
 * @class ExtBoard.view.thread.create.Form
 * @extend Ext.form.Panel
 */
Ext.define('ExtBoard.view.thread.create.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.threadCreateForm',

    bodyPadding: 5,

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    defaultType: 'textfield',

    items: [
        {
            fieldLabel: 'スレッド名',
            name: 'title',
            allowBlank: false
        },
        {
            fieldLabel: '名前',
            name: 'author',
            allowBlank: false
        }
    ],

    buttons: [
        {
            text: '登録',
            formBind: true,
            disabled: true,
            handler: 'onClickSubmit'
        }
    ]
});