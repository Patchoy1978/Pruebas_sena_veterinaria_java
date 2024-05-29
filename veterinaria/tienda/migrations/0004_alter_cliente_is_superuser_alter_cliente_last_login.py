# Generated by Django 5.0.6 on 2024-05-29 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0003_alter_cliente_is_superuser_alter_cliente_last_login'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
    ]
