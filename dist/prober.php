<?php
namespace InnStudio\Prober\Components\PreDefine;
\define('XPROBER_TIMER', \microtime(true));
\define('XPROBER_IS_DEV', true);
include \dirname(__DIR__) . '/vendor/autoload.php';
new \InnStudio\Prober\Components\Benchmark\Benchmark();
new \InnStudio\Prober\Components\Database\Database();
new \InnStudio\Prober\Components\Fetch\Fetch();
new \InnStudio\Prober\Components\Footer\Footer();
new \InnStudio\Prober\Components\MyInfo\MyInfo();
new \InnStudio\Prober\Components\NetworkStats\NetworkStats();
new \InnStudio\Prober\Components\PhpExtensions\PhpExtensions();
new \InnStudio\Prober\Components\PhpInfo\PhpInfo();
new \InnStudio\Prober\Components\PhpInfoDetail\PhpInfoDetail();
new \InnStudio\Prober\Components\Ping\Ping();
new \InnStudio\Prober\Components\Script\Script();
new \InnStudio\Prober\Components\ServerBenchmark\ServerBenchmark();
new \InnStudio\Prober\Components\ServerInfo\ServerInfo();
new \InnStudio\Prober\Components\ServerStatus\ServerStatus();
new \InnStudio\Prober\Components\Style\Style();
new \InnStudio\Prober\Components\Timezone\Timezone();
new \InnStudio\Prober\Components\Updater\Updater();
new \InnStudio\Prober\Components\Bootstrap\Bootstrap();