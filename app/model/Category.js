/**
 * カテゴリモデルクラス。
 *
 * @class ExtBoard.model.Category
 * @extend Ext.data.Model
 */
Ext.define('ExtBoard.model.Category', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'created', type: 'date'},
        {name: 'updated', type: 'date'},
        {name: 'deleted', type: 'date'}
    ],

    proxy: {
        type: 'localstorage',
        id: 'category'
    }
});