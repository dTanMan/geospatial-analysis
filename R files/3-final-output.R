# note: this output will NOT completely match the attached htm
# file as there were edits made to the htm file manually. The
# changes, however, are only minor and will not affect the
# functionality of the code.

library(plotGoogleMaps) # for plotting on google maps so it looks cool
library(raster)         # for reading in raster files
library(rgdal)          # for the readOGR thing

# set working directory
setwd("C:/Users/guest1/Desktop/Andre/Spatial/Soil/Data")

#---color palettes to be used------------------------------------------------------
temp_palette <- c("#FFFFFF","#EEEEFF","#DDDDFF","#CCCCFF","#BBBBFF","#AAAAFF","#9999FF","#8888FF","#7777FF","#6666FF","#5555FF","#4444FF","#3333FF","#2222FF","#1111FF","#0000FF")

precip_palette <- c("#FFFFFF", "#FFEEEE", "#FFDDDD", "#FFCCCC", "#FFBBBB", "#FFAAAA", "#FF9999", "#FF8888", "#FF7777", "#FF6666", "#FF5555", "#FF4444", "#FF3333", "#FF2222", "#FF1111", "#FF0000")
#----------------------------------------------------------------------------------


#---Plot the soil data-------------------------------------------------------------
# read in the Shape file
phil_soils <- readOGR(dsn=paste(getwd(), "Philippine Soils (PhilSoil)", sep="/"),
                      layer="philsoil_Project-3")

# let's get only what we need
soil_plot <- phil_soils[,c("G_CACAO", "SOILCODE")]
soil_plot@data$G_CACAO <- as.factor(soil_plot@data$G_CACAO)

# Set the name of the legend
names(soil_plot) <- c("Feasibility of Soil", "Soil Code")

# plot!
# add=TRUE means "i have more to add, do not output it yet"
# layerName changes the boldfaced text in the output (the header, so to speak)
map <- plotGoogleMaps(soil_plot, zoom=6, fitBounds=F, add=TRUE, colPalette = c("white", "green"),
                      filename="Map_GoogleMaps.html", layerName="Soil Type")
#----------------------------------------------------------------------------------


#---Annual Mean Temperature--------------------------------------------------------
# check the .txt for information about these data
max_ideal_temp <- 28
min_ideal_temp <- 26

# use the average of the minimum and maximum ideal temp as a measure for
# how "ideal" the temperature of an area will be
ave_ideal_temp <- (max_ideal_temp + min_ideal_temp)/2

# read the .tif file (it's a raster - data encoded as a picture. Each pixel
# has a value that corresponds to the real world data.)
annual_mean_temp <- raster("Annual Mean Temperature (BIO1_ph)/bio1_ph.tif")

# you can manipulate the numbers directly
# (but you can't do if statements with them. We tried.)

# we're doing this becaues the data encoded is the actual data multiplied by 10.
# Multiplying by 1.0 is just to ensure that the output is a decimal (important
# in other programming languages)
annual_mean_temp <- annual_mean_temp * 1.0 / 10

# get their differences from ave_ideal_temp
annual_mean_temp <- abs(annual_mean_temp - ave_ideal_temp)

# the raster had to be offset by some pixels; this is probably because of the
# raster file itself.
annual_mean_temp <- shift(annual_mean_temp, x=0, y=-15000)

# plot!
# previousMap = map indicates that we are adding to a previously plotted map.
# again, add=TRUE means "we have more to add."
map <- plotGoogleMaps(annual_mean_temp, layerName="Annual Mean Temperature", add=TRUE,
                      filename="Map_GoogleMaps.html", fitBounds=F, zoom=6, legend=TRUE,
                      previousMap = map, colPalette=rev(temp_palette))
#----------------------------------------------------------------------------------


#---Annual Precipitation-----------------------------------------------------------
# same "metric" as a while ago: get the midpoint of the ideal temperatures
# and use it as a way to see how ideal the tepmerature is.
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
                      previousMap=map, add=TRUE, colPalette=rev(precip_palette))
#----------------------------------------------------------------------------------


#---Plot each province-------------------------------------------------------------
# read in the shape file. provinces-2 already contains the ave. temperature and rainfall
phil_provinces <- readOGR(dsn=paste(getwd(),"Provinces",sep="/"), layer="provinces-2")

# subset again the the only stuff we need
province_plot <- phil_provinces[,c("NAME_1", "REGION", "TEMP_MEAN", "RAIN_MEAN")]

# put in the names as headers
names(province_plot) <- c("Name", "Region", "Ave. Temp. (Celsius)", "Ave. Rainfall (mm.)")

# plot! Note there is no more add=TRUE as it's time to actually output this into a .htm.
map <- plotGoogleMaps(province_plot,zoom=6,fitBounds=F, previousMap = map,
                      filename="cacao_map.html", layerName="Province Names",
                      legend=FALSE, colPalette="white")
#----------------------------------------------------------------------------------


############################################################
# This code is written by:                                 #
#                                                          #
#                Andre T. Tan,             4 BS CS, ADMU   #
#   Christian Neil "Jake Cuenca" Generoso, 4 BS CS, UPM    #
#                                                          #
# for the FSRM Department of SGV under Sir Christian Chua  #
# in partial completion of our internship, 6/6-7/19, 2016  #
############################################################