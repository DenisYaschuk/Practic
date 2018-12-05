window.onload = function () {
	UserAdd(getData());
    document.getElementById("createBtn").onclick = function () {
        UserAdd(getData());
    };
    function additional(string) {
        var chars = [];
        for (var i = 0; i < string.length; i++)
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
    function getData() {
        var interests = document.getElementById("selectInterests").value;
        interests = interests !== "" ? interests : document.getElementById("inputInterests").value;

        return {
            userName: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,

            age: document.getElementById("age").value,

            city: document.getElementById("city").value,

            interests
        };
    }
    function UserAdd(user) {
        var item = document.createElement("tr");
        item.innerHTML =
            "<td class=\"userName\">" + additional(user.userName) + "</td>\n" +
            "<td class=\"age\">" + additional(user.age) + "</td>\n" +
            "<td class=\"city\">" + additional(user.city) + "</td>\n" +
            "<td class=\"interests\">" + additional(user.interests) + "</td>\n" +
            "<td class=\"delete\">" +
            "<button onclick=\"deleteUser(event)\">x</button>\n" +
            "</td>\n";

        document.querySelector("#listOfUsers table tbody").appendChild(item);
    };
};
function deleteUser(event) {
    event.target.parentElement.parentElement.remove();
}