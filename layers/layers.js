var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_Plascheid_3 = new ol.format.GeoJSON();
var features_Plascheid_3 = format_Plascheid_3.readFeatures(json_Plascheid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plascheid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plascheid_3.addFeatures(features_Plascheid_3);
var lyr_Plascheid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plascheid_3, 
                style: style_Plascheid_3,
                popuplayertitle: 'Plascheid',
                interactive: false,
                title: '<img src="styles/legend/Plascheid_3.png" /> Plascheid'
            });
var format_Kansels_4 = new ol.format.GeoJSON();
var features_Kansels_4 = format_Kansels_4.readFeatures(json_Kansels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kansels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kansels_4.addFeatures(features_Kansels_4);
var lyr_Kansels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kansels_4, 
                style: style_Kansels_4,
                popuplayertitle: 'Kansels',
                interactive: true,
                title: '<img src="styles/legend/Kansels_4.png" /> Kansels'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(true);lyr_Plascheid_3.setVisible(true);lyr_Kansels_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_Plascheid_3,lyr_Kansels_4];
lyr_Plascheid_3.set('fieldAliases', {'gid': 'gid', 'datum': 'datum', 'region': 'region', 'gmdesch': 'gmdesch', 'gemeinde': 'gemeinde', 'vgnr': 'vgnr', 'vbgmde': 'vbgmde', 'vgname': 'vgname', 'kreissch': 'kreissch', 'ldkreis': 'ldkreis', 'amtsgrcht': 'amtsgrcht', 'finanzamt': 'finanzamt', 'kanr': 'kanr', 'katamt': 'katamt', 'katurl': 'katurl', 'guta': 'guta', 'gutaurl': 'gutaurl', 'ags': 'ags', 'gemtyp': 'gemtyp', 'kreistyp': 'kreistyp', });
lyr_Kansels_4.set('fieldAliases', {'id': 'id', 'Nummer': 'Nummer', });
lyr_Plascheid_3.set('fieldImages', {'gid': 'TextEdit', 'datum': 'TextEdit', 'region': 'TextEdit', 'gmdesch': 'TextEdit', 'gemeinde': 'TextEdit', 'vgnr': 'TextEdit', 'vbgmde': 'TextEdit', 'vgname': 'TextEdit', 'kreissch': 'TextEdit', 'ldkreis': 'TextEdit', 'amtsgrcht': 'TextEdit', 'finanzamt': 'TextEdit', 'kanr': 'TextEdit', 'katamt': 'TextEdit', 'katurl': 'TextEdit', 'guta': 'TextEdit', 'gutaurl': 'TextEdit', 'ags': 'TextEdit', 'gemtyp': 'TextEdit', 'kreistyp': 'TextEdit', });
lyr_Kansels_4.set('fieldImages', {'id': 'TextEdit', 'Nummer': 'TextEdit', });
lyr_Plascheid_3.set('fieldLabels', {'gid': 'no label', 'datum': 'no label', 'region': 'no label', 'gmdesch': 'no label', 'gemeinde': 'no label', 'vgnr': 'no label', 'vbgmde': 'no label', 'vgname': 'no label', 'kreissch': 'no label', 'ldkreis': 'no label', 'amtsgrcht': 'no label', 'finanzamt': 'no label', 'kanr': 'no label', 'katamt': 'no label', 'katurl': 'no label', 'guta': 'no label', 'gutaurl': 'no label', 'ags': 'no label', 'gemtyp': 'no label', 'kreistyp': 'no label', });
lyr_Kansels_4.set('fieldLabels', {'id': 'hidden field', 'Nummer': 'no label', });
lyr_Kansels_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});