TouchUI.prototype.plugins.navbarTemp = function() {

	// Manually move navbar temp (hard move)
	if( $("#navbar_plugin_gcodebar").length > 0 ) {
		var navBarTmp = $("#navbar_plugin_gcodebar").appendTo(this.DOM.create.dropdown.container);
		$('<li class="divider"></li>').insertBefore(navBarTmp);
	}

}
