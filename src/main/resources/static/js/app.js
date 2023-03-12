app = (function(api) {
    let _authorname = "";
    let _blueprint = [];
    
    let _toObject = function(data) {
        $(document).ready(function() {
            let object = data.map(function(x) {
                return ({name: x.name, pointsNum: x.points.length})
            });
            _toMarkup(object);
        })
    };

    let _toMarkup = function(data) {
        let markup = data.map(function(x) {
            return(`<tr><td>${x.name}</td><td>${x.pointsNum}</td><td>boton</td></tr>`);
        })
        $("table tbody").append(markup);
    }
    return {
        updateBlueprints: function(authorname) {
            api.getBlueprintsByAuthor(authorname, _toObject);
        }
    }
})(apimock);

//console.log(app.updateBlueprints("aqui"));