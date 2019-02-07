import React, {Component, Fragment} from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
// import styles from './styles';

export default class App extends Component {

    state = {
        mostraInfo: false,
        nomeEst: null,
        CorinthiansAteArtur: [{
                longitude: -46.471046805381775,
                latitude: -23.5423378052293,
            }, {
                longitude: -46.471813917160034,
                latitude: -23.54246321191614,
            }, {
                longitude: -46.47240936756133,
                latitude: -23.54257140582436,
            }, {
                longitude: -46.47322475910186,
                latitude: -23.54275336810565,
            }, {
                longitude: -46.47387653589249,
                latitude: -23.542888610178622,
            }, {
                longitude: -46.474372744560235,
                latitude: -23.54299434479333,
            }, {
                longitude: -46.47489309310913,
                latitude: -23.543048441540087,
            }, {
                longitude: -46.4754456281662,
                latitude: -23.54307057202098,
            }, {
                longitude: -46.47596597671509,
                latitude: -23.54308286673098,
            }, {
                longitude: -46.47663921117782,
                latitude: -23.5430336878841,
            }, {
                longitude: -46.47714614868164,
                latitude: -23.542972214299613,
            }, {
                longitude: -46.47765040397644,
                latitude: -23.542891069124106,
            }, {
                longitude: -46.4784175157547,
                latitude: -23.542733696519814,
            }, {
                longitude: -46.47930532693863,
                latitude: -23.542539439451645,
            }, {
                longitude: -46.480152904987335,
                latitude: -23.542352558963362,
            }, {
                longitude: -46.4812096953392,
                latitude: -23.54211158109962,
            }, {
                longitude: -46.48174077272415,
                latitude: -23.541998468888846,
            }, {
                longitude: -46.48243546485901,
                latitude: -23.541816505563013,
            }, {
                longitude: -46.48269563913345,
                latitude: -23.54174027760845,
            }, {
                longitude: -46.48317039012909,
                latitude: -23.541514052450875,
            }, {
                longitude: -46.48361295461655,
                latitude: -23.541260778171434,
            }, {
                longitude: -46.483886539936066,
                latitude: -23.541059141988587,
            }, {
                longitude: -46.48473680019378,
                latitude: -23.54029439707073,
            }],
            ArturAtePatriarca: [{
                longitude: -46.48473680019378,
                latitude: -23.54029439707073,
            }, {
                longitude: -46.48511499166489,
                latitude: -23.53991079344365,
            }, {
                longitude: -46.48546367883682,
                latitude: -23.53952472968933,
            }, {
                longitude: -46.48575872182846,
                latitude: -23.53909932054579,
            }, {
                longitude: -46.48605644702911,
                latitude: -23.538568171938,
            }, {
                longitude: -46.48633807897567,
                latitude: -23.537879642772566,
            }, {
                longitude: -46.48658215999603,
                latitude: -23.537321439696573,
            }, {
                longitude: -46.48676186800003,
                latitude: -23.53700422191498,
            }, {
                longitude: -46.48697644472122,
                latitude: -23.536726348345944,
            }, {
                longitude: -46.48723930120468,
                latitude: -23.536458310453245,
            }, {
                longitude: -46.487531661987305,
                latitude: -23.536246830629516,
            }, {
                longitude: -46.48788571357727,
                latitude: -23.536032891392125,
            }, {
                longitude: -46.48827463388443,
                latitude: -23.535870592428196,
            }, {
                longitude: -46.48865282535553,
                latitude: -23.535767311165092,
            }, {
                longitude: -46.48904711008071,
                latitude: -23.53571567050313,
            }, {
                longitude: -46.48954063653945,
                latitude: -23.535713211423474,
            }, {
                longitude: -46.49030238389969,
                latitude: -23.535769770243718,
            }, {
                longitude: -46.49072617292404,
                latitude: -23.535782065636205,
            }, {
                longitude: -46.4911150932312,
                latitude: -23.535767311165092,
            }, {
                longitude: -46.49231940507889,
                latitude: -23.535661570740274,
            }, {
                longitude: -46.493612229824066,
                latitude: -23.53552632123581,
            }, {
                longitude: -46.494379341602325,
                latitude: -23.53543533512729,
            }, {
                longitude: -46.494736075401306,
                latitude: -23.535373857991313,
            }, {
                longitude: -46.49518668651581,
                latitude: -23.535238608191047,
            }, {
                longitude: -46.49570971727371,
                latitude: -23.535027126406455,
            }, {
                longitude: -46.49617910385132,
                latitude: -23.534788594218185,
            }, {
                longitude: -46.496653854846954,
                latitude: -23.534471370328653,
            }, {
                longitude: -46.49703472852706,
                latitude: -23.53418857319307,
            }, {
                longitude: -46.497437059879296,
                latitude: -23.53385167494243,
            }, {
                longitude: -46.49781793355942,
                latitude: -23.53353690791405,
            }, {
                longitude: -46.49826318025588,
                latitude: -23.53321230362728,
            }, {
                longitude: -46.49852603673935,
                latitude: -23.533047542054085,
            }, {
                longitude: -46.49899810552596,
                latitude: -23.532781955800232,
            }, {
                longitude: -46.49955332279205,
                latitude: -23.53249177761369,
            }, {
                longitude: -46.50156766176224,
                latitude: -23.531176131196716,
            }],
            PatriarcaAteGuilhermina: [{
                longitude: -46.50156766176224,
                latitude: -23.531176131196716,
            }, {
                longitude: -46.50205314159393,
                latitude: -23.530861357767243,
            }, {
                longitude: -46.50312602519989,
                latitude: -23.53009409437808,
            }, {
                longitude: -46.50358200073242,
                latitude: -23.529749808069774,
            }, {
                longitude: -46.504064798355095,
                latitude: -23.529425194439714,
            }, {
                longitude: -46.50466024875641,
                latitude: -23.529051395934328,
            }, {
                longitude: -46.50536835193634,
                latitude: -23.528584146309406,
            }, {
                longitude: -46.5058296918869,
                latitude: -23.528279203554202,
            }, {
                longitude: -46.50629103183746,
                latitude: -23.528018526122583,
            }, {
                longitude: -46.506730914115906,
                latitude: -23.527826706550684,
            }, {
                longitude: -46.50716543197632,
                latitude: -23.527679152843547,
            }, {
                longitude: -46.5075945854187,
                latitude: -23.52756110975874,
            }, {
                longitude: -46.50830268859863,
                latitude: -23.527433229630695,
            }, {
                longitude: -46.50890886783599,
                latitude: -23.527398800344223,
            }, {
                longitude: -46.50963842868805,
                latitude: -23.527447985036428,
            }, {
                longitude: -46.510561108589165,
                latitude: -23.52759062053987,
            }, {
                longitude: -46.51154279708862,
                latitude: -23.52773817434625,
            }, {
                longitude: -46.51245474815369,
                latitude: -23.527880809535173,
            }, {
                longitude: -46.513227224349976,
                latitude: -23.52799885233321,
            }, {
                longitude: -46.51382267475128,
                latitude: -23.5280972212507,
            }, {
                longitude: -46.51449859142303,
                latitude: -23.528308714174294,
            }, {
                longitude: -46.515394449234,
                latitude: -23.528672677944687,
            }, {
                longitude: -46.51666581630707,
                latitude: -23.529238295319757,
            }],
            GuilherminaAteVilaMatilde: [{
                longitude: -46.51666581630707,
                latitude: -23.529238295319757,
            }, {
                longitude: -46.517540216445916,
                latitude: -23.529685869084762,
            }, {
                longitude: -46.51867210865021,
                latitude: -23.5302465637411,
            }, {
                longitude: -46.519203186035156,
                latitude: -23.530531828526442,
            }, {
                longitude: -46.51994347572327,
                latitude: -23.530876112788565,
            }, {
                longitude: -46.520479917526245,
                latitude: -23.53109743790995,
            }, {
                longitude: -46.52107000350952,
                latitude: -23.53123515113092,
            }, {
                longitude: -46.521751284599304,
                latitude: -23.531363027564183,
            }, {
                longitude: -46.52236819267273,
                latitude: -23.53145647564836,
            }, {
                longitude: -46.522947549819946,
                latitude: -23.53152533208898,
            }, {
                longitude: -46.52366101741791,
                latitude: -23.53157943355273,
            }, {
                longitude: -46.52436375617981,
                latitude: -23.531613861745367,
            }, {
                longitude: -46.52487874031067,
                latitude: -23.53166304486208,
            }, {
                longitude: -46.52539908885956,
                latitude: -23.53171222796039,
            }, {
                longitude: -46.52641832828522,
                latitude: -23.53181551240703,
            }, {
                longitude: -46.52716934680939,
                latitude: -23.531899123566344,
            }, {
                longitude: -46.52802765369415,
                latitude: -23.53199748956811,
            }, {
                longitude: -46.52915954589844,
                latitude: -23.532051590837717,
            }, {
                longitude: -46.53086006641388,
                latitude: -23.531820430711996,
            }],
            VilaMatildeAtePenha: [{
                longitude: -46.53086006641388,
                latitude: -23.531820430711996,
            }, {
                longitude: -46.53200268745422,
                latitude: -23.531672881483207,
            }, {
                longitude: -46.53280198574066,
                latitude: -23.531633534994253,
            }, {
                longitude: -46.53337061405182,
                latitude: -23.53166304486208,
            }, {
                longitude: -46.53391242027283,
                latitude: -23.531741737810574,
            }, {
                longitude: -46.534475684165955,
                latitude: -23.531845022234027,
            }, {
                longitude: -46.53507113456726,
                latitude: -23.531977816373637,
            }, {
                longitude: -46.53609037399292,
                latitude: -23.53217946647748,
            }, {
                longitude: -46.537238359451294,
                latitude: -23.532405707689527,
            }, {
                longitude: -46.53826832771301,
                latitude: -23.532602438862014,
            }, {
                longitude: -46.539443135261536,
                latitude: -23.532818842811988,
            }, {
                longitude: -46.54088616371154,
                latitude: -23.53312869330249,
            }, {
                longitude: -46.542672514915466,
                latitude: -23.533472970769395,
            }],
            PenhaAteCarrao: [{
                    longitude: -46.542672514915466,
                    latitude: -23.533472970769395,
                }, {
                    longitude: -46.54354155063629,
                    latitude: -23.533600845027653,
                }, {
                    longitude: -46.544196009635925,
                    latitude: -23.533738555628293,
                }, {
                    longitude: -46.54488265514374,
                    latitude: -23.533881184312726,
                }, {
                    longitude: -46.545719504356384,
                    latitude: -23.534043485731047,
                }, {
                    longitude: -46.54657781124115,
                    latitude: -23.53420086873334,
                }, {
                    longitude: -46.54731810092926,
                    latitude: -23.534328742284085,
                }, {
                    longitude: -46.547967195510864,
                    latitude: -23.534466452122793,
                }, {
                    longitude: -46.548686027526855,
                    latitude: -23.534623834619097,
                }, {
                    longitude: -46.54965162277222,
                    latitude: -23.534815644281903,
                }, {
                    longitude: -46.55056893825531,
                    latitude: -23.53502220822137,
                }, {
                    longitude: -46.55129849910736,
                    latitude: -23.535164835514106,
                }, {
                    longitude: -46.55189394950866,
                    latitude: -23.53528778995269,
                }, {
                    longitude: -46.55261278152466,
                    latitude: -23.53543533512729,
                }, {
                    longitude: -46.55339062213898,
                    latitude: -23.535597634628218,
                }, {
                    longitude: -46.55408799648285,
                    latitude: -23.535745179455297,
                }, {
                    longitude: -46.554656624794006,
                    latitude: -23.53588288781127,
                }, {
                    longitude: -46.55553638935089,
                    latitude: -23.53605994119997,
                }, {
                    longitude: -46.55628204345703,
                    latitude: -23.536202567367567,
                }, {
                    longitude: -46.55705988407135,
                    latitude: -23.536374702191477,
                }, {
                    longitude: -46.55803084373474,
                    latitude: -23.53655175491823,
                }, {
                    longitude: -46.55874967575073,
                    latitude: -23.536714053041724,
                }, {
                    longitude: -46.55958652496338,
                    latitude: -23.536881269080723,
                }, {
                    longitude: -46.560160517692566,
                    latitude: -23.536999303803814,
                }, {
                    longitude: -46.56108856201172,
                    latitude: -23.537166519480202,
                }, {
                    longitude: -46.56231701374054,
                    latitude: -23.53741734259622,
                }, {
                    longitude: -46.56314313411713,
                    latitude: -23.537574721562084,
                }, {
                    longitude: -46.56428039073944,
                    latitude: -23.537796035414228,
                }],
                 CarraoAteTatuape:[
                     {
                    longitude: -46.56428039073944,
                    latitude: -23.537796035414228,
                }, {
                    longitude: -46.56483829021454,
                    latitude: -23.537914069316443,
                }, {
                    longitude: -46.56548202037811,
                    latitude: -23.5380394802215,
                }, {
                    longitude: -46.566037237644196,
                    latitude: -23.53815013680311,
                }, {
                    longitude: -46.5665066242218,
                    latitude: -23.538243580066215,
                }, {
                    longitude: -46.567040383815765,
                    latitude: -23.53835177744581,
                }, {
                    longitude: -46.56759023666382,
                    latitude: -23.538457515708053,
                }, {
                    longitude: -46.56805694103241,
                    latitude: -23.53854849972615,            
                }, {
                    longitude: -46.56855046749115,
                    latitude: -23.538641942706235,
                }, {
                    longitude: -46.569258570671074,
                    latitude: -23.538779648029575,              
                }, {
                    longitude: -46.56970649957657,
                    latitude: -23.53886079574189,
                }, {
                    longitude: -46.56995326280593,
                    latitude: -23.538892763008754,               
                }, {
                    longitude: -46.5701624751091,
                    latitude: -23.53892473026784,
                }, {
                    longitude: -46.570696234703064,
                    latitude: -23.539018172980647,
                }, {
                    longitude: -46.57107174396515,
                    latitude: -23.53907964841338,
                }, {
                    longitude: -46.5713506937027,
                    latitude: -23.539121451691226,
                }, {
                    longitude: -46.57172083854675,
                    latitude: -23.539187845105214,
                }, {
                    longitude: -46.572171449661255,
                    latitude: -23.539283746644017,
                }, {
                    longitude: -46.57267302274704,
                    latitude: -23.53941161525366,
                }, {
                    longitude: -46.57312631607056,
                    latitude: -23.53956407381806,
                }, {
                    longitude: -46.573767364025116,
                    latitude: -23.53980505634974,
                }, {
                    longitude: -46.574188470840454,
                    latitude: -23.539935383453304,
                }, {
                    longitude: -46.57459616661071,
                    latitude: -23.540033743445957,
                }, {
                    longitude: -46.57534718513489,
                    latitude: -23.540191119281197,
                }, {
                    longitude: -46.57660782337189,
                    latitude: -23.540437018646763,
                }],
                 TatuapeAteBelem:[{
                    longitude: -46.57660782337189,
                    latitude: -23.540437018646763,
                }, {
                    longitude: -46.57852292060852,
                    latitude: -23.540805866833043,
                }, {
                    longitude: -46.57977283000945,
                    latitude: -23.54108619076278,
                }, {
                    longitude: -46.58128023147583,
                    latitude: -23.541366514094978,
                }, {
                    longitude: -46.58271789550781,
                    latitude: -23.541641918892104,
                }, {
                    longitude: -46.58336162567139,
                    latitude: -23.541764867276044,
                }, {
                    longitude: -46.5840482711792,
                    latitude: -23.54185830797095,
                }, {
                    longitude: -46.58482074737549,
                    latitude: -23.541951748599473,
                }, {
                    longitude: -46.58568978309631,
                    latitude: -23.542118957979547,
                }, {
                    longitude: -46.58654272556305,
                    latitude: -23.542296002973774,
                }, {
                    longitude: -46.58735811710358,
                    latitude: -23.542433704471172,
                }, {
                    longitude: -46.588157415390015,
                    latitude: -23.54254681630758,
                }, {
                    longitude: -46.589627265930176,
                    latitude: -23.542817300739287,
                }],
                BelemAteBresser:[ 
                    {
                    longitude: -46.589627265930176,
                    latitude: -23.542817300739287,
                }, {
                    longitude: -46.59078598022461,
                    latitude: -23.543058277309832,
                }, {
                    longitude: -46.59200370311737,
                    latitude: -23.543279581934602,
                }, {
                    longitude: -46.59309804439544,
                    latitude: -23.543515639790513,
                }, {
                    longitude: -46.59357011318207,
                    latitude: -23.543618914969226,
                }, {
                    longitude: -46.594728827476494,
                    latitude: -23.54383530079494,
                }, {
                    longitude: -46.59552812576294,
                    latitude: -23.543992672080893,
                }, {
                    longitude: -46.59630060195922,
                    latitude: -23.54415004317852,
                }, {
                    longitude: -46.59731984138489,
                    latitude: -23.5443516746221,
                }, {
                    longitude: -46.598124504089355,
                    latitude: -23.544513963120412,
                }, {
                    longitude: -46.59877359867096,
                    latitude: -23.544651662295227,
                }, {
                    longitude: -46.599385142326355,
                    latitude: -23.544774607865175,
                }, {
                    longitude: -46.6000235080719,
                    latitude: -23.544902471135977,
                }, {
                    longitude: -46.602603793144226,
                    latitude: -23.54542375856863,
                }, {
                    longitude: -46.603703498840325,
                    latitude: -23.54564997700015,
                }, {
                    longitude: -46.60443305969238,
                    latitude: -23.545792592767825,
                }, {
                    longitude: -46.60499632358551,
                    latitude: -23.54589586615818,
                }, {
                    longitude: -46.60549521446227,
                    latitude: -23.545969632815922,
                }, {
                    longitude: -46.60594582557678,
                    latitude: -23.546048317205223,
                }, {
                    longitude: -46.60718500614166,
                    latitude: -23.546289287854556,
                }],
                 BresserAteBras:[{
                    longitude: -46.60718500614166,
                    latitude: -23.546289287854556,
                }, {
                    longitude: -46.608644127845764,
                    latitude: -23.546584353354298,
                }, {
                    longitude: -46.60957217216492,
                    latitude: -23.54680073429993,
                }, {
                    longitude: -46.61035001277923,
                    latitude: -23.54699744394146,
                }, {
                    longitude: -46.61121904850006,
                    latitude: -23.54721382420723,
                }, {
                    longitude: -46.61203444004059,
                    latitude: -23.547410533230728,
                }, {
                    longitude: -46.6126674413681,
                    latitude: -23.54753839393817,
                }, {
                    longitude: -46.61316633224487,
                    latitude: -23.547602324245254,
                }, {
                    longitude: -46.61365985870361,
                    latitude: -23.54763183053035,
                }, {
                    longitude: -46.614335775375366,
                    latitude: -23.547626912816636,
                }, {
                    longitude: -46.614593267440796,
                    latitude: -23.547641665957258,
                }, {
                    longitude: -46.61593437194824,
                    latitude: -23.54777936185651,
                }],
                 BrasAtePedroII:[{
                    longitude: -46.61593437194824,
                    latitude: -23.54777936185651,
                }, {
                    longitude: -46.61699652671814,
                    latitude: -23.547907222205247,
                }, {
                    longitude: -46.617345213890076,
                    latitude: -23.54795148152776,
                }, {
                    longitude: -46.61782264709473,
                    latitude: -23.54803016473101,
                }, {
                    longitude: -46.61825716495514,
                    latitude: -23.548113765582862,
                }, {
                    longitude: -46.61883115768432,
                    latitude: -23.548236707915464,
                }, {
                    longitude: -46.62002205848694,
                    latitude: -23.54852193368436,
                }, {
                    longitude: -46.62092864513397,
                    latitude: -23.54874814678519,
                }, {
                    longitude: -46.62202298641204,
                    latitude: -23.548998947811548,
                }, {
                    longitude: -46.62247359752655,
                    latitude: -23.54910713634186,
                }, {
                    longitude: -46.62290275096893,
                    latitude: -23.549195654164066,
                }, {
                    longitude: -46.623423099517815,
                    latitude: -23.549279254274772,
                }, {
                    longitude: -46.624093651771545,
                    latitude: -23.54939236022228,
                }, {
                    longitude: -46.62473201751708,
                    latitude: -23.549490713140997,
                }, {
                    longitude: -46.62520408630371,
                    latitude: -23.549554642498716,
                }, {
                    longitude: -46.62599802017212,
                    latitude: -23.549662830571727,
                }],
                 PedroIIAteSe:[{
                    longitude: -46.62599802017212,
                    latitude: -23.549662830571727,
                }, {
                    longitude: -46.62669003009796,
                    latitude: -23.549780853822533,
                }, {
                    longitude: -46.627081632614136,
                    latitude: -23.549839865408213,
                }, {
                    longitude: -46.62790775299072,
                    latitude: -23.550002147132226,
                }, {
                    longitude: -46.62815988063812,
                    latitude: -23.550085746730048,
                }, {
                    longitude: -46.62847638130188,
                    latitude: -23.550174263893318,
                }, {
                    longitude: -46.62903428077698,
                    latitude: -23.550385721319884,
                }, {
                    longitude: -46.62955462932587,
                    latitude: -23.55058242559736,
                }, {
                    longitude: -46.63013935089111,
                    latitude: -23.550798799962603,
                }, {
                    longitude: -46.630375385284424,
                    latitude: -23.55084797590504,
                }, {
                    longitude: -46.630595326423645,
                    latitude: -23.550892234237498,
                }, {
                    longitude: -46.630820631980896,
                    latitude: -23.55090698701167,
                }, {
                    longitude: -46.63122832775115,
                    latitude: -23.550902069420456,
                }, {
                    longitude: -46.63153946399689,
                    latitude: -23.5508823990538,
                }, {
                    longitude: -46.63178086280823,
                    latitude: -23.55087748146166,
                }, {
                    longitude: -46.63221538066863,
                    latitude: -23.550818470341788,
                }, {
                    longitude: -46.632564067840576,
                    latitude: -23.550734871209944,
                }, {
                    longitude: -46.63292348384857,
                    latitude: -23.55062176641752,
                }, {
                    longitude: -46.63343846797943,
                    latitude: -23.55041522698027,
                }],
                 SeAteAnhangabau:[{
                    longitude: -46.63343846797943,
                    latitude: -23.55041522698027,
                }, {
                    longitude: -46.63370668888091,
                    latitude: -23.550297204299,
                }, {
                    longitude: -46.63392663002014,
                    latitude: -23.550198851983662,
                }, {
                    longitude: -46.634092926979065,
                    latitude: -23.550125087698856,
                }, {
                    longitude: -46.6345328092575,
                    latitude: -23.549918547481234,
                }, {
                    longitude: -46.63504779338837,
                    latitude: -23.549702171667107,
                }, {
                    longitude: -46.63593828678131,
                    latitude: -23.54929892488134,
                }, {
                    longitude: -46.636823415756226,
                    latitude: -23.548905512190974,
                }, {
                    longitude: -46.637826561927795,
                    latitude: -23.548433415408518,
                }, {
                    longitude: -46.638577580451965,
                    latitude: -23.54808425940593,
                }, {
                    longitude: -46.63916498422622,
                    latitude: -23.547808868101875,
                }],
                AnhangabauAteRepublica:[{
                    longitude: -46.63916498422622,
                    latitude: -23.547808868101875,
                }, {
                    longitude: -46.639733612537384,
                    latitude: -23.547405615508733,
                }, {
                    longitude: -46.64020836353302,
                    latitude: -23.547022032625957,
                }, {
                    longitude: -46.640610694885254,
                    latitude: -23.546623695370894,
                }, {
                    longitude: -46.64075016975403,
                    latitude: -23.54646878611245,
                }, {
                    longitude: -46.64114713668823,
                    latitude: -23.545930290603618,
                }, {
                    longitude: -46.64145827293396,
                    latitude: -23.545517196663614,
                }, {
                    longitude: -46.641718447208405,
                    latitude: -23.545197539747917,
                }, {
                    longitude: -46.64201885461807,
                    latitude: -23.544813950423283,
                }, {
                    longitude: -46.64227366447449,
                    latitude: -23.54450166854422,
                }, {
                    longitude: -46.642721593379974,
                    latitude: -23.543985295306072,
                }],
                 RepublicaAteSantaCecilia:[{
                    longitude: -46.642721593379974,
                    latitude: -23.543985295306072,
                }, {
                    longitude: -46.64324730634689,
                    latitude: -23.543510721922846,
                }, {
                    longitude: -46.64387226104736,
                    latitude: -23.54293778907976,
                }, {
                    longitude: -46.64477616548538,
                    latitude: -23.542121416939437,
                }, {
                    longitude: -46.64540380239487,
                    latitude: -23.541553395984497,
                }, {
                    longitude: -46.6459858417511,
                    latitude: -23.541017339326622,
                }, {
                    longitude: -46.64653301239014,
                    latitude: -23.540518165336504,
                }, {
                    longitude: -46.647042632102966,
                    latitude: -23.539979645459113,
                }, {
                    longitude: -46.64756029844284,
                    latitude: -23.539433746346553,
                }, {
                    longitude: -46.648083329200745,
                    latitude: -23.538900140069224,
                }, {
                    longitude: -46.64824426174164,
                    latitude: -23.53874768073522,
                }, {
                    longitude: -46.648472249507904,
                    latitude: -23.538536204592244,
                }, {
                    longitude: -46.648981869220734,
                    latitude: -23.538088660935937,
                }],
                 SantaCeciliaAteMarechal:[{
                    longitude: -46.648981869220734,
                    latitude: -23.538088660935937,
                }, {
                    longitude: -46.649156212806695,
                    latitude: -23.53797554526523,
                }, {
                    longitude: -46.64960950613021,
                    latitude: -23.53770013279068,
                }, {
                    longitude: -46.65037930011749,
                    latitude: -23.537225536727004,
                }, {
                    longitude: -46.65107399225235,
                    latitude: -23.536802579206487,
                }, {
                    longitude: -46.65151923894882,
                    latitude: -23.5365296233404,
                }, {
                    longitude: -46.652184426784515,
                    latitude: -23.536128795231217,
                }, {
                    longitude: -46.652551889419556,
                    latitude: -23.53589764226943,
                }, {
                    longitude: -46.65306955575943,
                    latitude: -23.535585339218493,
                }, {
                    longitude: -46.65338605642318,
                    latitude: -23.53538615342081,
                }, {
                    longitude: -46.65426313877105,
                    latitude: -23.534854989819184,
                }, {
                    longitude: -46.655057072639465,
                    latitude: -23.534377924385897,
                }, {
                    longitude: -46.65585100650787,
                    latitude: -23.533900857222577,
                }],
                MarechalAteBarraFunda:[{
                    longitude: -46.65585100650787,
                    latitude: -23.533900857222577,
                }, {
                    longitude: -46.65648937225342,
                    latitude: -23.533512316708254,
                }, {
                    longitude: -46.657074093818665,
                    latitude: -23.533158202834958,
                }, {
                    longitude: -46.65766954421997,
                    latitude: -23.53278441493467,
                }, {
                    longitude: -46.65840983390808,
                    latitude: -23.53225324082851,
                }, {
                    longitude: -46.65962219238281,
                    latitude: -23.53072856250082,
                }, {
                    longitude: -46.6603946685791,
                    latitude: -23.52962193006868,
                }, {
                    longitude: -46.660786271095276,
                    latitude: -23.52910058000887,
                }, {
                    longitude: -46.66111886501312,
                    latitude: -23.52868251478937,
                }, {
                    longitude: -46.66146755218506,
                    latitude: -23.52832346948185,
                }, {
                    longitude: -46.661832332611084,
                    latitude: -23.528033281462697,
                }, {
                    longitude: -46.66223466396332,
                    latitude: -23.527708663598215,
                }, {
                    longitude: -46.66262090206146,
                    latitude: -23.527452903504635,
                }, {
                    longitude: -46.6629159450531,
                    latitude: -23.527231572253214,
                }, {
                    longitude: -46.663329005241394,
                    latitude: -23.526990566689445,
                }, {
                    longitude: -46.66403174400329,
                    latitude: -23.52664627226129,
                }, {
                    longitude: -46.66472911834717,
                    latitude: -23.526380673086983,
                }, {
                    longitude: -46.66544795036316,
                    latitude: -23.526179014096655,
                }, {
                    longitude: -46.66615605354309,
                    latitude: -23.526070806706162,
                }, {
                    longitude: -46.66670858860016,
                    latitude: -23.52600686593359,
                }, {
                    longitude: -46.66745960712433,
                    latitude: -23.5259330880805,
                }]
            
    }

    cliqueRepublica = (nome) =>  {
        console.log('pq eu te tirei daqui?')
       
        // this.setState({mostraInfo:true}, () =>{
        //     console.log('CCC', this.state.mostraInfo)
        // })
    }

  

    render(){
        const mostra = this.state.mostraInfo;
        return(
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: -23.5436226,
                        longitude: -46.6514515,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }}
                    showsUserLocation
                    loadingEnabled
                    ref={el => this.mapView = el}
                        
                >
               <Marker 
                    coordinate={{
                        latitude:-23.5391515 ,
                        longitude: -46.651456,
                    }}
                    anchor={{ x:0, y:0 }} 
                    onPress={() => {this.setState({mostraInfo:true, nomeEst:"República"})}}
                    >
                </Marker>
                    
                <Marker 
                     coordinate={{
                        latitude:-23.5380181 ,
                        longitude: -46.6463978,
                    }}
                    anchor={{ x:1, y:1 }} 
                    onPress={() => {this.setState({mostraInfo:true, nomeEst:"Santa Cecília"})}}
                    >
                </Marker>
              
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.CorinthiansAteArtur}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.ArturAtePatriarca}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.PatriarcaAteGuilhermina}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.GuilherminaAteVilaMatilde}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.VilaMatildeAtePenha}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.PenhaAteCarrao}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.CarraoAteTatuape}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.TatuapeAteBelem}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.BelemAteBresser}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.BresserAteBras}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.BrasAtePedroII}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.PedroIIAteSe}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.SeAteAnhangabau}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.AnhangabauAteRepublica}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.RepublicaAteSantaCecilia}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.SantaCeciliaAteMarechal}
                />
                <Polyline
                    strokeColor={'#f00'}
                    strokeWidth={6}
                    coordinates={this.state.MarechalAteBarraFunda}
                />
                       

                </MapView>
 
                {mostra ? 
                (
                   <View
                   style={styles.infoEst}>
                   <Text
                   style={styles.title}
                   >{this.state.nomeEst}</Text>
                   <Text style={styles.escrita}>Há um problema nessa estação?</Text>
                <View style={styles.botoes}>
                <TouchableOpacity 
                     onPress={() => {this.setState({mostraInfo: null, nomeEst: null})}}
                    >
                    <Text style={styles.optNao}>Não</Text>
                </TouchableOpacity>
                    <TouchableOpacity
                // onPress={() => {}}
                >
                    <Text style={styles.optSim}>Sim</Text>
                </TouchableOpacity>
                </View>
                   </View>
                ): (
               null
                )}
            </View>

        )
    }
}



const styles = StyleSheet.create({
    infoEst:{
        alignItems: 'center',
        padding: 20

    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    escrita:{
        fontSize: 14,
        marginTop: 10,
    },
    botoes:{
        flexDirection: 'row',
        marginTop: 20
    },  
    optNao:{
        color: '#fff',
        backgroundColor: '#f00',
        fontWeight: 'bold',
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 16
    },
    optSim:{
        color: '#fff',
        backgroundColor: '#0f0',
        fontWeight: 'bold',
        marginLeft: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,        
        fontSize: 16
    },
})