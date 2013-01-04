Scroli
======

Scrolling html li elements on a horizontal line

<html>

  <head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js" type="text/javascript"></script>
	<script src="simpleNumeric.js" type="text/javascript"></script>
	</head>
	
	<body>
			
			1.000.000,00 TL
			<input type="text" class="numeric1" />
			
			<br /> <br />
	
			1.000.000 TL
			<input type="text" class="numeric2" />
			
			<br /> <br />
			
			$1.000.000
			<input type="text" class="numeric3" />
			
			<br /> <br />
			
			$1.000.000,00
			<input type="text" class="numeric4" />
			
			<br /> <br />
			
			1.000.000
			<input type="text" class="numeric5" />
			
			<br /> <br />
			
			<script type="text/javascript">

			$('.numeric1').numeric({fraction : 2, symbol: "TL"});
			
			$('.numeric2').numeric({fraction : 0, symbol: "TL"});
			
			$('.numeric3').numeric({fraction : 0, symbol: "$"});
				
			$('.numeric4').numeric({fraction : 2, symbol: "$"});
			
			$('.numeric5').numeric();

			</script>

	</body>

</html>
