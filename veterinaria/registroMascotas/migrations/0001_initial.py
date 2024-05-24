# Generated by Django 5.0.4 on 2024-05-02 17:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='EspecieMascota',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clase_mascota', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Vacunas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_vacuna', models.CharField(max_length=255)),
                ('descripcion', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Mascota',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_mascota', models.CharField(max_length=255)),
                ('edad', models.PositiveSmallIntegerField()),
                ('peso', models.PositiveSmallIntegerField()),
                ('object_id', models.PositiveIntegerField()),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype')),
                ('tipo_mascota', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.especiemascota')),
            ],
        ),
        migrations.CreateModel(
            name='HistoriClinica',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('epicrisis', models.TextField()),
                ('fecha', models.DateField(auto_now=True)),
                ('id_mascota', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.mascota')),
            ],
        ),
        migrations.CreateModel(
            name='Raza',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_raza', models.CharField(max_length=255)),
                ('especie_mascota', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.especiemascota')),
            ],
        ),
        migrations.AddField(
            model_name='mascota',
            name='raza',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.raza'),
        ),
        migrations.CreateModel(
            name='Recetario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_medicamento', models.CharField(max_length=255)),
                ('instrucciones', models.TextField()),
                ('presentacion', models.CharField(max_length=100)),
                ('historia', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.historiclinica')),
                ('mascota', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.mascota')),
            ],
        ),
        migrations.CreateModel(
            name='VacuanaMascota',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_vacuna', models.DateField()),
                ('mascota', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.mascota')),
                ('vacuna', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='registroMascotas.vacunas')),
            ],
        ),
    ]
