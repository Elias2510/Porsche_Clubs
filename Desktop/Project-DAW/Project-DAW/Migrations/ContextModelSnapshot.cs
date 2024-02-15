﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Project_DAW.Contextapp;

#nullable disable

namespace Project_DAW.Migrations
{
    [DbContext(typeof(Context))]
    partial class ContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Project_DAW.Entities.Badge", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Badge");
                });

            modelBuilder.Entity("Project_DAW.Entities.Fest", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<int>("model_id")
                        .HasColumnType("int");

                    b.Property<int?>("modelid")
                        .HasColumnType("int");

                    b.Property<int>("posesor_id")
                        .HasColumnType("int");

                    b.Property<int?>("posesorid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("modelid");

                    b.HasIndex("posesorid");

                    b.ToTable("Fest");
                });

            modelBuilder.Entity("Project_DAW.Entities.Model", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<string>("denumire")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Model");
                });

            modelBuilder.Entity("Project_DAW.Entities.Posesor", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<int>("badge_id")
                        .HasColumnType("int");

                    b.Property<int?>("badgeid")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("badgeid");

                    b.ToTable("Posesor");
                });

            modelBuilder.Entity("Project_DAW.Entities.Fest", b =>
                {
                    b.HasOne("Project_DAW.Entities.Model", "model")
                        .WithMany("Badges")
                        .HasForeignKey("modelid");

                    b.HasOne("Project_DAW.Entities.Posesor", "posesor")
                        .WithMany("Fests")
                        .HasForeignKey("posesorid");

                    b.Navigation("model");

                    b.Navigation("posesor");
                });

            modelBuilder.Entity("Project_DAW.Entities.Posesor", b =>
                {
                    b.HasOne("Project_DAW.Entities.Badge", "badge")
                        .WithMany("posesori")
                        .HasForeignKey("badgeid");

                    b.Navigation("badge");
                });

            modelBuilder.Entity("Project_DAW.Entities.Badge", b =>
                {
                    b.Navigation("posesori");
                });

            modelBuilder.Entity("Project_DAW.Entities.Model", b =>
                {
                    b.Navigation("Badges");
                });

            modelBuilder.Entity("Project_DAW.Entities.Posesor", b =>
                {
                    b.Navigation("Fests");
                });
#pragma warning restore 612, 618
        }
    }
}
