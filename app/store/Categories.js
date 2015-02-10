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
        {id: 1, name: 'category1'},
        {id: 2, name: 'category2'},
        {id: 3, name: 'category3'},
        {id: 4, name: 'category4'},
        {id: 5, name: 'category5'}
    ]
});