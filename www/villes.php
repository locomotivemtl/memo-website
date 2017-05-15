<!doctype html>
<!--[if lte IE 9]>     <html lang="fr" class="ie9"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="fr"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="theme-color" content="#4f89e9">
		<title>memo | Communication instantanée de la ville à ses citoyens</title>

		<link rel="apple-touch-icon" href="modules/memo/assets/images/apple-touch-icon.png">
		<link rel="icon" href="modules/memo/assets/images/favicon.png">

		<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500" rel="stylesheet" type="text/css">

		<link rel="stylesheet" href="modules/memo/assets/styles/dist/main.css">
	</head>
	<body>

		<div class="o-layout">
			<div class="o-layout_header">
				<header class="c-header-main">
					<a class="c-logo-main -noflex" href="/">
						<div class="c-logo-main_wrap">
							<span class="c-logo-main_icon u-slideInLeftUp js-wow">
								<svg role="img"><use xlink:href="modules/memo/assets/images/dist/svgs.svg#logo-icon"></use></svg>
							</span>
							<span class="c-logo-main_text u-fadeIn js-wow" data-wow-delay="0.6s">
								<svg role="img"><use xlink:href="modules/memo/assets/images/dist/svgs.svg#logo-text"></use></svg>
							</span>
						</div>
					</a>
				</header>

			<main>
				<section class="c-home o-section -color">
					<div class="c-home_content">
						<h1 class="o-h1 u-fadeInUpSmall js-wow" data-wow-delay="0.8s">Communication <br>instantanée <br>de la ville <br>à ses citoyens</h1>
						<p class="o-text u-fadeInUpSmall js-wow" data-wow-delay="1.0s">
							Rejoignez facilement <br>vos résidents via courriel, <br>SMS et automate d’appel.
						</p>
						<a class="o-button -white -arrow u-fadeInUpSmall js-wow" href="/" data-wow-delay="1.3s">
							<span class="o-button_arrow">
								<svg class="o-button_arrow_icon" role="img"><use xlink:href="modules/memo/assets/images/dist/svgs.svg#arrow-down"></use></svg>
							</span>
							En savoir plus
						</a>
					</div>
				</section>
			</main>
			</div>
			<div class="o-layout_main">
				<div class="o-block-grid o-grid">
					<?php for ($i=1; $i < 13; $i++) { ?>
					<div class="o-block-grid_item">
						<a class="c-block" href="#" target="_blank">
							<span class="c-block_image">
								<img src="modules/memo/assets/images/cities/logo_<?php echo $i; ?>.svg" alt="">
							</span>
						</a>
					</div>
					<?php } ?>
				</div>
			</div>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="modules/memo/assets/scripts/dist/jquery-1.11.3.min.js"><\/script>')</script>
		<script src="modules/memo/assets/scripts/dist/vendors.js"></script>
		<script src="modules/memo/assets/scripts/dist/app.js"></script>

		<script>
	        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	        ga('create', 'UA-1837138-68', 'auto');
	        ga('send', 'pageview');
        </script>
	</body>
</html>
