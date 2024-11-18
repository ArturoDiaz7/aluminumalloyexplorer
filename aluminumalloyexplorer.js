// Include the entire CSV data from the previous implementation
const CSV_DATA = `ALEACION,Al,Mg,Zn,Mn,Cu,Fe,Si,Ni
1030,99.30 min,0.05 max,0.10 max,0.05 max,0.10 max,0.60 max,0.35 max,
1035,99.35 min,0.05 max,0.10 max,0.05 max,0.10 max,0.60 max,0.35 max,
1040,99.40 min,0.05 max,0.10 max,0.05 max,0.10 max,0.05 max,0.30 max,
1045,99.45 min,0.05 max,0.05 max,0.05 max,0.10 max,0.45 max,0.30 max,
1050,99.50 min,0.05 max,0.05 max,0.05 max,0.05 max,0.40 max,0.25 max,
1055,99.55 min,0.05 max,0.05 max,0.05 max,0.05 max,0.40 max,0.25 max,
1060,99.60 min,0.03 max,0.05 max,0.03 max,0.05 max,0.35 max,0.25 max,
1065,99.65 min,0.03 max,0.05 max,0.03 max,0.05 max,0.30 max,0.25 max,
1070,99.70 min,0.03 max,0.04 max,0.03 max,0.04 max,0.25 max,0.20 max,
1075,99.75 min,0.03 max,0.04 max,0.03 max,0.04 max,0.20 max,0.20 max,
1080,99.80 min,0.02 max,0.03 max,0.02 max,0.03 max,0.15 max,0.15 max,
1085,99.85 min,0.02 max,0.03 max,0.02 max,0.03 max,0.12 max,0.10 max,
1090,99.90 min,0.01 max,0.03 max,0.01 max,0.02 max,0.070 max,0.070 max,
1095,99.95 min,0.01 max,0.01 max,0.01 max,0.01 max,0.04 max,0.03 max,
1098,99.98 min,,0.015 max,,0.003 max,0.006 max,0.01 max,
1100,99.00 min,,0.10 max,0.05 max,0.05-0.20,,,
1110,99.10 min,0.25 max,,0.01 max,0.04 max,0.80 max,0.30 max,
1120,99.20 min,0.20 max,0.05 max,0.01 max,0.05-0.35,0.40 max,0.10 max,
1135,99.35 min,0.05 max,0.10 max,0.04 max,0.05-0.20,,,
1145,99.45 min,0.05 max,0.05 max,0.05 max,0.05 max,,,
1150,99.50 min,0.05 max,0.05 max,0.05 max,0.05-0.20,,,
1170,99.70 min,0.02 max,0.04 max,0.03 max,0.03 max,,,
1175,99.75 min,0.02 max,0.03 max,0.02 max,0.10 max,,,
1180,99.80 min,0.02 max,0.03 max,0.02 max,0.01 max,0.090 max,0.090 max,
1185,99.85 min,0.02 max,0.03 max,0.02 max,0.01 max,,,
1188,99.88 min,0.01 max,0.03 max,0.01 max,0.005 max,0.060 max,0.060 max,
1190,99.90 min,0.05 max,0.02 max,0.01 max,0.01 max,0.070 max,0.05 max,
1193,99.93 min,,0.03 max,,0.006 max,0.04 max,0.04 max,
1198,99.98 min,,0.01 max,0.006 max,0.006 max,0.006 max,0.01 max,
1199,99.99 min,0.006 max,0.006 max,0.002 max,0.006 max,0.006 max,0.006 max,
1200,99.00 min,,0.10 max,0.05 max,0.05 max,,,
1230,99.30 min,0.05 max,0.10 max,0.05 max,0.10 max,,,
1235,99.35 min,0.05 max,0.01 max,0.05 max,0.05 max,,,
1250,99.50 min,0.01 max,0.05 max,0.01 max,0.10 max,0.40 max,0.20 max,
1260,99.60 min,0.03 max,0.05 max,0.01 max,0.04 max,,,
1275,99.75 min,0.02 max,0.03 max,0.02 max,0.05-0.10,0.12 max,0.080 max,
1285,99.85 min,,0.03 max,,0.02 max,0.080 max,0.080 max,
1345,99.45 min,0.05 max,0.05 max,0.05 max,0.10 max,0.40 max,0.30 max,
1350,99.50 min,,0.05 max,0.01 max,0.05 max,0.40 max,0.10 max,
1370,99.70 min,0.02 max,0.04 max,0.01 max,0.02 max,0.25 max,0.10 max,
1385,99.85 min,0.02 max,0.03 max,0.01 max,0.02 max,0.12 max,0.05 max,
1435,99.35 min,0.05 max,0.10 max,0.05 max,0.02 max,0.30-0.50,0.15 max,
1445,99.45 min,,,,0.04 max,,,
1450,99.50 min,0.05 max,0.070 max,0.05 max,0.05 max,0.40 max,0.25 max,
2001,resto,0.20-0.45,0.10 max,0.15-0.50,5.2-6.0,0.20 max,0.20 max,
2002,resto,0.50-1.0,0.20 max,0.20 max,1.5-2.5,0.30 max,0.35-0.8,
2003,resto,0.02 max,0.10 max,0.30-0.8,4.0-5.0,0.30 max,0.30 max,
2004,resto,0.05 max,0.10 max,0.10 max,5.5-6.5,"0.20 max
0.5 max",0.20 max,
2005,resto,0.20-1.0,0.05 max,1.00 max,3.5-5.0,0.70 max,0.80 max,
2006,resto,0.50-1.4,0.20 max,0.6-1.0,1.0-2.0,0.70 max,0.8-1.3, 
2007,resto,0.40-1.8,0.80 max,0.50-1.0,3.3-4.6,0.80 max,0.80 max,
2008,resto,0.25-0.50,0.25 max,0.30 max,0.7-1.1,0.40 max,0.50-0.8,
2009,resto,1.0-1.6,0.10 max,,3.2-4.4,0.05 max,0.25 max,
2010,resto,0.40-1.0,0.30 max,0.10-0.40,0.7-1.3,0.50 max,0.50 max,
2011,resto,,0.30 max,,5.0-6.0,0.70 max,0.40 max,
2012,resto,,0.30 max,,4.0-5.5,0.70 max,0.40 max,
2014,resto,0.20-0.8,0.25 max,0.40-1.2,3.9-5.0,0.70 max,0.50-1.2,
2017,resto,0.40-0.8,0.25 max,0.40-1.0,3.5-4.5,0.70 max,0.20-0.8,
2018,resto,0.45-0.9,0.25 max,0.20 max,3.5-4.5,1.00 max,0.90 max,
2020,resto,0.03 max,0.25 max,0.30-0.8,4.0-5.0,0.40 max,0.40 max,
2021,resto,0.02 max,0.10 max,0.20-0.40,5.8-6.8,0.30 max,0.20 max,
2024,resto,1.2-1.8,0.25 max,0.30-0.9,3.8-4.9,0.05 max,0.05 max,
2025,resto,0.05 max,0.25 max,0.40-1.2,3.9-5.0,1.00 max,0.50-1.2,
2030,resto,0.50-1.3,,0.20-1.0,3.3-4.5,0.70 max,0.80 max,
2031,resto,0.6-1.2,0.20 max,0.50 max,1.8-2.8,0.6-1.2,0.50-1.3,
2034,resto,1.3-1.9,0.2,0.8-1.3,4.2-4.8,0.12,0.1,
2036,resto,0.30-0.6,0.25 max,0.10-0.40,2.2-3.0,0.50 max,0.50 max,
2037,resto,0.30-0.8,0.25 max,0.10-0.40,1.4-2.2,0.50 max,0.50 max,
2038,resto,0.40-1.0,0.5,0.10-0.40,0.8-1.8,0.6,0.50-1.3,
2048,resto,1.2-1.8,0.25 max,0.20-0.6,2.8-3.8,0.20 max,0.15 max,
2080,resto,1.5-2.2,0.10 max,0.25 max,3.3-4.1,0.20 max,0.10 max,
2090,resto,0.25 max,0.10 max,0.05 max,2.4-3.0,0.12 max,0.10 max,
2091,resto,1.1-1.9,0.25 max,0.10 max,1.8-2.5,0.30 max,0.20 max,
2094,resto,0.25-0.8,0.25 max,0.25 max,4.4-5.2,0.15 max,0.12 max,
2095,resto,0.25-0.8,0.25 max,0.25 max,3.9-4.6,0.15 max,0.12 max,
2096,resto,"0.25-0,8",0.25 max,0.25 max,2.3-3.0,0.15 max,0.12 max,
2097,resto,0.35 max,0.35 max,0.10-0.6,2.5-3.1,0.15 max,0.12 max,
2111,resto,,0.30 max,,5.0-6.0,0.70 max,0.40 max,
2117,resto,0.20-0.50,0.25 max,0.20 max,2.2-3.0,0.70 max,0.80 max,
2124,resto,1.2-1.8,0.25 max,0.30-0.90,3.8-4.9,0.30 max,0.20 max,
2195,resto,0.25-0.8,0.25 max,0.25 max,3.7-4.3,0.15 max,0.12 max,
2197,resto,0.25 max,0.05 max,0.10-0.50,2.5-3.1,0.10 max,0.10 max,
2214,resto,0.20-0.8,0.25 max,0.40-1.2,3.9-5.0,0.30 max,0.50-1.2,
2218,resto,1.2-1.8,0.25 max,0.20 max,3.5-4.5,1.00 max,0.90 max,
2219,resto,0.02 max,0.10 max,0.20-0.40,5.8-6.8,0.30 max,0.20 max,
2224,resto,1.2-1.8,0.25 max,0.30-0.9,3.8-4.4,0.15 max,0.12 max,
2297,resto,0.25 max,0.05 max,0.10-0.50,2.5-3.1,0.10 max,0.10 max,
2319,resto,0.02 max,0.10 max,0.20-0.40,5.8-6.8,0.30 max,0.20 max,
2324,resto,1.2-1.8,0.25 max,0.30-0.9,3 8-4.4,0.12 max,0.10 max,
2419,resto,0.02 max,0.10 max,0.20-0.40,5 8-6.8,0.18 max,1.15 max,
2424,resto,1.2- 1.6,0.20 max,0.30-0.6,3.8-4.4,0.12 max,0.10 max,
2519,resto,0.05-0.40,0.10 max,0.10-0.50,5.3-6.4,0.30 max,0.25 max,
2524,resto,1.2-1.6,0.15 max,0 45-0.7,4.0-4.5,0.12 max,0.060 max,
2618,resto,1.3-1.8,,,1.9-2.7,0.9-1.3,0.10-0.25,
3002,resto,0.05-0.20,0.03 max,0.05-0.25,0.15 max,0.10 max,0.080 max,
3003,resto,,0.10 max,1.0-1.5,0.05-0.20,0.70 max,0.60 max,
3004,resto,0.8-1.3,0.25 max,1.0-1.5,0.25 max,0.70 max,0.30 max,
3005,resto,0.20-0.6,0.25 max,1.0-1.5,0.30 max,0.70 max,0.60 max,
3006,resto,0.30-0.6,0.15-0.40,0.50-0.8,0.10-0.30,0.70 max,0.50 max,
3007,resto,0.60 max,0.40 max,0.30-0.8,0.05-0.30,0.70 max,0.50 max,
3008,resto,0.01 max,0.05 max,1.2-1.8,0.10 max,0.70 max,0.40 max,
3009,resto,0.10 max,0.05 max,1.2-1.8,0.10 max,0.70 max,1.0-1.8,
3010,resto,,0.05 max,0.20-0.9,0.03 max,0.20 max,0.10 max,
3011,resto,,0.10 max,0.8-1.2,0.05-0.20,0.70 max,0.40 max,
3012,resto,0.10 max,0.10 max,0.50-1.1,0.10 max,0.70 max,0.60 max,
3013,resto,0.20-0.6,0.50-1.0,0.9-1.4,0.50 max,1.00 max,0.60 max,
3014,resto,0.10 max,0.50-1.0,1.0-1.5,0.50 max,1.00 max,0.60 max,
3015,resto,0.20-0.7,0.25 max,0.50-0.9,0.30 max,0.80 max,0.60 max,
3016,resto,0.50-0.8,0.25,0.50-0.9,0.30 max,0.80 max,0.60 max,
3017,resto,0.10 max,0.10 max,0.8-1.2,0.25-0.40,0.25-0.45,0.25 max,
3018,resto,0.8-1.4,0.25 max,1.1-1.4,0.10-0.30,0.15-0.25,0.30 max,
3020,resto,0.05 max,0.05-0.50,0.6-1.4,0.10 max,0.35 max,0.15 max,
3025,resto,0.20-0.8,0.25 max,0.40-1.0,0.30 max,0.50-0.9,0.60 max,
3030,resto,0.05 max,0.05-0.50,0.10-0.7,0.10 max,0.35 max,0.15 max,
3102,resto,,0.30 max,0.05-0.40,0.10 max,0.70 max,0.40 max,
3103,resto,0.30 max,0.20 max,0.9-1.5,0.10 max,0.70 max,0.50 max,
3104,resto,0.8-1.3,0.25 max,0.8-1.4,0.05-0.25,0.80 max,0.60 max,
3105,resto,0.20-0.8,0.40 max,0.30-0.8,0.30 max,0.70 max,0.60 max,
3107,resto,,0.20 max,0.40-0.9,0.05-0.15,0.70 max,0.60 max,
3203,resto,,0.10 max,1.0-1.5,0.05 max,0.70 max,0.60 max,
3204,resto,0.8-1.5,0.25 max,0.8-1.5,0.10-0.25,0.70 max,0.30 max,
3207,resto,0.10 max,0.10 max,0.40-0.8,0.10 max,0.45 max,0.30 max,
3303,resto,,0.30 max,1.0-1.5,0.05-0.20,0.70 max,0.60 max,
3307,resto,0.30 max,0.40 max,0.50-0.9,0.30 max,0.80 max,0.60 max,
4002,resto,0.05-0.15,0.15 max,0.03 max,0.05-0.15,0.35 max,3.5-4.5,
4004,resto,1.0-2.0,0.20 max,0.10 max,0.25 max,0.80 max,9.0-10.5,
4006,resto,0.01 max,0.05 max,0.05 max,0.10 max,0.50-0.8,0.8-1.2,
4007,resto,0.20 max,0.10 max,0.8-1.5,0.20 max,0.40-1.0,1.0-1.7,
4008,resto,0.30-0.45,0.05 max,0.05 max,0.05 max,0.090 max,6.5-7.5,
4009,resto,0.45-0.6,0.10 max,0.10 max,1.0-1.5,0.10 max,4.5-5.5,
4010,resto,0.30-0.45,0.10 max,0.10 max,0.20 max,0.20 max,6.5-7.5,
4011,resto,0.45-0.7,0.10 max,0.10 max,0.20 max,0.20 max,6.5-7.5,
4013,resto,0.05-0.20,0.05 max,0.03 max,0.05-0.20,0.35 max,3.5-4.5,
4014,resto,0.30--0.8,0.20 max,0.35 max,0.20 max,0.70 max,1.4-2.2 ,
4015,resto,0.10--0.50,0.20 max,0.6-1.2,0.20 max,0.70 max,1.4-2.2,
4017,resto,0.10--0.50,0.20 max,0.6-1.2,0.10--0.50,0.70 max,0.6-1.6,
4018,resto,0.50--0.8,0.10 max,0.10 max,0.05 max,0.20 max,6.5-7.5,
4032,resto,0.8-1.3,0.25 max,,0.50-1.3,1.00 max,11.0-13.5,
4043,resto,0.05 max,0.10 max,0.05 max,0.30 max,0.80 max,4.5-6.0,
4044,resto,,0.20 max,0.10 max,0.25 max,0.80 max,7.8-9.2,
4045,resto,0.05 max,0.10 max,0.05 max,0.30 max,0.80 max,9.0-11.0,
4046,resto,0.20-0.50,0.10 max,0.40 max,0.03 max,0.50 max,9.0-11.0,
4047,resto,0.10 max,0.20 max,0.15 max,0.30 max,0.80 max,11.0-13.0,
4048,resto,0.070 max,9.3-10.7,0.070 max,3.3-4.7,0.80 max,9.3-10.7     ,
4104,resto,1.0-2.0,0.20 max,0.10 max,0.25 max,0.80 max,9.5-10.5,
4145,resto,0.15 max,0.20 max,0.15 max,3.3-4.7,0.80 max,9.3-10.7,
4147,resto,0.10-0.50,0.20 max,0.10 max,0.25 max,0.80 max,11.0-13.0,
4343,resto,,0.20 max,0.10 max,0.25 max,0.80 max,6.8-8.2,
4543,resto,0.10-0.40,0.10 max,0.05 max,0.10 max,0.50 max,5.0-7.0,
4643,resto,0.10-0.30,0.10 max,0.05 max,0.10 max,0.80 max,3.6-4.6,
A301 0,resto,0.25-0.50,0.05 max,0.50-0.8,3.0-3.5,0.8-1.5,9.5-10.5,1.0-1.5
A301 1,resto,0.30-0.50,0.05 max,0.50-0.8,3.0-3.5,0.8-1.2,9.5-10.5,1.0-1.5
A302 0,resto,0.7-1.2,0.05 max,,2.8-3.2,0.25 max,9.5-10.5,1.0-1.5
A302 1,resto,0.8-1.2,0.05 max,,2.8-3.2,0.20 max,9.5-10.5,1.0-1.5
A303 0,resto,0.45-0.7,0.05 max,0.50-0.8,0.20 max,0.8-1.5,9.5-10.5,
A303 1,resto,0.50-0.7,0.05 max,0.50-0.8,0.20 max,0.8-1.2,9.5-10.5,
A305 0,resto,0.10 max,0.35 max,0.50 max,1.0-1.5,0.60 max,4.5-5.5,
A305 2,resto,,0.05 max,0.05 max,1.0-1.5,0.14-0.25,4.5-5.5,
A308 0,resto,0.10 max,1.00 max,0.50 max,4.0-5.0,1.00 max,5.0-6.0,
A308 1,resto,0.10 max,1.00 max,0.50 max,4.0-5.0,0.80 max,5.0-6.0,
A308 2,resto,0.10 max,0.50 max,0.30 max,4.0-5.0,0.80 max,5.0-6.0,
A318 0,resto,0.10-0.6,1.00 max,0.50 max,3.0-4.0,1.00 max,5.5-6.5,0.35 max
A318 1,resto,0.15-0.6,0.90 max,0.50 max,3.0-4.0,0.80 max,5.5-6.5,0.35 max
A319 0,resto,0.10 max,1.00 max,0.50 max,3.0-4.0,1.00 max,5.5-6.5,0.35 max
A319 1,resto,0.10 max,1.00 max,0.50 max,3.0-4.0,0.80 max,5.5-6.5,0.35 max
A319 2,resto,0.10 max,0.10 max,0.10 max,3.0-4.0,0.60 max,5.5-6.5,0.10 max
A320 0,resto,0.05-0.6,3.00 max,0.80 max,2.0-4.0,1.20 max,5.0-8.0,0.35 max
A320 1,resto,0.10-0.6,3.00 max,0.80 max,2.0-4.0,0.90 max,5.0-8.0,0.35 max
A324 0,resto,0.40-0.7,1.00 max,0.05 max,0.40-0.6,1.20 max,7.0-8.0,0.30 max
A324 1P,resto,0.45-0.7,1.00 max,0.05 max,0.40-0.6,0.90 max,7.0-8.0,0.30 max
A324 2,resto,0.45-0.7,0.10 max,0.10 max,0.40-0.6,0.60 max,7.0-8.0,0.10 max
A328 0,resto,0.20-0.6,1.50 max,0.20-0.6,1.0-2.0,1.00 max,7.5-8.5,0.25 max
A328 1,resto,0.25-0.6,1.50 max,0.20-0.6,1.0-2.0,0.80 max,7.5-8.5,0.25 max
A332 0,resto,0.50-1.5,1.00 max,0.05 max,2.04.0,1.20 max,8.5-10.5,0.50 max
A332 1,resto,0.6-1.5,1.00 max,0.05 max,2.04.0,0.90 max,8.5-10.5,0.05 max
A332 2,resto,0.9-1.3,0.10 max,0.10 max,2.04.0,0.60 max,8.5-10.0,0.10 max
A333 0,resto,0.05-0.50,1.00 max,0.05 max,3.04.0,1.00 max,8.0-10.0,0.05 max
A333 1,resto,0.10-0.50,1.00 max,0.05 max,3.04.0,0.80 max,8.0-10.0,0.05 max
A336 0,resto,0.7-1.3,0.35 max,0.35 max,0.50-1.5,1.20 max,11.0-13.0,2.0-3.0
A336 1,resto,0.8-1.3,0.35 max,0.35 max,0.50-1.5,0.90 max,11.0-13.0,2.0-3.0
A336 2,resto,0.9-1.3,0.10 max,0.10 max,0.50-1.5,0.90 max,11.0-13.0,
A337 0,resto,0.30-0.50,0.03 max,0.50-0.8,3.0-3.5,0.8-1.2,9.5-10.5,1.0-1.5
A337 1,resto,0.35-0.50,0.03 max,0.50-0.8,3.0-3.5,0.8-0.9,9.5-10.5,1.0-1.5
A338 0,resto,0.8-1.2,,,2.8-3.2,0.20 max,9.5-10.5,1.0-1.5
A338 1,resto,0.9-1.2,,,2.8-3.2,0.17 max,9.5-10.5,1.0-1.5
A339 0,resto,0.50-1.5,1.00 max,0.50 max,1.5-3.0,1.20 max,11.0-13.0,0.50-1.5
A339 1,resto,0.6-1.5,1.00 max,0.50 max,1.5-3.0,0.90 max,11.0-13.0,0.50-1.5
A343 0,resto,0.10 max,1.2-2.0,0.50 max,0.50-0.9,1.20 max,6.7-7.7,
A343 1,resto,0.10 max,1.2-1.9,0.05 max,0.50-0.9,0.50-0.9,6.7-7.7,
A354 0,resto,0.40-0.6,0.10 max,0.10 max,1.6-2.0,0.20 max,8.6-9.4,
A354 1,resto,0.45-0.6,0.10 max,0.10 max,1.6-2.0,0.15 max,8.6-9.4,
A355 0,resto,0.40-0.6,0.35 max,0.50 max,1.0-1.5,0.60 max,4.5-5.5,
A355 1,resto,0.45-0.6,0.35 max,0.50 max,1.0-1.5,0.50 max,4.5-5.5,
A355 2,resto,0.50-0.6,0.05 max,0.05 max,1.0-1.5,0.14-0.25,4.5-5.5,
A356 0,resto,0.20-0.45,0.35 max,0.35 max,0.25 max,0.60 max,6.5-7.5,
A356 1,resto,0.25-0.45,0.35 max,0.35 max,0.25 max,0.50 max,6.5-7.5,
A356 2,resto,0.30-0.45,0.05 max,0.05 max,0.10 max,0.13-0.25,6.5-7.5,
A357 0,resto,0.45-0.6,0.05 max,0.03 max,0.05 max,0.15 max,6.5-7.5,
A357 1,resto,0.45-0.6,0.05 max,0.03 max,0.05 max,0.12 max,6.5-7.5,
A358 0,resto,0.40-0.6,0.20 max,0.20 max,0.20 max,0.30 max,7.6-8.6,
A358 2,resto,0.45-0.6,0.10 max,0.10 max,0.10 max,0.20 max,7.6-8.6,
A359 0,resto,0.50-0.7,0.10 max,0.10 max,0.20 max,0.20 max,8.5-9.5,
A359 2,resto,0.55-0.7,0.10 max,0.10 max,0.10 max,0.12 max,8.5-9.5,
A360 0,resto,0.40-0.6,0.50 max,0.35 max,0.60 max,2.00 max,9.0-10.0,0.50 max
A360 2,resto,0.45-0.6,0.10 max,0.10 max,0.10 max,0.7-1.1,9.0-10.0,0.10 max
A361 0,resto,0.40-0.6,0.50 max,0.25 max,0.50 max,1.10 max,9.5-10.5,0.20-0.30
A361 1,resto,0.45-0.6,0.40 max,0.25 max,0.50 max,0.80 max,9.5-10.5,0.20-0.30
A362 0,resto,0.50-0.7,0.03 max,0.50-0.8,0.20 max,0.8-1.2,9.5-10.5,
A362 1,resto,0.6-0.7,0.03 max,0.50-0.8,0.20 max,0.8-0.9,9.5-10.5,
A363 0,resto,0.15-0.40,3.0-4.5,,2.5-3.5,1.10 max,4.5-6.0,0.25 max
A363 1,resto,0.20-0.40,3.0-4.5,,2.5-3.5,0.80 max,4.5-6.0,0.25 max
A364 0,resto,0.20-0.40,0.15 max,0.10 max,0.20 max,1.50 max,7.5-9.5,0.15 max
A364 2,resto,0.25-0.40,0.15 max,0.10 max,0.20 max,0.7-1.1,7.5-9.5,0.15 max
A365 0,resto,0.10-0.50,0.070 max,0.50-0.8,0.03 max,0.15 max,9.5-11.5,
A365 1,resto,0.15-0.50,0.070 max,0.50-0.8,0.03 max,0.12 max,9.5-11.5,
A369 0,resto,0.25-0.45,1.00 max,0.35 max,0.50 max,1.30 max,11.0-12.0,0.05 max
A369 1,resto,0.30-0.45,0.90 max,0.35 max,0.50 max,1.00 max,11.0-12.0,0.05 max
A380 0,resto,0.10 max,3.00 max,0.50 max,3.0-4.0,2.00 max,7.5-9.5,0.50 max
A380 2,resto,0.10 max,0.10 max,0.10 max,3.0-4.0,0.7-1.1,7.5-9.5,0.10 max
A381 0,resto,0.13 max,3.00 max,0.50 max,3.0-4.0,1.30 max,9.0-10.0,
A381 2,resto,0.13 max,2.90 max,0.50 max,3.0-4.0,0.7-1.0,9.0-10.0,0.50 max
A383 0,resto,0.10 max,3.00 max,0.50 max,2.0-3.0,1.30 max,9.5-11.5,0.30 max
A383 1,resto,0.10 max,2.90 max,0.50 max,2.0-3.0,1.00 max,9.5-11.5,0.30 max
A383 2,resto,0.10 max,0.10 max,0.10 max,2.0-3.0,0.6-1.0,9.5-11.5,0.10 max
A384 0,resto,0.10 max,3.00 max,0.50 max,3.0-4.5,1.30 max,10.5-12.0,0.50 max
A384 1,resto,0.10 max,2.90 max,0.50 max,3.0-4.5,1.00 max,10.5-12.0,0.50 max
A384 2,resto,0.10 max,0.10 max,0.10 max,3.0-4.5,0.6-1.0,10.5-12.0,0.10 max
A385 0,resto,0.30 max,3.00 max,0.50 max,2.0-4.0,2.00 max,11.0-13.0,0.50 max
A385 1,resto,0.30 max,2.90 max,0.50 max,2.0-4.0,1.10 max,11.0-13.0,0.50 max
A390 0,resto,0.45-0.65,0.10 max,0.10 max,4.0-5.0,1.30 max,16.0-18.0,
A390 2,resto,0.50-0.65,0.10 max,0.10 max,4.0-5.0,0.6-1.0,16.0-18.0,
A392 0,resto,0.8-1.2,0.50 max,0.20-0.6,0.40-0.8,1.50 max,18.0-20.0,0.50 max
A392 1,resto,0.9-1.2,0.40 max,0.20-0.6,0.40-0.8,1.10 max,18.0-20.0,0.50 max
A393 0,resto,0.7-1.3,0.10 max,0.10 max,0.7-1.1,1.30 max,21.0-23.0,2.0-2.5
A393 1,resto,0.8-1.3,0.10 max,0.10 max,0.7-1.1,1.00 max,21.0-23.0,2.0-2.S
A393 2,resto,0.8-1.3,0.10 max,0.10 max,0.7-1.1,0.80 max,21.0-23.0,2.0-2.S
5005,resto,0.50-1.1,0.25 max,0.20 max,0.20 max,0.70 max,0.30 max,
5006,resto,0.8-1.3,0.25 max,0.40-0.8,0.10 max,0.80 max,0.40 max,
5010,resto,0.20-0.6,0.30 max,0.10-0.30,0.25 max,0.70 max,0.40 max,
5013,resto,3.2-3.8,0.10 max,0.30-0.50,0.03 max,0.25 max,0.20 max,
5014,resto,4.0-5-5,0.7-1.5,0.20-0.9,0.20 max,0.40 max,0.40 max,
5016,resto,1.4-1.9,0.15 max,0.40-0.7,0.20 max,0.60 max,0.25 max,
5017,resto,1.9-2.2,,0.6-0.8,0.18-0.28,0.70 max,0.40 max,
5018,resto,2.6-3.6,0.20 max,0.20-0.6,0.05 max,0.40 max,0.25 max,
5019,resto,4.5-5.6,0.20 max,0.10-0.6,0.10 max,0.50 max,0.40 max,
5021,resto,2.2-2.8,0.15 max,0.10-0.50,0.15 max,0.50 max,0.40 max,
5022,resto,3.5-4.9,0.25 max,0.20 max,0.20-0.50,0.40 max,0.25 max,
5023,resto,5.0-6.2,0.25 max,0.20 max,0.20-0.50,0.40 max,0.25 max,
5025,resto,4.5-6.0,0.25 max,0.20 max,0.10 max,0.25 max,0.25 max,
5034,resto,0.6-1.1,0.40 max,0.20-0.50,0.40 max,0.40-0.90,0.40 max,
5039,resto,3.3-4.3,2.4-3.2,0.30-0.50,0.03 max,0.40 max,0.10 max,
5040,resto,1.0-1.5,0.25 max,0.9-1.4,0.25 max,0.70 max,0.30 max,
5042,resto,3.0-4.0,0.25 max,0.20-0.50,0.15 max,0.35 max,0.20 max,
5043,resto,0.7-1.3,0.25 max,0.7-1.2,0.05-0.35,0.70 max,0.40 max,
5049,resto,1.6-2.5,0.20 max,0.50-1.1,0.10 max,0.50 max,0.40 max,
5050,resto,1.1-1.8,0.25 max,0.10 max,0.20 max,0.70 max,0.40 max,
5051,resto,1.7-2.2,0.25 max,0.20 max,0.25 max,0.70 max,0.40 max,
5052,resto,2.2-2.8,0.10 max,0.10 max,0.10 max,0.40 max,0.25 max,
5056,resto,4.5-5.6,0.10 max,0.05-0.20,0.10 max,0.40 max,0.30 max,
5058,resto,4.5-5.6,0.20 max,0.20 max,0.10 max,0.50 max,0.40 max,
5082,resto,4.0-5.0,0.25 max,0.15 max,0.15 max,0.35 max,0.20 max,
5083,resto,4.0-4.9,0.25 max,0.40-1.0,0.10 max,0.40 max,0.40 max,
5086,resto,3.5-4.5,0.25 max,0.20-0.7,0.10 max,0.50 max,0.40 max,
5087,resto,4.5-5.2,0.25 max,0.7-1.1,0.05 max,0.40 max,0.25 max,
5091,resto,3.7-4.2,,,,0.30 max,0.20 max,
5110,resto,0.30-0.6,0.05 max,0.03 max,,0.080 max,0.080 max,
5119,resto,4.5-5.6,0.20 max,0.20-0.6,0.05 max,0.40 max,0.25 max,
5149,resto,1.6-2.5,0.20 max,0.50-1.1,0.05 max,0.40 max,0.25 max,
5150,resto,1.3-1.7,0.10 max,0.03 max,0.10 max,0.10 max,0.080 max,
5151,resto,1.5-2.1,0.15 max,0.10 max,0.15 max,0.35 max,0.20 max,
5154,resto,3.1-3.9,0.20 max,0.10 max,0.10 max,0.40 max,0.25 max,
5180,resto,3.5-4.5,1.7-2.8,0.20-0.7,0.10 max,,,
5182,resto,4.0-5.0,0.25 max,0.20-0.50,0.15 max,0.35 max,0.20 max,
5183,resto,4.3-5.2,0.25 max,0.50-1.0,0.10 max,0.40 max,0.40 max,
5186,resto,3.8-4.8,0.40 max,0.20-0.50,0.25 max,0.45 max,0.40 max,
5205,resto,0.6-1.0,0.05 max,0.10 max,0.03-0.10,0.70 max,0.15 max,
5210,resto,0.35-0.6,0.04 max,0.03 max,,0.04 max,0.060 max,
5249,resto,1.6-2.5,0.20 max,0.50-1.1,0.05 max,0.40 max,0.25 max,
5250,resto,1.3-1.8,0.05 max,0.04-0.15,0.1,0.1,0.08,
5251,resto,1.7-2.4,0.15 max,0.10-0.50,0.15 max,0.50 max,0.40 max,
5556,resto,4.7-5.5,0.25 max,0.50-1.0,0.10 max,0.40 max,0.25 max,
5557,resto,0.40-0.8,,0.10-0.40,0.15 max,0.12 max,0.10 max,
5605,resto,0.8-1.1,0.01 max,,,0.008 max,0.01 max,
5652,resto,2.2-2.8,0.10 max,0.01 max,0.04 max,,,
5654,resto,3.1-3.9,0.20 max,0.01 max,0.05 max,,,
5657,resto,0.6-1.0,0.05 max,0.03 max,0.10 max,0.10 max,0.080 max,
5754,resto,2.6-3.6,0.20 max,0.50 max,0.10 max,0.40 max,0.40 max,
5854,resto,3.1-3.9,0.20 max,0.10-0.50,0.10 max,,,
5954,resto,3.34.1,0.20 max,0.10 max,0.10 max,0.40 max,0.25 max,
5252,resto,2.2-2.8,0.05 max,0.10 max,0.10 max,0.10 max,0.080 max,
5254,resto,3.1-3.9,0.20 max,0.01 max,0.05 max,0.40 max,0.25 max,
5257,resto,0.20-0.6,0.03 max,0.03 max,0.10 max,0.10 max,0.080 max,
5280,resto,3.5-4.S,1.5-2.8,0.20-0.7,0.10 max,,,
5283,,4.5-5.1,0.10 max,0.50-1.0,0.03 max,0.30 max,0.30 max,
5305,resto,0.7-1.1,0.05 max,0.03 max,,0.080 max,0.080 max,
5310,resto,0.35-0.6,0.01 max,,,0.008 max,0.01 max,
5349,resto,1.7-2.6,,0.6-1.2,0.18-0.28,0.70 max,0.40 max,
5351,resto,1.6-2.2,0.05 max,0.10 max,0.10 max,0.10 max,0.080 max,
5352,resto,2.2-2.8,0.10 max,0.10 max,0.10 max,,,
5354,resto,2.4-3.0,0.25 max,0.50-1.0,0.05 max,0.40 max,0.25 max,
5356,resto,4.5-5.5,0.10 max,0.05-0.20,0.10 max,0.40 max,0.25 max,
5357,resto,0.8-1.2,0.05 max,0.15-0.45,0.20 max,0.17 max,0.12 max,
5383,resto,4.0-5.2,0.40 max,0.7-1.0,0.20 max,0.25 max,0.25 max,
5449,resto,1.6-2.6,0.30 max,0.6-1.1,0.30 max,0.70 max,0.40 max,
5451,resto,1.8-2.4,0.1,0.1,0.1,0.4,0.25,
5454,resto,2.4-3.0,0.25 max,0.50-1.0,0.10 max,0.40 max,0.25 max,
5456,resto,4.7-5.5,0.25 max,0.50-1.0,0.10 max,0.40 max,0.25 max,
5457,resto,0.8-1.2,0.05 max,0.15-0.45,0.20 max,0.10 max,0.080 max,
5505,resto,0.8-1.1,0.04 max,0.03 max,,0.04 max,0.060 max,
5552,resto,2.2-2.8,0.05 max,0.10 max,0.10 max,0.05 max,0.04 max,
5554,resto,2.4-3.0,0.25 max,0.50-1.0,0.10 max,0.40 max,0.25 max,
6002,resto,0.45-0.7,,0.10-0.20,0.10-0.25,0.25 max,0.6-0.9,
6003,resto,0.8-1.5,0.20 max,0.80 max,0.10 max,0.60 max,0.35-1.0,
6004,resto,0.40-0.7,0.05 max,0.20-0.6,0.10 max,0.10-0.30,0.30-0.6,
6005,resto,0.40-0.6,0.10 max,0.10 max,0.10 max,0.35 max,0.6-0.9,
6006,resto,0.45-0.9,0.10 max,0.05-0.20,0.15-0.30,0.35 max,0.20-0.6,
6007,resto,0.6-0.9,0.25 max,0.05-0.25,0.20 max,0.70 max,0.9-1.4,
6008,resto,0.40-0.7,0.20 max,0.30 max,0.30 max,0.35 max,0.50-0.9,
6009,resto,0.40-0.8,0.25 max,0.20-0.8,0.15-0.6,0.50 max,0.6-1.0,
6010,resto,0.6-1.0,0.25 max,0.20-0.8,0.15-0.6,0.50 max,0.8-1.2,
6011,resto,0.6-1.2,1.50 max,0.80 max,0.40-0.9,1.00 max,0.6-1.2,
6012,resto,0.6-1.2,0.30 max,0.40-1.0,0.10 max,0.50 max,0.6-1.4,
6013,resto,0.8-1.2,0.25 max,0.20-0.8,0.6-1.1,0.50 max,0.6-1.0,
6014,resto,0.40-0.8,0.10 max,0.05-0.20,0.25 max,0.35 max,0.30-0.6,
6015,resto,0.8-1.1,0.10 max,0.10 max,0.10-0.25,0.10-0.30,0.20-0.40,
6016,resto,0.25-0.6,0.20 max,0.20 max,0.20 max,0.50 max,1.0-1.5,
6017,resto,0.45-0.6,0.05 max,0.10 max,0.05-0.20,0.15-0.30,0.55-0.7,
6018,resto,0.6-1.2,0.30 max,0.30-0.8,0.15-0.40,0.70 max,0.50-1.2,
6019,resto,0.8-1.2,0.40-1.0,0.10 max,0.20-0.6,0.50 max,0.6-1.0,
6020,resto,0.6-1.2,,0.35 max,0.30-0.9,0.50 max,0.40-0.9,
6022,resto,0.45-0.7,0.25 max,0.02-0.10,0.01-0.11,0.05-0.20,0.8-1.5,
6030,resto,0.8-1.2,0.25 max,0.15 max,0.15-0.40,0.70 max,0.40-0.8,
6053,resto,1.1-1.4,0.10 max,,0.10 max,0.35 max,45.0-65.0 of Mg,
6056,resto,0.6-1.2,0.10-0.7,0.40-1.0,0.50-1.1,0.50 max,0.7-1.3,
6060,resto,0.35-0.6,0.15 max,0.10 max,0.10 max,0.10-0.30,0.30-0.6,
6061,resto,0.8-1.2,0.25 max,0.15 max,0.15--0.40,0.70 max,0.40-0.8,
6063,resto,0.45-.09,0.10 max,0.10 max,0.10 max,0.35 max,0.20-0.6,
6066,resto,0.8-1.4,0.25 max,0.6-1.1,0.7-1.2,,0.9-1.8,
6069,resto,1.2-1.6,0.05 max,0.05 max,0.55-1.0,0.40 max,0.6-1.2,
6070,resto,0.50-1.2,0.25 max,0.40-1.0,0.15-0.40,0.05 max,1.0-1.7,
6081,resto,0.6-1.0,0.20 max,0.10-0.45,0.10 max,0.50 max,0.7-1.1,
6082,resto,0.6-1.2,0.20 max,0.40-1.0,0.10 max,0.05 max,0.7-1.3,
6090,resto,0.8-1.2,0.25 max,0.15 max,0.30-0.9,0.70 max,0.40-0.8,
6091,resto,0.8-1.2,0.25 max,0.15 max,0.15-0.40,0.70 max,0.40-0.8,
6092,resto,0.8-1.2,0.25 max,0.15 max,0. 7-1.0,0.30 max,0.40-0.8,
6101,resto,0.35-0.8,0.10 max,0.03 max,0.10 max,0.50 max,0.30-0.7,
6103,resto,0.8-1.5,0.20 max,0.80 max,0.20-0.30,0.60 max,0.35-1.0,
6105,resto,0.45-0.8,0.10 max,0.15 max,0.10 max,0.35 max,0.6-1.0,
6106,resto,0.40-0.8,0.10 max,0.05-0.20,0.25 max,0.35 max,0.30-0.6,
6110,resto,0.50-1.1,0.30 max,0.20-0.7,0.20-0.7,0.80 max,0.7-1.5,
6111,resto,0.50-1.0,0.15,0.10-0.45,0.50-0.9,0.4,0.6-1.1,
6113,resto,0.8-1.2,0.25 max,0.10-0.6,0.6-1.1,0.30 max,0.6-1.0,
6116,resto,0.25-0.6,0.20 max,0.15 max,0.20 max,0.25 max,0.9-1.3,
6151,resto,0.45-0.8,0.25 max,0.20 max,0.35 max,1.00 max,0.6-1.2,
6160,resto,0.35-0.6,0.05 max,0.05 max,0.20 max,0.15 max,0.30-0.6,
6162,resto,0.7-1.1,0.25 max,0.10 max,0.20 max,0.50 max,0.40-0.8,
6181,resto,0.6-1.0,0.20 max,0.15 max,0.10 max,0.45 max,0.8-1.2,
6201,resto,0.6-0.9,0.10 max,0.03 max,0.10 max,0.50 max,0.50-0.9,
6205,resto,0.40-0.6,0.25 max,0.05-0.15,0.20 max,0.70 max,0.6-0.9,
6206,resto,0.45-0.8,0.20 max,0.13-0.30,0.20-0.50,0.35 max,0.35-0.7,
6253,resto,1.0-1.5,1.6-2.4,,0.10 max,0.50 max,45.0-65.0 of Mg,
6260,resto,0.45-0.7,0.05 max,0.03 max,0.10 max,0.15-0.40,0.40-0.6,
6261,resto,0.7-1.0,0.20 max,0.20-0.35,0.15-0.40,0.40 max,0.40-0.7,
6262,resto,0.8-1.2,0.25 max,0.15 max,0.15-0.40,0.70 max,0.40-0.8,
6301,resto,0.6-0.9,0.25 max,0.15 max,0.10 max,0.70 max,0.50-0.9,
6306,resto,0.45-0.9,0.05 max,0.10-0.40,0.05-0.16,0.10 max,0.20-0.6,
6351,resto,0.40-0.8,0.20 max,0.40-0.8,0.10 max,0.50 max,0.7-1.3,
6401,resto,0.35-0.7,0.04 max,0.03 max,0.05-0.20,0.04 max,0.35-0.7,
6463,resto,0.45-0.9,0.05 max,0.05 max,0.20 max,0.15 max,0.20-0.6,
6763,resto,0.45-0.9,0.03 max,0.03 max,0.04-0.16,0.080 max,0.20-0.6,
6863,resto,0.50-0.8,0.10 max,0.05 max,0.05-0.20,0.15 max,0.40-0.6,
6951,resto,0.40-0.8,0.20 max,0.10 max,0.15-0.40,0.80 max,0.20-0.50,
6963,resto,0.35-0.7,0.10 max,0.05 max,0.15-0.25,0.25 max,0.40-0.6,
7090,resto,2.0-3.0,7.3-8.7,,0.6-1.3,0.15,0.12,
7091,resto,2.0-3.0,5.8-7.1,,1.1-1.8,0.15,0.12,
7093,resto,2.0-3.0,8.3-9.7,,1.1-1.9,0.15 max,0.12 max,
7104,resto,0.50-0.9,3.6-4.4,,0.03 max,0.40 max,0.25 max,
7108,resto,0.7-1.4,4.5-5.5,0.05 max,0.05 max,0.10 max,0.10 max,
7109,resto,2.2-2.7,5.8-6.5,0.10 max,0.8-1.3,0.15 max,0.10 max,
7116,resto,0.8-1.4,4.2-5.2,0.05 max,0.50-1.1,0.30 max,0.15 max,
7129,resto,1.3-2.0,4.2-5.2,0.10 max,0.50-0.9,0.30 max,0.15 max,
7146,resto,1.0-1.6,6.6-7.6,0.20 max,1.2-1.9,0.40 max,0.20 max,
7149,resto,2.0-2.9,7.2-8.2,0.20 max,1.2-1.9,0.20 max,0.15 max,
7150,resto,2.0-2.7,5.9-6.9,0.10 max,1.9-2.5,0.15 max,0.12 max,
7175,resto,2.1-2.9,5.1-6.1,0.10 max,1.2-2.0,0.20 max,0.15 max,
7178,resto,2.4-3.1,6.3-7.3,0.30 max,1.6-2.4,0.50 max,0.40 max,
7179,resto,2.9-3.7,3.8-4.8,0.10-0.30,0.40-0.8,0.20 max,0.15 max,
7229,resto,1.3-2.0,4.2-5.2,0.03 max,0.50-0.9,0.080 max,0.06,
7249,resto,2.0-2.4,7.5-8.2,0.10 max,1.3-1.9,0.12 max,0.10 max,
7277,resto,1.7-2.3,3.7-4.3,,0.8-1.7,0.70 max,0.50 max,
7278,resto,2.5-3.2,6.6-7.4,0.02 max,1.6-2.2,0.20 max,0.15 max,
7349,resto,1.8-2.7,7.5-8.7,0.20 max,1.4-2.1,0.15 max,0.12 max,
7449,resto,1.8-2.7,7.5-8.7,0.20 max,1.4-2.1,0.15 max,0.12 max,
7472,resto,0.9-1.5,1.3-1.9,0.05 max,0.05 max,0.60 max,0.25 max,
7475,resto,1.9-2.6,5.2-6.2,0.060 max,1.2-1.9,0.12 max,0.10 max,
8023,resto,0.20 max,0.005 max,0.10-0.40,1.3-1.6,0.30-0.6,,
8030,resto,0.10 max,0.05 max,0.15-0.30,0.30 .8,,0.05 max,
8040,resto,,,0.20 max,,0.05 max,0.20 max,
8050,resto,0.15-0.30,0.05 max,0.05 max,1.1-1.2,0.45-0.55,0.10 max,
8076,resto,0.10 max,0.08-0.22,0.04 max,0.6-0.9,,0.05 max,
8077,resto,0.10 max,0.10-0.30,0.05 max,0.10-0.40,,0.05 max,
8079,resto,0.05-0.30,,0.05 max,0.7-1.3,,0.10 max,
8081,resto,0.70 max,,0.7-1.3,0.70 max,0.10 max,0.05 max,
8090,resto,0.20 max,0.6-1.3,1.0-1.6,0.30 max,0.10 max,0.25 max,
8091,resto,0.30 max,0.50-1.2,1.6-2.2,0.50 max,0.10 max,0.25 max,
8093,resto,0.10 max,0.9-1.6,1.0-1.6,0.10 max,0.10 max,0.25 max,
8111,resto,0.30-1.1,0.05 max,0.10 max,0.40-1.0,0.10 max,0.10 max,
8112,resto,1.00 max,0.70 max,0.40 max,1.00 max,0.60 max,1.00 max,
8130,resto,0.15 ma.x,,0.05-0.15,0.40-1.0,,0.10 max,
8150,resto,0.30 max,,,0.9-1.3,0.20-0.7,,
8176,resto,0.03-0.15,,,0.40-1.0,,0.10 max,
8177,resto,0.1,0.04-0.12,0 04,0.25-0.45,,0.05,
8211,resto,0.40-0.8,0.10 max,0.10 max,0.50-1.0,0.05-0.20,0.10 max,
8276,resto,0.25 max,0.02 max,0.035 max,0.50-0.8,0.01 max,0.05 max,
8280,resto,1.0-2.0,,0.7-1.3,0.70 max,,0.05 max,
 `;

let alloys = [];

function initializeData() {
    const parsedData = Papa.parse(CSV_DATA, {
        header: true,
        skipEmptyLines: true
    });
    alloys = parsedData.data;
}

function filterAlloys(searchTerm) {
    if (!searchTerm) {
        document.getElementById('resultContainer').innerHTML = '';
        return;
    }

    const filteredAlloys = alloys.filter(alloy => 
        Object.entries(alloy).some(([key, value]) => {
            const searchValue = searchTerm.toLowerCase();
            const stringValue = (value || '').toString().toLowerCase();

            return (
                stringValue.startsWith(searchValue) ||
                (key === 'ALEACION' && stringValue.includes(searchValue))
            );
        })
    );

    displayResults(filteredAlloys);
}

function displayResults(filteredAlloys) {
    const resultContainer = document.getElementById('resultContainer');
    
    if (filteredAlloys.length === 0) {
        resultContainer.innerHTML = `
            <div class="not-found">
                🔍 Not found in database
            </div>
        `;
        return;
    }

    const tableHeaders = Object.keys(alloys[0]);
    
    let tableHTML = `
        <table class="alloy-table">
            <thead>
                <tr>
                    ${tableHeaders.map((header, index) => 
                        `<th class="column-${header.toLowerCase()}">${header}</th>`
                    ).join('')}
                </tr>
            </thead>
            <tbody>
                ${filteredAlloys.map(alloy => `
                    <tr>
                        ${Object.values(alloy).map((value, index) => 
                            `<td class="column-${tableHeaders[index].toLowerCase()}">${value || '-'}</td>`
                        ).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    resultContainer.innerHTML = tableHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => filterAlloys(e.target.value));
});