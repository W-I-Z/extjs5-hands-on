/**
 * ExtBoard.view.thread.list.Panelのビューコントローラクラス。
 *
 * @class ExtBoard.view.thread.list.PanelController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.thread.list.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.threadListPanel',

    requires: [
        'ExtBoard.view.thread.create.Window',
        'ExtBoard.model.Thread'
    ],

    onClickAdd: function() {
        this.showCreateWindow(ExtBoard.model.Thread.create());
    },

    onClickEdit: function() {
        var me = this,
            records = me.getView().getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        me.showCreateWindow(records[0]);
    },

    onClickDelete: function() {
        var me = this,
            view = me.getView(),
            records = view.getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        view.getStore().remove(records[0]);
    },

    onSelectThread: function(selection, record) {
        var me = this;
        me.getViewModel().setData({
            'enableEditButton': true,
            'enableDeleteButton': true
        });

        //me.redirectTo(record.getId());
    },

    showCreateWindow: function(record) {
        var window = Ext.widget('threadCreateWindow');
        window.setRecord(record);
        window.getViewModel().setThreadsStore(this.getView().getStore());
        window.show();
    }
});