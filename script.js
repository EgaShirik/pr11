class Contucts {
    constructor(id, name, email, adress, phone) {
        this.name = name;
        this.email = email;
        this.adress = adress;
        this.phone = phone;
        this.id = id;
    }
    
    
}

class User extends Contucts{
    /* constructor(name) {
        this.contactList = [];
    } */
    constructor() {
        super();
        this.contactList = [];
    }
    edit(name = this.name, email = this.email, adress = this.adress, phone = this.phone) {
        this.name = name;
        this.email = email;
        this.adress = adress;
        this.phone = phone;
      }
  
      get() {
          return {
              id: this.id,
              name: this.name,
              email: this.email,
              adress: this.adress,
              phone: this.phone,
              
          }
      }
    
    createPost(name, email, id, adress, phone) {
        id = this.contactList.length;
        const post = new User(id, name, email, adress, phone);
        this.contactList.push(post);
    }

    editPost(id, name, email, adress, phone) {
        this.contactList[id].edit(name, email, adress, phone);
    }

    removePost(id) {
        // this.contactList = this.contactList.filter(item => item.id !== id); //оставляет только то что правда
        delete this.contactList[id];
    }
}

class NewsApp extends User {
    constructor() {
        super();
    }

    draw() {
        const oldData = document.getElementById('postData');
        if (oldData) {
            oldData.remove();
        }
        const postData = document.createElement('ul');
        postData.id = 'postData';
        this.contactList.map((post) => {
            const li = document.createElement('li');
            const nameNode = document.createElement('p');
            nameNode.inneremail = post.name;
            const emailNode = document.createElement('p');
            emailNode.innerHTML = post.email;
            const adressNode = document.createElement('p');
            adressNode.inneremail = post.adress;
            const phoneNode = document.createElement('p');
            phoneNode.innerHTML = post.phone;
            li.appendChild(nameNode);
            li.appendChild(emailNode);
            li.appendChild(adressNode);
            li.appendChild(phoneNode);
            postData.appendChild(li);
            // this.draw();
        });
        document.body.appendChild(postData);
    }

    init() {
        const form = document.createElement('form');
        const inputname = document.createElement('input');
        inputname.placeholder = 'Enter the name'
        const inputemail = document.createElement('input');
        inputemail.placeholder = 'Enter the email';
        const inputadress = document.createElement('input');
        inputadress.placeholder = 'Enter the adress';
        const inputphone = document.createElement('input');
        inputphone.placeholder = 'Enter the phone';
        const addBtn = document.createElement('button');
        addBtn.inneremail = 'Create post';
        form.appendChild(inputemail);
        form.appendChild(inputname);
        form.appendChild(inputadress);
        form.appendChild(inputphone);
        form.appendChild(addBtn);

        form.addEventListener('submit', (event) => { //работаем с формой (получает данные от пользователя)
            event.preventDefault();
            const name = event.currentTarget[0].value;
            event.currentTarget[0].value = 'Egor';
            const email = event.currentTarget[1].value;
            event.currentTarget[1].value = 'egorshirko@gmail.com';
            const adress = event.currentTarget[2].value;
            event.currentTarget[2].value = 'dfgh';
            const phone = event.currentTarget[3].value;
            event.currentTarget[3].value = 'phone';
            this.createPost(name, email, adress, phone);
            this.draw();
        })
        document.body.appendChild(form);
    }
}

const post1 = new User('Egor', 'egorshirko@gmail.com', 'dfgh', 'phone');

const newsList = new NewsApp();
newsList.init();
console.log(newsList);
 newsList.createPost('hot news', 'some lorem email');
// newsList.createPost('hot news', 'some lorem email');
// newsList.createPost('hot news', 'some lorem email');
// newsList.createPost('hot news', 'some lorem email');
// newsList.editPost(0, undefined, 'the other lorem email');
// newsList.removePost(1);
// newsList.createPost('hot news', 'some lorem email');
//console.log(newsList.contactList);


