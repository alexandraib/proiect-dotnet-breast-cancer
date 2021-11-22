using Domain.Common;

namespace Domain.Entities
{
    public class User : BaseEntity
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string UserType { get; set; }

        public int Age { get; set; }
    }
}