namespace Project_DAW.Entities
{
    public class Posesor
    {
        public int id {  get; set; }
        public string name { get; set; }
        public ICollection<Fest> Fests { get; }
        public Badge? badge { get; set; }
        public int badge_id { get; set; }


    }
}
