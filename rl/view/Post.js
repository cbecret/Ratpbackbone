/**
 * Created with IntelliJ IDEA.
 * User: mediabox-2012-formateur
 * Date: 31/10/12
 * Time: 13:48
 * To change this template use File | Settings | File Templates.
 */
var mb = mb || {};

( function( mb )
{
    mb.views = mb.views || {};

    // Vues
    mb.views.ContactView = Backbone.View.extend
    (
        {
            tagName : "li"
        }
    );

    mb.views.ContactListView = Backbone.View.extend
    (
        {
            collection : null,
            template : _.template( $( "#contact-template" ).html() ),
            initialize : function()
            {
                // Liaison événementielle entre la collection et la vue
                this.collection.on( "add", this.render, this );
                this.render();
            },
            render : function()
            {
                var that = this;
                this.$el.empty();
                this.collection.each
                    (
                        function( contact )
                        {
                            that.$el.append
                                (
                                    that.template( contact.toJSON() )
                                )
                        }
                    );
            }
        }
    );
})( mb );