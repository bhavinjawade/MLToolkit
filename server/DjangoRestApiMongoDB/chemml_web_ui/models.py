from django.db import models
import datetime
from django_mongoengine import Document, EmbeddedDocument, fields


class Comment(EmbeddedDocument):
    created_at = fields.DateTimeField(
        default=datetime.datetime.now, editable=False,
    )
    author = fields.StringField(verbose_name="Name", max_length=255)
    email  = fields.EmailField(verbose_name="Email")
    body = fields.StringField(verbose_name="Comment")

class Post(Document):
    created_at = fields.DateTimeField(
        default=datetime.datetime.now, editable=False,
    )
    title = fields.StringField(max_length=255)
    slug = fields.StringField(max_length=255, primary_key=True)
    comments = fields.ListField(
        fields.EmbeddedDocumentField('Comment'), blank=True,
    )