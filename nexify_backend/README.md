# بک‌اند سایت نکسیفای (NEXIFY) - Django + DRF

این بک‌اند دو تا API داره که با فرانت‌اند Next.js شما (ریپوی NEXIFY) هماهنگه:

| Endpoint | Method | کاربرد |
|---|---|---|
| `/api/contact/` | POST | ذخیره‌ی پیام‌های فرم تماس + ارسال ایمیل اطلاع‌رسانی |
| `/api/projects/` | GET | لیست پروژه‌های منتخب (برای بخش «پروژه‌های منتخب») |
| `/admin/` | - | پنل مدیریت جنگو |

## نصب و راه‌اندازی

```bash
# ۱. ساخت محیط مجازی
python3 -m venv venv
source venv/bin/activate        # ویندوز: venv\Scripts\activate

# ۲. نصب پکیج‌ها
pip install -r requirements.txt

# ۳. تنظیم متغیرهای محیطی
cp .env.example .env
# فایل .env رو باز کنید و مقادیر (SECRET_KEY، ایمیل و ...) رو پر کنید

# ۴. اجرای migration ها
python manage.py migrate

# ۵. ساخت اکانت ادمین (برای دسترسی به /admin/)
python manage.py createsuperuser

# ۶. اجرای سرور
python manage.py runserver
```

سرور روی `http://localhost:8000` بالا میاد.

## اتصال فرانت‌اند (Next.js)

توی پروژه‌ی NEXIFY، فایل زیر رو بسازید:

```bash
cp .env.local.example .env.local
```

که این مقدار رو داره:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

دو فایل زیر توی فرانت‌اند از قبل با این بک‌اند هماهنگ شدن:
- **`app/components/Footer/Footer.tsx`** — فرم تماس (بدون تغییر لازم؛ از قبل به `/api/contact/` fetch می‌زد)
- **`app/components/FeaturedProjects/FeaturedProjects.tsx`** — حالا به‌جای دیتای هاردکد، از `/api/projects/` می‌خونه
- **`next.config.ts`** — برای نمایش عکس پروژه‌ها از سرور جنگو (`next/image`) تنظیم شده

## اضافه کردن پروژه‌ی جدید به بخش «پروژه‌های منتخب»

نیازی به تغییر کد فرانت‌اند نیست. فقط وارد پنل ادمین بشید:
1. به `http://localhost:8000/admin/` برید و لاگین کنید
2. روی «پروژه‌ها» کلیک کنید → «افزودن پروژه»
3. عنوان، دسته‌بندی، عکس و لینک رو پر کنید و ذخیره کنید

پروژه بلافاصله توی سایت (بعد از رفرش صفحه) نمایش داده می‌شه.

## دیدن پیام‌های فرم تماس

از پنل ادمین → «پیام‌های تماس». هر پیام رو می‌تونید علامت «خوانده‌شده» بزنید.

## تنظیم ایمیل واقعی (Gmail مثال)

در حالت پیش‌فرض (`.env` خالی برای `EMAIL_HOST`)، ایمیل‌ها فقط توی ترمینال چاپ می‌شن (مناسب توسعه).
برای فعال کردن ارسال واقعی، در فایل `.env`:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=youraddress@gmail.com
EMAIL_HOST_PASSWORD=xxxx-xxxx-xxxx-xxxx   # App Password جیمیل، نه پسورد اصلی
DEFAULT_FROM_EMAIL=noreply@nexify.dev
CONTACT_NOTIFICATION_EMAIL=info@nexify.ir   # ایمیلی که پیام‌ها بهش ارسال می‌شه
```

> نکته: برای Gmail باید یک "App Password" از تنظیمات امنیتی گوگل بسازید؛ پسورد اصلی اکانت کار نمی‌کنه.

## نکات فنی

- **اعتبارسنجی دوباره سمت سرور**: همون قوانینی که فرانت‌اند چک می‌کنه (نام حداقل ۳ حرف، فرمت موبایل ایران `09XXXXXXXXX`، پیام حداقل ۱۰ کاراکتر) سمت سرور هم دوباره چک می‌شن — چون اعتبارسنجی سمت کلاینت به‌تنهایی قابل‌اعتماد نیست.
- **محدودیت نرخ درخواست (Rate limiting)**: هر IP حداکثر ۱۰ درخواست در دقیقه به `/api/contact/` می‌تونه بزنه (جلوگیری از اسپم).
- **CORS**: فقط آدرس‌های داخل `CORS_ALLOWED_ORIGINS` (در `.env`) اجازه‌ی دسترسی به API رو دارن.
- **دیتابیس پیش‌فرض SQLite** است؛ برای پروداکشن توصیه می‌شه به PostgreSQL سوییچ کنید (`DATABASES` در `config/settings.py`).

## قبل از دیپلوی روی سرور واقعی

- [ ] `DJANGO_DEBUG=False` در `.env`
- [ ] یک `DJANGO_SECRET_KEY` تصادفی و امن جدید بسازید
- [ ] `DJANGO_ALLOWED_HOSTS` رو به دامنه‌ی واقعی سرور تغییر بدید
- [ ] `CORS_ALLOWED_ORIGINS` رو به دامنه‌ی واقعی فرانت‌اند تغییر بدید
- [ ] از PostgreSQL به‌جای SQLite استفاده کنید
- [ ] پشت یک وب‌سرور واقعی (Gunicorn + Nginx) اجرا کنید، نه `runserver`
