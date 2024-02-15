namespace Project_DAW.Entities
{
    public class Badge
    {
        public int id { get; set; }
        public string name { get; set; }

        public ICollection<Posesor> posesori { get; }
    }
}
