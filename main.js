function startGrid(){
    for (let i=0;i<(16*16);i++){let newDiv = document.createElement('div');mycontainer.appendChild(newDiv);newDiv.addEventListener('mouseover',function(){this.style.backgroundColor = 'green';});newDiv.addEventListener('click',function(){this.style.backgroundColor = 'white';})}
    if (document.getElementById('myModal').style.display = true){modal.style.display = 'false'}
}

function myPop(){
   //create modal div
   const modal = document.createElement('div');
   document.body.appendChild(modal);
   modal.id = 'myModal';
   modal.style.display = 'none'
   modal.style.zIndex = '1';
   //content
   const modalContent = document.createElement('div');
   modal.appendChild(modalContent);
   modalContent.style.backgroundColor = 'green';
   modalContent.innerText = 'fart';
   modalContent.style.padding = "2vh 2vw";
   const modalInput = document.createElement('input');
   modalContent.appendChild(modalInput);
   modalInput.style.padding = '2vh 2vw';
   //close btn
   const closeBtn = document.createElement('button');
   modalContent.appendChild(closeBtn);
   closeBtn.innerText = 'close';
   closeBtn.style.backgroundColor = 'blue';
   closeBtn.addEventListener('click',function(){modal.style.display = 'none'})
}