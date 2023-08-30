using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NewAgreementList.Models;

namespace NewAgreementList
{
    public class NewAgreementListContext : DbContext
    {
        public NewAgreementListContext (DbContextOptions<NewAgreementListContext> options)
            : base(options)
        {
        }

        public DbSet<NewAgreementList.Models.NewAgreementList> NewAgreementList { get; set; } = default!;
    }
}
