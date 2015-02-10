/**
 * ExtBoard.view.thread.create.Windowのビューモデルクラス。
 *
 * @class ExtBoard.view.thread.create.WindowModel
 * @extend Ext.app.ViewModel
 */
Ext.define('ExtBoard.view.thread.create.WindowModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.threadCreateWindow',

    setThreadsStore: function(threads) {
        var me = this;

        me.setStores({
            threads: {
                source: threads,
                autoLoad: false
            }
        });
    }
});