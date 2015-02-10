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
        ':id': {
            before: 'beforeShowThreads',
            action: 'showThreads',
            conditions: {
                ':id': '([0-9]+)'
            }
        }
    },

    refs: [
        // カテゴリリスト
        {
            ref: 'categoryList',
            selector: 'categoryListPanel'
        },

        // スレッドリスト
        {
            ref: 'threadList',
            selector: 'threadListPanel'
        }
    ],

    /**
     * スレッド一覧表示前の前処理。
     * @param id カテゴリID
     * @param action
     */
    beforeShowThreads: function(id, action) {
        this.getCategoriesStore().load({
            callback: function(records) {
                if (records.length > 0) {
                    action.resume();
                } else {
                    action.stop();
                }
            }
        })
    },

    /**
     * カテゴリIDのスレッドを表示する。
     * @param id カテゴリID
     */
    showThreads: function(id) {
        var me = this,
            category = me.getCategoriesStore().getById(id),
            threads;

        if (!category) {
            // カテゴリがない場合
            return;
        }

        threads = category.threads();

        // カテゴリを選択状態にする
        me.getCategoryList().lookupReference('listView').select(category);

        // カテゴリに紐付くスレッド一覧をロードする
        threads.load({
            callback: function() {
                me.getThreadList().setStore(threads);
            }
        });
    }
});