/**
 * コンテンツモデルクラス。
 *
 * @class ExtBoard.model.Content
 * @extend ExtBoard.model.Base
 */
Ext.define('ExtBoard.model.Content', {
    extend: 'ExtBoard.model.Base',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'body', type: 'string'},
        {name: 'author', type: 'string'},
        {name: 'threadId', reference: 'Thread'},
        {name: 'created', type: 'date'},
        {name: 'updated', type: 'date'},
        {name: 'deleted', type: 'date'}
    ]
});