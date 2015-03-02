/**
 * Created by Julian on 2/24/2015.
 */
var Utils = require('yutils');

/**
 *
 * @param domId {String}
 * @param options
 * @constructor
 */
function Renderer(domId, options) {
    if (!Utils.isString(domId)) {
        throw new Error("DomID must be a String");
    }
    if (!Utils.isDefined(options)) {
        options = {};
    }

    var verbose = ("verbose" in options) ? options.verbose : false;

    var parent = document.getElementById(domId);
    var position = parent.style.position;
    if (position.length === 0) {
        parent.style.position = "relative";
    }

    var canvas = document.createElement('canvas');
    canvas.height = parent.clientHeight;
    canvas.width = parent.clientWidth;

    this.mousePosition = {
        x: 0,
        y: 0
    };
    this.dimension = {
        w: parent.clientWidth,
        h: parent.clientHeight
    };

    this.state = null;
    if (verbose && typeof State !== 'undefined') {
        this.stats = new State();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '0px';
        this.stats.domElement.style.top = '0px';
        parent.appendChild(this.stats.domElement);
    }

    this.context = canvas.getContext("2d");

    parent.appendChild(canvas);



};

module.exports = Renderer;