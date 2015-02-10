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
    ],

    proxy: {
        type: 'localstorage',
        id: 'category'
    },

    /**
     * カテゴリを削除する。
     * 子供のスレッド情報も同時に削除する。
     */
    erase: function() {
        var me = this;
        me.threads().removeAll();
        me.threads().sync();

        me.callParent(arguments);
    }
});