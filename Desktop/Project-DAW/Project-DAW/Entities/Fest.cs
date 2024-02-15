using System.Text.Json.Serialization;
using System.Drawing;
using System.Text.Json.Serialization;
namespace Project_DAW.Entities

{
    //MM
    public class Fest
    {
        public int id { get; set; }

        public  Model?  model { get; set; }
        public int model_id {  get; set; }

        public Posesor? posesor {  get; set; }
        public int posesor_id { get; set; }

        

        
    }
}
