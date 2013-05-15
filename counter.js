<!DOCTYPE html>
<html>
<head>
<title>SBHS Countdown</title>
<link rel="icon" type="image/png" href="assets/favicon.ico">
<link rel="apple-touch-icon" href="assets/logo.png"/>


<!--Looking at the source code?
 Oh man STEP BACK such a l337 h4x0r!!!1!ONE!
.. . ...... ...   .....     ... .. . .    .  . ..  .. .  . .........................................
.. . ........... .....    . ........ ......~MMMMMMMMMM.  ...........................................
........................................+MMMMMMMMMMMMMMMMM~.........................................
.. ...................................7MMMMMMMMMMMMMMMMMMMMM  ......................................
.....................................MMMMMMMMMMMMMMMMMMMMMMMMM......................................
....................................MMMMMMMMMMMMMMMMMMMMMMMMMMM.....................................
...................................ZMMMM.,$MMMMMMMMMDMMMMMMMMMMM ...................................
........ . ........................OM+ .....+  .. .  ...,MMMMMMM ...........................,.......
........ . ..... .......  ...... .:MM $DMNI . ...,.. .....MMMMMMZ...................................
..................................:MM....O......D~.I8=....MMMMMMM ..................................
..................................:MMMMMMM,.....D..7MMNN..MMMMMMMO .................................
...................................MM..  +............. ..MMMMMMM, .................................
...................................8M.,I+, ......OM7.......MMMMMM~..................................
...................................,$.8MN......:.MNMN :. ..MMMMMM ..................................
........   ....... ................. ... .~.... . .. .. ...MMMMMI ..................................
.................................... ....D .....,..........MM... ...................................
.................................... ......... ............M.M+~ ...................................
....................................:....N. ,.  ........... .M......................................
....................................M ..IMMM.MMMMM. .........,7 ....................................
...................$~I .............+..MMMZ...,7MMMM. ......=M......................................
..............?+......   ..............MMMZ.I...$~MM........M  .....................................
.............D .M.: .. 7~ ........... .~,=. ...M.... ........ ......................................
.............M .N.M .M.7 .................,I.  ...... . $ .M......................$ .+..............
.........:...M  O....I ...  .........8.I ...........,..  .,8.........................O...M .........
..........N,.O..$: . M ... ........ M.I...........Z ......~O.D ...............MM..MD Z .,.D ........
........Z 7. +..Z+ ..M7 ,........?7...8$. ,?:,IO$.......N .MM .8,.  .........O .N.8...,.7.=.........
........  ..:N...N...M ..NDM .... ......=.............O....88.....D,DM.......= ....   M Z ......  ..
.........D ..N. ...  : Z :......., ....,...,Z,:=,7M .......$N ......M. .. D7  ~ ...M. , N:.~...N.M..
......... : ..  ........ ? .....M  ....M......~MMM........O D.........7..... .M :.M~...?7..N ....M..
........ ZZ8.... ....7...8....8 .,.....I+....MMMMMM ......D:I.......~~.........: ..N:O.M$.:O .D..$ .
....... ,...N.....=Z.....O...N... ...... + ..MOMMMM .....~..Z ........O........M ,.7  .....:=~ .Z ..
...... D....+ .....:.. ..= .I =I : .....~.+ NMMMMM,,...?,...N........,NN............~ .........Z,...
......N ...... .....$. ...N =.. .8 .....I.~..ZMMM..I  $ M ..N........Z...$.....$... .O..$O,.. M.....
.....M ......M........O ..... ...D......N .MMMM+,.MZ...$. ..M........, ....8...Z .D?8...:....O .....
..... ......., ..................O .....M .:MMN$~MMM...8 ...N.......:.:.....? Z....... ......N .....
....I........, ................Z D......M ..MM .MMMMM.I~....= .............. ...$..?.........Z......
....= ......... .............. $.Z......M ...M=.MMNMM., .... ..... N.....,........, ........,$ .....
...= ....... 7Z........ + ....I.........D....$MMMM.8MZ+ ..........8 .....I .................Z.8.....
...M .......N7.......=. .,..I ..........O ....MMMMMMMM...... ...., .......,, ..............N..N.....
...N .......$..8  ........ D ...........$ ....+MMMMM ......+.....$..........~..............O, 7.....
... .........Z....$.......M.......: ....  .....M.M.. ......=.....?...........?,.........8  .$ ......
..+...........=..... 8? .D7.......Z ....+.......MM$.......O:..... ..............~..........8~I $ ...
...............7 .......7.?.......Z...... ......:M. ......, ....= ..............O8 ......=ND,...$...
.= .............:  ..O. O8 .......7 .... ......... ........M .... ...............+  .,...?+ Z...= ..
+.................. . M IZ ............. ...... ~ .........8.....................I=O$:. .,.D....,...
Z.................= . .8,. ....................N8........,$8 ......................... .~:., ....M .
D..................? .8 ... ...................?:.D .....N ...............................N .....N .
................... ... .. ............  .....  .  ..... ................................ ......  .

 Please rant about my bad coding practices and poor
 logic or give constructive suggestions by clicking
 on "Give Feedback" at the bottom of the page-->


<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link href='http://fonts.googleapis.com/css?family=Roboto:100,300' rel='stylesheet' type='text/css'>
<style type="text/css">
    .centered {
        text-align: center;
        position: absolute;
        left: 0px;
        width: 100%;
        top: 5%;
        overflow: visible;
        display: block;
        /*top: 50%;
        left: 50%;
        height: 300px;
        width: 700px;
        margin-top: -200px;
        margin-left: -400px;*/
    }
    .align {
        text-align: center;
        position: absolute;
        left: 0px;
        width: 100%;
        overflow: visible;
        display: block;
    }
    #description {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 50px;
        color: #D6D6D6;
        height: 80px;
        line-height:50px;
        padding-top:5px;
    	padding-bottom:0px;
    }
    #in {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 100;
        font-size: 25px;
        color: #D6D6D6;
        line-height:0px;
		padding-top:0px;
        padding-bottom:10px;

    }
    #counter {
        font-family: 'Roboto', sans-serif;
        font-size: 120px;
        font-weight: 100;
        color: #D6D6D6;
        line-height: 1.1em;
    }
    #debug {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 25px;
        color: #D6D6D6;
    }
    #faq{
        position: fixed;
        bottom: 7px;
        left: 10px;
        font-family: "Roboto", sans-serif;
        text-align: left;
        font-weight: 100;
        font-size: 18px;
        color: #d7d7d7;
        z-index: 10;
    }
    #bottom {
        position: fixed;
        bottom: 7px;
        font-family: "Roboto", sans-serif;
        text-align: center;
        font-weight: 100;
        font-size: 18px;
    }
    #copyright{
        position: fixed;
        bottom: 10px;
        right: 10px;
        font-family: "Roboto", sans-serif;
        text-align: right;
        font-weight: 100;
        font-size: 13px;
        color: #d7d7d7;

    }
</style>

<script type="text/javascript"language="javascript"src="counter.js"></script>

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-40772969-1', 'sydneyboyshigh.asia');
    ga('send', 'pageview');
</script>
</head>
<body bgcolor="#000000">
<div id="container" class="centered" >
    <div id="description"></div>
    <div id="in">in</div>
    <div id="counter"></div>
</div>
<!--<div id="debug"></div>-->
<div id="faq"><a href="faq.html" style="color: #00aced"><img src="assets/i.png" height=15px hspace=3px>FAQ</a></div>
<div id="bottom" class="align"><a href="https://docs.google.com/forms/d/1J-FFPzJkBjCOY4U73xIIe_UwwMqMevmX6T9FZKLmQA0/viewform" target="_blank" style="color: #00aced">Give Feedback</a></div>
<div id="copyright">&#169 Jerry Yip 2013</div>
<br><br>

</body>
</html>
