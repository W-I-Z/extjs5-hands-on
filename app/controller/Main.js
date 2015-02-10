/**
 * メインコントローラクラス。
 *
 * @class ExtBoard.controller.Main
 * @extend Ext.app.Controller
 */
Ext.define('ExtBoard.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
        'Categories'
    ],

    routes: {
        ':id': 'showThreads'
    },

    refs: [
        {
            ref: 'categoryList',
            selector: 'categoryListPanel'
        },
        {
            ref: 'threadList',
            selector: 'threadListPanel'
        }
    ],

    showThreads: function(id) {
        var me = this,
            category = me.getCategoriesStore().getById(id);

        me.getCategoryList().lookupReference('listView').select(category);
        me.getThreadList().setStore(category.threads());
    }

});