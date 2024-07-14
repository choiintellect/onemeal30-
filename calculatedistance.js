<!DOCTYPE html>
<html>
  <head>
    <script src="https://thunkable.github.io/webviewer-extension/thunkableWebviewerExtension.js" type="text/javascript"></script>
  </head>
  <body>
    <script type="text/javascript">
      // Thunkable에서 데이터를 받아 처리하는 함수
      ThunkableWebviewerExtension.receiveMessage(function(message) {
        // Thunkable에서 전달된 데이터
        var number1 = message;

        // 두 숫자를 더한 결과 계산
        var sum = number1 + 1;

        // 계산된 결과를 Thunkable으로 다시 전송
        ThunkableWebviewerExtension.postMessage(sum);
      });
    </script>
  </body>
</html>
