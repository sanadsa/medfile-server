CREATE PROCEDURE[dbo].[spPatient_Insert]
      @patient_num int,
      @gender NVARCHAR(50),
      @birth Date,
      @HealthInsuranceCompany NVARCHAR(50),
      @PolicyNumber int,
      @validUntil Date,
      @MobileNum int,
      @FaxNum int,
      @EmailAddress NVARCHAR(50),
      @Country NVARCHAR(50),
      @city NVARCHAR(50),
      @Address NVARCHAR(50),
      @zipCode int
      @ID int
AS
BEGIN
SET NOCOUNT ON

INSERT INTO dbo.Patient
    (
        patient_num,
        gender,
        birth,
        HealthInsuranceCompany,
        PolicyNumber,
        validUntil,
        MobileNum,
        FaxNum,
        EmailAddress,
        Country,
        city,
        Address,
        zipCode,
        ID
    )
VALUES
    ( 
      @patient_num,
      @gender,
      @birth,
      @HealthInsuranceCompany,
      @PolicyNumber,
      @validUntil,
      @MobileNum,
      @FaxNum,
      @EmailAddress,
      @Country,
      @city,
      @Address,
      @zipCode,
      @ID
	)
END 

    (gender, birth, HealthInsuranceCompany, PolicyNumber, validUntil, MobileNum, FaxNum, EmailAddress, Country, city, Address, zipCode, ID)