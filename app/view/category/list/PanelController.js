/**
 * ExtBoard.view.category.list.Panelのビューコントローラクラス。
 *
 * @class ExtBoard.view.category.list.PanelController
 * @extend Ext.app.ViewController
 */
Ext.define('ExtBoard.view.category.list.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.categoryListPanel',

    requires: [
        'ExtBoard.view.category.create.Window',
        'ExtBoard.model.Category'
    ],

    onClickAdd: function() {
        this.showCreateWindow(ExtBoard.model.Category.create());
    },

    onClickEdit: function() {
        var me = this,
            records = me.lookupReference('listView').getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        me.showCreateWindow(records[0]);
    },

    onClickDelete: function() {
        var me = this,
            records = me.lookupReference('listView').getSelectionModel().getSelection();

        if (records.length > 1) {
            return;
        }

        Ext.getStore('Categories').remove(records[0]);
    },

    onSelectCategory: function() {
        var me = this,
            enabled = false;
        if (me.lookupReference('listView').getSelectionModel().getSelection().length > 0) {
            enabled = true;
        }
        this.getViewModel().setData({
            'enableEditButton': enabled,
            'enableDeleteButton': enabled
        });
    },

    showCreateWindow: function(record) {
        var window = Ext.widget('categoryCreateWindow');
        window.setRecord(record);
        window.show();
    }
});