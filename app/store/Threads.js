/**
 * Threadモデルのストアクラス。
 *
 * @class ExtBoard.store.Threads
 * @extend Ext.data.Store
 */
Ext.define('ExtBoard.store.Threads', {
    extend: 'Ext.data.Store',

    model: 'ExtBoard.model.Thread',

    proxy: {
        type: 'localstorage',
        id: 'threads'
    }
});