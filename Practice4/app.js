window.onload = function () {
	let exampleUser = User.getData().userAdd();
		document.querySelector("#listOfUsers table tbody").appendChild(exampleUser);
    document.getElementById("createBtn").onclick = function () {
        let userHTML = User.getData().userAdd();
		document.querySelector("#listOfUsers table tbody").appendChild(userHTML);
    };
};

class User{
	constructor(firstName,lastName,age,city,interests) {
		this.userName = `${firstName} ${lastName}`;
		this.age = age;
		this.city = city;
		this.interests = interests;
	}
  
    static write(string) {
        let chars = [];
        for (let i = 0; i < string.length; i++)
            chars.push(string.charAt(i));
        return chars.map(char => {
                if (char === '&')
                    return '&amp';
                else if (char === '<')
                    return '&lt';
                else if (char === '>')
                    return '&gt';
                else
                    return char;
            }).reduce((first, second) => first + second, "");
    }
    static getData() {
        let interests = document.getElementById("selectInterests").value;
        interests = interests !== "" ? interests : document.getElementById("inputInterests").value;
		
        return new User(document.getElementById("firstName").value,
						document.getElementById("lastName").value,
						document.getElementById("age").value,
						document.getElementById("city").value,
						interests
        );
    }
	userAdd() {
        let item = document.createElement("tr");
		item.innerHTML =
            `<td id="Username">${User.write(this.userName)}</td>
            <td id="Age">${User.write(this.age)}</td>
            <td id="City">${User.write(this.city)}</td>
            <td id="Interests">${User.write(this.interests)}</td>
            <td id="delete">
            <button onclick="deleteUser(event)">x</button>
            </td>`;
        return item;
    }
}
function deleteUser(event) {
    event.target.parentElement.parentElement.remove();
}