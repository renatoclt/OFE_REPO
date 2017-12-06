var extend = require('extend');

var defectoPropiedades = {
    propLinks: "_links",
    propEmbedded: "_embedded",
    propPage: "page"
};

function hateoas(Propiedades) {
    Propiedades = extend({}, defectoPropiedades, Propiedades);
    if (!Propiedades.baseUrl) {
        throw Error("Falta de argementos requeridos 'baseUrl'");
    }

    if (Propiedades.baseUrl[Propiedades.baseUrl.length-1] == "/") {
        Propiedades.baseUrl = Propiedades.baseUrl.substring(0, Propiedades.baseUrl.length-1);
    }

    var linkHandlers = {};
    var collectionLinkHandlers = {};

    function registerLinkHandler(type, handler) {
        if (!linkHandlers[type]) {
            linkHandlers[type] = [];
        }
        linkHandlers[type].push(handler);
    }

    function registerCollectionLinkHandler(type, handler) {
        
        if (!collectionLinkHandlers[type]) {
            collectionLinkHandlers[type] = [];
        }
        collectionLinkHandlers[type].push(handler);
    }

    function prefix(link) {
        if (!link.length || link[0] !== "/") {
            return link;
        }

        return Propiedades.baseUrl + link;
    }

    function getLinksGeneric(handlers, type, data) {
        if (handlers[type]) {
            var links = handlers[type].reduce(function(links, handler) {
                return extend({}, links, handler(data, type, links));
            }, {});
            
            return Object.keys(links).reduce(function(prefixedLinks, linkName) {
                prefixedLinks[linkName] = prefix(links[linkName]);
                return prefixedLinks;
            }, {});
        } else {
            return [];
        }
    }

    var getLinks = getLinksGeneric.bind(null, linkHandlers);
    var getCollectionLinks = getLinksGeneric.bind(null, collectionLinkHandlers);

    function linkCollection(type, collection, nombreColeccion, ruta, regxpag, totalreg, pagina) {
        var totalPaginas = Math.ceil(totalreg/regxpag);
        var pageLinks = {
            "search" : {
                "href" : Propiedades.baseUrl+"/"+ruta+"/search"
            }
        }

        if(pagina>0){
            pageLinks = extend({},pageLinks,{
                "prev" : {
                    "href" : Propiedades.baseUrl+"/"+ruta+"?pagina="+(pagina-1)+"&limite="+regxpag
                },
                "first" : {
                    "href" : Propiedades.baseUrl+"/"+ruta+"?pagina=0&limite="+regxpag
                }
            });
        }

        if((pagina+1)<totalPaginas && totalPaginas>1){
            pageLinks = extend({},pageLinks,{
                "next" : {
                    "href" : Propiedades.baseUrl+"/"+ruta+"?pagina="+(pagina+1)+"&limite="+regxpag
                },
                "last": {
                    "href" : Propiedades.baseUrl+"/"+ruta+"?pagina="+(totalPaginas-1)+"&limite="+regxpag
                }
            });
        }
        
        var result = {
            [Propiedades.propEmbedded]: {  [nombreColeccion]: collection.map(link.bind(null, type))
            }
        };
        
        if(regxpag<totalreg){
            result[Propiedades.propLinks] = extend({},getCollectionLinks(type, collection),pageLinks);
        }
        else{
            result[Propiedades.propLinks] = getCollectionLinks(type, collection);
        }
        result[Propiedades.propPage] = {
            'size' : regxpag,
            'totalElements' : totalreg,
            'totalPages' : totalPaginas,
            'number' : pagina
        }
        return result;
    }

    function link(type, data, nombreColeccion, ruta, regxpag, totalreg, pagina) {
        regxpag = regxpag | 0;
        totalreg = totalreg | 0;
        pagina = pagina | 0;
        
        if (Array.isArray(data)) {
            return linkCollection(type, data, nombreColeccion,ruta,regxpag, totalreg, pagina);
        }

        if (linkHandlers[type]) {
            data[Propiedades.propLinks] = getLinks(type, data);
            return data;
        } else {
            return data;
        }
    }

    return {
        registerLinkHandler: registerLinkHandler,
        registerCollectionLinkHandler: registerCollectionLinkHandler,
        getLinks: getLinks,
        link: link
    };
}

module.exports = hateoas;
