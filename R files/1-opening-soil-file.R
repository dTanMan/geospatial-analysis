library(plotGoogleMaps)

# --- supposedly for soil ---
soil.plot <- soil[,c("PHILBUO_", "PHILBUO_ID", "SOILCODE", "SOILDESC", "IPI", "PPI", "IPI_CLASS", "PPI_CLASS")]
names(soil.plot) <- c("Philbuo", "PhilbuoID", "Soil Code", "Soil Desc", "IPI", "PPI", "IPI class", "PPI class")
map <- plotGoogleMaps(soil.plot, zoom=4, fitBounds=F, filename="Map_SoilData.html", layerName = "Economic Data")

# --- original code ---------

polygons.plot <- polygons[,c("CACAORANK", "CACAOPROD", "NAME")]
polygons.plot <- polygons.plot[polygons.plot$NAME!="Antarctica",]  
names(polygons.plot) <- c("Rank", "Cacao Produce per Year (tonnes)", "Country:")

#Full Page Map  
map <- plotGoogleMaps(polygons.plot,zoom=4,fitBounds=F,filename="Map_GoogleMaps.html",layerName="Economic Data")