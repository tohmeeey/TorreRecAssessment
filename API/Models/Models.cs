using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Profile
    {
       public Person Person { get; set; }
        public List<Strength> Strengths { get; set; }
        public List<Interest> Interests { get; set; }
    }

    public class Interest
    {
        public string Id { get; set; }
        public long Code { get; set; }
        public string Name { get; set; }
    }
    public class Strength : Interest
    {
        public string Proficiency { get; set; }
    }

    public class Person
    {
        public string ProfessionalHeadline { get; set; }
        public decimal Completion { get; set; }
        public bool ShowPhone { get; set; }
        public bool Verified { get; set; }
        public long SubjectId { get; set; }
        public string Picture { get; set; }
        public string Id { get; set; }
        public string PictureThumbnail { get; set; }
        public string SummaryOfBio { get; set; }
        public string PublicId { get; set; }
        public string Name { get; set; }
    }
}
