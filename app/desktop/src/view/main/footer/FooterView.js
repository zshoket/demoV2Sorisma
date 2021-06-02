Ext.define('SORISMA.view.main.footer.FooterView', {
    extend: 'Ext.Toolbar',
    xtype: 'footerview',
    cls: 'footerview',
    viewModel: {},
    items: [
        {
            xtype: 'container',
            cls: 'footerviewtext',
            html: 'SORISMA App'
            //bind: { html: '{name} footer' }
        }
    ]
});
