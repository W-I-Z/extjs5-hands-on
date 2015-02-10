/**
 * スレッドモデルクラス。
 *
 * @class ExtBoard.model.Thread
 * @extend ExtBoard.model.Base
 */
Ext.define('ExtBoard.model.Thread', {
    extend: 'ExtBoard.model.Base',

    requires: [
        'ExtBoard.model.Content'
    ],

    fields: [
        {name: 'id', type: 'int'},
        {name: 'title', type: 'string'},
        {name: 'author', type: 'string'},
        {name: 'categoryId', reference: 'Category'},
        {name: 'created', type: 'date'},
        {name: 'updated', type: 'date'},
        {name: 'deleted', type: 'date'}
    ]
});