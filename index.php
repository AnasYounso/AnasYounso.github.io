<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Vibes&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Harmattan&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png">
    <title>تجربه</title>
</head>
<body>
    <header class="header">
        <!-- <div class="logo-box">
            <img
        </div> -->
        <div class="text-box">
            <h1 class="heading-primary"> 
                <span class="heading-primary-main">تـــــــجـــــــــربـــــــــــه</span>
                <span class="heading-primary-sub">كيف تبحث  عن  العمل</span>
            </h1>
            <a href="#" class="btn btn-white">إبدا هنا</a>
        </div>
    </header>
    <section class="row-container">
        <div class="row">
            <div class="information">
             
                    <form action="eod.php" method="post" class="form">
                      <div class="form__group">
                        <input type="text" name="Title" class="form__input" id="Title">
                        <label for="Title" class="form__label">:اللقب</label>
                      </div>
                      <div class="form__group">
                        <input type="text" name="Name" class="form__input" id="Name">
                        <label for="Name" class="form__label">:الأسم والكنية</label>
                      </div>
                      <div class="form__group">
                        <input type="email" name="Email" class="form__input" id="Email">
                        <label for="Email" class="form__label">:البريد الإلكتروني</label>
                      </div>
                      <div class="form__group">
                        <input type="number" class="form__input" name="Number"  id="Number">
                        <label for="Number" class="form__label">:رقم الهاتف مع رمز البلد</label>
                      </div>
                      <label for="Message" class="form__label form__label-note">:الملاحظات</label>
                      <div class="form__group">                        
                        <textarea  class="form__input" name="Message" id="Message" cols="36.8" rows="5">                        
                        </textarea>                        
                      </div>
                      
                      <input class="btn btn-form" type="submit" value="إرسال" name="submit">
                    </form>                  
            </div>            
        </div>
    </section>
    <footer class="footer">      
        <div class="footer__container">
          <div class="column" style="color:rgba(128, 77, 0, 0.8)">تجربه</div>
          <div class="column column-links">شركائنا
            <div class="links">
              <a>مواقع</a>
              <a>اتصل بنا</a>
              
              <a>شروط&nbsp;الاستخدام</a>
              <a>مساعدة</a>
            </div>
          </div>
          <div class="column">شركاء</div>
          <div class="column">صحافة</div>
          <div class="column">من نحن</div>
          
          <div class="column column--double">          <div><img class="logo-designedby" src="img/favicon.png" /></div>
          </div>
        </div>  
      </footer>
</body>
</html>