library(plyr)      # for the magical "combine" function

# note: many steps were done before this using QGIS
# a. Separate the soil types per province
# b. Get total area of each soil region in each province
# c. turn them into percentages of the total area of that province
# d. Those percentages are the $soil_data


# set directories
input_dir <- "C:/Users/guest1/Desktop/Andre/Spatial/Soil/Data/Sariling Gawa/Soils Per Region/CSVs/copies"
output_dir <- "C:/Users/guest1/Desktop/Andre/Spatial/Soil/Data/Sariling Gawa/Soils Per Region/CSVs/summarized_not_csv/"

setwd(input_dir)

# get filenames
filenames <- list.files(pattern=".csv")

# for(name in filenames)
# {
  name <- filenames[1]
  file <- read.csv(paste(input_dir, name, sep="/"))
  file <- file[c('SOILDESC', 'G_CACAO', 'soil_data')]
  
  file <- file[file$G_CACAO==100,]
  
  file <- ddply(file, .(SOILDESC, G_CACAO), summarize, soil_data=sum(soil_data))
  
  file <- file[order(file$soil_data, decreasing=TRUE), c("SOILDESC", "G_CACAO", "soil_data")]
  file$soil_data <- file$soil_data * 100
  
  output <- file[c(1:5),]
  output_name <- paste(paste(output_dir, substring(name, 0, nchar(name)-4), sep="/"), "csv", sep=".")
  write.csv(file[c(1:5),], file=output_name)
# }