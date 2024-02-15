namespace Project_DAW.Entities
{
    public class Fest
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Oras { get; set; }

        public ICollection<Vehicul> Vehicule { get; } 
    }
}
