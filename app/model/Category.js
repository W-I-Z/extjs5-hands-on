/**
 * カテゴリモデルクラス。
 *
 * @class ExtBoard.model.Category
 * @extend ExtBoard.model.Base
 */
Ext.define('ExtBoard.model.Category', {
    extend: 'ExtBoard.model.Base',

    requires: [
        'ExtBoard.model.Thread'
    ],

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'created', type: 'date'},
        {name: 'updated', type: 'date'},
        {name: 'deleted', type: 'date'}
    ]
});