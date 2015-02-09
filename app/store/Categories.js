/**
 * Categoryモデルのストアクラス。
 *
 * @class ExtBoard.store.Categories
 * @extend Ext.data.Store
 */
Ext.define('ExtBoard.store.Categories', {
    extend: 'Ext.data.Store',

    model: 'ExtBoard.model.Category',

    proxy: {
        type: 'localstorage',
        id: 'categories'
    },

    data: [
        {name: 'category1'},
        {name: 'category2'},
        {name: 'category3'},
        {name: 'category4'},
        {name: 'category5'}
    ]
});