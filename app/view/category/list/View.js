/**
 * カテゴリ一覧のコンポーネントクラス。
 *
 * @class ExtBoard.view.category.list.View
 * @extend Ext.view.View
 */
Ext.define('ExtBoard.view.category.list.View', {
    extend: 'Ext.view.View',
    alias: 'widget.categoryListView',

    store: 'Categories',

    baseCls: Ext.baseCSSPrefix + 'category-list-view',

    itemSelector: '.list-item',
    selectionModel: {
        allowDeselect: false,
        mode: 'SINGLE'
    },

    tpl: [
        '<tpl for=".">',
            '<div class="list-item">{name}</div>',
        '</tpl>'
    ]
});