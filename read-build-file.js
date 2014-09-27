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
			"repository": "git@github.com:volkovasystems/read-build-file.git",
			"isGlobal": "true"
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"read-file@github.com/volkovasystems": "readFile",
			"check-directory-exists@github.com/volkovasystems": "checkDirectoryExists",
			"check-file-exists@github.com/volkovasystems": "checkFileExists"
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

	if( !checkDirectoryExists( domainDirectory ) ){
		var error = new Error( "fatal:domain directory does not exists" );
		console.error( error );
		throw error;
	}

	buildFilePath = buildFilePath || path.resolve( ".", domainDirectory, "build" );

	if( buildFilePath ){
		buildFilePath = path.resolve( ".", domainDirectory, buildFilePath );
		
		if( !checkFileExists( buildFilePath ) ){
			var error = new Error( "fatal:given build file path does not exists" );
			console.error( error );
			throw error;
		}
	}

	try{
		return readFile( buildFilePath );
		
	}catch( error ){
		console.error( error );
		throw error;

	}
};

var readFile = require( "./read-file/read-file.js" );
var checkDirectoryExists = require( "./check-directory-exists/check-directory-exists.js" );
var checkFileExists = require( "./check-file-exists/check-file-exists.js" );
var fs = require( "fs" );
var path = require( "path" );

module.exports = readBuildFile;