using System.ComponentModel.DataAnnotations;

namespace NewAgreementList.Models
{
  public class NewAgreementList
  {
    [Key]
    public int Id { get; set; }
    public string? AgreementTypeName { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? CreatedOn { get; set; }
    public string? LastModifiedBy { get; set; }

    public DateTime? LastModifiedOn { get; set; }
    public bool IsActive { get; set; }
    public string? DisplayName { get; set; }
    public string? ApplicableFor { get; set; }
    public string? DefaultIncoterm { get; set; }
    public string? DefaultStrategy { get; set; }

  }
}
