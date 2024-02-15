namespace Project_DAW.Entities
{
    public class Model
    {
        public int id { get; set; }
        public string denumire { get; set; }
        public ICollection<Fest> Badges { get; }
    }
}
