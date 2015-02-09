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

    tpl: [
        '<tpl for=".">',
            '<div class="category-item">{name}</div>',
        '</tpl>'
    ],

    itemSelector: '.category-item'
});