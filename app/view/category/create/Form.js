/**
 * カテゴリ登録フォームコンポーネントクラス。
 *
 * @class ExtBoard.view.category.create.Form
 * @extend Ext.form.Panel
 */
Ext.define('ExtBoard.view.category.create.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.categoryCreateForm',

    bodyPadding: 5,

    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    defaultType: 'textfield',

    items: [
        {
            fieldLabel: 'カテゴリー名',
            name: 'name',
            allowBlank: false
        }
    ],

    buttons: [
        {
            text: 'Reset'
        },
        {
            text: 'Submit',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: 'onClickSubmit'
        }
    ]
});