from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from chemml_web_ui.models import Data, Project
from chemml_web_ui.serializers import ProjectSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def chemml_web_ui_list(request):
    if request.method == 'GET':
        chemml_web_ui = ChemmlWebUi.objects.all()
        
        project_title = request.GET.get('project_title', None)
        if project_title is not None:
            chemml_web_ui = chemml_web_ui.filter(project_title__icontains=project_title)
        
        chemml_web_ui_serializer = ChemmlWebUiSerializer(chemml_web_ui, many=True)
        return JsonResponse(chemml_web_ui_serializer.data, safe=False)

    elif request.method == 'POST':
        chemml_web_ui_data = JSONParser().parse(request)
        print(chemml_web_ui_data)
        chemml_web_ui_serializer = ProjectSerializer(data=chemml_web_ui_data)
        if chemml_web_ui_serializer.is_valid():
            chemml_web_ui_serializer.save()
            return JsonResponse(chemml_web_ui_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(chemml_web_ui_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # 'safe=False' for objects serialization

@api_view(['GET', 'PUT', 'DELETE'])
def chemml_web_ui_detail(request, pk):
    # find chemml_web_ui by pk (id)
    try: 
        chemml_web_ui = ChemmlWebUi.objects.get(pk=pk) 
    except ChemmlWebUi.DoesNotExist: 
        return JsonResponse({'message': 'The chemml_web_ui does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE chemml_web_ui
           
@api_view(['GET'])
def chemml_web_ui_list_published(request):
    # GET all published chemml_web_uis
    # Create your views here.
    return None
