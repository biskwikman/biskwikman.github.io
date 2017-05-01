var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_final_v10 = new ol.format.GeoJSON();
var features_final_v10 = format_final_v10.readFeatures(geojson_final_v10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_v10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_final_v10.addFeatures(features_final_v10);var lyr_final_v10 = new ol.layer.Vector({
                source:jsonSource_final_v10, 
                style: style_final_v10,
                title: "final_v1"
            });

lyr_final_v10.setVisible(true);
var layersList = [baseLayer,lyr_final_v10];
lyr_final_v10.set('fieldAliases', {'gid': 'gid', 'lga_pid': 'lga_pid', 'name': 'name', 'full_name': 'full_name', 'state': 'state', 'pntcnt': 'pntcnt', 'density_km': 'density_km', 'pre_pntcnt': 'pre_pntcnt', 'area': 'area', 'pre_density': 'pre_density', 'dens_inc': 'dens_inc', });
lyr_final_v10.set('fieldImages', {'gid': 'TextEdit', 'lga_pid': 'TextEdit', 'name': 'TextEdit', 'full_name': 'TextEdit', 'state': 'TextEdit', 'pntcnt': 'TextEdit', 'density_km': 'TextEdit', 'pre_pntcnt': 'TextEdit', 'area': 'TextEdit', 'pre_density': 'TextEdit', 'dens_inc': 'TextEdit', });
lyr_final_v10.set('fieldLabels', {'gid': 'inline label', 'lga_pid': 'inline label', 'name': 'inline label', 'full_name': 'inline label', 'state': 'inline label', 'pntcnt': 'inline label', 'density_km': 'inline label', 'pre_pntcnt': 'inline label', 'area': 'inline label', 'pre_density': 'inline label', 'dens_inc': 'inline label', });
lyr_final_v10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
