var extend = require('extend');
/**
 * @author Roycer Cordova
 * @description Generacion de Hatoas para servicios rest
 */
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

    function linkCollection(type, collection, nombreColeccion, ruta, regxpag, totalreg, pagina, buscar, rutaBuscar) {
        var totalPaginas = Math.ceil(totalreg/regxpag);
        var pageLinks = {};
        var rutaBus = "";

        if(rutaBuscar == null || rutaBuscar == undefined) rutaBuscar = "";

        if(!buscar){
            pageLinks = extend({},pageLinks,{
                "search" : {
                    "href" : Propiedades.baseUrl+"/"+ruta+"/search"
                }
            });
        }
        else{
            rutaBus = "/buscar";
        }

        /**
         * Paginacion
         */
        var hrefPrev = Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(pagina-1)+"&limite="+regxpag;
        var hrefFirst = Propiedades.baseUrl+ruta+rutaBus+"?pagina=0&limite="+regxpag;
        var hrefNext = Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(pagina+1)+"&limite="+regxpag;
        var hrefLast = Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(totalPaginas-1)+"&limite="+regxpag;

        if(buscar && (rutaBuscar!=null || rutaBuscar!=undefined)){
            $.each(rutaBuscar,function(key,value){
                hrefPrev+="&"+key+"="+value;
                hrefFirst+="&"+key+"="+value;
                hrefNext+="&"+key+"="+value;
                hrefLast+="&"+key+"="+value;
            });
        }

        if(pagina>0){
            pageLinks = extend({},pageLinks,{
                "prev" : {
                    "href" : Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(pagina-1)+"&limite="+regxpag
                },
                "first" : {
                    "href" : Propiedades.baseUrl+ruta+rutaBus+"?pagina=0&limite="+regxpag
                }
            });
        }

        if((pagina+1)<totalPaginas && totalPaginas>1){
            pageLinks = extend({},pageLinks,{
                "next" : {
                    "href" : Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(pagina+1)+"&limite="+regxpag
                },
                "last": {
                    "href" : Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(totalPaginas-1)+"&limite="+regxpag
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

    /**
     * 
     * @param {string} type string del nombre del hateo creado
     * @param {json o array} data array o json de informacion solicitada
     * @param {string} nombreColeccion parametro del json donde se encuentra la data
     * @param {string} ruta ruta especifica del servicio
     * @param {int} regxpag numero de registros a mostrar por la pagina
     * @param {int} totalreg numero de registros que existen en la base de datos
     * @param {int} pagina numero de pagina actual
     * @param {boolean} buscar true si es un servicio de busqueda
     * @param {json} rutaBuscar json de los parametros de busqueda
     */
    function link(type, data, nombreColeccion, ruta, regxpag, totalreg, pagina, buscar,rutaBuscar) {
        regxpag = regxpag | 0;
        totalreg = totalreg | 0;
        pagina = pagina | 0;
        
        if (Array.isArray(data)) {
            return linkCollection(type, data, nombreColeccion,ruta,regxpag, totalreg, pagina, buscar,rutaBuscar);
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
