document.getElementById('insuranceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = new FormData(event.target);

    // Collecting form data
    const surname = formData.get('surname');
    const givenName = formData.get('givenName');
    const taxId = formData.get('taxId');
    const gender = formData.get('gender');
    const birthDate = formData.get('birthDate');
    const maritalStatus = formData.get('maritalStatus');
    const occupation = formData.get('occupation') || 'UNKNOWN';

    const homePhone = formData.get('homePhone');
    const businessPhone = formData.get('businessPhone');
    const cellPhone = formData.get('cellPhone');
    const email = formData.get('email');

    const driverSurname = formData.get('driverSurname');
    const driverGivenName = formData.get('driverGivenName');
    const driverTaxId = formData.get('driverTaxId');
    const driverGender = formData.get('driverGender');
    const driverBirthDate = formData.get('driverBirthDate');
    const driverMaritalStatus = formData.get('driverMaritalStatus');

    const vehicleVin = formData.get('vehicleVin');
    const coverageComp = formData.get('coverageComp');
    const coverageColl = formData.get('coverageColl');
    const coverageTl = formData.get('coverageTl');
    const coverageRreim = formData.get('coverageRreim') ? 'YES' : 'NO';

    const homeQuestion = formData.get('homeQuestion');
    const autoQuestion1 = formData.get('autoQuestion1');
    const autoQuestion2 = formData.get('autoQuestion2');

    // Creating XML data
    let xmlData = `<ACORD>
<SignonRq>
<SignonPswd>
<SignonRoleCd>Agent</SignonRoleCd>
<!-- You can add more details here -->
</SignonPswd>
<ClientDt/>
<CustLangPref>en-US</CustLangPref>
<ClientApp>
<Org>SEMCAT Corporation</Org>
<Name>SEMCAT</Name>
<Version>5.3.13</Version>
</ClientApp>
</SignonRq>
<InsuranceSvcRq>
<RqUID>${generateUniqueId()}</RqUID>
<PersPkgPolicyQuoteInqRq>
<!-- Personal Details -->
<PersApplicationInfo>
<InsuredOrPrincipal>
<GeneralPartyInfo>
<NameInfo>
<PersonName>
<Surname>${surname}</Surname>
<GivenName>${givenName}</GivenName>
</PersonName>
<TaxIdentity>
<TaxIdTypeCd>SSN</TaxIdTypeCd>
<TaxId>${taxId}</TaxId>
</TaxIdentity>
</NameInfo>
<Communications>
<PhoneInfo>
<CommunicationUseCd>Home</CommunicationUseCd>
<PhoneNumber>${homePhone}</PhoneNumber>
</PhoneInfo>
<PhoneInfo>
<CommunicationUseCd>Business</CommunicationUseCd>
<PhoneNumber>${businessPhone}</PhoneNumber>
</PhoneInfo>
<PhoneInfo>
<CommunicationUseCd>Cell</CommunicationUseCd>
<PhoneNumber>${cellPhone}</PhoneNumber>
</PhoneInfo>
<EmailInfo>
<EmailAddr>${email}</EmailAddr>
</EmailInfo>
</Communications>
</GeneralPartyInfo>
<InsuredOrPrincipalInfo>
<PersonInfo>
<GenderCd>${gender}</GenderCd>
<BirthDt>${birthDate}</BirthDt>
<MaritalStatusCd>${maritalStatus}</MaritalStatusCd>
<OccupationClassCd>${occupation}</OccupationClassCd>
</PersonInfo>
</InsuredOrPrincipalInfo>
</InsuredOrPrincipal>
</PersApplicationInfo>

<!-- Driver Details -->
<PersDriver id="DRIVER1">
<GeneralPartyInfo>
<NameInfo>
<PersonName>
<Surname>${driverSurname}</Surname>
<GivenName>${driverGivenName}</GivenName>
</PersonName>
<TaxIdentity>
<TaxIdTypeCd>SSN</TaxIdTypeCd>
<TaxId>${driverTaxId}</TaxId>
</TaxIdentity>
</NameInfo>
<Communications>
<PhoneInfo>
<CommunicationUseCd>Home</CommunicationUseCd>
<PhoneNumber>${homePhone}</PhoneNumber>
</PhoneInfo>
<PhoneInfo>
<CommunicationUseCd>Business</CommunicationUseCd>
<PhoneNumber>${businessPhone}</PhoneNumber>
</PhoneInfo>
<PhoneInfo>
<CommunicationUseCd>Cell</CommunicationUseCd>
<PhoneNumber>${cellPhone}</PhoneNumber>
</PhoneInfo>
<EmailInfo>
<EmailAddr>${email}</EmailAddr>
</EmailInfo>
</Communications>
</GeneralPartyInfo>
<DriverInfo>
<PersonInfo>
<GenderCd>${driverGender}</GenderCd>
<BirthDt>${driverBirthDate}</BirthDt>
<MaritalStatusCd>${driverMaritalStatus}</MaritalStatusCd>
</PersonInfo>
</DriverInfo>
</PersDriver>

<!-- Vehicle Details -->
<PersVeh id="VEHICLE1">
<VehIdentificationNumber>${vehicleVin}</VehIdentificationNumber>
<PrincipalOperatorInd>1</PrincipalOperatorInd>
<Coverage>
<CoverageCd>COMP</CoverageCd>
<Deductible>
<FormatInteger>${coverageComp}</FormatInteger>
</Deductible>
</Coverage>
<Coverage>
<CoverageCd>COLL</CoverageCd>
<Deductible>
<FormatCurrencyAmt>
<Amt>${coverageColl}</Amt>
</FormatCurrencyAmt>
</Deductible>
</Coverage>
<Coverage>
<CoverageCd>TL</CoverageCd>
<Limit>
<FormatInteger>${coverageTl}</FormatInteger>
<LimitAppliesToCd>PerAcc</LimitAppliesToCd>
</Limit>
</Coverage>
<Coverage>
<CoverageCd>RREIM</CoverageCd>
</Coverage>
</PersVeh>

<!-- Home Line Business Information -->
<PersPkgHomeLineBusiness DwellRefs="DWELL1">
<LOBCd>HOME</LOBCd>
<QuestionAnswer>
<QuestionCd>HOME01</QuestionCd>
<YesNoCd>${homeQuestion}</YesNoCd>
</QuestionAnswer>
</PersPkgHomeLineBusiness>

<!-- Auto Line Business Information -->
<PersPkgAutoLineBusiness VehRefs="VEHICLE1">
<LOBCd>AUTOP</LOBCd>
<QuestionAnswer>
<QuestionCd>AUTOP01</QuestionCd>
<YesNoCd>${autoQuestion1}</YesNoCd>
</QuestionAnswer>
<QuestionAnswer>
<QuestionCd>AUTOP02</QuestionCd>
<YesNoCd>${autoQuestion2}</YesNoCd>
</QuestionAnswer>
</PersPkgAutoLineBusiness>

</PersPkgPolicyQuoteInqRq>
</InsuranceSvcRq>
</ACORD>`;

    console.log("Generated XML: ", xmlData); // Debugging: Log the XML data

    // Create and trigger download of the XML file
    const blob = new Blob([xmlData], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'insuranceData.xml';
    a.click();
    URL.revokeObjectURL(url);
});

function generateUniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
