declare class TelInputDto {
    number: string;
    internationalNumber: string;
    nationalNumber: string;
    e164Number: string;
    countryCode: string;
    dialCode: string;
}
export declare class UserDto {
    name: string;
    dob: string;
    houseNo: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    verificationType: string;
    verificationNumber: string;
    gender: string;
    description: string;
    role: string;
    officeMobile: TelInputDto;
    officeEmail: string;
    employeeId: string;
    status: boolean;
}
export {};
