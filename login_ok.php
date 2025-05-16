<? 
$G5_PATH="./gnuboard5";
include_once($G5_PATH.'/common.php');
include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
?>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./gnuboard5/theme/basic/skin/outlogin/basic/style.css">

  <style>
    *{margin: 0;padding: 0;}
    #mylogin {
      display: flex;
      justify-content: center;
      padding-top: 100px;
    }
  </style>
</head>
<body>
<div id="mylogin">
  <div id="aside">
          <?php echo outlogin('theme/basic'); // 외부 로그인, 테마의 스킨을 사용하려면 스킨을 theme/basic 과 같이 지정 ?>
      </div>
</div>
</body>
</html>

