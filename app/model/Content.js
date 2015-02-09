/**
 * コンテンツモデルクラス。
 *
 * @class ExtBoard.model.Content
 * @extend Ext.data.Model
 */
Ext.define('ExtBoard.model.Content', {
    extend: 'Ext.data.Model',

    requires: [
        'ExtBoard.model.Thread'
    ],

    fields: [
        {name: 'id', type: 'int'},
        {name: 'body', type: 'string'},
        {name: 'author', type: 'string'},
        {name: 'thread_id', reference: 'Thread'},
        {name: 'created', type: 'date'},
        {name: 'updated', type: 'date'},
        {name: 'deleted', type: 'date'}
    ],

    proxy: {
        type: 'localstorage',
        id: 'content'
    }
});