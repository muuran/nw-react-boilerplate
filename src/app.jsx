( function () {
	var React = require( 'react' ),
		Main = require( './components/main/Main' );
	var remote = window.require( 'remote' );

	window.React = React;

	React.render( <Main />, document.body );
} )();
