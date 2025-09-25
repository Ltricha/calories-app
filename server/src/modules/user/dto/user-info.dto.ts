
export class userInfoDTO {


    private email: string;
    private firstName: string;
    private lastName: string;
    private sex: string;
    private age: number;
    private height: number;
    private weight: number;

    constructor(email: string, firstName: string, lastName: string,
        sex: string, age: number, height: number, weight: number) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;

        this.age = age;
        this.height = height;
        this.weight = weight;
    }


}