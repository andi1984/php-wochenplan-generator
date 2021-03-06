<?php
require 'vendor/autoload.php';
require 'helpers/labels.php';

// reference the Dompdf namespace
use Dompdf\Dompdf;

// instantiate and use the dompdf class
$dompdf = new Dompdf(array('debugLayout' => false));

// instantiate Twig
$loader = new Twig_Loader_Filesystem('./templates');
$twig = new Twig_Environment($loader, array(//'cache' => './twig_cache',
));

// Generate HTML through Twig (using GET params) and load it into DomPDF.
// error_log(json_encode($_GET));
error_log(json_encode(array_merge($_GET, $labels)));
$dompdf->loadHtml($twig->render('index.twig', array_merge($_GET, $labels)));

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4', 'landscape');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream('wochenplan.pdf');
