/**
 * ExtBoard.view.category.list.Panelのビューモデルクラス。
 *
 * @class ExtBoard.view.category.list.PanelModel
 * @extend Ext.app.ViewModel
 */
Ext.define('ExtBoard.view.category.list.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.categoryListPanel',

    data: {
        enableEditButton: false,
        enableDeleteButton: false
    }
});