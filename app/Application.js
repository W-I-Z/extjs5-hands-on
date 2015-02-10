/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ExtBoard.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ExtBoard',

    controllers: [
        'Main'
    ],

    stores: [
        'Categories'
    ],

    launch: function () {
        this.getCategoriesStore().load();
    }
});
