/**
 * Contentモデルのストアクラス。
 *
 * @class ExtBoard.store.Contents
 * @extend Ext.data.Store
 */
Ext.define('ExtBoard.store.Contents', {
    extend: 'Ext.data.Store',

    model: 'ExtBoard.model.Content',

    proxy: {
        type: 'localstorage',
        id: 'contents'
    }
});