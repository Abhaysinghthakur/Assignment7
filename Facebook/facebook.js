var FacebookAbout = /** @class */ (function () {
    function FacebookAbout(id, name, phone, email, address, birthDate, gender, language, work, college, school, placeLived, hometown, currentCity, relationship, familyMembersid) {
        var _this = this;
        this.getPhone = function () {
            return _this.phone;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.birthDate = birthDate;
        this.gender = gender;
        this.language = language;
        this.work = work;
        this.college = college;
        this.school = school;
        if (placeLived != undefined) {
            this.placeLived = placeLived;
        }
        if (hometown != undefined) {
            this.hometown = hometown;
        }
        if (currentCity != undefined) {
            this.currentCity = currentCity;
        }
        if (relationship)
            this.relationshp = relationship;
        if (familyMembersid)
            this.familyMembersid = familyMembersid;
    }
    FacebookAbout.prototype.getName = function () {
        return this.name;
    };
    FacebookAbout.prototype.setName = function (value) {
        this.name = value;
    };
    FacebookAbout.prototype.setPhone = function (value) {
        this.phone = value;
    };
    FacebookAbout.prototype.setemail = function (value) {
        this.email = value;
    };
    return FacebookAbout;
}()); //facebookAbout class.
//Facebook about object.
var person = new FacebookAbout(1, "Abhay", 9999999999, "abhay@abhay.com", "none", "9/01/1995", "male", ["english"], ["work"], ["college"], ["school"], [], "", "city", "single", [1, 2, 3, 4, 5, 6]);
console.log(person.getName());
console.log(person.getemail());
person.setPhone(8888888899);
console.log(person.getPhone());
console.log(person.gender);
person.hometown = "hometown";
console.log(person.hometown);
console.log(person);
