window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
 //Content to be added

    $(mymodule.dragDiv);
});

var mymodule = (function () {
//Private

//Public
    return {
        dragDiv: function () {
            $('#bruceLee').draggable();
        }
    }
})();


