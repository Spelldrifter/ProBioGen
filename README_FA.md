# [BioGPT](https://www.bio.ehsanghaffarii.ir/)

این پروژه با استفاده از هوش مصنوعی بایو شبکه‌های اجتماعی برای شما  میسازه

## کارش چیه؟

این پروژه بر اساس ورودی کاربر با  [چت‌جی‌پی‌تی](https://openai.com/api/)  بایو برای شبکه‌های اجتمای مثل اینستاگرام و تویتر می‌سازه

## دمو

[دمو پروژه](https://bio.ehsanghaffarii.ir)

راه‌اندازی با یک کلیک

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ehsanghaffar/biogpt&env=OPENAI_API_KEY&project-name=bio-gpt&repo-name=biogpt)


## راه‌اندازی با داکر

```bash
# یک داکر نتورک بساز
docker network create my_network

# پروژه رو بیلد بگیر
docker-compose -f docker-compose.dev.yml build

# پروژه رو راه اندازی کن
