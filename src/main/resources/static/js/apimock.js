//@author hcadavid

apimock=(function(){

	var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"}];
	mockdata["maryweyland"]=[{author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}];
    mockdata["_authorname_"] = [{author:"_authorname_", "points":[{"x":140,"y":140}, {"x":115,"y":115}, {"x":115,"y":115}], "name": "bpname"}];
    mockdata["aqui"] = [{author:"new", "points":[{"x":0 ,"y":0}, {"x":50, "y":50}, {"x":50, "y":50}], "name": "here"}, 
    {author:"new", "points":[{"x":0 ,"y":0}, {"x":50, "y":50}, {"x":50, "y":100}, {"x":500, "y":500}], "name": "newPlano"},
    {author:"new", "points":[{"x":0 ,"y":0}, {"x":50, "y":50}], "name": "miniPlano"}];

	return {
		getBlueprintsByAuthor:function(authname,callback){
			callback(
				mockdata[authname]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);
		}
	}	

})();

/*
Example of use:
var fun=function(list){
	console.info(list);
}
apimock.getBlueprintsByAuthor("johnconnor",fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/
