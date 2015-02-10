/**
 * ExtBoard.view.thread.list.Panelのビューモデルクラス。
 *
 * @class ExtBoard.view.thread.list.PanelModel
 * @extend Ext.app.ViewModel
 */
Ext.define('ExtBoard.view.thread.list.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.threadListPanel',

    data: {
        enableEditButton: false,
        enableDeleteButton: false
    }
});