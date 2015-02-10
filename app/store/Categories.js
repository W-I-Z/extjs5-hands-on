/**
 * Categoryモデルのストアクラス。
 *
 * @class ExtBoard.store.Categories
 * @extend Ext.data.Store
 */
Ext.define('ExtBoard.store.Categories', {
    extend: 'Ext.data.Store',

    model: 'ExtBoard.model.Category'
});