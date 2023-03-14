app = (function(api) {
    let _authorname = "";
    let _blueprint = [];
    
    let _toObject = function(data) {
        let object = data.map(function(x) {
            return ({name: x.name, pointsNum: x.points.length})
        });
        _toMarkup(object);
        _totalPoints(object);
    };

    let _toMarkup = function(data) {
        $("table tbody").find("tr").each(function() {
            $(this).remove();
        });
        let markup = data.map(function(x) {
            return(`<tr><td>${x.name}</td><td>${x.pointsNum}</td><td>
            <button id="buttonBlueprint" onclick= "app.getBlueprintsByNameAndAuthor($('#authorName').val(), '${x.name}')">Print</button>
            </td>
            </tr>`);
        })
        $("table tbody").append(markup);
    }

    let _totalPoints = function(data) {
        let aux = 0;
        let total = data.reduce((accumulator, x) => accumulator + x.pointsNum, aux);
        $("#totalPoints").html(`Total user points: ${total}`);
        //document.getElementById("total-points").innerHTML = total;
    }

    let _drawBlueprint = function(data) {
        $(document).ready(function() {
            $("#currentBlueprint").html(`Current blueprint: ${data.name}`)
            let c = document.getElementById("myCanvas");
            c.width = c.width;
            let ctx = c.getContext("2d");
            data.points.map(function(x) {
                ctx.lineTo(x.x, x.y);
            })
            ctx.stroke();
        })
    }

    return {
        updateBlueprints: function(authorName) {
            $(document).ready(function() {
                $("#blueprints").html(`${authorName}'s blueprints`);
                api.getBlueprintsByAuthor(authorName, _toObject); 
            })
        },

        getBlueprintsByNameAndAuthor: function(authorName, nameBlueprint) {
            api.getBlueprintsByNameAndAuthor(authorName, nameBlueprint, _drawBlueprint);
        }
    }
})(apimock);

//console.log(app.getBlueprintsByNameAndAuthor("aqui", "newPlano"));