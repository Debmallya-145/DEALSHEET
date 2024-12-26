//ALL VARIABLE DEFINE HERE
let modeName=document.querySelector("#modeName");
let clockChanger=document.querySelector("#clockChanger");
let planet=document.querySelector("#planet");
let hourHand = document.querySelector("#hourHand");
let minuteHand = document.querySelector("#minuteHand");
let secondHand = document.querySelector("#secondHand");
let digitalClock=document.querySelector("#digitalClock");
let analogClock=document.querySelector("#analogClock");
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");
let round=document.querySelector("#round");
let extraDetails=document.querySelector("#extraDetails");
let modeChanger=document.querySelector("#modeChanger");
let bigger=document.querySelector("#bigger");
let smaller=document.querySelector("#smaller");
let supervisor=document.querySelector("#supervisor");
let supervisorId=document.querySelector("#supervisorId");
let supervisorPassword=document.querySelector("#supervisorPassword");
let submit=document.querySelector("#submit");
let dupeBody=document.querySelector("#dupeBody");
let pdfLoadingTime=document.querySelector("#pdfLoadingTime");
let loaderDiv=document.querySelector("#loaderDiv");
let loader=document.querySelector("#loader");
let previousPage=document.querySelector("#previousPage");
let formText=document.getElementsByClassName("formText");
let formlabel=document.getElementsByClassName("formLabel");
let offer=document.querySelector("#offer");
let form=document.querySelector("form");
let body=document.querySelector("#dupeBody");
let view = document.querySelector("#view");
let details = document.querySelector("#details");
let finance = document.querySelector("#finance");
let extraInfo = document.querySelector("#extraInfo");
let customerName = document.querySelector("#customerName");
let modelName = document.querySelector("#modelName");
let variantName = document.querySelector("#variant");
let color = document.querySelector("#color");
let enqSource = document.querySelector("#enqSource");
let labelMainMobileNumber = document.querySelector("#labelMainMobileNumber");
let mainMobileNumber = document.querySelector("#mainMobileNumber");
let formHeader = document.querySelector("#formHeader");
let headerFlex = document.querySelector("#headerFlex");
let formBody = document.querySelector("#formBody");
let exShowRoomPrice = document.querySelector("#exShowRoom");
let schemeDiscountValue=document.querySelector("#schemeDiscount");
let registration=document.querySelector("#registration");
let insurance=document.querySelector("#insurance");
let TCS=document.querySelector("#TCS");
let accessories=document.querySelector("#accessories");
let shield=document.querySelector("#shield");
let RSA=document.querySelector("#RSA");
let SLD=document.querySelector("#SLD");
let exchangeVehicle=document.querySelector("#exchangeVehicle");
let radios=document.getElementsByName("selector");
let editDetails=document.querySelector("#editDetails");
let logout=document.querySelector("#logout");

//total car model and variant along with their respective exShowroom Price and and Discount is mentioned here
//Do not deliberately change this without the owners permission
//It must be changed by the owner itself
//Otherwise the main function will not work even at a slightest mistake

const carData={
    BOLERO: {
        variants: {
            'B4 BS6.2':{exShowRoom :'979399.57',schemeDiscount :'65000'},
'B6 BS6.2':{exShowRoom :'999900.63',schemeDiscount :'65000'},
'B6 OPT BS6.2':{exShowRoom :'1090599.72',schemeDiscount :'115000'},

        }
    },
    BOLERO_NEO: {
        variants: {
                'N4 BS6.2':{exShowRoom :'994599.45',schemeDiscount :'65000'},
                'N8 BS6.2':{exShowRoom :'1063799.83',schemeDiscount :'80000'},
                'N10 BS6.2 - R':{exShowRoom :'1147499.47',schemeDiscount :'124999'},
'N10 OPT BS6.2':{exShowRoom :'1215500.15',schemeDiscount :'124999'},
'N10 OPT BS6':{exShowRoom :'1199983.45',schemeDiscount :'124999'},

        }
    },
    BOLERO_NEO_PLUS: {
        variants: {
                'P4 BS6.2':{exShowRoom :'1139000.6',schemeDiscount :'65000'},
'P4 AMBULANCE BS6.2':{exShowRoom :'1404000.22',schemeDiscount :'215000'},
'P10 BS6.2':{exShowRoom :'1249000.6',schemeDiscount :'65000'},

        }
    },
    SCORPIO_CLASSIC: {
        variants: {
            'Classic S - 9 STR BS6.2 - New':{exShowRoom :'1386599.7',schemeDiscount :'125001'},
'Classic S BS6.2 - New':{exShowRoom :'1361599.71',schemeDiscount :'125001'},
'Classic S BS6.2':{exShowRoom :'1301027',schemeDiscount :'126690'},
'Classic S11 BS6.2 - New':{exShowRoom :'1741800.51',schemeDiscount :'75000'},
'Classic S11 BS6.2':{exShowRoom :'1682426.99',schemeDiscount :'76014'},
        }
    },
    SCORPIO_N: {
        variants: {
            'Z2 D MT 2WD 7 STR - E BS6.2 - New':{exShowRoom :'1474701.32',schemeDiscount :'30000'},
'Z2 D MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1424700.3',schemeDiscount :'30000'},
'Z2 G MT 2WD 7 STR - E BS6.2 - New':{exShowRoom :'1435199.36',schemeDiscount :'30000'},
'Z2 G MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1385199.35',schemeDiscount :'30000'},
'Z4 D AT 2WD 7 STR BS6.2 - New':{exShowRoom :'1755199.71',schemeDiscount :'70000'},
'Z4 D AT 2WD 7 STR BS6.2':{exShowRoom :'1713025.5',schemeDiscount :'70946'},
'Z4 D MT 2WD 7 STR - E BS6.2 - New':{exShowRoom :'1639799.81',schemeDiscount :'70000'},
'Z4 D MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1589800.83',schemeDiscount :'70000'},
'Z4 D MT 4WD 7 STR - E BS6.2 - New':{exShowRoom :'1850798.75',schemeDiscount :'70000'},
'Z4 D MT 4WD 7 STR BS6.2 - New':{exShowRoom :'1800800.78',schemeDiscount :'70000'},
'Z4 D MT 4WD 7 STR BS6.2':{exShowRoom :'1777026.5',schemeDiscount :'70946'},
'Z4 G AT 2WD 7 STR BS6.2 - New':{exShowRoom :'1705199.71',schemeDiscount :'70000'},
'Z4 G MT 2WD 7 STR - E BS6.2 - New':{exShowRoom :'1598697.85',schemeDiscount :'70000'},
'Z4 G MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1548699.82',schemeDiscount :'70000'},
'Z6 D AT 2WD 7 STR BS6.2 - New':{exShowRoom :'1854598.98',schemeDiscount :'70000'},
'Z6 D AT 2WD 7 STR BS6.2':{exShowRoom :'1803025.46',schemeDiscount :'70946'},
'Z6 D MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1686001.07',schemeDiscount :'70000'},
'Z6 D MT 2WD 7 STR BS6.2':{exShowRoom :'1607024.5',schemeDiscount :'70946'},
'Z8 D AT 2WD 7 STR BS6.2 - N':{exShowRoom :'2083000.18',schemeDiscount :'30000'},
'Z8 D AT 2WD 7 STR BS6.2 - New':{exShowRoom :'2073000.27',schemeDiscount :'30000'},
'Z8 D AT 4WD 7 STR BS6.2 - N':{exShowRoom :'2309100.29',schemeDiscount :'30000'},
'Z8 D AT 4WD 7 STR BS6.2 - New':{exShowRoom :'2309100.29',schemeDiscount :'30000'},
'Z8 D AT 4WD 7 STR BS6.2':{exShowRoom :'2308025.5',schemeDiscount :'30406'},
'Z8 D MT 2WD 7 STR BS6.2 - N':{exShowRoom :'1929700.48',schemeDiscount :'30000'},
'Z8 D MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1919700.57',schemeDiscount :'30000'},
'Z8 D MT 2WD 7 STR BS6.2':{exShowRoom :'1857025.5',schemeDiscount :'30406'},
'Z8 D MT 4WD 7 STR BS6.2 - N':{exShowRoom :'2136699.7',schemeDiscount :'30000'},
'Z8 D MT 4WD 7 STR BS6.2 - New':{exShowRoom :'2136699.7',schemeDiscount :'30000'},
'Z8 D MT 4WD 7 STR BS6.2':{exShowRoom :'2112025.46',schemeDiscount :'30406'},
'Z8 G AT 2WD 7 STR BS6.2 - N':{exShowRoom :'2034999.9',schemeDiscount :'30000'},
'Z8 G AT 2WD 7 STR BS6.2 - New':{exShowRoom :'2024998.99',schemeDiscount :'30000'},
'Z8 G MT 2WD 7 STR BS6.2 - N':{exShowRoom :'1884401.12',schemeDiscount :'30000'},
'Z8 G MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1874400.21',schemeDiscount :'30000'},
'Z8 L D AT 2WD 6 STR BS6.2 - N':{exShowRoom :'2264700.65',schemeDiscount :'30000'},
'Z8 L D AT 2WD 6 STR BS6.2 - New':{exShowRoom :'2247699.98',schemeDiscount :'55000'},
'Z8 L D AT 2WD 6 STR BS6.2':{exShowRoom :'2228025.49',schemeDiscount :'55744'},
'Z8 L D AT 2WD 7 STR BS6.2 - N':{exShowRoom :'2241099.89',schemeDiscount :'30000'},
'Z8 L D AT 2WD 7 STR BS6.2 - New':{exShowRoom :'2224099.23',schemeDiscount :'55000'},
'Z8 L D AT 2WD 7 STR BS6.2':{exShowRoom :'2212231.68',schemeDiscount :'55744'},
'Z8 L D AT 4WD 7 STR BS6.2 - N':{exShowRoom :'2454100.29',schemeDiscount :'30000'},
'Z8 L D AT 4WD 7 STR BS6.2 - New':{exShowRoom :'2454100.29',schemeDiscount :'55000'},
'Z8 L D AT 4WD 7 STR BS6.2':{exShowRoom :'2453024.49',schemeDiscount :'55744'},
'Z8 L D MT 2WD 6 STR BS6.2 - N':{exShowRoom :'2128800.47',schemeDiscount :'30000'},
'Z8 L D MT 2WD 6 STR BS6.2 - New':{exShowRoom :'2111799.81',schemeDiscount :'55000'},
'Z8 L D MT 2WD 6 STR BS6.2':{exShowRoom :'2072026.5',schemeDiscount :'55744'},
'Z8 L D MT 2WD 7 STR BS6.2 - N':{exShowRoom :'2094899.43',schemeDiscount :'30000'},
'Z8 L D MT 2WD 7 STR BS6.2 - New':{exShowRoom :'2077900.78',schemeDiscount :'55000'},
'Z8 L D MT 4WD 7 STR BS6.2 - N':{exShowRoom :'2298099.87',schemeDiscount :'30000'},
'Z8 L D MT 4WD 7 STR BS6.2 - New':{exShowRoom :'2298099.87',schemeDiscount :'55000'},
'Z8 L G AT 2WD 6 STR BS6.2 - N':{exShowRoom :'2214699.66',schemeDiscount :'30000'},
'Z8 L G AT 2WD 6 STR BS6.2 - New':{exShowRoom :'2197700.99',schemeDiscount :'55000'},
'Z8 L G AT 2WD 6 STR BS6.2':{exShowRoom :'2178025.49',schemeDiscount :'55744'},
'Z8 L G AT 2WD 7 STR BS6.2 - N':{exShowRoom :'2196200.21',schemeDiscount :'30000'},
'Z8 L G AT 2WD 7 STR BS6.2 - New':{exShowRoom :'2179200.55',schemeDiscount :'55000'},
'Z8 L G AT 2WD 7 STR BS6.2':{exShowRoom :'2158025.49',schemeDiscount :'55744'},
'Z8 L G MT 2WD 6 STR BS6.2 - N':{exShowRoom :'2078800.47',schemeDiscount :'30000'},
'Z8 L G MT 2WD 6 STR BS6.2 - New':{exShowRoom :'2061799.82',schemeDiscount :'55000'},
'Z8 L G MT 2WD 7 STR BS6.2 - N':{exShowRoom :'2054499.62',schemeDiscount :'30000'},
'Z8 L G MT 2WD 7 STR BS6.2 - New':{exShowRoom :'2037498.97',schemeDiscount :'55000'},
'Z8 L G MT 2WD 7 STR BS6.2':{exShowRoom :'2002025.5',schemeDiscount :'55744'},
'Z8 S D AT 2WD 7 STR BS6.2 - N':{exShowRoom :'1919000.71',schemeDiscount :'20000'},
'Z8 S D AT 2WD 7 STR BS6.2 - New':{exShowRoom :'1909000.81',schemeDiscount :'20000'},
'Z8 S D MT 2WD 7 STR BS6.2 - N':{exShowRoom :'1819000.82',schemeDiscount :'20000'},
'Z8 S D MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1809000.93',schemeDiscount :'20000'},
'Z8 S G AT 2WD 7 STR BS6.2 - N':{exShowRoom :'1868999.98',schemeDiscount :'20000'},
'Z8 S G AT 2WD 7 STR BS6.2 - New':{exShowRoom :'1859000.07',schemeDiscount :'20000'},
'Z8 S G MT 2WD 7 STR BS6.2 - N':{exShowRoom :'1718999.96',schemeDiscount :'20000'},
'Z8 S G MT 2WD 7 STR BS6.2 - New':{exShowRoom :'1709000.05',schemeDiscount :'20000'},
        }
    },
    NEW_THAR: {
        variants: {
            'AX OPT D MT 2WD 4S HT BS6.2':{exShowRoom :'1134999.5',schemeDiscount :'50000'},
'AX OPT D MT 4WD 4S CT BS6.2':{exShowRoom :'1485000.12',schemeDiscount :'100000'},
'AX OPT D MT 4WD 4S HT BS6.2':{exShowRoom :'1499898.98',schemeDiscount :'100000'},
'AX OPT P MT 4WD 4S CT BS6.2':{exShowRoom :'1430000.39',schemeDiscount :'100000'},
'LX D AT 4WD 4S CT BS6.2':{exShowRoom :'1714899.57',schemeDiscount :'100000'},
'LX D AT 4WD 4S HT - OD BS6.2':{exShowRoom :'1699899.82',schemeDiscount :'100000'},
'LX D AT 4WD 4S HT BS6.2 - Earth Edition':{exShowRoom :'1760000.5',schemeDiscount :'300000'},
'LX D AT 4WD 4S HT BS6.2':{exShowRoom :'1720000.58',schemeDiscount :'100000'},
'LX D MT 2WD 4S HT BS6.2':{exShowRoom :'1284999.49',schemeDiscount :'50000'},
'LX D MT 4WD 4S CT BS6.2':{exShowRoom :'1574900.47',schemeDiscount :'100000'},
'LX D MT 4WD 4S HT - OD BS6.2':{exShowRoom :'1554999.06',schemeDiscount :'100000'},
'LX D MT 4WD 4S HT BS6.2 - Earth Edition':{exShowRoom :'1615000.13',schemeDiscount :'300000'},
'LX D MT 4WD 4S HT BS6.2':{exShowRoom :'1575000.57',schemeDiscount :'100000'},
'LX P AT 2WD 4S HT BS6.2':{exShowRoom :'1409899.52',schemeDiscount :'125001'},
'LX P AT 4WD 4S CT BS6.2':{exShowRoom :'1649900.73',schemeDiscount :'100000'},
'LX P AT 4WD 4S HT BS6.2 - Earth Edition':{exShowRoom :'1699799.65',schemeDiscount :'300000'},
'LX P AT 4WD 4S HT BS6.2':{exShowRoom :'1659799.87',schemeDiscount :'100000'},
'LX P MT 4WD 4S HT BS6.2 - Earth Edition':{exShowRoom :'1539999.83',schemeDiscount :'300000'},
'LX P MT 4WD 4S HT BS6.2':{exShowRoom :'1500000.82',schemeDiscount :'100000'},
        }
    },
    THAR_ROXX: {
        variants: {
            'AX3L DMT 2WD':{exShowRoom :'1699000.2',schemeDiscount :'0'},
'AX5L DAT 2WD':{exShowRoom :'1899000.2',schemeDiscount :'0'},
'AX5L DAT 4WD - Mocha Interiors':{exShowRoom :'2098999.2',schemeDiscount :'0'},
'AX5L DAT 4WD':{exShowRoom :'2098999.2',schemeDiscount :'0'},
'AX7L DAT 2WD':{exShowRoom :'2048999.2',schemeDiscount :'0'},
'AX7L DAT 4WD - Demo':{exShowRoom :'2249000.2',schemeDiscount :'0'},
'AX7L DAT 4WD - Mocha Interiors':{exShowRoom :'2249000.2',schemeDiscount :'0'},
'AX7L DAT 4WD':{exShowRoom :'2249000.2',schemeDiscount :'0'},
'AX7L DMT 2WD - Demo':{exShowRoom :'1899000.2',schemeDiscount :'0'},
'AX7L DMT 2WD':{exShowRoom :'1899000.2',schemeDiscount :'0'},
'AX7L DMT 4WD - Mocha Interiors':{exShowRoom :'2098999.2',schemeDiscount :'0'},
'AX7L DMT 4WD':{exShowRoom :'2098999.2',schemeDiscount :'0'},
'AX7L PAT 2WD - Demo':{exShowRoom :'1999000.2',schemeDiscount :'0'},
'AX7L PAT 2WD':{exShowRoom :'1999000.2',schemeDiscount :'0'},
'MX1 DMT 2WD':{exShowRoom :'1398999.2',schemeDiscount :'0'},
'MX1 PMT 2WD':{exShowRoom :'1299000.2',schemeDiscount :'0'},
'MX3 DAT 2WD':{exShowRoom :'1749000.2',schemeDiscount :'0'},
'MX3 DMT 2WD':{exShowRoom :'1598999.2',schemeDiscount :'0'},
'MX3 PAT 2WD':{exShowRoom :'1499000.2',schemeDiscount :'0'},
'MX5 DAT 2WD':{exShowRoom :'1848999.2',schemeDiscount :'0'},
'MX5 DMT 2WD':{exShowRoom :'1699000.2',schemeDiscount :'0'},
'MX5 DMT 4WD - Mocha Interiors':{exShowRoom :'1879000.2',schemeDiscount :'0'},
'MX5 DMT 4WD':{exShowRoom :'1879000.2',schemeDiscount :'0'},
'MX5 PAT 2WD':{exShowRoom :'1799000.2',schemeDiscount :'0'},
'MX5 PMT 2WD':{exShowRoom :'1649000.2',schemeDiscount :'0'},
        }
    },
    XUV300: {
        variants: {
            'W2 PM BS6.2':{exShowRoom :'799000.65',schemeDiscount :'11000'},
'W4 DS BS6.2':{exShowRoom :'991800',schemeDiscount :'52400'},
'W4 DS BS6.2-Sunroof':{exShowRoom :'1021500.23',schemeDiscount :'52400'},
'W4 PM BS6.2 - Sunroof - TGDi':{exShowRoom :'930500.55',schemeDiscount :'33459'},
'W4 PM BS6.2-Sunroof':{exShowRoom :'866499.76',schemeDiscount :'33459'},
'W6 DS AMT BS6.2-Sunroof - Non Touch':{exShowRoom :'1230499.93',schemeDiscount :'61000'},
'W6 DS BS6.2-Sunroof - Non Touch':{exShowRoom :'1100499.47',schemeDiscount :'61000'},
'W6 PM AMT BS6.2-Sunroof - Non Touch':{exShowRoom :'1070500.08',schemeDiscount :'56000'},
'W6 PM BS6.2-Sunroof - Non Touch':{exShowRoom :'999994.85',schemeDiscount :'56000'},
'W6 PM BS6.2-Sunroof-Non Touch TGDi':{exShowRoom :'1050499.52',schemeDiscount :'70001'},
'W8 DS BS6.2-Sunroof':{exShowRoom :'1300499.95',schemeDiscount :'105000'},
'W8 DS OPT AMT BS6.2':{exShowRoom :'1460500.75',schemeDiscount :'105000'},
'W8 DS OPT BS6.2':{exShowRoom :'1392499.87',schemeDiscount :'105000'},
'W8 PM BS6.2':{exShowRoom :'1125500.19',schemeDiscount :'87000'},
'W8 PM BS6.2-Sunroof- TGDi Dual tone':{exShowRoom :'1215500.23',schemeDiscount :'91000'},
'W8 PM BS6.2-Sunroof- TGDi':{exShowRoom :'1200499.55',schemeDiscount :'91000'},
'W8 PM BS6.2-Sunroof':{exShowRoom :'1150499.69',schemeDiscount :'87000'},
'W8 PM OPT AMT BS6.2':{exShowRoom :'1330499.25',schemeDiscount :'121801'},
'W8 PM OPT BS6.2 TGDi Dual tone':{exShowRoom :'1315499.58',schemeDiscount :'116800'},
'W8 PM OPT BS6.2 TGDi':{exShowRoom :'1300500.21',schemeDiscount :'116800'},
'W8 PM OPT BS6.2':{exShowRoom :'1260500.42',schemeDiscount :'121801'},
        }
    },
    XUV3XO: {
        variants: {
            'AX5 DS AS':{exShowRoom :'1298999.6',schemeDiscount :'0'},
'AX5 DS MT':{exShowRoom :'1218999.6',schemeDiscount :'0'},
'AX5 PM AT':{exShowRoom :'1249000.3',schemeDiscount :'0'},
'AX5 PM MT':{exShowRoom :'1099000.3',schemeDiscount :'0'},
'AX5L TGDI AT':{exShowRoom :'1373999.8',schemeDiscount :'0'},
'AX5L TGDI MT':{exShowRoom :'1223999.8',schemeDiscount :'0'},
'AX7 DS AS DT':{exShowRoom :'1449000.6',schemeDiscount :'0'},
'AX7 DS MT DT':{exShowRoom :'1368999.6',schemeDiscount :'0'},
'AX7 TGDI AT DT':{exShowRoom :'1399000.3',schemeDiscount :'0'},
'AX7 TGDI MT DT':{exShowRoom :'1249000.3',schemeDiscount :'0'},
'AX7L DS MT DT':{exShowRoom :'1499000.6',schemeDiscount :'0'},
'AX7L TGDI AT DT':{exShowRoom :'1548999.3',schemeDiscount :'0'},
'AX7L TGDI MT DT':{exShowRoom :'1399000.3',schemeDiscount :'0'},
'MX1 PM MT':{exShowRoom :'779000.3',schemeDiscount :'0'},
'MX2 DS MT':{exShowRoom :'998999.6',schemeDiscount :'0'},
'MX2 PRO DS MT':{exShowRoom :'1048999.6',schemeDiscount :'0'},
'MX2 PRO PM AT':{exShowRoom :'1023999.8',schemeDiscount :'0'},
'MX2 PRO PM MT':{exShowRoom :'923999.8',schemeDiscount :'0'},
'MX3 DS AS':{exShowRoom :'1178999.6',schemeDiscount :'0'},
'MX3 DS MT':{exShowRoom :'1098999.6',schemeDiscount :'0'},
'MX3 PM AT':{exShowRoom :'1123999.8',schemeDiscount :'0'},
'MX3 PM MT':{exShowRoom :'974000.8',schemeDiscount :'0'},
'MX3 PRO DS MT':{exShowRoom :'1139000.6',schemeDiscount :'0'},
'MX3 PRO PM AT':{exShowRoom :'1149000.3',schemeDiscount :'0'},
'MX3 PRO PM MT':{exShowRoom :'999000.3',schemeDiscount :'0'},
        }
    },
    XUV700: {
        variants: {
                'AX3 DSL AT 5 STR BS6.2 - New':{exShowRoom :'1858999.78',schemeDiscount :'50000'},
'AX3 DSL MT 5 STR - E BS6.2 - New':{exShowRoom :'1748998.04',schemeDiscount :'50000'},
'AX3 DSL MT 5 STR BS6.2 - New':{exShowRoom :'1698999.82',schemeDiscount :'50000'},
'AX3 DSL MT 5 STR BS6.2':{exShowRoom :'1693925.98',schemeDiscount :'50675'},
'AX3 DSL MT 7 STR BS6.2 - New':{exShowRoom :'1798999.62',schemeDiscount :'50000'},
'AX3 PET AT 5 STR BS6.2 - New':{exShowRoom :'1799000.05',schemeDiscount :'50000'},
'AX3 PET AT 5 STR BS6.2':{exShowRoom :'1826125',schemeDiscount :'50675'},
'AX3 PET MT 5 STR - E BS6.2 - New':{exShowRoom :'1689000.61',schemeDiscount :'50000'},
'AX3 PET MT 5 STR BS6.2 - New':{exShowRoom :'1638999.58',schemeDiscount :'50000'},
'AX3 PET MT 5 STR BS6.2':{exShowRoom :'1650325.35',schemeDiscount :'50675'},
'AX5 DSL AT 5 STR BS6.2 - New':{exShowRoom :'1989000.95',schemeDiscount :'50000'},
'AX5 DSL AT 5 STR BS6.2':{exShowRoom :'2029125.64',schemeDiscount :'50675'},
'AX5 DSL AT 7 STR BS6.2 - New':{exShowRoom :'2038999.75',schemeDiscount :'50000'},
'AX5 DSL AT 7 STR BS6.2':{exShowRoom :'2091126.26',schemeDiscount :'50675'},
'AX5 DSL MT 5 STR BS6.2 - New':{exShowRoom :'1828999.96',schemeDiscount :'50000'},
'AX5 DSL MT 7 STR BS6.2 - New':{exShowRoom :'1878999.41',schemeDiscount :'50000'},
'AX5 PET AT 5 STR BS6.2 - New':{exShowRoom :'1928999.72',schemeDiscount :'50000'},
'AX5 PET AT 5 STR BS6.2':{exShowRoom :'1964726.48',schemeDiscount :'50675'},
'AX5 PET AT 7 STR BS6.2 - New':{exShowRoom :'1979000.8',schemeDiscount :'50000'},
'AX5 PET MT 5 STR - E BS6.2 - New':{exShowRoom :'1818999.73',schemeDiscount :'50000'},
'AX5 PET MT 5 STR BS6.2 - New':{exShowRoom :'1769000.11',schemeDiscount :'50000'},
'AX5 PET MT 7 STR - E BS6.2 - New':{exShowRoom :'1868999.02',schemeDiscount :'50000'},
'AX5 PET MT 7 STR BS6.2 - New':{exShowRoom :'1819000.32',schemeDiscount :'50000'},
'AX5 S DSL AT 7 STR BS6.2 - New':{exShowRoom :'1899000.5',schemeDiscount :'50000'},
'AX5 S DSL MT 7 STR - E BS6.2 - New':{exShowRoom :'1798998.62',schemeDiscount :'50000'},
'AX5 S DSL MT 7 STR BS6.2 - New':{exShowRoom :'1748997.91',schemeDiscount :'50000'},
'AX5 S PET AT 7 STR BS6.2 - New':{exShowRoom :'1849000.77',schemeDiscount :'50000'},
'AX5 S PET MT 7 STR - E BS6.2 - New':{exShowRoom :'1738998.27',schemeDiscount :'50000'},
'AX5 S PET MT 7 STR BS6.2 - New':{exShowRoom :'1688998.92',schemeDiscount :'50000'},
'AX7 DSL AT 6 STR BS6.2 - New':{exShowRoom :'2209000.01',schemeDiscount :'55000'},
'AX7 DSL AT 6 STR BS6.2 Dual Tone - New':{exShowRoom :'2223999.83',schemeDiscount :'55000'},
'AX7 DSL AT 7 STR BS6.2 - New':{exShowRoom :'2189000.25',schemeDiscount :'30000'},
'AX7 DSL AT 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2204000.07',schemeDiscount :'55000'},
'AX7 DSL AT AWD 7 STR BS6.2 - New':{exShowRoom :'2309001.07',schemeDiscount :'30000'},
'AX7 DSL AT AWD 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2324000.72',schemeDiscount :'55000'},
'AX7 DSL MT 6 STR BS6.2 - New':{exShowRoom :'2018999.74',schemeDiscount :'55000'},
'AX7 DSL MT 6 STR BS6.2 Dual Tone - New':{exShowRoom :'2034001.07',schemeDiscount :'55000'},
'AX7 DSL MT 7 STR BS6.2 - New':{exShowRoom :'1999000.96',schemeDiscount :'30000'},
'AX7 DSL MT 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2014000.29',schemeDiscount :'55000'},
'AX7 DSL MT 7 STR BS6.2':{exShowRoom :'2122126.1',schemeDiscount :'30406'},
'AX7 L DSL AT 6 STR BS6.2 - New':{exShowRoom :'2468999.75',schemeDiscount :'55000'},
'AX7 L DSL AT 6 STR BS6.2 Dual Tone - New':{exShowRoom :'2484000.23',schemeDiscount :'55000'},
'AX7 L DSL AT 7 STR BS6.2 - Blaze':{exShowRoom :'2413999.59',schemeDiscount :'55000'},
'AX7 L DSL AT 7 STR BS6.2 - New':{exShowRoom :'2449000.37',schemeDiscount :'30000'},
'AX7 L DSL AT 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2463998.93',schemeDiscount :'55000'},
'AX7 L DSL AT 7 STR BS6.2':{exShowRoom :'2490225.46',schemeDiscount :'30406'},
'AX7 L DSL AT AWD 7 STR BS6.2 - New':{exShowRoom :'2548999.93',schemeDiscount :'30000'},
'AX7 L DSL AT AWD 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2563997.97',schemeDiscount :'55000'},
'AX7 L DSL AT AWD 7 STR BS6.2':{exShowRoom :'2619925.59',schemeDiscount :'30406'},
'AX7 L DSL MT 6 STR BS6.2 - New':{exShowRoom :'2299000.42',schemeDiscount :'55000'},
'AX7 L DSL MT 6 STR BS6.2 Dual Tone - New':{exShowRoom :'2314000.52',schemeDiscount :'55000'},
'AX7 L DSL MT 7 STR BS6.2 - Blaze':{exShowRoom :'2273999.17',schemeDiscount :'55000'},
'AX7 L DSL MT 7 STR BS6.2 - New':{exShowRoom :'2279000.21',schemeDiscount :'30000'},
'AX7 L DSL MT 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2293998.39',schemeDiscount :'55000'},
'AX7 L DSL MT 7 STR BS6.2':{exShowRoom :'2314525.94',schemeDiscount :'30406'},
'AX7 L PET AT 6 STR BS6.2 - New':{exShowRoom :'2399000.61',schemeDiscount :'55000'},
'AX7 L PET AT 6 STR BS6.2 Dual Tone - New':{exShowRoom :'2413999.38',schemeDiscount :'55000'},
'AX7 L PET AT 7 STR BS6.2 - Blaze':{exShowRoom :'2364000.8',schemeDiscount :'55000'},
'AX7 L PET AT 7 STR BS6.2 - New':{exShowRoom :'2378999.58',schemeDiscount :'30000'},
'AX7 L PET AT 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2394000.35',schemeDiscount :'55000'},
'AX7 L PET AT 7 STR BS6.2':{exShowRoom :'2436325.6',schemeDiscount :'30406'},
'AX7 PET AT 6 STR BS6.2 - New':{exShowRoom :'2148999.18',schemeDiscount :'55000'},
'AX7 PET AT 6 STR BS6.2 Dual Tone - New':{exShowRoom :'2164000.61',schemeDiscount :'55000'},
'AX7 PET AT 7 STR BS6.2 - New':{exShowRoom :'2129000.19',schemeDiscount :'30000'},
'AX7 PET AT 7 STR BS6.2 Dual Tone - New':{exShowRoom :'2143998.7',schemeDiscount :'55000'},
'AX7 PET AT 7 STR BS6.2':{exShowRoom :'2238824.91',schemeDiscount :'30406'},
'AX7 PET MT 6 STR BS6.2 - New':{exShowRoom :'1968999.91',schemeDiscount :'55000'},
'AX7 PET MT 6 STR BS6.2 Dual Tone - New':{exShowRoom :'1984000.15',schemeDiscount :'55000'},
'AX7 PET MT 7 STR BS6.2 - New':{exShowRoom :'1949000.58',schemeDiscount :'30000'},
'AX7 PET MT 7 STR BS6.2 Dual Tone - New':{exShowRoom :'1964000.83',schemeDiscount :'55000'},
'AX7 PET MT 7 STR BS6.2':{exShowRoom :'2057825.4',schemeDiscount :'30406'},
'MX DSL MT 5 STR - E BS6.2 - New':{exShowRoom :'1508999.75',schemeDiscount :'50000'},
'MX DSL MT 5 STR BS6.2 - New':{exShowRoom :'1459000.05',schemeDiscount :'50000'},
'MX DSL MT 7 STR - E BS6.2 - New':{exShowRoom :'1549000.36',schemeDiscount :'50000'},
'MX DSL MT 7 STR BS6.2 - New':{exShowRoom :'1499000.41',schemeDiscount :'50000'},
'MX PET MT 5 STR - E BS6.2 - New':{exShowRoom :'1448999.39',schemeDiscount :'50000'},
'MX PET MT 5 STR BS6.2 - New':{exShowRoom :'1399000.78',schemeDiscount :'50000'},
'MX PET MT 7 STR - E BS6.2 - New':{exShowRoom :'1499000.35',schemeDiscount :'50000'},
'MX PET MT 7 STR BS6.2 - New':{exShowRoom :'1449001.06',schemeDiscount :'50000'},
        }
    },
};
//variant will change upon selection of model
function updateChanges() {
    const selectedModel = modelName.value;
    variantName.innerHTML = `<option value="">--Select Variant--</option>`; // Reset variants
    if (selectedModel) {
        const variants = Object.keys(carData[selectedModel].variants);
        variants.forEach(variant => {
            let opt=document.createElement("option");
            opt.textContent=variant;
            variantName.appendChild(opt);
        });
    }
}
//prices will be update according to the variant
function updatePrice() {
    const selectedModel = modelName.value;
    const selectedVariant = variantName.value;
    if (selectedModel && selectedVariant) {
        const { exShowRoom, schemeDiscount } = carData[selectedModel].variants[selectedVariant];
        exShowRoomPrice.value = exShowRoom;
        schemeDiscountValue.value = schemeDiscount;
    } else {
        exShowRoomPrice.value = '';
        schemeDiscountValue.value = '';
    }
    let BNDPAmount=document.querySelector("#BNDPAmount");
    BNDPAmount.value=(schemeDiscountValue.value/1.48).toFixed(2);

}



//MOUSE POINTER CHANGING FUNCTION
mousePointerChangingFunction=(element)=>{
    element.style.cursor="pointer";
}
//calling the above function for each elements
submit.addEventListener("mouseenter",mousePointerChangingFunction(submit));
editDetails.addEventListener("mouseenter",mousePointerChangingFunction(editDetails));
bigger.addEventListener("mouseenter",mousePointerChangingFunction(bigger));
smaller.addEventListener("mouseenter",mousePointerChangingFunction(smaller));
clockChanger.addEventListener("mouseenter",mousePointerChangingFunction(clockChanger));
view.addEventListener("mouseenter",mousePointerChangingFunction(view));
logout.addEventListener("mouseenter",mousePointerChangingFunction(logout));
details.addEventListener("mouseenter",mousePointerChangingFunction(details)); 
round.addEventListener("mouseenter",mousePointerChangingFunction(round));
previousPage.addEventListener("mouseenter",mousePointerChangingFunction(previousPage));
// transfer data to view pdf Page along with the view DealSheet Button Clicking function
view.addEventListener("click",()=>{
    loader.style.display="flex";
    loaderDiv.style.position="absolute";
    loaderDiv.style.display="block";
    loaderDiv.style.top="0%";
    loader.style.left="45%";
    bigger.style.display="none";
    smaller.style.display="none";
    localStorage.setItem("pdfCustomerName",customerName.value);
    localStorage.setItem("pdfModelName",modelName.value);
    localStorage.setItem("pdfVariantName",variantName.value);
    localStorage.setItem("pdfColor",color.value);
    localStorage.setItem("pdfEnqSource",enqSource.value);
    localStorage.setItem("pdfMobile",mainMobileNumber.value);
    localStorage.setItem("pdfFinance",finance.value);
    let selectedExchangeValue;
    for(let radio of radios){
        if(radio.checked){
            selectedExchangeValue=radio.value;
            break;
        }
    }
if(selectedExchangeValue){
 localStorage.setItem("pdfExchange",selectedExchangeValue);
}
    localStorage.setItem("pdfExShowRoom",exShowRoomPrice.value);
    localStorage.setItem("pdfSchemeDiscount",schemeDiscountValue.value);
    localStorage.setItem("pdfRegistration",registration.value);
    localStorage.setItem("pdfInsurance",insurance.value);
    localStorage.setItem("pdfTCS",TCS.value);
    localStorage.setItem("pdfAccessories",accessories.value);
    localStorage.setItem("pdfShield",shield.value);
    localStorage.setItem("pdfRSA",RSA.value);
    localStorage.setItem("pdfSLD",SLD.value);
    localStorage.setItem("pdfExchangeVehicle",exchangeVehicle.value);
    window.scrollTo({
        top:0,
        behavior:"smooth",
        })
        let i=7;    
        pdfLoadingTime.textContent=`Your Form Will Be Ready Within ${i} seconds`;
    let pdfLoad = setInterval(()=>{
        i--;
        pdfLoadingTime.textContent=`Your Form Will Be Ready Within ${i} seconds`;
    },1000); 
    setTimeout(()=>{
    window.open("pdf.html","_blank");    
    },7000);
    setTimeout(()=>{
        clearInterval(pdfLoad);
        loaderDiv.style.display="none";
    },7000);
    



    })
//get deatils function define to call it later
goToMoreDetails=()=>{
    if(customerName.value!=="" && modelName.value!=="" && variantName.value!=="" && color.value!=="" && enqSource.value!=="" &&(radios[0].checked==true||radios[1].checked==true)){
     extraInfo.style.display="block";
        details.style.display="none";
        customerName.disabled="true";
        modelName.disabled="true";
        variantName.disabled="true";
        color.disabled="true";
radios[0].checked ? exchangeVehicle.disabled=false:exchangeVehicle.disabled=true;
        if(exShowRoomPrice.valueAsNumber>=1000000){
            TCS.value=Math.round((exShowRoomPrice.valueAsNumber)/100);
        }else{
            TCS.value="";
        }        
        enqSource.disabled="true";
        finance.disabled="true";
        formBody.style.display="none";
        headerFlex.style.display="none";
         }else{
               alert("You Must Fill The Required Fields");
           }
}
//go back function define
goToPreviousPage=()=>{
    extraInfo.style.display="none";
    formBody.style.display="block";
    headerFlex.style.display="flex";
    details.style.display="inline";
    editDetails.style.display="inline";
    editDetails.disabled=false;
    }
//editDetails clicking to get the suupervisor confirmationBox
editDetails.addEventListener("click",()=>{
    supervisor.style.transform="scale(1)";
    details.disabled=true;
    supervisorId.value="";
    supervisorPassword.value="";
});
    //supervisor id and password sets here, along with it clicking function
submit.addEventListener("click",()=>{
    if(supervisorId.value==="134958" && supervisorPassword.value==="13101998"){
       supervisor.style.transform="scale(0)";
       details.disabled=false; 
        customerName.disabled=false;
    modelName.disabled=false;
    variantName.disabled=false;
    color.disabled=false;
    enqSource.disabled=false;
    finance.disabled=false;
    editDetails.disabled=true;
    }
    else{
        alert("Please Enter Correct Password Combination");
    }
})
//calling Go back function for click and keypress
previousPage.addEventListener("click",goToPreviousPage);
previousPage.addEventListener("keypress",goToPreviousPage);
//Get Details Button event listener for both click and keypress
details.addEventListener("click",()=>{
    setTimeout(goToMoreDetails,2000);
});
details.addEventListener("keypress",()=>{
    setTimeout(goToMoreDetails,2000);
});
//logout button function to go back to the previous page.It needs to change
logout.addEventListener("click",()=>{
    setTimeout(()=>{
        window.location.href="formpage.html";
    },1500)
})

//mobile number value is coming from form page.It can not be edited here
mainMobileNumber.value=localStorage.getItem("mNumber");
mainMobileNumber.disabled=true;
//if supervisor window is focused or click, if the side bar is opend then it automatically closed
supervisor.addEventListener("focusin",()=>{
    extraDetails.style.width="0vw";
    setTimeout(()=>{
     offer.style.textAlign="center";
     extraInfo.style.width="100vw";
 },800);
     bigger.style.display="inline";
     smaller.style.display="none";
     setTimeout(()=>{
         extraDetails.style.opacity="0";    
     },300);
 })    
//bigger button event listener

bigger.addEventListener("click",()=>{
    if(window.innerWidth<600){
        smaller.style.zIndex="4";
        extraDetails.style.width="50vw";
        extraDetails.style.zIndex="2";
        extraDetails.style.position="absolute";
    offer.style.textAlign="left";
    bigger.style.display="none";
    supervisor.style.transform="scale(0)";
    smaller.style.display="inline";
    setTimeout(()=>{
    extraDetails.style.opacity="1";    
},250);
    }else{
    extraDetails.style.width="30vw";
    extraInfo.style.width="70vw";
    offer.style.textAlign="left";
    bigger.style.display="none";
    supervisor.style.transform="scale(0)";
    smaller.style.display="inline";
    setTimeout(()=>{
    extraDetails.style.opacity="1";    
},250);
}
})

smaller.addEventListener("click",()=>{
    extraDetails.style.width="0vw";
   setTimeout(()=>{
    offer.style.textAlign="center";
    extraInfo.style.width="100vw";
},800);
    bigger.style.display="inline";
    smaller.style.display="none";
    setTimeout(()=>{
        extraDetails.style.opacity="0";    
    },300);
})
//digital clock function
digitalTime=()=>{
let dateTime=new Date();
let hour=String(dateTime.getHours()).padStart(2,"0");
let minute=String(dateTime.getMinutes()).padStart(2,"0");
let second=String(dateTime.getSeconds()).padStart(2,"0");
digitalClock.innerHTML=`${hour}:${minute}:${second}`;
}
setInterval(digitalTime,1000);
digitalTime();
//tooglebutton function
let moveableButton=false;
round.addEventListener("click",()=>{
if(window.innerWidth<600){
    if(!moveableButton){
        modeName.style.paddingLeft="0px";
        light.style.transform="scale(0)";
        light.style.fontSize="0px";
        light.style.width="0px";
        offer.style.color="white";
        dark.style.transform="scale(1)";
        dark.style.fontSize="25px";
        dark.style.width="100%";
        dark.style.backgroundColor="#273e47";
        dark.style.color="white";
        dark.style.boxShadow="0px 0px 30px 10px Black";
        round.style.transform="translatex(200%) rotate(360deg)";
        modeChanger.style.backgroundImage="url(ButtonNight.jpg)";
        digitalClock.style.backgroundImage="linear-gradient(#384b70,#507687,#fcfaee,#b8001f)";
        planet.style.backgroundImage="url(moon.png)";
        round.style.backgroundImage="linear-gradient(#00ff9c,#b6ffa1,#feffa7,#ffe700)"; 
        setTimeout(()=>{
        dupeBody.style.backgroundImage="url(mobileNight.jpg)"
        },1000);
    }else{
        light.style.transform="scale(1)";
        light.style.fontSize="25px";
        light.style.width="100%";
        dark.style.transform="scale(0)";
        offer.style.color="black";
        dark.style.fontSize="0px";
        dark.style.width="0px";
        digitalClock.style.backgroundImage="linear-gradient(#4379F2,#FFEB00,#6EC207,#117554)";
        round.style.transform="translatex(-0%)";
        planet.style.backgroundImage="url(sun.png)";
        modeChanger.style.backgroundImage="url(ButtonDay.jpg)";
        round.style.backgroundColor="linear-gradient(#001f3f,#3a6d8c,#6a9ab0,#ead8b1)";
        setTimeout(()=>{
        dupeBody.style.backgroundImage="url(mobileDay.jpg)"
        },1000);
    }
}else{
    if(!moveableButton){
    modeName.style.paddingLeft="0px";
    light.style.transform="scale(0)";
    light.style.fontSize="0px";
    light.style.width="0px";
    offer.style.color="white";
    dark.style.transform="scale(1)";
    dark.style.fontSize="25px";
    dark.style.width="100%";
    dark.style.backgroundColor="#273e47";
    dark.style.color="white";
    dark.style.boxShadow="0px 0px 30px 10px Black";
    round.style.transform="translatex(270%) rotate(360deg)";
    modeChanger.style.backgroundImage="url(ButtonNight.jpg)";
    digitalClock.style.backgroundImage="linear-gradient(#384b70,#507687,#fcfaee,#b8001f)";
    planet.style.backgroundImage="url(moon.png)";
    round.style.backgroundImage="linear-gradient(#00ff9c,#b6ffa1,#feffa7,#ffe700)"; 
    setTimeout(()=>{
    body.style.backgroundImage="url(NIGHT.jpg)"
    },1000);
}else{
    light.style.transform="scale(1)";
    light.style.fontSize="25px";
    light.style.width="100%";
    dark.style.transform="scale(0)";
    offer.style.color="black";
    dark.style.fontSize="0px";
    dark.style.width="0px";
    digitalClock.style.backgroundImage="linear-gradient(#4379F2,#FFEB00,#6EC207,#117554)";
    round.style.transform="translatex(-0%)";
    planet.style.backgroundImage="url(sun.png)";
    modeChanger.style.backgroundImage="url(ButtonDay.jpg)";
    round.style.backgroundColor="linear-gradient(#001f3f,#3a6d8c,#6a9ab0,#ead8b1)";
    setTimeout(()=>{
    body.style.backgroundImage="url(DAY.jpg)"
    },1000);
}
}
moveableButton=!moveableButton;
})
//analog clock function
analogTime=()=>{
    let analogDateTime=new Date();
    let analogHour=analogDateTime.getHours();
    let analogMinute=analogDateTime.getMinutes();
    let analogSecond=analogDateTime.getSeconds();
    let analogHourDegree=((analogHour/12)*360)+((analogMinute/60)*30);
    let analogMinuteDegree=((analogMinute/60)*360)+((analogSecond/60)*6);
    let analogSecondDegree=(analogSecond/60)*360;
    hourHand.style.transform=`rotate(${analogHourDegree}deg)`;
    minuteHand.style.transform=`rotate(${analogMinuteDegree}deg)`;
    secondHand.style.transform=`rotate(${analogSecondDegree}deg)`;
}
setInterval(analogTime,1000);
analogTime();

let clickCount=0;
clockChanger.addEventListener("click",()=>{
    clickCount++;
    if(clickCount%2===1){
    analogClock.style.display="inline";
    digitalClock.style.display="none";
    clockChanger.innerHTML="Change To Digital Clock";
    }else{
        analogClock.style.display="none";
        digitalClock.style.display="inline";
        clockChanger.innerHTML="Change To Analog Clock";
    }
})
let formrRightFlex=document.querySelector("#formRightFlex");
formrRightFlex.addEventListener("focusin",()=>{
    extraDetails.style.width="0vw";
   setTimeout(()=>{
    offer.style.textAlign="center";
    extraInfo.style.width="100vw";
},800);
    bigger.style.display="inline";
    smaller.style.display="none";
    setTimeout(()=>{
        extraDetails.style.opacity="0";    
    },300);
})
customerName.addEventListener("focusout",()=>{
    customerName.value=customerName.value.toUpperCase();
});
color.addEventListener("focusout",()=>{
    color.value=color.value.toUpperCase();
})
finance.addEventListener("focusout",()=>{
    finance.value=finance.value.toUpperCase();
});



