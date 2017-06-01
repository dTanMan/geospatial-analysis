var table = []

function query()
{
    if (typeof table === 'undefined')
    {
        load_table();
    }
    
    var ans = table[ document.getElementById("soilnum").value ];
    
    if(typeof ans === "undefined")
        ans = " please recheck input data";
    
    document.getElementById("soilname").value = ans;
}

function load_table()
{
    console.log("load_table was loaded");
    table[0] = "NA";
    table[1] = "Hydrosol";
    table[2] = "Obando fine sandy loam";
    table[3] = "Bigaa clay loam";
    table[4] = "Quiangua silt loam";
    table[5] = "Quiangua silt loam";
    table[6] = "Prensa clay loam";
    table[7] = "Prensa silty clay loam";
    table[8] = "Buenavista clay loam";
    table[9] = "Buenavista silt loam";
    table[10] = "Buenavista sandy clay loam";
    table[11] = "Novaliches loam";
    table[12] = "Novaliches clay loam";
    table[13] = "Novaliches loam";
    table[14] = "Sibul clay";
    table[15] = "Sibul clay (undifferentiated)";
    table[16] = "Bantog clay loam";
    table[17] = "Novaliches clay loam adobe";
    table[18] = "Guadalupe clay";
    table[19] = "Guadalupe clay adobe";
    table[20] = "Marikina silt loam";
    table[21] = "Marikina loam";
    table[22] = "Marikina clay loam";
    table[23] = "Bay clay loam / Bantay loam (Rizal)";
    table[24] = "Binangonan clay";
    table[25] = "Binangonan clay (Lowland Phase)";
    table[26] = "Antipolo clay";
    table[27] = "Antipolo clay loam";
    table[28] = "Antipolo soils (undiferrentiated)";
    table[29] = "Filled up soil";
    table[30] = "Guadalupe clay loam";
    table[31] = "Guadalupe silt loam";
    table[32] = "Guadalupe sand";
    table[33] = "Magallanes clay loam";
    table[34] = "Magallanes clay loam (Steep phase)";
    table[35] = "Magallanes loam";
    table[36] = "Tagaytay sandy loam";
    table[37] = "Tagaytay loam";
    table[38] = "Tagaytay loam (Steep Phase)";
    table[39] = "Carmona sandy clay loam";
    table[40] = "Carmona clay loam";
    table[41] = "Carmona clay loam (Steep Phase)";
    table[42] = "Obando sand";
    table[43] = "Obando very fine sand";
    table[44] = "Pantungan sand";
    table[45] = "Mountain soil (undifferentiated)";
    table[46] = "NA";
    table[47] = "Sibul clay loam";
    table[48] = "Magallanes sandy loam";
    table[49] = "NA";
    table[50] = "NA";
    table[51] = "NA";
    table[52] = "Calumpang clay";
    table[53] = "NA";
    table[54] = "Taal Volcano sand";
    table[55] = "NA";
    table[56] = "Taal sandy loam";
    table[57] = "Taal fine sandy loam";
    table[58] = "NA";
    table[59] = "Ibaan loam";
    table[60] = "Ibaan loam (Gravelly Phase)";
    table[61] = "Ibaan clay loam";
    table[62] = "Lipa loam";
    table[63] = "Lipa loam (Deep phase)";
    table[64] = "Tarlac soils";
    table[65] = "NA";
    table[66] = "Prensa silt loam";
    table[67] = "San Fernando clay loam";
    table[68] = "San Fernando clay";
    table[69] = "Candaba silt loam";
    table[70] = "Candaba clay loam";
    table[71] = "Angeles coarse sand";
    table[72] = "Angeles sand";
    table[73] = "Angeles fine sand";
    table[74] = "Angeles sandy loam";
    table[75] = "Angeles soil (undifferentiated";
    table[76] = "La Paz sand";
    table[77] = "La Paz fine sand";
    table[78] = "La Paz silt loam";
    table[79] = "Arayat sandy clay loam";
    table[80] = "Arayat clay loam";
    table[81] = "La Paz fine sandy loam";
    table[82] = "San Manuel silt, San Manuel silt loam, San Miguel silt loam";
    table[83] = "Luisiana fine sand";
    table[84] = "Luisita sandy loam";
    table[85] = "Luisita fine sandy loam";
    table[86] = "Tarlac clay loam";
    table[87] = "Tarlac clay loam, gravelly phase";
    table[88] = "Tarlac (lowland phase) clay loam";
    table[89] = "Tarlac sandy clay loam";
    table[90] = "Zaragosa clay";
    table[91] = "Legua clay loam";
    table[92] = "Pangasinan river sand";
    table[93] = "Pangasinan fine sand";
    table[94] = "San Manuel silty clay loam";
    table[95] = "San Manuel fine sandy loam";
    table[96] = "San Manuel sandy loam";
    table[97] = "Sandy Manuel sandy";
    table[98] = "Annam clay loam";
    table[99] = "Umingan silt loam";
    table[100] = "Umingan sandy loam";
    table[101] = "Umingan fine sand";
    table[102] = "San Fabian clay loam";
    table[103] = "Alaminos loam";
    table[104] = "Alaminos loam (Ilocos Sur)";
    table[105] = "Alaminos sandy loam";
    table[106] = "Alaminos soil (undifferentiated)";
    table[107] = "Bani clay / Bolinao clay loam";
    table[108] = "Bolinao clay loam";
    table[109] = "Quingua clay loam";
    table[110] = "Quingua fine sand";
    table[111] = "Prensa sandy loam";
    table[112] = "Annam loam gravelly phase";
    table[113] = "Annam sandy clay loam";
    table[114] = "Umingan loam, deep phase";
    table[115] = "Umingan sand";
    table[116] = "Maligaya silt loam";
    table[117] = "Maligaya clay loam";
    table[118] = "Beach sand";
    table[119] = "Sta. Rita clay loam";
    table[120] = "Sta. Rita clay";
    table[121] = "Bauang clay";
    table[122] = "Umingan clay";
    table[123] = "Umingan fine sandy loam";
    table[124] = "Sora silt loam";
    table[125] = "Alimodian - Barotac complex";
    table[126] = "Alimodian clay loam";
    table[127] = "Alimoidan silt loam";
    table[128] = "Luciana loam";
    table[129] = "Barotac loam";
    table[130] = "Barotac loam lowland phase";
    table[131] = "Barotac clay loam";
    table[132] = "Faraon clay";
    table[133] = "San Rafael loam";
    table[134] = "Guimaras gravelly loam";
    table[135] = "Alimodian soils, undifferentiated";
    table[136] = "Pilar fine sandy loam";
    table[137] = "Pilar silt loam";
    table[138] = "Culis loam";
    table[139] = "Marikina silty clay loam";
    table[140] = "Luisiana clay loam";
    table[141] = "Paete clay loam";
    table[142] = "Lipa loam, steep phase";
    table[143] = "Macolod clay loam";
    table[144] = "Macolod clay loam (Steep phase)";
    table[145] = "Macolod soil (undifferentiated";
    table[146] = "Bay clay";
    table[147] = "Calumpang clay";
    table[148] = "Barcelona clay";
    table[149] = "Gravel deposit";
    table[150] = "Sinapangan clay";
    table[151] = "Burgos clay";
    table[152] = "Faraon clay / River wash";
    table[153] = "Bolinao clay";
    table[154] = "Bolinao clay (Steep phase)";
    table[155] = "Faraon clay (Steep phase)";
    table[156] = "Lugo clay";
    table[157] = "Mandawe clay loam";
    table[158] = "Mandawe silt loam";
    table[159] = "Madellin clay";
    table[160] = "Mantalongan clay loam";
    table[161] = "Cabangan clay loam";
    table[162] = "Cabangan sandy loam";
    table[163] = "Bancal clay";
    table[164] = "Bulacan sandy clay loam";
    table[165] = "NA";
    table[166] = "Alaminos clay";
    table[167] = "Villar sandy loam";
    table[168] = "Umingan clay loam";
    table[169] = "Baguio clay loam";
    table[170] = "Bantay loam";
    table[171] = "Rough stony land";
    table[172] = "Ubay clay loam";
    table[173] = "Ubay clay";
    table[174] = "Sevilla clay";
    table[175] = "Calape clay loam";
    table[176] = "Batuan clay loam";
    table[177] = "Candijay clay";
    table[178] = "Inabanga clay";
    table[179] = "Batuan - Faraon complex";
    table[180] = "Baluarte clay loam";
    table[181] = "Antipolo - Alimoidan - Luisiana complex";
    table[182] = "Pili clay loam";
    table[183] = "Pili clay";
    table[184] = "Pili loam";
    table[185] = "Balongay clay";
    table[186] = "Tigaon clay";
    table[187] = "Macolod - PIli complex";
    table[188] = "Macolod sandy loam";
    table[189] = "Indan silt loam";
    table[190] = "San Manuel loam";
    table[191] = "Pawing fine sandy loam";
    table[192] = "Bigaa clay";
    table[193] = "Tacloban clay";
    table[194] = "Tacloban clay";
    table[195] = "Palompon clay";
    table[196] = "Malitbog clay";
    table[197] = "Maasin clay";
    table[198] = "Himayangan clay loam";
    table[199] = "San Manuel soil, undifferentiated";
    table[200] = "Guimaras sandy clay loam";
    table[201] = "Faraon - Bolinao complex";
    table[202] = "Rough Mountainious land";
    table[203] = "Obando fine sand";
    table[204] = "Dagami clay loam";
    table[205] = "Guimbalaon clay";
    table[206] = "Matina clay";
    table[207] = "Tugbok clay";
    table[208] = "Matina clay loam";
    table[209] = "Miral clay loam";
    table[210] = "Camasan sandy clay loam";
    table[211] = "Kidapawan clay;  Kidapawan clay loam";
    table[212] = "Madunga clay loam";
    table[213] = "Malalag loam";
    table[214] = "Butuan clay";
    table[215] = "NA";
    table[216] = "NA";
    table[217] = "Magcalon sandy loam";
    table[218] = "Cervantes loam";
    table[219] = "Patnongon sandy clay loam";
    table[220] = "Maligaya clay";
    table[221] = "Makato clay";
    table[222] = "Sigcay clay";
    table[223] = "Sapian clay";
    table[224] = "Ubay sandy loam";
    table[225] = "Alimodian sandy clay";
    table[226] = "Sta. Rita sandy loam";
    table[227] = "Legaspi fine sandy loam";
    table[228] = "Bantog clay";
    table[229] = "Annam clay";
    table[230] = "Legaspi fine sandy loam, stony phase";
    table[231] = "Legaspi sandy clay loam";
    table[232] = "Malinao fine sandy loam";
    table[233] = "Libon silty clay";
    table[234] = "Ligao loam";
    table[235] = "Bascaran clay";
    table[236] = "San Manuel clay loam";
    table[237] = "Sara clay loam";
    table[238] = "NA";
    table[239] = "Luisiana clay";
    table[240] = "Mandawe clay";
    table[241] = "Mauraro gravelly sandy loam";
    table[242] = "Mayon gravelly sandy loam";
    table[243] = "Guinobatan sandy loam";
    table[244] = "Castilla clay loam";
    table[245] = "Donsol sandy clay";
    table[246] = "Casiguran clay loam";
    table[247] = "Macabara sandy loam";
    table[248] = "Bulusan loam";
    table[249] = "Sorsogon sandy loam";
    table[250] = "Sorsogon silty clay loam";
    table[251] = "Silay sandy loam";
    table[252] = "Silay fine sandy loam";
    table[253] = "Silay loam";
    table[254] = "Silay clay";
    table[255] = "Pellupandan sandy loam";
    table[256] = "Isabela clay";
    table[257] = "Isabela sandy loam";
    table[258] = "Faraon sandy loam";
    table[259] = "Bantay clay loam";
    table[260] = "Bago fine sandy loam";
    table[261] = "Bago loam";
    table[262] = "Bago sandy clay loam";
    table[263] = "Victorias clay loam";
    table[264] = "Cadiz gravelly loam";
    table[265] = "Guimbalaon fine sandy loam";
    table[266] = "Guimbalaon loam";
    table[267] = "Guimbalaon gravelly loam";
    table[268] = "La Castellana clay loam";
    table[269] = "Manapla loam";
    table[270] = "Tupi fine sandy loam";
    table[271] = "Tupi silt loam";
    table[272] = "Manapla - Bago complex";
    table[273] = "Irosin sandy loam";
    table[274] = "Macabare clay loam";
    table[275] = "Bulusan sandy loam";
    table[276] = "Bulacan clay loam";
    table[277] = "Irosin silt loam";
    table[278] = "Guimbalaon clay loam stony phase";
    table[279] = "Guimbalaon clay loam (eroded phase)";
    table[280] = "Guimbalaon clay loam";
    table[281] = "NA";
    table[282] = "NA";
    table[283] = "NA";
    table[284] = "NA";
    table[285] = "Guingua silty clay loam";
    table[286] = "NA";
    table[287] = "NA";
    table[288] = "Guimbalaon gravelly clay loam";
    table[289] = "NA";
    table[290] = "NA";
    table[291] = "NA";
    table[292] = "NA";
    table[293] = "NA";
    table[294] = "NA";
    table[295] = "NA";
    table[296] = "NA";
    table[297] = "NA";
    table[298] = "NA";
    table[299] = "NA";
    table[300] = "NA";
    table[301] = "NA";
    table[302] = "NA";
    table[303] = "NA";
    table[304] = "NA";
    table[305] = "La Castellana clay loam";
    table[306] = "NA";
    table[307] = "San Manuel clay";
    table[308] = "NA";
    table[309] = "NA";
    table[310] = "NA";
    table[311] = "NA";
    table[312] = "NA";
    table[313] = "NA";
    table[314] = "NA";
    table[315] = "Mambajao clay";
    table[316] = "Lourdes clay loam";
    table[317] = "Jasaan clay";
    table[318] = "Jasaan silt loam; Jasaan clay loam";
    table[319] = "NA";
    table[320] = "Camiguin clay";
    table[321] = "Jasaan-Bolinao complex";
    table[322] = "Umingan loam";
    table[323] = "Adtuyan clay";
    table[324] = "Adtuyan clay stony phase";
    table[325] = "Macolod clay";
    table[326] = "Rough Broken land";
    table[327] = "Alimodian clay";
    table[328] = "Maapag clay";
    table[329] = "NA";
    table[330] = "Calauag clay";
    table[331] = "NA";
    table[332] = "NA";
    table[333] = "NA";
    table[334] = "NA";
    table[335] = "NA";
    table[336] = "NA";
    table[337] = "NA";
    table[338] = "NA";
    table[339] = "NA";
    table[340] = "NA";
    table[341] = "Lava flow";
    table[342] = "Castilla - Bolinao complex";
    table[343] = "NA";
    table[344] = "NA";
    table[345] = "NA";
    table[346] = "NA";
    table[347] = "NA";
    table[348] = "NA";
    table[349] = "NA";
    table[350] = "Bascaran sandy clay";
    table[351] = "Bascaran sandy loam";
    table[352] = "NA";
    table[353] = "NA";
    table[354] = "Ubay clay";
    table[355] = "NA";
    table[356] = "NA";
    table[357] = "Cataingan clay";
    table[358] = "NA";
    table[359] = "Malalag silt loam";
    table[360] = "NA";
    table[361] = "NA";
    table[362] = "Cabangan clay";
    table[363] = "Camansa sandy";
    table[364] = "NA";
    table[365] = "Kicharo clay loam";
    table[366] = "Rubble land";
    table[367] = "NA";
    table[368] = "NA";
    table[369] = "NA";
    table[370] = "San Manuel loamy sand";
    table[371] = "NA";
    table[372] = "NA";
    table[373] = "NA";
    table[374] = "NA";
    table[375] = "NA";
    table[376] = "NA";
    table[377] = "NA";
    table[378] = "Maligaya sandy clay loam";
    table[379] = "NA";
    table[380] = "NA";
    table[381] = "NA";
    table[382] = "NA";
    table[383] = "Maligaya silty clay loam";
    table[384] = "NA";
    table[385] = "Quingua clay";
    table[386] = "NA";
    table[387] = "NA";
    table[388] = "San Juan sandy clay loam";
    table[389] = "Bantog sandy loam";
    table[390] = "Bantog silt loam";
    table[391] = "Bantog silty clay loam";
    table[392] = "NA";
    table[393] = "Ilagan sandy loam (eroded phase)";
    table[394] = "NA";
    table[395] = "NA";
    table[396] = "Cauayan sandy loam";
    table[397] = "Cauayan clay loam";
    table[398] = "Cauayan clay";
    table[399] = "Rugao sandy loam";
    table[400] = "Rugao clay";
    table[401] = "Rugao clay loam";
    table[402] = "Bantay - Annam complex";
    table[403] = "NA";
    table[404] = "Luisiana - Annam complex";
    table[405] = "NA";
    table[406] = "NA";
    table[407] = "Alaminos clay loam";
    table[408] = "NA";
    table[409] = "NA";
    table[410] = "Bago clay loam";
    table[411] = "NA";
    table[412] = "Quingua sandy loam";
    table[413] = "Quingua loam";
    table[414] = "San Manuel -Taal complex";
    table[415] = "Dauin clay";
    table[416] = "Dauin sandy loam";
    table[417] = "Siaton sandy loam";
    table[418] = "Zamboanguita clay loam";
    table[419] = "Bangkal clay loam";
    table[420] = "Medilin clay loam";
    table[421] = "Castillo clay";
    table[422] = "Faraon clay loam";
    table[423] = "Paete clay loam";
    table[424] = "NA";
    table[425] = "NA";
    table[426] = "NA";
    table[427] = "NA";
    table[428] = "NA";
    table[429] = "NA";
    table[430] = "NA";
    table[431] = "Parang clay loam";
    table[432] = "Buldun sandy loam";
    table[433] = "Soils undefferentiated";
    table[434] = "Balut clay loam";
    table[435] = "Tamantaka clay";
    table[436] = "Libi loam";
    table[437] = "Dadiangas sandy loam";
    table[438] = "Dadiangas loamy sand";
    table[439] = "Nupol sandy loam";
    table[440] = "Banaa sandy loam";
    table[441] = "Sinolan sandy loam";
    table[442] = "Malandag fine sandy loam";
    table[443] = "Lutayan sandy loam";
    table[444] = "Makar loam";
    table[445] = "Kudurungan clay";
    table[446] = "Buayan clay loam";
    table[447] = "NA";
    table[448] = "Kudarangan clay";
    table[449] = "Aroman clay loam";
    table[450] = "Glan clay loam";
    table[451] = "Guilada sandy clay loam";
    table[452] = "Kabacan clay";
    table[453] = "Kabacan clay loam";
    table[454] = "NA";
    table[455] = "NA";
    table[456] = "NA";
    table[457] = "Tinambulan peat";
    table[458] = "Langkong sandy";
    table[459] = "Tapul clay loam";
    table[460] = "NA";
    table[461] = "NA";
    table[462] = "NA";
    table[463] = "NA";
    table[464] = "NA";
    table[465] = "Panganiran clay";
    table[466] = "NA";
    table[467] = "NA";
    table[468] = "NA";
    table[469] = "NA";
    table[470] = "NA";
    table[471] = "NA";
    table[472] = "NA";
    table[473] = "NA";
    table[474] = "NA";
    table[475] = "NA";
    table[476] = "Bugko loamy sand";
    table[477] = "Bugko sandy loam";
    table[478] = "Tingib clay loam";
    table[479] = "Dolongan loamy sand";
    table[480] = "NA";
    table[481] = "NA";
    table[482] = "NA";
    table[483] = "Bigaa sandy loam";
    table[484] = "Catubig loam";
    table[485] = "Catubig clay loam";
    table[486] = "NA";
    table[487] = "Palapaa clay loam";
    table[488] = "Maydolong silt loam";
    table[489] = "Maydolong sandy clay loam";
    table[490] = "Hamani loam";
    table[491] = "Tacloban clay loam";
    table[492] = "Catbalogan clay loam";
    table[493] = "NA";
    table[494] = "Libertad clay";
    table[495] = "Bayho clay loam";
    table[496] = "NA";
    table[497] = "NA";
    table[498] = "NA";
    table[499] = "Gasan loamy sand";
    table[500] = "Gasan clay loam";
    table[501] = "Maranlig clay";
    table[502] = "Cabahuan clay";
    table[503] = "Timbo clay loam";
    table[504] = "Laylay sandy loam";
    table[505] = "Mogpog silt loam";
    table[506] = "Mogpog clay loam";
    table[507] = "Banto clay loam";
    table[508] = "Tarug clay loam";
    table[509] = "Dolores clay loam";
    table[510] = "Tagum clay loam";
    table[511] = "Banhigan clay loam";
    table[512] = "Bolanacan clay";
    table[513] = "Boac clay loam";
    table[514] = "Mahuya-tuya clay loam";
    table[515] = "Tarug-Faraon complex";
    table[516] = "Balut loam";
    table[517] = "Sari silty clay";
    table[518] = "Tittay sandy clay loam";
    table[519] = "NA";
    table[520] = "Dohinob gravelty silt loam";
    table[521] = "NA";
    table[522] = "Pason anca loam";
    table[523] = "Adtuyon loam";
    table[524] = "Guimbalaon-Annam complex";
    table[525] = "NA";
    table[526] = "NA";
    table[527] = "NA";
    table[528] = "Indan loam";
    table[529] = "NA";
    table[530] = "NA";
    table[531] = "NA";
    table[532] = "NA";
    table[533] = "NA";
    table[534] = "NA";
    table[535] = "NA";
    table[536] = "NA";
    table[537] = "NA";
    table[538] = "NA";
    table[539] = "NA";
    table[540] = "NA";
    table[541] = "NA";
    table[542] = "NA";
    table[543] = "NA";
    table[544] = "NA";
    table[545] = "NA";
    table[546] = "Bigaa silty clay loam";
    table[547] = "NA";
    table[548] = "Bago sandy loam";
    table[549] = "NA";
    table[550] = "NA";
    table[551] = "NA";
    table[552] = "NA";
    table[553] = "NA";
    table[554] = "NA";
    table[555] = "NA";
    table[556] = "NA";
    table[557] = "NA";
    table[558] = "Bolinao loam";
    table[559] = "NA";
    table[560] = "NA";
    table[561] = "NA";
    table[562] = "NA";
    table[563] = "NA";
    table[564] = "NA";
    table[565] = "NA";
    table[566] = "NA";
    table[567] = "Toran silty clay";
    table[568] = "Toran loam";
    table[569] = "Calumpang silty clay loam";
    table[570] = "Carig clay loam";
    table[571] = "Carig loam";
    table[572] = "Buguay loamy sand";
    table[573] = "Adtuyan clay loam";
    table[574] = "Bituin clay";
    table[575] = "Camansa clay";
    table[576] = "Adtuyon clay stony phase";
    table[577] = "NA";
    table[578] = "NA";
    table[579] = "Camiguin clay";
    table[580] = "Sta. Filomena clay loam";
    table[581] = "NA";
    table[582] = "NA";
    table[583] = "Kidapawan sandy clay loam";
    table[584] = "NA";
    table[585] = "NA";
    table[586] = "NA";
    table[587] = "NA";
    table[588] = "NA";
    table[589] = "NA";
    table[590] = "NA";
    table[591] = "NA";
    table[592] = "NA";
    table[593] = "Bog deep";
    table[594] = "Dune land (Sand dunes)";
    table[595] = "NA";
    table[596] = "San Manuel sandy clay loam";
    table[597] = "Umingan sandy clay loam";
    table[598] = "NA";
    table[599] = "Rock land";
    table[600] = "San Juan clay";
    table[601] = "NA";
    table[602] = "NA";
    table[603] = "NA";
    table[604] = "Brooke's clay";
    table[605] = "Brooke's clay loam";
    table[606] = "NA";
    table[607] = "Brooke's loam";
    table[608] = "Aborlan loam";
    table[609] = "NA";
    table[610] = "NA";
    table[611] = "NA";
    table[612] = "Mandawe loam";
    table[613] = "Sorsogon clay loam";
    table[614] = "Macabare clay loam";
    table[615] = "Himayangan sandy clay loam";
    table[616] = "Guadalupe loam";
    table[617] = "NA";
    table[618] = "NA";
    table[619] = "NA";
    table[620] = "NA";
    table[621] = "NA";
    table[622] = "Cauayan loam";
    table[623] = "NA";
    table[624] = "NA";
    table[625] = "NA";
    table[626] = "NA";
    table[627] = "NA";
    table[628] = "NA";
    table[629] = "NA";
    table[630] = "Tinamaga clay loam";
    table[631] = "NA";
    table[632] = "NA";
    table[633] = "NA";
    table[634] = "NA";
    table[635] = "NA";
    table[636] = "NA";
    table[637] = "NA";
    table[638] = "NA";
    table[639] = "Dalican clay loam";
    table[640] = "NA";
    table[641] = "NA";
    table[642] = "NA";
    table[643] = "NA";
    table[644] = "NA";
    table[645] = "NA";
    table[646] = "Bigaa sandy clay loam";
    table[647] = "Bauang clay loam";
    table[648] = "Bauang silty clay loam";
    table[649] = "Cervantes sandy clay loam";
    table[650] = "Sevilla clay loam/Sevilla sandy clay loam";
    table[651] = "Alimodian sandy clay loam";
    table[652] = "NA";
    table[653] = "NA";
    table[654] = "Babuyan silty clay loam";
    table[655] = "NA";
    table[656] = "NA";
    table[657] = "NA";
    table[658] = "NA";
    table[659] = "NA";
    table[660] = "NA";
    table[661] = "NA";
    table[662] = "NA";
    table[663] = "NA";
    table[664] = "NA";
    table[665] = "NA";
    table[666] = "NA";
    table[667] = "NA";
    table[668] = "NA";
    table[669] = "NA";
    table[670] = "NA";
    table[671] = "NA";
    table[672] = "Culis sandy clay loam";
    table[673] = "NA";
    table[674] = "NA";
    table[675] = "NA";
    table[676] = "Taal loam";
    table[677] = "NA";
    table[678] = "NA";
    table[679] = "NA";
    table[680] = "NA";
    table[681] = "Coron clay loam";
    table[682] = "NA";
    table[683] = "NA";
    table[684] = "NA";
    table[685] = "NA";
    table[686] = "NA";
    table[687] = "NA";
    table[688] = "NA";
    table[689] = "NA";
    table[690] = "NA";
    table[691] = "NA";
    table[692] = "NA";
    table[693] = "Tagburos clay";
    table[694] = "Babuyan clay";
    table[695] = "NA";
    table[696] = "NA";
    table[697] = "NA";
    table[698] = "NA";
    table[699] = "Alaminos silty clay loam";
    table[700] = "Alaminos sandy clay loam";
    table[701] = "NA";
    table[702] = "Faraon sandy clay";
    table[703] = "NA";
    table[704] = "NA";
    table[705] = "NA";
    table[706] = "NA";
    table[707] = "NA";
    table[708] = "La Castellana clay loam, steep phase";
    table[709] = "NA";
    table[710] = "NA";
    table[711] = "NA";
    table[712] = "NA";
    table[713] = "NA";
    table[714] = "NA";
    table[715] = "NA";
    table[716] = "Malalag clay";
    table[717] = "NA";
    table[718] = "NA";
    table[719] = "NA";
    table[720] = "NA";
    table[721] = "NA";
    table[722] = "NA";
    table[723] = "NA";
    table[724] = "NA";
    table[725] = "NA";
    table[726] = "NA";
    table[727] = "NA";
    table[728] = "NA";
    table[729] = "Cervantes clay loam";
    table[730] = "Lugo clay loam";
    table[731] = "NA";
    table[732] = "NA";
    table[733] = "NA";
    table[734] = "NA";
    table[735] = "NA";
    table[736] = "NA";
    table[737] = "NA";
    table[738] = "NA";
    table[739] = "NA";
    table[740] = "NA";
    table[741] = "NA";
    table[742] = "NA";
    table[743] = "NA";
    table[744] = "NA";
    table[745] = "NA";
    table[746] = "NA";
    table[747] = "NA";
    table[748] = "NA";
    table[749] = "NA";
    table[750] = "NA";
    table[751] = "NA";
    table[752] = "Isabela loam";
    table[753] = "NA";
    table[754] = "NA";
    table[755] = "NA";
    table[756] = "NA";
    table[757] = "NA";
    table[758] = "NA";
    table[759] = "NA";
    table[760] = "Batian gravelly / Batuan sandy loam";
    table[761] = "NA";
    table[762] = "NA";
    table[763] = "NA";
    table[764] = "NA";
    table[765] = "NA";
    table[766] = "NA";
    table[767] = "NA";
    table[768] = "NA";
    table[769] = "NA";
    table[770] = "NA";
    table[771] = "Tupi loam";
    table[772] = "NA";
    table[773] = "NA";
    table[774] = "NA";
    table[775] = "NA";
    table[776] = "NA";
    table[777] = "NA";
    table[778] = "NA";
    table[779] = "NA";
    table[780] = "NA";
    table[781] = "NA";
    table[782] = "NA";
    table[783] = "NA";
    table[784] = "NA";
    table[785] = "NA";
    table[786] = "NA";
    table[787] = "NA";
    table[788] = "NA";
    table[789] = "NA";
    table[790] = "NA";
    table[791] = "NA";
    table[792] = "NA";
    table[793] = "NA";
    table[794] = "NA";
    table[795] = "NA";
    table[796] = "NA";
    table[797] = "NA";
    table[798] = "Alimodian sandy loam";
    table[799] = "NA";
    table[800] = "NA";
    table[801] = "NA";
    table[802] = "NA";
    table[803] = "NA";
    table[804] = "NA";
    table[805] = "NA";
    table[806] = "NA";
    table[807] = "NA";
    table[808] = "NA";
    table[809] = "NA";
    table[810] = "NA";
    table[811] = "NA";
    table[812] = "NA";
    table[813] = "NA";
    table[814] = "NA";
    table[815] = "Mabini sandy clay loam";
    table[816] = "Baliangao clay loam";
    table[817] = "NA";
    table[818] = "Maranlig loam";
    table[819] = "NA";
    table[820] = "NA";
    table[821] = "NA";
    table[822] = "NA";
    table[823] = "NA";
    table[824] = "Rugao sandy clay loam";
    table[825] = "NA";
    table[826] = "NA";
    table[827] = "NA";
    table[828] = "NA";
    table[829] = "Maranlig gravelly sandy clay loam";
    table[830] = "NA";
    table[831] = "NA";
    table[832] = "NA";
    table[833] = "NA";
    table[834] = "NA";
    table[835] = "NA";
    table[836] = "NA";
    table[837] = "NA";
    table[838] = "NA";
    table[839] = "NA";
    table[840] = "NA";
    table[841] = "NA";
    table[842] = "NA";
    table[843] = "NA";
    table[844] = "NA";
    table[845] = "NA";
    table[846] = "NA";
    table[847] = "NA";
    table[848] = "NA";
    table[849] = "NA";
    table[850] = "NA";
    table[851] = "Guadalupe clay";
    table[852] = "NA";
    table[853] = "NA";
    table[854] = "NA";
    table[855] = "Caromatan silt loam";
    table[856] = "NA";
    table[857] = "NA";
    table[858] = "NA";
    table[859] = "NA";
    table[860] = "NA";
    table[861] = "Magsaysay clay";
    table[862] = "NA";
    table[863] = "Virac loam";
    table[864] = "Calatagan clay loam";
    table[865] = "Banto-Malalag complex";
    table[866] = "NA";
    table[867] = "Tadao sandy clay loam";
    table[868] = "San Fernando silty clay";
    table[869] = "San Manuel silty clay";
    table[870] = "Bantog silty clay";
    table[871] = "NA";
    table[872] = "Umingan silty clay loam";
    table[873] = "Butuan clay";
    table[874] = "San Juan clay";
    table[875] = "NA";
    table[876] = "NA";
    table[877] = "NA";
    table[878] = "NA";
    table[879] = "NA";
    table[880] = "NA";
    table[881] = "NA";
    table[882] = "NA";
    table[883] = "NA";
    table[884] = "NA";
    table[885] = "Alimodian clay";
    table[886] = "Bolinao silt loam";
    table[887] = "Butuan loam";
    table[888] = "Kidapawan loam";
    table[889] = "Kitcharao silt loam";
    table[890] = "Mambutay sandy loam";
    table[891] = "NA";
    table[892] = "NA";
    table[893] = "NA";
    table[894] = "NA";
    table[895] = "NA";
    table[896] = "NA";
    table[897] = "NA";
    table[898] = "NA";
    table[899] = "Quingua silty clay";
    table[900] = "NA";
    table[901] = "NA";
    table[902] = "NA";
    table[903] = "Ilagan loam";
    table[904] = "NA";
    table[905] = "NA";
    table[906] = "NA";
    table[907] = "NA";
    table[908] = "Cervantes sandy loam";
    table[909] = "Ibaan clay loam";
    table[910] = "Quingua sandy clay loam";
    table[911] = "Luisiana sandy clay loam";
    table[912] = "Antipolo sandy clay";
    table[913] = "Bigaa loam";
    table[914] = "Annam silt loam";
    table[915] = "Bay loam";
    table[916] = "Guimbalaon sandy";
    table[917] = "Boac clay";
    table[918] = "NA";
    table[919] = "NA";
    table[920] = "NA";
    table[921] = "Baler silty clay loam";
    table[922] = "Catanauan clay loam";
    table[923] = "Pollilo sandy clay loam";
    table[924] = "Polillo sandy clay loam";
    table[925] = "Sariaya sandy loam";
    table[926] = "Siain silt loam";
    table[927] = "Tagkawayan sandy loam";
    table[928] = "Bantay sandy loam";
    table[929] = "NA";
    table[930] = "NA";
    table[931] = "NA";
    table[932] = "NA";
    table[933] = "Mogpog sandy loam";
    table[934] = "Romblon clay";
    table[935] = "Odiongan clay loam";
    table[936] = "Taguis clay";
    table[937] = "Lonos sandy loam";
    table[938] = "Lonos loam";
    table[939] = "Santa Fe loam";
    table[940] = "Santa Fe sandy loam";
    table[941] = "EspaÃ±a sandy clay loam";
    table[942] = "EspaÃ±a loam, stony phase";
    table[943] = "Zamboangita sandy loam";
    table[944] = "Malalag-Faraon complex";
    table[945] = "Laylay sandy clay loam";
    table[946] = "NA";
    table[947] = "NA";
    table[948] = "NA";
    table[949] = "NA";
    table[950] = "NA";
    table[951] = "NA";
    table[952] = "NA";
    table[953] = "NA";
    table[954] = "NA";
    table[955] = "NA";
    table[956] = "NA";
    table[957] = "NA";
    table[958] = "NA";
    table[959] = "NA";
    table[960] = "NA";
    table[961] = "NA";
    table[962] = "NA";
    table[963] = "Rizal clay";
    table[964] = "NA";
    table[965] = "Lala sandy loam";
    table[966] = "NA";
    table[967] = "Kapatagan clay";
    table[968] = "NA";
    table[969] = "NA";
    table[970] = "NA";
    table[971] = "NA";
    table[972] = "NA";
    table[973] = "Ruguan clay loam";
    table[974] = "NA";
    table[975] = "Salaman loam";
    table[976] = "Ramain clay loam";
    table[977] = "NA";
    table[978] = "NA";
    table[979] = "NA";
    table[980] = "NA";
    table[981] = "NA";
    table[982] = "NA";
    table[983] = "NA";
    table[984] = "NA";
    table[985] = "NA";
    table[986] = "NA";
    table[987] = "NA";
    table[988] = "NA";
    table[989] = "NA";
    table[990] = "NA";
    table[991] = "NA";
    table[992] = "NA";
    table[993] = "NA";
    table[994] = "NA";
    table[995] = "NA";
    table[996] = "NA";
    table[997] = "NA";
    table[998] = "NA";
    table[999] = "NA";
    table[1000] = "NA";
    table[1001] = "NA";
    table[1002] = "Kabatohan loam";
    table[1003] = "Matho clay";
    table[1004] = "Malabang sandy";
    table[1005] = "Binidayan silt loam";
    table[1006] = "Bauyan clay loam";
    table[1007] = "Adtuyon La Castellana complex";
    table[1008] = "Sison clay loam";
    table[1009] = "Malimono clay loam";
    table[1010] = "Surigao clay loam";
    table[1011] = "Jamoyaon clay loam";
    table[1012] = "Anao-aon silty clay";
    table[1013] = "Sapa clay loam";
    table[1014] = "NA";
    table[1015] = "NA";
    table[1016] = "NA";
    table[1017] = "NA";
    table[1018] = "NA";
    table[1019] = "Bad-as sandy loam";
    table[1020] = "Dinagat clay loam";
    table[1021] = "NA";
    table[1022] = "NA";
    table[1023] = "NA";
    table[1024] = "NA";
    table[1025] = "NA";
    table[1026] = "NA";
    table[1027] = "NA";
    table[1028] = "NA";
    table[1029] = "NA";
    table[1030] = "NA";
    table[1031] = "Puguis gravelly loam";
    table[1032] = "Buyagan clay loam";
    table[1033] = "Beneng sandy clay";
    table[1034] = "Nangalisan gravelly clay loam";
    table[1035] = "Tacdian clay loam";
    table[1036] = "Ambassador silt loam";
    table[1037] = "Halsema clay loam";
    table[1038] = "Daclan clay loam";
    table[1039] = "Natubien loam";
    table[1040] = "Balacbac gravelly clay loam";
    table[1041] = "Atok clay loam";
    table[1042] = "Balili gravelly loam";
    table[1043] = "Paoay loam";
    table[1044] = "La Trinidad loam";
    table[1045] = "Bakakeng clay";
    table[1046] = "Guinaong loam";
    table[1047] = "NA";
    table[1048] = "Mirador clay loam";
    table[1049] = "Bolog clay";
    table[1050] = "Langa silty clay loam";
    table[1051] = "Lagawe silty clay loam";
    table[1052] = "Panupdupan clay loam";
    table[1053] = "Nayon clay loam";
    table[1054] = "Mayoyao clay loam";
    table[1055] = "NA";
    table[1056] = "Sta. Maria clay";
    table[1057] = "Palitod silt loam";
    table[1058] = "Songsong clay loam";
    table[1059] = "Natonin loam";
    table[1060] = "Natonin loam";
    table[1061] = "Bantay silty clay loam";
    table[1062] = "Sagada clay";
    table[1063] = "Sabangan";
    table[1064] = "Abatan clay loam";
    table[1065] = "Nambaran clay loam";
}