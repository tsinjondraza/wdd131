const input = document.querySelector('#favChap');
const button = document.querySelector('button');
const list = document.querySelector('input');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
button.addEventListener('click', function(){
if(input.value.trim() !== ''){
    
}
})

