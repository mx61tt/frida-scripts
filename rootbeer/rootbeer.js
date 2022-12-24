// Bypassing RootBeer

Java.perform(function() {
	let rootbeer = Java.use("com.scottyab.rootbeer.RootBeer");

	rootbeer.detectRootManagementApps.overload().implementation = function(){
		console.log("\n[+] Bypassing detectRootManagementApps()...");
		return false;
	}

	rootbeer.detectPotentiallyDangerousApps.overload().implementation = function(){
		console.log("\n[+] Bypassing detectPotentiallyDangerousApps()...");
		return false;
	}

	rootbeer.checkForBinary.overload("java.lang.String").implementation = function(a){
		console.log("\n[+] Bypassing checkForBinary() with string "+ a.toString() + " ...");
		return false;
	}

	rootbeer.checkForDangerousProps.overload().implementation = function(){
		console.log("\n[+] Bypassing checkForDangerousProps()");
		return false;
	}

	rootbeer.checkForRWPaths.overload().implementation = function(){
		console.log("\n[+] Bypassing checkForRWPaths()");
		return false;
	}

	rootbeer.detectTestKeys.overload().implementation = function(){
		console.log("\n[+] Bypassing detectTestKeys()");
		return false;
	}

	rootbeer.checkSuExists.overload().implementation = function(){
		console.log("\n[+] Bypassing checkSuExists()");
		return false;
	}

	rootbeer.checkForRootNative.overload().implementation = function(){
		console.log("\n[+] Bypassing checkForRootNative()");
		return false;
	}


})
