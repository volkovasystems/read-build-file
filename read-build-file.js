/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "read-build-file",
			"fileName": "read-build-file.js",
			"moduleName": "readBuildFile",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/read-build-file.git"
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"fs@nodejs": "fs",
			"path@nodejs": "path"
		}
	@end-include
*/
var readBuildFile = function readBuildFile( domainDirectory, buildFilePath ){
	/*:
		@meta-configuration:
			{
				"domainDirectory:required": "string",
				"buildFilePath:optional": "string"
			}
		@end-meta-configuration
	*/

	var domainDirectoryPattern = new RegExp( domainDirectory + "$" );
	var currentWorkingDirectory = process.cwd( );

	if( typeof buildFilePath == "string" ){
		var domainDirectoryBasedOnBuildFilePath = buildFilePath.split( path.sep ).pop( );
		if( domainDirectoryPattern.test( domainDirectoryBasedOnBuildFilePath ) ){
			process.chdir( buildFilePath );
		}
	}

	for( var levelCount = 0; levelCount < 5; levelCount++ ){
		process.chdir( process.cwd( ).split( path.sep ).slice( 0, -1 ).join( path.sep ) );
		if( !domainDirectoryPattern.test( process.cwd( ) ) ){
			break;
		}
	}

	if( levelCount > 5 ){
		var error = new Error( "reading build file called without a build file" );
		console.error( error );
		throw error;
	}

    try{

    }catch( error ){

    }
    fs.readFileSync( "./build" );
};

var fs = require( "fs" );
var path = require( "path" );

module.exports = readBuildFile;