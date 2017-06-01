library(plotGoogleMaps) # for plotting on google maps so it looks cool
library(raster)         # for reading in raster files
library(rgdal)          # for the readOGR thing

setwd("C:/Users/guest1/Desktop/Andre/Spatial/Soil/Data")


#---Plot the soil data-------------------------------------------------------------
# phil_soils <- readOGR(dsn=paste(getwd(), "Philippine Soils (PhilSoil)", sep="/"),
#                       layer="philsoil_Project")
# soil_plot <- phil_soils[,c("SOILCODE")]
# names(soil_plot) <- c("Soil Type")
# map <- plotGoogleMaps(soil_plot, zoom=6, fitBounds=F,
#                       filename="Map_GoogleMaps.html", layerName="Economic Data")
#----------------------------------------------------------------------------------


#---Annual Mean Temperature--------------------------------------------------------
max_ideal_temp <- 28
min_ideal_temp <- 26
ave_ideal_temp <- (max_ideal_temp + min_ideal_temp)/2

annual_mean_temp <- raster("Annual Mean Temperature (BIO1_ph)/bio1_ph.tif")
annual_mean_temp <- annual_mean_temp * 1.0 / 10

#get their differences from ave_ideal_temp
annual_mean_temp <- abs(annual_mean_temp - ave_ideal_temp)

annual_mean_temp <- shift(annual_mean_temp, x=0, y=-15000)
map <- plotGoogleMaps(annual_mean_temp, layerName="Annual Mean Temperature", add=TRUE,
                      filename="Map_GoogleMaps.html", fitBounds=F, zoom=6, legend=TRUE)
#----------------------------------------------------------------------------------


#---Annual Precipitation-----------------------------------------------------------
max_ideal_rain <- 2000
min_ideal_rain <- 1500
ave_ideal_rain <- (max_ideal_rain+min_ideal_rain)*1.0/2
annual_precip <- raster("Annual Precipitation (BIO12_ph)/bio12_ph.tif")

##method 1: display temperatures as is

##method 2: display temperatures as "how far they are from mean(max_ideal, min_ideal)
annual_precip <- abs(ave_ideal_rain - annual_precip)

##method 3: display temperatures as "how far from min_ideal or max_ideal)
# annual_precip <- min(abs(annual_precip - max_ideal_rain), abs(annual_precip - min_ideal_rain))

annual_precip <- shift(annual_precip, y=-15000)
map <- plotGoogleMaps(annual_precip, layerName="Annual Precipitation",
                      filename="Map_GoogleMaps.html", zoom=6, fitBounds=F,
                      previousMap=map, add=TRUE)
#----------------------------------------------------------------------------------


#---Plot each province-------------------------------------------------------------
phil_provinces <- readOGR(dsn=paste(getwd(),"Provinces",sep="/"), layer="Provinces")
province_plot <- phil_provinces[,c("REGION", "NAME_1")]
names(province_plot) <- c("Region", "Name")
map <- plotGoogleMaps(province_plot,zoom=6,fitBounds=F, previousMap = map,
                      filename="Map_GoogleMaps.html", layerName="Province Names",
                      legend=FALSE, colPalette="white")

# new_provinces <- readOGR(dsn=paste(getwd(), "Sariling Gawa", sep="/"), layer="temp_dapat")
# new_plot <- new_provinces[,c("REGION", "NAME_1", "ph_mean", "")]
# names(new_plot) <- c("Region", "Name", "Ave. Temp.")
# map <- plotGoogleMaps(new_plot,zoom=6,fitBounds=F, #previousMap = map,
#                       filename="Map_GoogleMaps.html", layerName="Economic Data",
#                       legend=FALSE)
#----------------------------------------------------------------------------------