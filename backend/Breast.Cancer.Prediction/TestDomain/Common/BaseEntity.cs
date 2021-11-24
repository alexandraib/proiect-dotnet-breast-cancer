using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Common
{
    public abstract class BaseEntity
    {
        [Column("id")]
        public Guid Id { get; set; }
    }
}