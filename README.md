# Personal_Webpage

Personal webpage created by myself in Django.
It uses plain CSS+HTML, no JS.
## TODO

* upload to Server hosting.
* Add Javascript applets


Unfortunately fully functional version requires secret keys, which cannot be uploaded to github.
# To RUN



```
ADD to mysite/settings.py
SECRET_KEY = 'RANDOM_KEY'
// Email functionality
EMAIL_HOST = 'SMTP SERVER'
EMAIL_HOST_USER = 'email'
EMAIL_HOST_PASSWORD = 'pass'
```
```
pip install -r requirments.txt
python manage.py runserver
```
