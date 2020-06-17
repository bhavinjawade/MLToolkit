from rest_framework import serializers
from chemml_web_ui.models import ChemmlWebUi

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChemmlWebUi
        fields = ('id',
                 'project_title',
                 'project_date',
                 'project_config')

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChemmlWebUi
        fields = ('id',
                 'project_title',
                 'project_date',
                 'project_config')
