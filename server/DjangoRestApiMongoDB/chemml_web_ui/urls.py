from django.conf.urls import url
from chemml_web_ui import views

urlpatterns = [
    url(r'^api/chemml_web_ui$', views.chemml_web_ui_list),
    url(r'^api/chemml_web_ui/(?P<pk>[0-9]+)$', views.chemml_web_ui_detail),
    url(r'^api/chemml_web_ui/published$', views.chemml_web_ui_list_published)
]