/**
 * ベースモデルクラス。
 *
 * @class ExtBoard.model.Base
 * @extend Ext.data.Model
 */
Ext.define('ExtBoard.model.Base', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'ExtBoard.model'
    }
});