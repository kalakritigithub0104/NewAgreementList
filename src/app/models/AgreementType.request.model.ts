export interface AgreementType
{
    id: number,
    agreementTypeName: string,
    createdBy: string,
    createdOn: Date | null,
    lastModifiedBy: string,
    lastModifiedOn:Date | null ,
    isActive: boolean,
    displayName: string,
    applicableFor: string,
    defaultIncoterm: string,
    defaultStrategy: string
}