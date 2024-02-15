﻿using Microsoft.EntityFrameworkCore;
using Project_DAW.Entities;
//context
namespace Project_DAW.Contextapp
{
    public class Context : DbContext
    {
        public DbSet<Posesor> Posesor {  get; set; }
        public DbSet<Model> Model {  get; set; }
        public DbSet<Fest> Fest { get; set; }
        public DbSet<Badge> Badge { get; set; }
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
    }
}
