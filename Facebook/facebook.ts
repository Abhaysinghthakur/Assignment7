class FacebookAbout{
    private id:number;
    private name:string;
    private phone:number;
    private email:string;
    address:string;
    birthDate:string;
    gender:string;
    language:string[];
    work:string[];
    college:string[];
    school:string[];
    placeLived:string[];
    hometown:string;
    currentCity:string;
    relationshp:string;
    familyMembersid:number[];

    constructor(id:number,name:string,phone:number,email:string,address:string,birthDate:string,
                gender:string,language:string[],work:string[],college:string[],school:string[],
                placeLived?:string[],hometown?:string,currentCity?:string,relationship?:string,
                familyMembersid?:number[])
    {
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.address=address;
        this.birthDate=birthDate;
        this.gender=gender;
        this.language=language;
        this.work=work;
        this.college=college;
        this.school=school;
        if(placeLived != undefined){this.placeLived=placeLived;}
        if(hometown != undefined){this.hometown=hometown;}
        if(currentCity!=undefined){this.currentCity=currentCity;}
        if(relationship)this.relationshp=relationship;
        if(familyMembersid)this.familyMembersid=familyMembersid;
    }

    getName() {
        return this.name;
    }
    getPhone = ()=>{
        return this.phone;
    }
    getemail = ()=>{
        return this.email;
    }

    setName(value:string) {
        this.name = value;
    }
    setPhone(value:number) {
        this.phone = value;
    }
    setemail(value:string) {
        this.email = value;
    }    
}//facebookAbout class.

//Facebook about object.
let person = new FacebookAbout(1,"Abhay",9999999999,"abhay@abhay.com",
                                "none","9/01/1995","male",["english"],["work"],["college"],["school"],
                            [],"","city","single",[1,2,3,4,5,6])


console.log(person.getName());
console.log(person.getemail());

person.setPhone(8888888899);
console.log(person.getPhone());


console.log(person.gender);

person.hometown = "hometown";

console.log(person.hometown);

console.log(person);
